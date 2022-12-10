import { PrismaClient } from 'prisma/prisma-client';

const prisma = new PrismaClient();

async function main() {
    await prisma.user.create({
        data: {
            name: 'Daniel Istratii',
            email: 'istratiidannyel@gmail.com',
        },
    });

    const users = await prisma.user.findMany();

    console.table(users);
}
