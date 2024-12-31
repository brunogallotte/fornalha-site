"use client";

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
import { Toaster } from "@/components/ui/sonner";
import { useState } from "react";

export const ExpenseDialog = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDialogClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
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

        <ExpenseForm handleDialogClose={handleDialogClose} />
      </DialogContent>
      <Toaster />
    </Dialog>
  );
};
