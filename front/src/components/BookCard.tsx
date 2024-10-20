import { format } from "date-fns";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Book } from "@/interfaces/Book";
import { BookEditModal } from "./atoms/BookEditModal";
import { BookRemoveModal } from "./atoms/BookRemoveModal";

const BookCard = ({
  book: { id, title, createdAt, updatedAt },
}: {
  book: Book;
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <ul>
          <li className="text-base">
            <strong className="mr-2">Creado:</strong>
            {format(new Date(createdAt), "dd/MM/yyyy HH:mm a")}
          </li>
          <li className="text-base">
            <strong className="mr-2">Actualizado:</strong>
            {format(new Date(updatedAt), "dd/MM/yyyy HH:mm a")}
          </li>
        </ul>
      </CardContent>
      <CardFooter className="flex flex-row justify-between">
        <BookEditModal id={id} title={title} />
        <BookRemoveModal id={id} />
      </CardFooter>
    </Card>
  );
};

export default BookCard;
