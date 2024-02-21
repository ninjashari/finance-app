import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Transaction",
  },
};

export default function Transaction() {
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Add transaction</h1>
    </>
  );
}
