import React, { useState } from "react";
import MessageList from "../components/MessageList";
import MessageInput from "../components/MessageInput";

function Messages() {
  const [messages, setMessages] = useState([]);

  const sendMessage = (sender, text) => {
    const newMessage = {
      id: Date.now(),
      sender,
      text,
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="pt-24 px-18 justify-center item-center max-w-screen mx-auto h-screen grid grid-cols-1  md:grid-cols-[1fr_3fr] gap-4">
      <div>
        <h1 className="text-2xl font-bold mb-4 ">Chat!</h1>
      </div>

      <div>
        <div className="border rounded p-4 bg-white shadow md:h-120 overflow-y-auto">
            <MessageList messages={messages} />
        </div>

        <div className="flex gap-4 mt-4">
            <MessageInput sender="Anggota a" onSend={sendMessage} />
            <MessageInput sender="Anggota b" onSend={sendMessage} />
        </div>
      </div>
    </div>
  );
}

export default Messages;
