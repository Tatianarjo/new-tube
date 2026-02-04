import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
   <div>
   {/* <Button variant="new">Hi Tot Click Me</Button> */}
   <Image src="/tottube.svg" height={50} width={50} alt="logo" />
   <p className= "text-xl font-semibold tracking-tight">I will load videos in the future!</p>
   </div>
  );
}
