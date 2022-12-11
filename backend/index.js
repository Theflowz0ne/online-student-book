import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
const prisma = new PrismaClient();

app.get('/', async (req, res) => {
	const allAdmins = await prisma.admin.findMany()
	res.send(allAdmins);
});

app.get('/test', async (req, res) => {
	await prisma.admin.create({
	data: {
		email: req.query.email,
		password: req.query.password,
		id: Number(req.query.id)
	},
	});
	res.send();
});

app.get('/edu', async (req, res) => {
	await prisma.educationForm.create({
		data: {
		educationForm : 'Redovno'
		},
	});
	res.send();
});

app.post("/discipline/create", async (req, res) => {
	try {
		const discipline = await prisma.discipline.create({
		data: {
			discipline: req.body.name,
		},
		});
		res.status(200).send(discipline);
	} catch (err) {
		console.log(err);
		res.status(500).send("Something went wrong");
	}
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
