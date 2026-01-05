import Card from "./Card";

function Features() {
  return (
    <section className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Card key={item} />
      ))}
    </section>
  );
}

export default Features;
