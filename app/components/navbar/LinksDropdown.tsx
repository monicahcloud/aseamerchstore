'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
 
} from "@/components/ui/dropdown-menu";
import { LuAlignLeft } from "react-icons/lu";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { links } from "@/utils/links";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
function LinksDropdown() {
  const pathName = usePathname();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex gap-4 max-w-[100px]">
          <LuAlignLeft className="w-6 h-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="start" sideOffset={10}>
        {links.map((link) => {
          return (
            <DropdownMenuItem key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  pathName === link.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground",
                  "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:primary"
                )}
              >
                <link.icon className="size-4" />
                {link.name}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default LinksDropdown;
