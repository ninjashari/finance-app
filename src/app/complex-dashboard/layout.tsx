export default function DashboardLayout({
  children,
  useranalytics,
  revenuemetrics,
  notifications,
  login,
}: {
  children: React.ReactNode
  useranalytics: React.ReactNode
  revenuemetrics: React.ReactNode
  notifications: React.ReactNode
  login: React.ReactNode
}) {
  const isLoggedIn = true

  return isLoggedIn ? (
    <>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{useranalytics}</div>
          <div>{revenuemetrics}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </>
  ) : (
    login
  )
}
