import { PrismaClient } from 'prisma/prisma-client';

const prisma = new PrismaClient();

async function main() {
    await prisma.user.create({
        data: {
            salutation: 'Mr.',
            name: 'Daniel Istratii',
            email: 'istratiidannyel@gmail.com',
        },
    });

    const users = await prisma.user.findMany({
        select: {
            salutation: true,
            name: true,
            email: true,
        },
    });

    console.table(users);
}

main();
