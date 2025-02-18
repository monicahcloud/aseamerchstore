import { ForwardRefExoticComponent, RefAttributes } from "react";
import {
  HomeIcon,
  ListOrdered,
  LucideProps,
  Shirt,
  ShoppingCart,
  Star,
  Users2,
} from "lucide-react";
import { nanoid } from "nanoid";

type NavLink = {
 id:string
  name: string;
  href: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;

};
export const links: NavLink[] = [
  {
    id:nanoid(),
    name: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    id: nanoid(),
    name: "About",
    href: "/about",
    icon: Users2,
  },
  {
    id: nanoid(),
    name: "Products",
    href: "/products",
    icon: Shirt,
  },
  {
    id: nanoid(),
    name: "Favorites",
    href: "/favorites",
    icon: Star,
  },
  {
    id: nanoid(),
    name: "Cart",
    href: "/cart",
    icon: ShoppingCart,
  },
  {
    id: nanoid(),
    name: "Orders",
    href: "/orders",
    icon: ListOrdered,
  },
];
