import { auth, signOut } from "@dabaz/auth";

export const metadata = {
  title: "User Settings",
}

export default async function SettingsPage() {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session)}
      <form action={async () => {
        "use server";

        await signOut();
      }}>
        <button type="submit">
          Sign out
        </button>
      </form>
    </div>
  );
};
