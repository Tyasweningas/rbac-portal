const ItemDetails = ({ item, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-400/40 via-pink-400/40 to-blue-400/40 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-6 relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
        >
          &times;
        </button>

        <h4 className="text-2xl font-bold text-gray-800 mb-4">Details</h4>

        {item?.data ? (
          Object.entries(item.data).map(([key, value]) => (
            <p
              key={key}
              className="text-gray-600 text-base mb-2"
            >
              <span className="font-medium">{key}:</span> {value?.toString() ?? "-"}
            </p>
          ))
        ) : (
          <p className="text-gray-600 text-base mb-2 italic">No extra data.</p>
        )}
      </div>
    </div>
  );
};

export default ItemDetails;
