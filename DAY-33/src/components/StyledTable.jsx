function StyledTable() {
  return (
    <div className="p-8 overflow-x-auto">
      <table className="w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4].map((row, i) => (
            <tr
              key={row}
              className={`${
                i % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-gray-100`}
            >
              <td className="border p-2">{row}</td>
              <td className="border p-2">Item {row}</td>
              <td className="border p-2">Active</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StyledTable;
