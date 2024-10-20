import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { BookCreateModal } from "./atoms/BookCreateModal";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full text-center bg-black py-3 flex flex-row justify-center relative">
      <Button
        variant="link"
        className="text-white absolute left-5"
        onClick={() => navigate("/")}
      >
        Home
      </Button>
      <h1 className="text-2xl text-white font-medium">La Biblioteca</h1>
      <BookCreateModal />
    </header>
  );
};

export default Navbar;
