import app from './app.js';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.join(__dirname, '..', 'public')));
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
