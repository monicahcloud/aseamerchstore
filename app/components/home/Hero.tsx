import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroCarousel from "./HeroCarousel";

function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          Elevate Your <span className='text-blue-700' >ASEA</span> Brand with Premium Merch
        </h1>
        {/* <h3>
          Your go-to destination for high-quality ASEA promotional
          items—T-shirts, banners, pins, and more!
        </h3> */}
        <p className="mt-8 max-w-xl text-2xl font-bold leading-8 text-muted-foreground">
          Stock up on event essentials and showcase ASEA with pride. Browse our
          collection and gear up for success today!
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href="/products">Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}
export default Hero;
