import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const CategoriesDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Atualizar cateogrias</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Atualizar categorias</DialogTitle>
        </DialogHeader>

        <DialogDescription>
          Atualize as categorias do sistema, adicione, edite e remova.
        </DialogDescription>

        
      </DialogContent>
    </Dialog>
  );
};


