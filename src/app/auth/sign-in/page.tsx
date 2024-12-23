import { Form } from "./_pageResources/components/Form/Form";

export default function SignIn() {
  return (
    <section className="flex flex-col gap-6 w-full min-h-screen items-center justify-center">
      <h1 className="text-2xl font-bold">Sign In</h1>

      <Form />
    </section>
  );
}
