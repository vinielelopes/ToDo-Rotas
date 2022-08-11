import express from 'express';
import tips  from './controllers/tips.js';

const app = express();

app.use(express.json());
app.listen(5000, () => console.log("Servidor rodando!"))

tips(app)