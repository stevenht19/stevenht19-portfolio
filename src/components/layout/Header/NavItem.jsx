const NavItem = ({ path = '#', text, onClick }) => {
  return (
    <li className='hover:text-blue-100' onClick={onClick}>
      <a
        href={path}
        className='flex pt-2 pb-3'
      >
        {text}
      </a>
    </li>
  )
}

export default NavItem