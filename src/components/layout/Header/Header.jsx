import { useState } from 'preact/hooks'
import NavItem from './NavItem'

export default function Header() {
  const [open, setIsOpen] = useState(false)

  const onToggle = () => setIsOpen(b => !b)

  const onClose = () => setIsOpen(false)

  return (
    <header class='fixed z-10 top-0 w-full md:backdrop-blur-lg'>
      <nav class='relative flex max-w-6xl w-full mx-auto justify-end items-center py-4'>
        <button
          id='menu'
          class='mr-8 relative left-3 p-2 z-30 md:hidden'
          aria-label='menu'
          onClick={onToggle}
        >
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
        <div class={`${!open ? 'hidden' : ''} z-20 backdrop-blur-3xl absolute top-0 w-full h-screen md:static md:backdrop-blur-none md:w-auto md:h-auto md:block`}>
          <ul class='flex flex-col font-medium text-gray-300 px-8 pt-24 gap-8 md:flex-row md:gap-12 md:pt-0'>
            <NavItem
              text='Home'
              onClick={onClose}
            />
            <NavItem
              text='Projects'
              path='#projects'
              onClick={onClose}
            />
            <NavItem
              text='About'
              path='#about'
              onClick={onClose}
            />
            <NavItem
              text='Contact'
              path='#contact'
              onClick={onClose}
            />
          </ul>
        </div>
      </nav>
    </header>
  )
}