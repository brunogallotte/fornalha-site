"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const signInFormSchema = z.object({
  email: z
    .string({ required_error: "Digite seu email" })
    .email("Email inválido"),
  password: z
    .string({ required_error: "Digite sua senha" })
    .min(8, { message: "A senha deve ter pelo menos 8 caracteres" }),
});

type TFormSchema = z.infer<typeof signInFormSchema>;

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormSchema>({ resolver: zodResolver(signInFormSchema) });

  const onSubmit = (data: TFormSchema) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full max-w-xs gap-4"
    >
      <div className="flex flex-col gap-1">
        <Input placeholder="Email" type="email" {...register("email")} />
        {errors.email && (
          <span className="text-red-700 text-sm">{errors.email.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <Input
          placeholder="Password"
          type="password"
          {...register("password")}
        />
        {errors.password && (
          <span className="text-red-700 text-sm">
            {errors.password.message}
          </span>
        )}
      </div>
      <Button type="submit">Sign In</Button>
    </form>
  );
};
