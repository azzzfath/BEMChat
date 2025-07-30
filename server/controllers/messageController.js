import Message from '../models/message.js'; // pastikan juga pakai .js di akhir

// Kirim pesan 
export const createMessage = async (req, res) => {
  const { sender, receiver, message } = req.body;
  try {
    const newMessage = await Message.create({ sender, receiver, message });
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(500).json({ error: 'Gagal membuat pesan' });
  }
};

// Ambil daftar receiver yang pernah dihubungi oleh sender
export const getReceiversBySender = async (req, res) => {
  const { sender } = req.params;

  try {
    const receivers = await Message.find({ sender }).distinct('receiver');
    res.json(receivers);
  } catch (err) {
    res.status(500).json({ error: 'Gagal mengambil daftar penerima' });
  }
};

// Ambil semua pesan antara dua user
export const getChatBetweenUsers = async (req, res) => {
  const { user1, user2 } = req.params;

  try {
    const messages = await Message.find({
      $or: [
        { sender: user1, receiver: user2 },
        { sender: user2, receiver: user1 }
      ]
    }).sort({ timestamp: 1 });

    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Gagal mengambil riwayat pesan' });
  }
};

// Ubah isi pesan berdasarkan ID
export const updateMessage = async (req, res) => {
  const { id } = req.params;
  const { message } = req.body;

  try {
    const updated = await Message.findByIdAndUpdate(
      id,
      { message },
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ error: 'Pesan tidak ditemukan' });
    }
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Gagal memperbarui pesan' });
  }
};

// Hapus pesan berdasarkan ID
export const deleteMessage = async (req, res) => {
  const { id } = req.params;
  
  try {
    const deleted = await Message.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Pesan tidak ditemukan' });
    }
    res.json({ message: 'Pesan berhasil dihapus' });
  } catch (err) {
    res.status(500).json({ error: 'Gagal menghapus pesan' });
  }
};
