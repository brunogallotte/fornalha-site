import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { User } from "@prisma/client";
import { ExpenseDialog } from "../ExpenseDialog/ExpenseDialog";

export const Welcome = ({ user }: TWelcomeProps) => {
  return (
    <div className="w-full grid grid-cols-3 gap-6">
      <WelcomeCard user={user} />

      <Card>
        <CardHeader>
          <CardTitle>Expenses</CardTitle>
          <CardDescription>
            Manage all expenses, add, edit and remove.
          </CardDescription>

          <ExpenseDialog />
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Earnings</CardTitle>
          <CardDescription>
            Manage all earnings, add, edit and remove.
          </CardDescription>
          <Button variant="default">Update earnings</Button>
        </CardHeader>
      </Card>
    </div>
  );
};

const WelcomeCard = ({ user }: TWelcomeProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dashboard</CardTitle>
        <CardDescription>Seja bem-vindo, {user.name}</CardDescription>
      </CardHeader>
    </Card>
  );
};

type TWelcomeProps = {
  user: User;
};
