"use client";

import { DatePicker } from "@/components/DatePicker/DatePicker";
import { useDatePicker } from "@/components/DatePicker/useDatePicker";
import { SelectFull } from "@/components/SelectFull/SelectFull";
import { TextArea } from "@/components/TextArea/TextArea";
import { TextInput } from "@/components/TextInput/TextInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { registerNewExpense } from "../../actions/registerNewExpense";
import { toast } from "sonner";

export const ExpenseForm = ({ handleDialogClose }: TExpenseFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
    setValue,
  } = useForm<TExpenseFormSchema>({ resolver: zodResolver(expenseFormSchema) });

  const datePickerStates = useDatePicker();

  const onSubmit = async (data: TExpenseFormSchema) => {
    const registerNewExpenseResponse = await registerNewExpense(data);

    handleDialogClose();

    toast(registerNewExpenseResponse.title, {
      description: registerNewExpenseResponse.message,
      duration: 5000,
    });
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
          <SelectFull
            name="paymentMethod"
            label="Expense method"
            placeholder="Select a method"
            options={[
              { label: "Credit Card", value: "credit-card" },
              { label: "Cash", value: "cash" },
              { label: "Pix", value: "pix" },
              { label: "Bank Account Transfer", value: "bank-account" },
              { label: "Other", value: "other" },
            ]}
            onValueChange={setValue}
          />
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

        <SelectFull
          name="category"
          label="Expense category"
          placeholder="Select a category of expense"
          options={[
            { label: "Food", value: "food" },
            { label: "Transport", value: "transport" },
            { label: "Health", value: "health" },
            { label: "Education", value: "education" },
            { label: "Entertainment", value: "entertainment" },
            { label: "Other", value: "other" },
          ]}
          onValueChange={setValue}
        />

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

type TExpenseFormProps = {
  handleDialogClose: () => void;
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

export type TExpenseFormSchema = z.infer<typeof expenseFormSchema>;
