import express from 'express';
import { PrismaClient } from "@prisma/client";
const app = express();
const port = 3000;
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

app.get("/edu", async (req, res) => {
  await prisma.educationForm.create({
    data: {
      educationForm : "Redovno"
    },
  });
  res.send();
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

