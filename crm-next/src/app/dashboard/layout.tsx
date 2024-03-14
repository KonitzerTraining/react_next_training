
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
            <h1 className="font-bold text-xl">Dashboard</h1>
            <section className="my-4">{children}</section>
        </>
    );
  }
  