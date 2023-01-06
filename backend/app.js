import express from 'express'
import cors from 'cors'

const PORT = 9898;
const app = express();

app.use(cors());

app.listen(PORT, () => console.log("Läuft auf", PORT));