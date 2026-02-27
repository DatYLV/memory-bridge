export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
          <h1 className="text-xl font-bold">Memory Bridge</h1>

          <div className="space-x-6">
            <a href="/">Home</a>
            <a href="/create">Create</a>
            <a href="/login">Login</a>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
