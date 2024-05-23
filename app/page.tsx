import { LoginButton } from "@dabaz/components/auth/LoginButton";
import { Button } from "@dabaz/components/ui/button";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-sky-600">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold text-white drop-shadow-lg">
          DabAuth
        </h1>
        <p className="text-white text-lg">
          An authentication service
        </p>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
