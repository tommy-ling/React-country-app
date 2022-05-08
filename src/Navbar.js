import useToggle from './hooks/useToggle'
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined'
import './Navbar.css'

function Navbar() {
  const [isDark, toggle] = useToggle(false)
  return (
    <div className='Navbar'>
      <h2>Where in the world?</h2>
      <div className='Navbar-right'>
        <DarkModeIcon style={{marginRight: '0.3rem'}}/>
        <p>Dark Mode</p>
      </div>
    </div>
  )
}

export default Navbar