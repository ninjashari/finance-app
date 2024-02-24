import Link from "next/link"

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Welcome to Money Manager</h1>
      <Link href="/">Home</Link>
      <Link href="/transaction">Transaction</Link>
      <Link href="/report">Report</Link>
      <Link href="/register">Register</Link>
    </>
  )
}
