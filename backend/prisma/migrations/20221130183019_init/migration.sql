-- CreateTable
CREATE TABLE "admin" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "educationForm" (
    "id" SERIAL NOT NULL,
    "educationForm" TEXT NOT NULL,

    CONSTRAINT "educationForm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "qualification" (
    "id" SERIAL NOT NULL,
    "qualification" TEXT NOT NULL,

    CONSTRAINT "qualification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "level" (
    "id" SERIAL NOT NULL,
    "level" TEXT NOT NULL,

    CONSTRAINT "level_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "examSession" (
    "id" SERIAL NOT NULL,
    "examSession" TEXT NOT NULL,

    CONSTRAINT "examSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "discipline" (
    "id" SERIAL NOT NULL,
    "discipline" TEXT NOT NULL,

    CONSTRAINT "discipline_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lecturer" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "adress" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "degree" TEXT NOT NULL,

    CONSTRAINT "lecturer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lecturerDiscipline" (
    "lecturerId" INTEGER NOT NULL,
    "disciplineId" INTEGER NOT NULL,

    CONSTRAINT "lecturerDiscipline_pkey" PRIMARY KEY ("lecturerId","disciplineId")
);

-- CreateTable
CREATE TABLE "student" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "secondName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "egn" TEXT NOT NULL,
    "facultyNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "adress" TEXT NOT NULL,
    "citizenship" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "phone" TEXT NOT NULL,
    "educationFormId" INTEGER NOT NULL,
    "levelId" INTEGER NOT NULL,
    "qualificationId" INTEGER NOT NULL,

    CONSTRAINT "student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "grade" (
    "id" SERIAL NOT NULL,
    "course" INTEGER NOT NULL,
    "semester" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "grade" INTEGER NOT NULL,
    "disciplineId" INTEGER NOT NULL,
    "lecturerId" INTEGER NOT NULL,
    "examSessionId" INTEGER NOT NULL,
    "studentId" INTEGER NOT NULL,

    CONSTRAINT "grade_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "lecturerDiscipline" ADD CONSTRAINT "lecturerDiscipline_lecturerId_fkey" FOREIGN KEY ("lecturerId") REFERENCES "lecturer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lecturerDiscipline" ADD CONSTRAINT "lecturerDiscipline_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "discipline"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student" ADD CONSTRAINT "student_educationFormId_fkey" FOREIGN KEY ("educationFormId") REFERENCES "educationForm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student" ADD CONSTRAINT "student_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "level"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student" ADD CONSTRAINT "student_qualificationId_fkey" FOREIGN KEY ("qualificationId") REFERENCES "qualification"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "grade" ADD CONSTRAINT "grade_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "discipline"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "grade" ADD CONSTRAINT "grade_lecturerId_fkey" FOREIGN KEY ("lecturerId") REFERENCES "lecturer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "grade" ADD CONSTRAINT "grade_examSessionId_fkey" FOREIGN KEY ("examSessionId") REFERENCES "examSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "grade" ADD CONSTRAINT "grade_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
