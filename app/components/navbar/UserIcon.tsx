import { currentUser } from "@clerk/nextjs/server";
import { User2 } from "lucide-react";

async function UserIcon() {
    
  const user = await currentUser();

  const profileImage = user?.imageUrl;

  if (profileImage) {
    return (
      <img src={profileImage} className="w-6 h-6 rounded-full object-cover" />
    );
  }

  return <User2 className="w-6 h-6 bg-primary rounded-full text-white" />;
}
export default UserIcon;
