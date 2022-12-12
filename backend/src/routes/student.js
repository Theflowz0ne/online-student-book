import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/student/get", async (req, res) => {
  try {
    const students = await prisma.student.findMany();
    res.status(200).send(students);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
});

router.get("/student/get/:id", async (req, res) => {
  try {
    const students = await prisma.student.findMany({
        where: {
            id: Number(req.params.id)
        },
    });
    res.status(200).send(students);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
});

router.post("/student/create", async (req, res) =>{
    try {
        const student = await prisma.student.create({
          data: {
            firstName: req.body.firstName,
            secondName: req.body.secondName,
            lastName: req.body.lastName,
            egn: req.body.egn,
            facultyNumber: req.body.facultyNumber,
            email: req.body.email,
            password: req.body.password,
            dateOfBirth: req.body.dateOfBirth,
            adress: req.body.adress,
            citizenship: req.body.citizenship,
            startDate: req.body.startDate,
            phone: req.body.phone,
            educationFormId: req.body.educationForm,
            levelId: req.body.level,
            qualificationId: req.body.qualification,
          },
        });
        res.status(200).send(student);
    } catch (err){
        console.log(err);
        res.status(500).send("Something went wrong");
    }
});

router.put("/student/update/:id", async (req, res) =>{
    try {
        const student = await prisma.student.update({
            where: {
                id: Number(req.params.id),
            },
            data: {
                firstName: req.body.firstName,
                secondName: req.body.secondName,
                lastName: req.body.lastName,
                egn: req.body.egn,
                facultyNumber: req.body.facultyNumber,
                email: req.body.email,
                password: req.body.password,
                dateOfBirth: req.body.dateOfBirth,
                adress: req.body.adress,
                citizenship: req.body.citizenship,
                startDate: req.body.startDate,
                phone: req.body.phone,
                educationFormId: req.body.educationForm,
                levelId: req.body.level,
                qualificationId: req.body.qualification,
            },
        });
        res.status(200).send(student);
    } catch (err){
        console.log(err);
        res.status(500).send("Something went wrong");
    }
});

router.delete("/student/delete/:id", async (req, res) =>{
    try {
        await prisma.student.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(200).send();
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
});

export default router;
