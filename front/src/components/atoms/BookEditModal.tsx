import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Pencil } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "../ui/form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { http } from "@/http";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "El titulo debe tener al menos 2 caracteres",
  }),
});

export function BookEditModal({ id, title }: { id: number; title: string }) {
  const queryClient = useQueryClient();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: title,
    },
  });

  const { mutate } = useMutation({
    mutationKey: ["books", id],
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      const response = await http.patch(
        `book/update/${id}`,
        {
          title: values.title,
        }
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["books"],
      });
      toast.success("Libro actualizado correctamente");
    },
    onError: (error: AxiosError<{ message: string }, any>) => {
      toast.error(
        error.response?.data.message ?? "Hubo un error al actualizar el libro"
      );
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => mutate(values);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">
          <Pencil />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Editar Libro</DialogTitle>
          <DialogDescription>Edita el titulo de tu libro.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <div className="grid gap-4 py-4">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Titulo</FormLabel>
                    <FormControl>
                      <Input placeholder="Titulo" {...field} />
                    </FormControl>
                    <FormDescription>El titulo de tu libro.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type="submit">Guardar Cambios</Button>
              </DialogFooter>
            </form>
          </div>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
