import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import { Topic } from "../../../types/topics";
import { PrismaClient, Level } from '@prisma/client';

const allRanks = ["Science", "Math", "English", "Physics", "Chemistry"];

function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

async function getPostsByRank(level: Level): Promise<Topic[]> {
  // @ts-ignore
  return prisma.course.findMany({
    select: {
      title: true,
      subject: true,
      level: true,
    },
    where: {
      level: level,
    },
    distinct: ["title"],
    take: 100,
    skip: 0,
  });
}

// post page 👉 https://www.youtube.com/watch?v=puIQhnjOfbc
export default async function RankPage({
  params,
}: {
  params: { rank: Level };
}) {
  const { rank } = params;

  if (!allRanks.map((str) => str.toLowerCase()).includes(rank)) {
    return notFound();
  }

  // @ts-ignore
  const _rank = Level[capitalize(rank)]
  const posts = await getPostsByRank(_rank);

  console.log(posts);

  return <p>Post: {rank}</p>;
}
