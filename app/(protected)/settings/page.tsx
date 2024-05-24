import { auth } from "@dabaz/auth";

export default async function SettingsPage() {
  const session = await auth();

  return (
    <div>
      Settings Page
    </div>
  );
};
