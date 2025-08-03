import { useState } from 'react';
import { useRole } from '../context/useRole';
import permissions from '../utils/permissions';
import ItemDetails from './ItemDetails';
import ItemForm from './ItemForm'; 
import { Info, PencilLine, Trash2 } from 'lucide-react';

const ListItem = ({ item, onDelete, onEdit }) => {
  const { role } = useRole();
  const can = action => permissions[role]?.includes(action);

  const [showDetails, setShowDetails] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false); 

  return (
    <>
      <li className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 flex items-center justify-between hover:shadow-md transition">
        <span className="text-gray-800 font-medium text-lg">
          {item.name}
        </span>

        <div className="flex gap-2 items-center">
         <button onClick={() => setShowDetails(true)}
        className="px-4 py-1 text-sm bg-blue-100 text-blue-700 hover:bg-blue-200 rounded-md font-semibold transition flex items-center gap-1"
        >
        <Info className="w-4 h-4" />
         More
        </button>

          {can('edit') && (
            <button
              onClick={() => setShowEditForm(true)} 
              className="px-4 py-1 text-sm bg-yellow-100 text-yellow-700 hover:bg-yellow-200 rounded-md font-semibold transition flex items-center gap-1"
            >
          <PencilLine className="w-4 h-4" />
          Edit
            </button>
          )}

          {can('delete') && (
            <button
              onClick={() => onDelete(item.id)}
              className="px-4 py-1 text-sm bg-rose-100 text-rose-700 hover:bg-rose-200 rounded-md font-semibold transition flex items-center gap-1"
          >
          <Trash2 className="w-4 h-4" />
          Delete
            </button>
          )}
          
        </div>
      </li>

      {showDetails && (
        <ItemDetails item={item} onClose={() => setShowDetails(false)} />
      )}

      {showEditForm && (
        <ItemForm
          mode="edit"
          initialItem={item}
          onSave={(updatedItem) => {
            onEdit(item.id, updatedItem);
            setShowEditForm(false);
          }}
          onClose={() => setShowEditForm(false)}
        />
      )}
    </>
  );
};

export default ListItem;
