

import { FaWhatsapp } from 'react-icons/fa';


export default function WhatsAppButton(props: { full_number: string, display_number: string }) {
  return (
    <button
      className="flex flex-row items-center justify-around gap-3"
      onClick={() => window.location.href = 'https://wa.me/' + props.full_number}
      style={{ backgroundColor: '#29A448', borderRadius: '2.5rem', maxHeight: '2.7rem', minWidth: '18rem', width: 'auto' }}
    >

      <FaWhatsapp className="text-xl text-white " />

      <p className='text-sm sm:text-sm md:text-sm lg:text-base '>
        WhatsApp: {props.display_number}
      </p>

    </button>
  )
}