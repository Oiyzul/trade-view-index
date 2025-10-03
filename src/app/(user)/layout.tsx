import Header from "@/components/Header";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = {
    id: "1234",
    name: "name",
    email: "user@email.com",
  };

  return (
    <main className="min-h-screen text-gray-400">
      <Header user={user} />
      
      <div className="container py-10">{children}</div>
    </main>
  );
}
