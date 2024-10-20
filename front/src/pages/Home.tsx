import BookCard from "@/components/BookCard";
import { http } from "@/http";
import { Book } from "@/interfaces/Book";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const response = await http.get<Book[]>(
        "http://localhost:3000/book/all"
      );
      return response.data;
    },
  });

  if (error) return <div>Error</div>;
  if (isLoading && !data) return <div>Cargando...</div>;
  return (
    <div>
      <h1 className="text-3xl font-bold">Libros</h1>
      <div className="flex flex-row flex-wrap gap-10 pt-10">
        {data?.map((book) => (
          <BookCard book={book} key={book.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
