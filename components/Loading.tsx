import { CircleLoader } from 'react-spinners';

function Loading() {
    return (
        <div className='flex h-screen flex-row items-center justify-center bg-neutral-900 font-Sora'>
            <CircleLoader color='gold' size={100} />
        </div>
    );
}

export default Loading;
