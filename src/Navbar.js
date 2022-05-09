import { useContext } from 'react'
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined'
import { ThemeContext } from './context/ThemeContext'
import './Navbar.css'

function Navbar(props) {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext)
  return (
    <div className={isDarkMode ? 'Navbar-bg-dk' : "Navbar-bg"}>
      <div className='Navbar'>
        <h2>Where in the world?</h2>
        <div className='Navbar-right' onClick={toggleTheme}>
          <DarkModeIcon style={{marginRight: '0.3rem'}}/>
          <p>Dark Mode</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar