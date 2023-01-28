import { IconContext } from 'react-icons/lib';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { data } from 'utils/data';
import { motion } from 'framer-motion';
import { PrismaClient } from '@prisma/client';

function Checkout() {
    app.post(`/post`, async (req, res) => {
        const { title, content, authorEmail } = req.body;
        const result = await prisma.post.create({
            data: {
                title,
                content,
                published: false,
                author: { connect: { email: authorEmail } },
            },
        });
        res.json(result);
    });
    use;
    async function handleSubmit(e: React.FormEvent<EventTarget>) {
        await prisma.user.create({
            data: {
                salutation: 'Mr.',
                name: 'Daniel Istratii from Submit',
                email: 'istratiidannyelzzzeafda@gmail.com',
            },
        });

        e.preventDefault();
        console.log('test');
    }

    return (
        <div>
            <div className='flex h-screen flex-col items-center justify-center'>
                <form
                    autoComplete='off'
                    onSubmit={handleSubmit}
                    className='flex h-3/4 w-1/2 flex-col space-y-2 rounded-xl bg-neutral-500 p-24'
                >
                    <label className='mt-2 text-lg'>E-mail address</label>
                    <input
                        type='text'
                        placeholder='jane.smith@example.com'
                        className='w-full rounded border-0 border-gray-400 bg-neutral-700 py-2 px-7 text-white outline-0 focus:outline focus:outline-0'
                    />

                    <label className='mt-2 text-lg'>Name</label>
                    <input
                        type='text'
                        placeholder='Dani Strati'
                        className='w-full rounded border-0 border-gray-400 bg-neutral-700 py-2 px-7 text-white outline-0 focus:outline focus:outline-0'
                    />

                    <div className='flex flex-row justify-center pt-2'>
                        <button className='w-96 rounded-xl bg-neutral-700 py-2 font-semibold text-white shadow-xl hover:bg-neutral-600'>
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Checkout;
