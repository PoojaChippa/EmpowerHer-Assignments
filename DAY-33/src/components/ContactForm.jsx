function ContactForm() {
  return (
    <section className="p-8 max-w-md mx-auto">
      <h3 className="text-xl font-bold mb-4">Contact Us</h3>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
