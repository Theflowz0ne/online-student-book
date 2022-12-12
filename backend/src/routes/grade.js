import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/grade/get", async (req, res) => {
  try {
    const grade = await prisma.grade.findMany();
    res.status(200).send(grade);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
});

router.get("/grade/get/:id", async (req, res) => {
  try {
    const grade = await prisma.grade.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).send(grade);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
});

router.post("/grade/create", async (req, res) => {
  try {
    const grade = await prisma.grade.create({
      data: {
        course: req.body.course,
        semester: req.body.semester,
        year: req.body.year,
        grade: req.body.grade,
        disciplineId: req.body.discipline,
        lecturerId: req.body.lecturer,
        examSessionId: req.body.examSession,
        studentId: req.body.student,
      },
    });
    res.status(200).send(grade);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
});

router.put("/grade/update/:id", async (req, res) => {
  try {
    const grade = await prisma.grade.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        course: req.body.course,
        semester: req.body.semester,
        year: req.body.year,
        grade: req.body.grade,
        disciplineId: req.body.discipline,
        lecturerId: req.body.lecturer,
        examSessionId: req.body.examSession,
        studentId: req.body.student,
      },
    });
    res.status(200).send(grade);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
});

router.delete("/grade/delete/:id", async (req, res) => {
  try {
    await prisma.grade.delete({
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
