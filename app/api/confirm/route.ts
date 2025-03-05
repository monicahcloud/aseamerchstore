//This code handles a GET request that verifies a completed Stripe checkout session, updates the order status, removes the cart, and redirects the user to the orders page.

// Import the Stripe library for handling payments
import Stripe from "stripe";

// Initialize the Stripe instance using the secret key from environment variables
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

// Import Next.js's `redirect` function for handling redirects
import { redirect } from "next/navigation";

// Import NextRequest type for handling API requests
import { type NextRequest } from "next/server";

// Import Prisma client for interacting with the database
import { prisma } from "@/utils/prisma";

// Define the GET request handler
export const GET = async (req: NextRequest) => {
  // Extract search parameters from the request URL
  const { searchParams } = new URL(req.url);

  // Get the session ID from the query parameters
  const session_id = searchParams.get("session_id") as string;

  try {
    // Retrieve the checkout session details from Stripe using the session ID
    const session = await stripe.checkout.sessions.retrieve(session_id);

    // Extract metadata from the session (order ID and cart ID)
    const orderId = session.metadata?.orderId;
    const cartId = session.metadata?.cartId;

    // If the payment session is complete, update the order status in the database
    if (session.status === "complete") {
      await prisma.order.update({
        where: {
          id: orderId, // Find the order by its ID
        },
        data: {
          isPaid: true, // Mark the order as paid
        },
      });
    }

    // Delete the cart from the database after successful payment
    await prisma.cart.delete({
      where: {
        id: cartId, // Find and delete the cart by its ID
      },
    });
  } catch (error) {
    // Log any errors that occur during the process
    console.log(error);

    // Return a 500 Internal Server Error response
    return Response.json(null, {
      status: 500,
      statusText: "Internal Server Error",
    });
  }

  // Redirect the user to the orders page after successful processing
  redirect("/orders");
};
