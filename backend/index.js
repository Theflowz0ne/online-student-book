import express from 'express';
import cors from 'cors';
import disciplineRoutes from './src/routes/disclipline.js';
import lecturerRoutes from './src/routes/lecturer.js'
import gradeRoutes from "./src/routes/grade.js";
import studentRoutes from "./src/routes/student.js";

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.use(disciplineRoutes);
app.use(lecturerRoutes);
app.use(gradeRoutes);
app.use(studentRoutes);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
