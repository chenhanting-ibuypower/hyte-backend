-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "Level" AS ENUM ('Easy', 'Normal', 'Hard', 'Expert', 'Master');

-- CreateEnum
CREATE TYPE "Subject" AS ENUM ('Science', 'Math', 'English', 'Physics', 'Chemistry');

-- CreateEnum
CREATE TYPE "AcademicLevel" AS ENUM ('Beginner', 'Intermediate', 'Advanced', 'Gifted', 'Struggling', 'Proficient', 'Exceptional', 'Underachieving', 'HighAchieving', 'Talented');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "name" TEXT,
    "level" "AcademicLevel",
    "activitiesCompleted" INTEGER NOT NULL DEFAULT 0,
    "totalHoursStudied" INTEGER NOT NULL DEFAULT 0,
    "initialLevel" "AcademicLevel",
    "lastSignIn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Course" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "level" "Level" DEFAULT 'Easy',
    "description" VARCHAR(2000),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "subject" "Subject" NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Course_title_key" ON "Course"("title");
