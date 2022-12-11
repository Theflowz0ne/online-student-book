import express from 'express';
import cors from 'cors';
import disciplineRoutes from './src/routes/disclipline.js';

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.use(disciplineRoutes);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
