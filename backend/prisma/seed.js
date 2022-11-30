import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    await prisma.admin.upsert({
        where: { id: 1 },
        update: {},
        create: {
            email: "admin",
            password: "admin",
            id: 1,
        },
    });
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
