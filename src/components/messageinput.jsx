import React, { useState } from "react";

function MessageInput({ sender, onSend }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text.trim() !== "") {
      onSend(sender, text);
      setText("");
    }
  };

  return (
    <div className="flex w-full flex-col gap-2">
        <p class="text-ligth text-md">{sender}</p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border rounded px-2 py-1"
      />
      <button
        onClick={handleSend}
        className="bg-blue-500 text-white px-3 py-1 rounded"
      >
        Send
      </button>
    </div>
  );
}

export default MessageInput;
