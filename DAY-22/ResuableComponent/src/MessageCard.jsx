function MessageCard({ title, message }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        margin: "10px",
        borderRadius: "10px",
        width: "300px",
      }}
    >
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
}

export default MessageCard;
