import express from "express";
import { PrismaClient } from "@prisma/client";
import { hashpass } from "../utils/utils.js";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/lecturer/get", async (req, res) =>{
    try {
        const lecturers = await prisma.lecturer.findMany();
        lecturers.forEach((lecturer) => {
            delete lecturer.password;
        })
        res.status(200).send(lecturer);
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
});

router.get("/lecturer/get/:id", async (req, res) => {
    try {
        const lecturer = await prisma.lecturer.findUnique({
            where: {
            id: Number(req.params.id),
            }
        });
        delete lecturer.password;
        res.status(200).send(lecturer);
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
});

router.post("/lecturer/create", async (req, res)=>{
    try {
        const lecturer = await prisma.lecturer.create({
            data: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                adress: req.body.adress,
                degree: req.body.degree,
                email: req.body.email,
                password: hashpass(req.body.password),
                phone: req.body.phone
            }
        });
        delete lecturer.password;
        res.status(200).send(lecturer);
    } catch (err){
        console.log(err);
        res.status(500).send("Something went wrong");
    }
});

router.put("/lecturer/update/:id", async (req, res) => {
  try {
    const lecturer = await prisma.lecturer.update({
        where: {
            id: Number(req.params.id),
        },
        data: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            adress: req.body.adress,
            degree: req.body.degree,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone
        },
    });
    res.status(200).send(lecturer);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
});

router.delete("/lecturer/delete/:id", async (req, res) =>{
    try {
        await prisma.lecturer.delete({
            where: {
                id: Number(req.params.id),
            },
        });
        res.status(200).send();
    } catch (err){
        console.log(err);
        res.status(500).send("Something went wrong");
    }
});

export default router;
