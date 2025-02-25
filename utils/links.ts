import { ForwardRefExoticComponent, RefAttributes } from "react";
import {
  DollarSign,
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
  id: string;
  label: string;
  name: string;
  href: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};

type AdminLink = {
  label: string;
  href: string;
};
export const links: NavLink[] = [
  {
    id: nanoid(),
    name: "Home",
    href: "/",
    icon: HomeIcon,
    label: "home",
  },
  {
    id: nanoid(),
    name: "About",
    href: "/about",
    icon: Users2,
    label: "about",
  },
  {
    id: nanoid(),
    name: "Products",
    href: "/products",
    icon: Shirt,
    label: "products",
  },
  {
    id: nanoid(),
    name: "Favorites",
    href: "/favorites",
    icon: Star,
    label: "favorites",
  },
  {
    id: nanoid(),
    name: "Cart",
    href: "/cart",
    icon: ShoppingCart,
    label: "cart",
  },
  {
    id: nanoid(),
    name: "Orders",
    href: "/orders",
    icon: ListOrdered,
    label: "orders",
  },
  {
    id: nanoid(),
    name: "Dashboard",
    href: "/admin/products",
    icon: ListOrdered,
    label: "dashboard",
  },
];

export const adminLinks: AdminLink[] = [
  { href: "/admin/products", label: "my products" },
 
  { href: "/admin/products/create", label: "create product" },
   { href: "/admin/sales", label: "sales" },
];
