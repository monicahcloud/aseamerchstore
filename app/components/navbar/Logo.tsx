import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <Link href="/" as='image'>
      <Image
        src="/healthycells.jpg"
        alt="Logo"
        width={200}
        height={200}
        style={{ width: "auto", height: "auto" }}
        priority={true}
      />
    </Link>
  );
}

export default Logo;
