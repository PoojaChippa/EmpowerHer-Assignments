function Card() {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <img
        src="https://assets.architecturaldigest.in/photos/68fb25b6c7a4482e003c8b87/master/w_1600%2Cc_limit/Hosa%2520Gurugram%2520interior3.jpg"
        className="w-full h-40 object-cover rounded mb-3"
      />

      <h3 className="font-bold text-lg">BHAWARCHI</h3>
      <p className="text-gray-600 text-sm mb-3">
        This is SouthIndian Restaurant.
      </p>

      <button className="bg-gray-200 hover:bg-blue-400 active:bg-gray-400 px-4 py-2 rounded">
        Click Me
      </button>
    </div>
  );
}

export default Card;
