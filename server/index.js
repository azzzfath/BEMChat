import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import messageRoutes from '../server/routes/messageRoutes.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api', messageRoutes);

mongoose.connect('mongodb://localhost:27017/bemchat', {
})
.then(() => {
  console.log('✅ Terhubung ke MongoDB');
  app.listen(PORT, () => {
    console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
  });
})
.catch((err) => {
  console.error('❌ Gagal konek MongoDB:', err);
});
