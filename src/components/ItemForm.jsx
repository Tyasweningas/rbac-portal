import { useState, useEffect } from "react";
import {X} from 'lucide-react';

const ItemForm = ({ mode = "add", initialItem = {}, onSave, onClose }) => {
  const [name, setName] = useState(initialItem.name || "");
  const [dataEntries, setDataEntries] = useState(
    initialItem.data
      ? Object.entries(initialItem.data)
      : [["", ""]]
  );

  useEffect(() => {
    if (mode === "edit" && initialItem.data) {
      setDataEntries(Object.entries(initialItem.data));
    }
  }, [mode, initialItem]);

  const handleChangeData = (index, field, value) => {
    const updated = [...dataEntries];
    updated[index][field === "key" ? 0 : 1] = value;
    setDataEntries(updated);
  };

  const addDataField = () => {
    setDataEntries([...dataEntries, ["", ""]]);
  };

  const removeDataField = index => {
    const updated = [...dataEntries];
    updated.splice(index, 1);
    setDataEntries(updated);
  };

  const handleSubmit = () => {
    const dataObject = {};
    dataEntries.forEach(([key, value]) => {
      if (key.trim()) dataObject[key.trim()] = value;
    });

    const finalItem = {
      ...initialItem,
      name,
      data: Object.keys(dataObject).length > 0 ? dataObject : null,
    };

    onSave(finalItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-400/40 via-pink-400/40 to-blue-400/40 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md relative">
        <button
          onClick={onClose}
           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
>
      <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-gray-800 capitalize">
          {mode === "edit" ? "Edit Item" : "Add New Item"}
        </h2>

        <label className="block mb-2 font-medium text-gray-700">Name:</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
        />

        <label className="block mb-2 font-medium text-gray-700">Data:</label>
        {dataEntries.map(([key, value], index) => (
          <div key={index} className="flex gap-2 mb-2 items-center">
         <div key={index} className="flex gap-2 mb-2 items-center">
  <div className="flex flex-1 gap-2">
    <input
      type="text"
      placeholder="Key"
      value={key}
      onChange={e => handleChangeData(index, "key", e.target.value)}
      className="w-1/2 px-3 py-1 border border-gray-300 rounded-md"
    />
    <input
      type="text"
      placeholder="Value"
      value={value}
      onChange={e => handleChangeData(index, "value", e.target.value)}
      className="w-1/2 px-3 py-1 border border-gray-300 rounded-md"
    />
  </div>
  <button
    onClick={() => removeDataField(index)}
    className="text-red-500 hover:text-red-700 text-sm font-bold"
>
  <X className="w-4 h-4" />
  </button>
    </div>
          </div>
        ))}
        <button
          onClick={addDataField}
          className="mb-4 text-blue-500 hover:underline text-sm"
        >
          + Add Data Field
        </button>

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
        >
          {mode === "edit" ? "Update" : "Add"}
        </button>
      </div>
    </div>
  );
};

export default ItemForm;
