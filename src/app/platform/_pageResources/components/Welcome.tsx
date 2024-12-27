import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { CategoriesDialogWrapper } from "./CategoriesDialogWrapper";

export const Welcome = ({ user }: TWelcomeProps) => {
  return (
    <div className="w-full grid grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Dashboard</CardTitle>
          <CardDescription>Seja bem-vindo, {user.email}</CardDescription>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Categorias</CardTitle>
          <CardDescription>
            Administre todas as categorias, adicione, edite e remova.
          </CardDescription>

          <CategoriesDialogWrapper />
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Pontuação</CardTitle>
          <CardDescription>
            Altere a pontuação de cada piloto, adicione, edite e remova.
          </CardDescription>
          <Button variant="secondary">Atualizar pontuação</Button>
        </CardHeader>
      </Card>
    </div>
  );
};

type TWelcomeProps = {
  user: {
    email: string;
    id: string;
    role: string;
  };
};
