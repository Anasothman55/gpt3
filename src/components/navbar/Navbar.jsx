import React ,{useState} from 'react'
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri';
import './navbar.css'
import logo from '../../assets/logo.svg'


const Menu = ()=>(
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is GPT3</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#feature">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu , setToggleMenu] = useState(false)
  const [menuClosing, setMenuClosing] = useState(false)

  const handleCloseMenu = () => {
    setMenuClosing(true)
    setTimeout(() => {
      setToggleMenu(false)
      setMenuClosing(false)
    }, 300) // Adjust this timeout to match your animation duration
  }

  const cl = `gpt3__navbar-menu_conatiner ${toggleMenu ? (menuClosing ? "scale-down-hor-right" : "scale-up-hor-right") : ""}`

  return (
    <nav className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu/>
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='gpt3__navbar-menu'>
      {toggleMenu
        ? <RiCloseLine color='#fff' size='27' onClick={handleCloseMenu}/>
        : <RiMenu3Line color='#fff' size='27' onClick={() => setToggleMenu(true)}/>
      }
      {(toggleMenu || menuClosing) && (
        <div className={cl}>
          <div className='gpt3__navbar-menu_container-links' onClick={handleCloseMenu}>
            <Menu/>
            <div className='gpt3__navbar-menu_conatiner-links-sign'>
              <p>Sign in</p>
              <button type='button'>Sign up</button>
            </div>
          </div>
        </div>
      )}
    </div>
    </nav>
  )
}

export default Navbar