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
  const [showReceiver, setShowReceiver] = useState(false);

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
      if (!prev.includes(trimmed)) return [...prev, trimmed];
      return prev;
    });
    setInputReceiver("");
    setShowReceiver(false); // Tutup menu setelah confirm
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
      fetchChatHistory();
    } catch (err) {
      console.error("Error saat mengirim pesan:", err);
    }
  };

  const deleteMessage = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/messages/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Gagal menghapus pesan");

      fetchChatHistory(); 
    } catch (err) {
      console.error("Error saat menghapus pesan:", err);
    }
  };

  const updateMessage = async (id, newText) => {
    try {
      const res = await fetch(`http://localhost:3000/api/messages/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: newText }),
      });

      if (!res.ok) throw new Error("Gagal mengupdate pesan");

      fetchChatHistory(); 
    } catch (err) {
      console.error("Error saat mengupdate pesan:", err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <>
      <div className="pt-5 md:pt-16 px-4 md:px-18 max-w-screen mx-auto h-screen grid md:grid-cols-[1fr_3fr] gap-4 bg-gradient-to-r from-blue-600 to-indigo-900">

        <div className="md:hidden">
          <button onClick={() => setShowReceiver(!showReceiver)} className="text-white">
            ☰ 
          </button>
        </div>

        <div className={`${showReceiver ? 'block' : 'hidden'} md:block flex flex-col text-center'`}>
          <div className="bg-white/20 mr-2 rounded-md h-[71vh] overflow-y-auto">
            <ul>
              {receivers.map((r, i) => (
                <li
                  key={i}
                  onClick={() => {
                    setSelectedReceiver(r);
                    setShowReceiver(false);
                  }}
                  className={`cursor-pointer px-6 py-3 my-2 shadow ${
                    selectedReceiver === r ? "bg-blue-600 text-white" : "bg-white/10"
                  }`}
                >
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex mt-4">
            <input
              type="text"
              placeholder="Ngobrol dengan..."
              value={inputReceiver}
              onChange={(e) => setInputReceiver(e.target.value)}
              className=" bg-white/10 px-2 py-1 rounded-full ml-4 w-full"
            />
            <button onClick={handleConfirm} className="text-white mr-4">
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

          <div className="flex justify-center items-center">
          <span
            className="mt-2 cursor-pointer text-center text-sm underline"
            onClick={handleLogout}
          >
            Logout
          </span>
          </div>

        </div>


        <div className={`${showReceiver ? 'hidden' : 'block'} md:block flex flex-col`}>
          <div className="border-white rounded bg-white/10 shadow h-[75vh] md:h-[80vh] overflow-y-auto mb-4">
            <MessageList
              messages={chatMessages}
              onDelete={deleteMessage}
              onUpdate={updateMessage}
            />
          </div>

          <div className="flex">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="flex-1 bg-white text-lg rounded-sm px-4 py-2"
              placeholder="Ketik pesan..."
            />
            
            <button onClick={sendMessage} className="bg-primary text-white px-3 py-1 rounded-sm ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
              </svg>
            </button>
          </div>


        </div>
      </div>
    </>
  );
}

export default Messages;
