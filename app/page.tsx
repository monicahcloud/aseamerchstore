import { Suspense } from "react";
import FeatureProducts from "./components/home/FeatureProducts";
import Hero from "./components/home/Hero";
import Loading from "./components/global/Loading";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<Loading/>}>
        <FeatureProducts />
      </Suspense>
    </>
  );
}
