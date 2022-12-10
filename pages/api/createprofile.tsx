import { getSession } from 'next-auth/react';
import { NextApiResponse, NextApiRequest } from 'next';
import { prisma } from 'prisma/prisma-client';

async function createprofile(req: any, res: any) {
    // TODO incorporate session into the API
    // const session = await getSession({ req });
    // if (!session) {
    //     return res.status(401);
    // }
    // Do authenticated stuff here...
}
