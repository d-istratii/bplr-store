import { PrismaClient } from 'prisma/prisma-client';

const prisma = new PrismaClient();

async function main() {
    await prisma.user.create({
        data: {
            salutation: 'Mr.',
            name: 'Daniel Istratii',
            email: 'istratiidannyelzzze@gmail.com',
        },
    });

    const users = await prisma.user.findMany({
        select: {
            salutation: true,
            name: true,
            email: true,
        },
    });

    const countUsers = await prisma.user.count({});

    const result = await prisma.user.findUnique({
        where: {
            email: 'istratiidannyely@gmail.com',
        },
    });

    console.table(users);
    console.log(countUsers);
    console.log(result);
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
