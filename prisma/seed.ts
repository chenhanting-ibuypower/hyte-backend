import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";
import topics from "./data/topics.json";
import { Topic } from "../types/topics";
const prisma = new PrismaClient();
async function main() {
  const academicLevels = [
    null,
    "Beginner",
    "Intermediate",
    "Advanced",
    "Gifted",
    "Struggling",
    "Proficient",
    "Exceptional",
    "Underachieving",
    "HighAchieving",
    "Talented",
  ];

  const names = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve",
    "Frank",
    "Grace",
    "Hannah",
    "Isaac",
    "Jack",
    "Katherine",
    "Liam",
    "Mia",
    "Nathan",
    "Olivia",
    "Peter",
    "Quinn",
    "Rachel",
    "Samuel",
    "Tara",
    "Victoria",
    "Henry",
    "Emily",
    "Oscar",
    "Sophia",
    "Benjamin",
    "Emma",
    "Jacob",
    "Chloe",
    "William",
    "Ava",
    "Michael",
    "Lily",
    "Alexander",
    "Grace",
    "Daniel",
    "Zoe",
    "Anthony",
    "Natalie",
    "Matthew",
  ];

  await prisma.user.upsert({
    where: { email: "han-chen@ibuypower.com" },
    update: {
      name: "Han Chen",
      role: "ADMIN",
    },
    create: {
      email: "han-chen@ibuypower.com",
      name: "Han",
      role: "ADMIN",
      password: await hash("qwer1234", 10),
    },
  });

  for (let name of names) {
    const emailName = name.toLowerCase();
    await prisma.user.upsert({
      where: { email: `${emailName}@prisma.io` },
      update: {
        // @ts-ignore
        initialLevel: academicLevels[Math.ceil(Math.random() * academicLevels.length)],
      },
      create: {
        email: `${emailName}@prisma.io`,
        name,
        role: "USER",
        // @ts-ignore
        initialLevel: academicLevels[Math.ceil(Math.random() * academicLevels.length)],
        activitiesCompleted: Math.ceil(Math.random() * 100),
        totalHoursStudied:  Math.ceil(Math.random() * 100),
        password: await hash("qwer1234", 10),
      },
    });
  }

  // Assert 'topics' as an array of 'Topic' objects
  const typedTopics = topics as Topic[];

  for (let topic of typedTopics) {
    const { title, subject, level } = topic;

    await prisma.course.upsert({
      where: { title: topic.title },
      update: {},
      create: {
        title,
        level,
        subject,
      },
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
