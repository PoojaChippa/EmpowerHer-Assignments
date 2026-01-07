export default function Sidebar({ todos, onSelect }) {
  return (
    <aside className="w-64 border-r p-4">
      <h2 className="font-semibold mb-3">Your Todos</h2>

      {todos.length === 0 ? (
        <p className="text-sm text-gray-500">No todos yet</p>
      ) : (
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              onClick={() => onSelect(todo)}
              className="cursor-pointer rounded px-3 py-2 hover:bg-gray-100"
            >
              {todo.title}
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
