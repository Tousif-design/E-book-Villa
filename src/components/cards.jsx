const Cards = ({ item }) => {
  return (
    <div className="card bg-white shadow-md rounded-md p-4 transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
      {/* Image section */}
      <img 
        src={item.image} 
        alt={item.name} 
        className="w-full h-48 object-cover mb-4 rounded-md" 
      />
      
      {/* Book name */}
      <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
      
      {/* Book description */}
      <p className="text-gray-600 mb-4">{item.description}</p>
      
      {/* Link to download the PDF */}
      <a 
        href={item.pdf} 
        download={item.name} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-500 mt-2 inline-block hover:text-blue-700 transition-colors duration-200"
        onClick={() => {
          // Optional: Log or track the download action if needed
          console.log(`Downloading: ${item.name}`);
        }}
      >
        Download PDF
      </a>
    </div>
  );
};

export default Cards;
