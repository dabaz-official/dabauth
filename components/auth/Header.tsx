interface HeaderProps {
  label: string;
};

export default function Header({
  label
}: HeaderProps) {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className="text-3xl font-semibold">
        DabAuth
      </h1>
      <p>{label}</p>
    </div>
  );
};
