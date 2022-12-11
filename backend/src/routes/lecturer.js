import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.post("/lecturer/create", async (req, res)=>{
    try {
        const lecturer = await prisma.lecturer.create({
            data: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                adress: req.body.adress,
                degree: req.body.degree,
                email: req.body.email,
                password: req.body.password,
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

export default router;
