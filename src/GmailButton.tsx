import { CgMail } from "react-icons/cg";


export default function GmailButton(props: { email: string }) {
  return (
    <button
      className="flex flex-row items-center justify-between gap-3"
      onClick={() => window.location.href = 'https://wa.me/5535988566083'}
      style={{ backgroundColor: '#620101', borderRadius: '2.5rem', maxHeight: '2.7rem', minWidth: '18rem', width: 'auto' }}
    >

      <CgMail className="text-xl text-white " />

      <p className='text-sm sm:text-sm md:text-sm lg:text-sm xl:text-base '>
        Gmail: {props.email}
      </p>
    </button>
  )
}