import { getSession } from 'next-auth/react'

export default async function (req: any, res: any) {
	const session = await getSession({ req })

	if (!session) {
		return res.status(401)
	}

	// Do authenticated stuff here...
}
