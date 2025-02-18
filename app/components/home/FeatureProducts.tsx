import { fetchFeaturedProducts } from "@/utils/actions";
import React from "react";
import Emptylist from "../global/Emptylist";
import SectionTitle from "../global/SectionTitle";
import ProductsGrid from "../products/ProductsGrid";

async function FeatureProducts() {
  const products = await fetchFeaturedProducts();
  if (products.length === 0) return <Emptylist />;
  return (
    <section className="pt-24">
      <SectionTitle text="Featured Products" />
      <ProductsGrid products={products} />
    </section>
  );
}

export default FeatureProducts;
