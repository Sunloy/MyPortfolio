const bcrypt = require("bcryptjs");
const { prisma } = require("../src/db/prisma");

async function main() {
  const email = "admin@demo.com";
  const password = "Admin12345!";

  const hash = await bcrypt.hash(password, 10);

  await prisma.adminUser.upsert({
    where: { email },
    update: { password: hash },
    create: { email, password: hash, role: "ADMIN" },
  });

  console.log("Seeded admin:", email, password);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });