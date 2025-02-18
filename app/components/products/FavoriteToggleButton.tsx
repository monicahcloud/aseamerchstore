import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
function FavoriteToggleButton({ productId }: { productId: string }) {
  return (
    <Button size="icon" variant="outline" className="p-2 cursor-pointer">
      <Heart />
    </Button>
  );
}
export default FavoriteToggleButton;
