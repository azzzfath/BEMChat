import React from "react";

function MessageList({ messages }) {
  return (
    <div className="space-y-2">
      {messages.map((msg) => (
        <div key={msg.id} className="p-2 rounded border bg-gray-50">
          <strong>{msg.sender}:</strong> {msg.text}
        </div>
      ))}
    </div>
  );
}

export default MessageList;
