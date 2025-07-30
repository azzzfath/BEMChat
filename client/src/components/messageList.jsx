import React, { useState } from "react";

function MessageList({ messages, onDelete, onUpdate }) {
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const startEdit = (msg) => {
    setEditId(msg._id);
    setEditText(msg.message);
  };

  const cancelEdit = () => {
    setEditId(null);
    setEditText("");
  };

  const handleUpdate = () => {
    if (editText.trim()) {
      onUpdate(editId, editText.trim());
      cancelEdit();
    }
  };

  return (
    <div className="space-y-2">
      {messages.map((msg) => (
        <div key={msg._id} className="p-2 rounded border bg-gray-50">
          <strong>{msg.sender}:</strong>{" "}
          {editId === msg._id ? (
            <>
              <input
                className="border px-1"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={handleUpdate} className="ml-2 text-blue-500">✔</button>
              <button onClick={cancelEdit} className="ml-1 text-gray-500">✖</button>
            </>
          ) : (
            <>
              {msg.message}
              <button onClick={() => startEdit(msg)} className="ml-2 text-yellow-600">Edit</button>
              <button onClick={() => onDelete(msg._id)} className="ml-2 text-red-500">Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default MessageList;
