export default function AuthLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-sky-600">
      {children}
    </div>
  );
};
