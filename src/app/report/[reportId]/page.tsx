import { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: {
    reportId: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Transaction report ${params.reportId}`);
    });
  });
  return {
    title: `${title}`,
  };
};

export default function ReportDetail({ params }: Props) {
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Detailed Report for {params.reportId}</h1>
    </>
  );
}
