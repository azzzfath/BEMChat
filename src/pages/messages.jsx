import React, { useState, useEffect } from "react";
import MessageList from "../components/messageList";
import MessageInput from "../components/messageInput";

function Messages() {
  const sender = localStorage.getItem("username");
  const [receivers, setReceivers] = useState([]);
  const [selectedReceiver, setSelectedReceiver] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {

    if (!sender) {
      navigate("/login"); 
      return;
    }

    const fetchReceivers = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/receivers/${sender}`);
        const data = await res.json();
        setReceivers(data);
      } catch (err) {
        console.error("Gagal mengambil daftar receiver", err);
      }
    };

    if (sender) {
      fetchReceivers();
    }
  }, [sender]);

  return (
    <div className="pt-24 px-18 justify-center item-center max-w-screen mx-auto h-screen grid grid-cols-1  md:grid-cols-[1fr_3fr] gap-4">
      <div>
        <h1 className="text-2xl font-bold mb-4 ">Halo {sender}</h1>
         <ul className="space-y-2">
          {receivers.map((r, i) => (
            <li key={i} onClick={() => setSelectedReceiver(r)} className={`cursor-pointer px-3 py-2 rounded shadow
              ${selectedReceiver === r ? "bg-blue-500 text-white" : "bg-white"}`}
          >
            {r}
          </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="border rounded p-4 bg-white shadow md:h-120 overflow-y-auto">
            <MessageList messages={chatMessages} />
        </div>

        <div className="flex gap-4 mt-4">
            {/* <MessageInput sender={sender} onSend={sendMessage} /> */}
        </div>
      </div>
    </div>
  );
}

export default Messages;
