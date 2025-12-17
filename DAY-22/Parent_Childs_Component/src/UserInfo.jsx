function UserInfo({ name, age }) {
  return (
    <div
      style={{
        border: "1px solid #958f8fff",
        padding: "15px",
        marginTop: "10px",
        borderRadius: "6px",
        width: "250px",
      }}
    >
      <h3>User Information</h3>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Age:</strong> {age}
      </p>
    </div>
  );
}

export default UserInfo;
