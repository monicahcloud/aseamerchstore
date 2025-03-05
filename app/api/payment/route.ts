// Import the Stripe library for handling payments
import Stripe from "stripe";

// Initialize the Stripe instance using the secret key from environment variables
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

// Import NextRequest type for handling API requests
import { type NextRequest } from "next/server";

// Import Prisma client for interacting with the database
import { prisma } from "@/utils/prisma";

// Define the POST request handler
export const POST = async (req: NextRequest) => {
  // Extract request headers and get the origin (to construct return URL)
  const requestHeaders = new Headers(req.headers);
  const origin = requestHeaders.get("origin");

  // Parse the request body to extract orderId and cartId
  const { orderId, cartId } = await req.json();

  // Fetch the order from the database
  const order = await prisma.order.findUnique({
    where: {
      id: orderId, // Find the order by its ID
    },
  });

  // Fetch the cart and include related cart items and product details
  const cart = await prisma.cart.findUnique({
    where: {
      id: cartId, // Find the cart by its ID
    },
    include: {
      cartItems: {
        include: {
          product: true, // Include product details for each cart item
        },
      },
    },
  });

  // If the order or cart is not found, return a 404 Not Found response
  if (!order || !cart) {
    return Response.json(null, {
      status: 404,
      statusText: "Not Found",
    });
  }

  // Prepare line items for Stripe checkout session
  const line_items = cart.cartItems.map((cartItem) => {
    return {
      quantity: cartItem.amount, // Set the quantity
      price_data: {
        currency: "usd", // Currency in USD
        product_data: {
          name: cartItem.product.name, // Product name
          images: [cartItem.product.image], // Product image
        },
        unit_amount: cartItem.product.price * 100, // Convert price to cents
      },
    };
  });

  try {
    // Create a new checkout session in Stripe
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded", // Use embedded UI mode
      metadata: { orderId, cartId }, // Store order and cart IDs as metadata
      line_items: line_items, // Attach line items to the session
      mode: "payment", // Set payment mode
      return_url: `${origin}/api/confirm?session_id={CHECKOUT_SESSION_ID}`, // Redirect URL after checkout
    });

    // Return the client secret for frontend integration
    return Response.json({ clientSecret: session.client_secret });
  } catch (error) {
    // Log the error for debugging
    console.log(error);

    // Return a 500 Internal Server Error response
    return Response.json(null, {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
};
