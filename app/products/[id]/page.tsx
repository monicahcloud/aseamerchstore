
import { fetchSingleProduct} from "@/utils/actions";
import Image from "next/image";
import { formatCurrency } from "@/utils/format";
import BreadCrumbs from "@/app/components/single-product/BreadCrumbs";
import FavoriteToggleButton from "@/app/components/products/FavoriteToggleButton";
import ProductRating from "@/app/components/single-product/ProductRating";
import AddToCart from "@/app/components/single-product/AddToCart";


async function SingleProductPage({ params }: { params: { id: string } }) {
  console.log("params:", params); // Debugging
   let product;
   try {
     product = await fetchSingleProduct(params.id);
   } catch (error) {
     console.error(error);
     return <p className="text-red-500">Error loading product.</p>;
   }

   if (!product) {
     return <p className="text-red-500">Product not found.</p>;
   }
  const { name, image, company, description, price } = product;
  const dollarsAmount = formatCurrency(price);

  return (
    <section>
      <BreadCrumbs name={product.name} />
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE FIRST COL */}
        <div className="relative h-full">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw"
            priority
            className="w-full rounded object-cover"
          />
        </div>
        {/* PRODUCT INFO SECOND COL */}
        <div>
          <div className="flex gap-x-8 items-center">
            <h1 className="capitalize text-3xl font-bold">{name} </h1>
            <div className="flex items-center gap-x-2">
              <FavoriteToggleButton productId={params.id} />
            </div>
          </div>
          <ProductRating productId={params.id} />
          <h4 className="text-xl mt-2">{company}</h4>
          <p className="mt-3 text-md bg-muted inline-block p-2 rounded">
            {dollarsAmount}
          </p>
          <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
          <AddToCart productId={params.id} />
        </div>
      </div>
    </section>
  );
}
export default SingleProductPage;
