import { useEffect, useState } from 'react';
import { useRole } from '../context/useRole';
import permissions from '../utils/permissions';
import fetchData from '../api/fetchData';
import ListItem from '../components/ListItem';
import ItemForm from '../components/ItemForm'; 
import { Plus } from 'lucide-react';

const DashboardPage = () => {
  const { role } = useRole();
  const [items, setItems] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false); 

  useEffect(() => {
    fetchData().then(data => setItems(data));
  }, []);

 
  const handleSaveNewItem = (newItem) => {
    const itemWithId = { ...newItem, id: Date.now() };
    setItems(prev => [itemWithId, ...prev]);
  };

  const handleDelete = id => {
    setItems(prev => prev.filter(item => item.id !== id));
  };


  const handleEdit = (id, updatedItem) => {
    setItems(prev =>
      prev.map(item => (item.id === id ? { ...item, ...updatedItem } : item))
    );
  };

  const can = action => permissions[role]?.includes(action);

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 isolate">
      <h1 className="text-3xl font-bold text-blue-700 mb-8 flex">
        Dashboard <span className="text-gray-500 capitalize ml-2">({role})</span>
      </h1>

      {can('add') && (
        <>
          <div className="flex gap-3 items-center mb-6">
          <button
          onClick={() => setShowAddForm(true)}
          className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg font-medium transition flex items-center gap-2"
          >
        <Plus className="w-4 h-4" />
        Add New Item
          </button>
          </div>
          {showAddForm && (
            <ItemForm
              mode="add"
              onSave={(item) => {
                handleSaveNewItem(item);
                setShowAddForm(false);
              }}
              onClose={() => setShowAddForm(false)}
            />
          )}
        </>
      )}

      <ul className="space-y-4">
        {items.map(item => (
          <ListItem
            key={item.id}
            item={item}
            onDelete={handleDelete}
            onEdit={handleEdit} 
          />
        ))}
      </ul>
    </div>
  );
};

export default DashboardPage;
