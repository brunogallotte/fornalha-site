"use client";

import { DatePicker } from "@/components/DatePicker/DatePicker";
import { useDatePicker } from "@/components/DatePicker/useDatePicker";
import { TextArea } from "@/components/TextArea/TextArea";
import { TextInput } from "@/components/TextInput/TextInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const ExpenseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
    setValue,
  } = useForm<TExpenseFormSchema>({ resolver: zodResolver(expenseFormSchema) });

  const datePickerStates = useDatePicker();

  const onSubmit = (data: TExpenseFormSchema) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <TextInput
            id="title"
            placeholder="Title"
            type="text"
            error={errors.title?.message}
            {...register("title")}
          />
          <Select onValueChange={(value) => setValue("paymentMethod", value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a method" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Expense method</SelectLabel>
                <SelectItem value="credit-card">Credit Card</SelectItem>
                <SelectItem value="cash">Cash</SelectItem>
                <SelectItem value="pix">Pix</SelectItem>
                <SelectItem value="bank-account">
                  Bank Account Transfer
                </SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <TextArea
          id="description"
          placeholder="Description (optional)"
          error={errors.description?.message}
          {...register("description")}
        />

        <Separator className="my-4" />

        <div className="flex gap-2">
          <div className="flex flex-col gap-1 w-full max-w-[50%]">
            <Input
              id="amount"
              placeholder="Amount"
              type="text"
              inputMode="numeric"
              {...register("amount")}
            />
            {errors.amount && (
              <span className="text-red-300 text-sm">
                {errors.amount.message}
              </span>
            )}
          </div>

          <DatePicker
            setter={(date) => setValue("date", date)}
            {...datePickerStates}
          />
        </div>

        <Select onValueChange={(value) => setValue("category", value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a category of expense" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Expense category</SelectLabel>
              <SelectItem value="food">Food</SelectItem>
              <SelectItem value="transport">Transport</SelectItem>
              <SelectItem value="health">Health</SelectItem>
              <SelectItem value="education">Education</SelectItem>
              <SelectItem value="entertainment">Entertainment</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <RadioGroup
          onValueChange={(value) => setValue("recurrence", value)}
          className="mt-4"
          defaultValue="comfortable"
        >
          <b>Choice the recurrence of the expense</b>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="One-time expense" id="r1" />
            <Label htmlFor="r1">One-time expense</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Repeats every weak" id="r3" />
            <Label htmlFor="r3">Repeats every weak</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Repeats every month" id="r2" />
            <Label htmlFor="r2">Repeats every month</Label>
          </div>
        </RadioGroup>
      </div>

      <Button className="mt-4" type="submit" disabled={isLoading}>
        Register expense
      </Button>
    </form>
  );
};

const expenseFormSchema = z.object({
  title: z
    .string({ required_error: "Title is required" })
    .min(3, { message: "Title must be at least 3 characters" }),
  description: z.string().optional(),
  amount: z.string({ required_error: "Amount is required" }),
  paymentMethod: z.string({ required_error: "Type is required" }),
  date: z.date({ required_error: "Date is required" }),
  recurrence: z.string({ required_error: "Recurrence is required" }),
  category: z.string({ required_error: "Category is required" }),
});

type TExpenseFormSchema = z.infer<typeof expenseFormSchema>;
