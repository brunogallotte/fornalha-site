import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Form = () => {
  return (
    <form className="flex flex-col gap-4">
      <Input placeholder="Email" type="email" />
      <Input placeholder="Password" type="password" />
      <Button />
    </form>
  );
};
