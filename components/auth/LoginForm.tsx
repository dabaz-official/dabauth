import CardWrapper from "@dabaz/components/auth/CardWrapper";

export default function LoginForm() {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      Login
    </CardWrapper>
  );
};
