import hashPassword from "@/lib/bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
  const alice = await prisma.user.upsert({
    where: { email: "alice@mail.io" },
    update: {},
    create: {
      email: "alice@mail.io",
      firstName: "Alice",
      lastName: "DOE",
      password: hashPassword("password"),
    },
  });
  const bob = await prisma.user.upsert({
    where: { email: "bob@mail.io" },
    update: {},
    create: {
      email: "charles@mail.io",
      firstName: "Charles",
      lastName: "DOE",
      password: hashPassword("password"),
    },
  });
  console.log({ alice, bob });
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
