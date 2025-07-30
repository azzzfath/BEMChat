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
      <div key={msg._id} className="borde">
      <div className="flex flex-row items-center gap-2 mx-2">
                <div className="text-sm ml-2 md:ml-4 md:text-lg text-white mb-1 mt-2 font-medium ">{msg.sender}</div>
              <div className="text-xs ml-1 md:ml-4 md:text-sm text-white mb-1 mt-2 font-light ">{new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
      </div>
        <div className={`px-2 py-2 flex items-center justify-between mb-4 ${editId === msg._id ? "bg-white/20" : ""}`}>
          <div className="flex-1 ml-2 md:ml-4 text-gray-300 w-full break-words">
            {editId === msg._id ? (
              <>
                <input
                  className="bor flex-1 w-full"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
              </>
            ) : (
              msg.message
            )}
          </div>
          <div className="flex items-center ">
            {editId === msg._id ? (
              <>
                <button onClick={handleUpdate} className="ml-2 text-white opacity-50"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
</svg>
</button>
                <button onClick={cancelEdit} className="ml-1 text-white opacity-50"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
</svg>
</button>
              </>
            ) : (
              <>
                <button onClick={() => startEdit(msg)} className="text-white opacity-50"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-3">
  <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
</svg>
</button>
                <button onClick={() => onDelete(msg._id)} className="ml-2 text-primary opacity-50"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-3">
  <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
</svg>
</button>
              </>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
);
}

export default MessageList;
