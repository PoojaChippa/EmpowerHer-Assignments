function Content() {
  return (
    <div
      style={{
        width: "200vh",
        textAlign: "center",
        margin: "40px 0",
        fontSize: "24px",
      }}
    >
      <h2 style={{ fontSize: "28px", marginBottom: "20px", color: "#333" }}>
        Welcome to the Main Content
      </h2>

      <p
        style={{
          fontSize: "18px",
          maxWidth: "800px",
          margin: "0 auto",
          color: "#555",
          marginBottom: "50px",
          marginTop: "50px",
        }}
      >
        This is a Vite + React web app created using React components. It
        demonstrates a layout with a navbar, content section, and footer.
      </p>
    </div>
  );
}

export default Content;
