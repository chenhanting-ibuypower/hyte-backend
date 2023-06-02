import prisma from "@/lib/prisma";
import MuiTable from "@/components/customers/mui-table";
async function getCustomers(): Promise<Customer[]> {
  // @ts-ignore
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

async function Home() {
  const customers: Customer[] = await getCustomers();
  const formattedCustomers = customers.map((customer) => ({
    ...customer,
    lastSignIn: customer.lastSignIn.toLocaleDateString("en-US", { year: "numeric", month: "2-digit", day: "2-digit" }),
    createdAt: customer.createdAt.toLocaleDateString("en-US", { year: "numeric", month: "2-digit", day: "2-digit" }),
  }));

  return (
    <div className="">
      <MuiTable customers={formattedCustomers}></MuiTable>
    </div>
  );
}
export default Home;
