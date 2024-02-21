function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ReportsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const number = getRandomInt(2);

  if (number === 1) {
    throw new Error("Error loading report");

  }
  return (
    <>
      {children}
      <h2>Featured Reports</h2>
    </>
  );
}
