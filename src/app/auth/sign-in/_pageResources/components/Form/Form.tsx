"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signInAction } from "../../actions/signInAction";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<TFormSchema>({ resolver: zodResolver(signInFormSchema) });

  const onSubmit = async (data: TFormSchema) => {
    const signInActionResponse = await signInAction(data);

    toast(signInActionResponse.title, {
      description: signInActionResponse.message,
      duration: 5000,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full max-w-xs gap-4"
    >
      <div className="flex flex-col gap-1">
        <Input placeholder="Email" type="email" {...register("email")} />
        {errors.email && (
          <span className="text-red-300 text-sm">{errors.email.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <Input
          placeholder="Password"
          type="password"
          {...register("password")}
        />
        {errors.password && (
          <span className="text-red-300 text-sm">
            {errors.password.message}
          </span>
        )}
      </div>
      <Button type="submit" disabled={isLoading}>
        Sign In
      </Button>
      <Toaster />
    </form>
  );
};

export const signInFormSchema = z.object({
  email: z
    .string({ required_error: "Digite seu email" })
    .email("Email inválido"),
  password: z
    .string({ required_error: "Digite sua senha" })
    .min(8, { message: "A senha deve ter pelo menos 8 caracteres" }),
});

export type TFormSchema = z.infer<typeof signInFormSchema>;
