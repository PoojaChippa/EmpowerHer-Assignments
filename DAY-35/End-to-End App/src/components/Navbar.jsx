import { useAuth } from "../context/AuthContext";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b">
      <h1 className="text-xl font-bold">Todos App</h1>

      {user && (
        <Button variant="outline" onClick={handleLogout}>
          Sign Out
        </Button>
      )}
    </nav>
  );
}
