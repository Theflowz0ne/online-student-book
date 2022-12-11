import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/discipline/get", async (req, res) => {
  try {
    const disciplines = await prisma.discipline.findMany();
    res.status(200).send(disciplines);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
});

router.get("/discipline/get/:id", async (req, res) => {
  try {
    const discipline = await prisma.discipline.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).send(discipline);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
});

router.post("/discipline/create", async (req, res) => {
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

router.put("/discipline/update/:id", async (req, res) => {
  try {
    await prisma.discipline.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        discipline: req.body.name,
      },
    });
    res.status(200).send();
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
});

router.delete("/discipline/delete/:id", async (req, res) => {
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

export default router;
