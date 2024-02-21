import Link from "next/link";

export default function Report() {
  const reportId = 100;
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Reports</h1>
      <h2>
        <Link href="report/1">Report 1</Link>
      </h2>
      <h2>
        <Link href="report/1">Report 2</Link>
      </h2>
      <h2>
        <Link href="report/1" replace>
          Report 3
        </Link>
      </h2>
      <h2>
        <Link href={`report/${reportId}`}>Report {reportId}</Link>
      </h2>
    </>
  );
}
