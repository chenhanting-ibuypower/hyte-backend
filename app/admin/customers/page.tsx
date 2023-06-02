import prisma from "@/lib/prisma";
import SignOut from "@/components/sign-out";
import Table from "@/components/customers/table";

async function getCustomers(): Promise<Customer[]> {
  return await prisma.user.findMany({
    select: {
      name: true,
      email: true,
      level: true,
      activitiesCompleted: true,
      totalHoursStudied: true,
      initialLevel: true,
      lastSignIn: true,
      createdAt: true,
    },
    where: {},
    distinct: ["name"],
    take: 100,
    skip: 0,
  });
}

export default async function Home() {
  const customers: Customer[] = await getCustomers();
  const formattedCustomers = customers.map((customer) => ({
    ...customer,
    lastSignIn: customer.lastSignIn.toISOString(),
    createdAt: customer.createdAt.toISOString(),
  }));

  console.log("customers length:", formattedCustomers.length);

  return (
    <div className="mt-[200px]">
      {/* @ts-ignore */}
      <Table data={formattedCustomers} />
    </div>
  );
}
