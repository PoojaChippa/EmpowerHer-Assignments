function Navbar() {
  return (
    <header
      style={{
        width: "200vh",
        backgroundColor: "#4a90e2",
        padding: "20px 0",
        textAlign: "center",
        color: "white",
        fontSize: "26px",
        fontWeight: "600",
      }}
    >
      Vite + React Web App
      <nav
        style={{
          marginTop: "12px",
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          fontSize: "18px",
        }}
      >
        <a href="#" style={linkStyle}>
          Home
        </a>
        <a href="#" style={linkStyle}>
          About
        </a>
        <a href="#" style={linkStyle}>
          Contact
        </a>
      </nav>
    </header>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "500",
  transition: "0.3s",
};
export default Navbar;
