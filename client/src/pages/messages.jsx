import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MessageList from "../components/messageList";

function Messages() {
  const navigate = useNavigate();
  const sender = localStorage.getItem("username");
  const [receivers, setReceivers] = useState([]);
  const [inputReceiver, setInputReceiver] = useState("");
  const [selectedReceiver, setSelectedReceiver] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [text, setText] = useState("");

  const fetchChatHistory = async () => {
    if (!sender || !selectedReceiver) return;
    try {
      const res = await fetch(`http://localhost:3000/api/chat/${sender}/${selectedReceiver}`);
      const data = await res.json();
      setChatMessages(data);
    } catch (err) {
      console.error("Gagal mengambil chat history", err);
    }
  };

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

    fetchReceivers();
  }, [sender, navigate]);

  // Ambil chat history saat selectedReceiver berubah
  useEffect(() => {
    if (selectedReceiver) {
      fetchChatHistory();
    }
  }, [selectedReceiver]);

  const handleConfirm = () => {
    const trimmed = inputReceiver.trim();
    if (!trimmed) return;

    setSelectedReceiver(trimmed);

    setReceivers((prev) => {
      if (!prev.includes(trimmed)) {
        return [...prev, trimmed];
      }
      return prev;
    });

    setInputReceiver("");
  };

  const sendMessage = async () => {
    if (!text.trim() || !selectedReceiver) return;

    const newMessage = {
      sender: sender,
      receiver: selectedReceiver,
      message: text.trim(),
    };

    try {
      const res = await fetch("http://localhost:3000/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newMessage),
      });

      if (!res.ok) throw new Error("Gagal mengirim pesan");

      setText("");
      fetchChatHistory(); // refresh setelah kirim
    } catch (err) {
      console.error("Error saat mengirim pesan:", err);
    }
  };

  

  return (
    <div className="pt-24 px-18 mr-4 justify-center item-center max-w-screen mx-auto h-screen grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4">
      {/* Sidebar Receiver */}
      <div>
        <h1 className="text-2xl font-bold mb-4">Halo {sender}</h1>

        <ul className="space-y-2 md:h-[70vh] overflow-y-auto">
          {receivers.map((r, i) => (
            <li
              key={i}
              onClick={() => setSelectedReceiver(r)}
              className={`cursor-pointer px-3 py-2 my-2 rounded shadow ${
                selectedReceiver === r ? "bg-blue-500 text-white" : "bg-white"
              }`}
            >
              {r}
            </li>
          ))}
        </ul>

        <div className="flex mt-2">
          <input
            type="text"
            placeholder="Mau ngobrol sama orang baru?"
            value={inputReceiver}
            onChange={(e) => setInputReceiver(e.target.value)}
            className="border px-2 py-1 rounded w-full"
          />

          <button onClick={handleConfirm} className="text-black w-10 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-10"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Chat Area */}
      <div>
        <div className="border rounded p-4 bg-white shadow md:h-[75vh] overflow-y-auto mb-4">
          <MessageList messages={chatMessages} />
        </div>

        <div className="flex">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="flex-1 border rounded px-2 py-1"
            placeholder="Ketik pesan..."
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 text-white px-3 py-1 rounded ml-2"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Messages;
