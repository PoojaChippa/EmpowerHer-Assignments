import MessageCard from "./MessageCard";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Message Cards</h2>

      <MessageCard
        title="Welcome"
        message="Welcome to our React application."
      />

      <MessageCard
        title="Success"
        message="Your operation was completed successfully."
      />

      <MessageCard title="Warning" message="Please check your input values." />

      <MessageCard
        title="Info"
        message="This is a reusable component example."
      />
    </div>
  );
}

export default App;
