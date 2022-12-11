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

app.get("/discipline/get", async (req, res) => {
  	try {
		const disciplines = await prisma.discipline.findMany()
		res.status(200).send(disciplines);
  	} catch (err) {
		console.log(err);
		res.status(500).send("Something went wrong");
  	}
});

app.get("/discipline/get/:id", async (req, res) => {
  	try {
    	const discipline = await prisma.discipline.findUnique({
			where: {
				id: Number(req.params.id)
			}
		});
    	res.status(200).send(discipline);
  	} catch (err) {
    	console.log(err);
    	res.status(500).send("Something went wrong");
  	}
});

app.post('/discipline/create', async (req, res) => {
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

app.put('/discipline/update/:id', async (req, res) => {
	try {
		await prisma.discipline.update({
			where: {
				id: Number(req.params.id)
			},
			data: {
				discipline: req.body.name
			}
		})
		res.status(200).send();
	} catch (err) {
		console.log(err);
		res.status(500).send("Something went wrong");
	}
});

app.delete("/discipline/delete/:id", async (req, res) => {
	try {
		await prisma.discipline.delete({
			where: {
			id: Number(req.params.id),
			},
		});
		res.status(200).send();
	} catch (err) {
		console.log(err);
		res.status(500).send("Something went wrong");
	}
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

// asdassdaasdasdsa