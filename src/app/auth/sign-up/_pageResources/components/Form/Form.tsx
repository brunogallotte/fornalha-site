"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { signUpAction } from "../../actions/signInAction";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<TFormSchema>({ resolver: zodResolver(signUpFormSchema) });

  const onSubmit = async (data: TFormSchema) => {
    console.log(data);
    const signInActionResponse = await signUpAction(data);

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
        <Input placeholder="Name" type="text" {...register("name")} />
        {errors.name && (
          <span className="text-red-300 text-sm">{errors.name.message}</span>
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
      <div className="flex flex-col gap-1">
        <Input
          placeholder="Confirm Password"
          type="password"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <span className="text-red-300 text-sm">
            {errors.confirmPassword.message}
          </span>
        )}
      </div>
      <Separator />
      <p className="text-xs text-muted-foreground">
        If you have an account,{" "}
        <Link className="underline" href="/auth/sign-in">
          sign in
        </Link>
        . After create your account, you need confirm your email to start using
        the platform.
      </p>
      <Button type="submit" disabled={isLoading}>
        Sign Up
      </Button>
      <Toaster />
    </form>
  );
};

export const signUpFormSchema = z.object({
  email: z
    .string({ required_error: "Your email is required" })
    .email("Your email is invalid"),
  name: z
    .string({ required_error: "Your name is required" })
    .min(3, { message: "Your name must be at least 3 characters" }),
  password: z
    .string({ required_error: "Your password is required" })
    .min(8, { message: "Your password must be at least 8 characters" }),
  confirmPassword: z
    .string({ required_error: "Your password is required" })
    .min(8, { message: "Your password must be at least 8 characters" }),
});

export type TFormSchema = z.infer<typeof signUpFormSchema>;
