import { Form } from "./_pageResources/components/Form/Form";

export default function SignIn() {
  return (
    <section className="flex bg-background flex-col gap-6 w-full min-h-screen items-center justify-center">
      <header className="flex flex-col gap-2 items-center">
        <h1 className="text-2xl font-bold text-foreground">Sign In</h1>
        <p className="text-muted-foreground max-w-xs text-center">
          Create your account and start managing your transactions.
        </p>
      </header>

      <Form />
    </section>
  );
}
