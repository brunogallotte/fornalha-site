import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ExpenseForm } from "./ExpenseForm";

export const ExpenseDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Add new expense</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Register a new expense</DialogTitle>
          <DialogDescription>
            Add a new fixed, variable or other expense.
          </DialogDescription>
        </DialogHeader>

        <ExpenseForm />
      </DialogContent>
    </Dialog>
  );
};
