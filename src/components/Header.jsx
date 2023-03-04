import { useState } from 'preact/hooks'

export default function Header() {
  const [open, setIsOpen] = useState(false)

  const onToggle = () => setIsOpen(b => !b)

  return (
    <header class='fixed w-full max-w-6xl translate-x-[-50%] left-1/2'>
      <nav class='relative top-0 flex justify-between items-center py-4 md:py-7'>
        <span class='text-slate-200 font-bold ml-8'>
          STV
        </span>
        <button id='menu' class='mr-8 p-2' onClick={onToggle}>
          {
            !open ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                class='fill-white md:hidden'
              >
                <path d='M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z'></path>
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                class='fill-white md:hidden'
              >
                <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z">
                </path>
              </svg>
            )
          }
        </button>
        <div class={`${!open ? 'hidden' : ''} absolute top-full backdrop-blur-xl w-full h-screen md:static md:backdrop-blur-none md:w-auto md:h-auto md:block`}>
          <ul class='flex flex-col font-medium text-gray-200 px-8 pt-7 gap-8 md:flex-row md:gap-12 md:pt-0'>
            <li>Home</li>
            <li>Projects</li>
            <li>Contact</li>
            <li>Resume</li>
          </ul>
        </div>
      </nav>
    </header>
  )
}