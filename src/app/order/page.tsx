"use client";
import { useRouter } from "next/navigation";

export default function Order() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Button clicked!!");
    router.push("/");
  };
  return (
    <>
      <h1>Order</h1>
      <button onClick={handleClick}>Click Me!</button>
    </>
  );
}
