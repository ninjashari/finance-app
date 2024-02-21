"use client"
import { notFound } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ChartDetails({
  params,
}: {
  params: { chartId: string };
}) {
  // const number = getRandomInt(2);

  // if (number === 1) {
  //   throw new Error("Error loading charts");
  // }

  if (parseInt(params.chartId) > 1000) {
    notFound();
  }
  return <h1>Charted details {params.chartId}</h1>;
}
