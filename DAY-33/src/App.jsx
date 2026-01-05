import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import StyledTable from "./components/StyledTable";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <Features />
      <StyledTable />
      <ContactForm />
    </div>
  );
}

export default App;
