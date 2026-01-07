import { Button } from "../ui/button";
import { useAuth } from "../context/AuthContext";

export default function Navbar({ filter, setFilter }) {
  const { user, logout } = useAuth();

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b">
      <h1 className="text-xl font-bold">Todos App</h1>

      {user && (
        <div className="flex gap-2">
          {["all", "completed", "pending"].map((f) => (
            <Button
              key={f}
              variant={filter === f ? "default" : "outline"}
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </Button>
          ))}
        </div>
      )}

      {user && (
        <Button variant="destructive" onClick={logout}>
          Sign Out
        </Button>
      )}
    </nav>
  );
}
