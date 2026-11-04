import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export default function Loading() {
  return (
    <div className='fixed inset-0 z-20 flex items-center justify-center bg-background/50'>
      <AiOutlineLoading3Quarters className='size-16 animate-spin' />
    </div>
  )
}
