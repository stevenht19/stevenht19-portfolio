import { useState } from 'preact/hooks'

export default function Header() {
  const [open, setIsOpen] = useState(false)

  const onToggle = () => setIsOpen(b => !b)

  return (
    <header class='absolute top-0 w-full'>
      <nav class='relative flex max-w-6xl w-full mx-auto justify-end items-center py-4 md:py-7'>
        <button id='menu' class='mr-8 p-2 md:hidden' onClick={onToggle} aria-label='menu'>
          {
            !open ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                class='fill-white'
              >
                <path d='M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z'></path>
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                class='fill-white'
              >
                <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z">
                </path>
              </svg>
            )
          }
        </button>
        <div class={`${!open ? 'hidden' : ''} z-20 backdrop-blur-3xl absolute top-full w-full h-screen md:static md:backdrop-blur-none md:w-auto md:h-auto md:block`}>
          <ul class='flex flex-col font-medium text-gray-300 px-8 pt-7 gap-8 md:flex-row md:gap-12 md:pt-0'>
            <li class='hover:text-blue-100'>
              <a href='#'>Home</a>
            </li>
            <li class='hover:text-blue-100'>
              <a href='#projects'>Projects</a>
            </li>
            <li class='hover:text-blue-100'>
              <a href='#contact'>Contact</a>
            </li>
            <li class='hover:text-blue-100'>
              <a href='#'>Resume</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}