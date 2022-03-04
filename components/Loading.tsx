import { CircleLoader } from 'react-spinners'

type Props = {}

function Loading({}: Props) {
	return (
		<div className='flex h-screen flex-row items-center justify-center bg-neutral-900 font-Sora'>
			<CircleLoader color='white' size={100} />
		</div>
	)
}

export default Loading
