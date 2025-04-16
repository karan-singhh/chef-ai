import ChefLogo from './assets/cooking.png'
import './App.css'
function Header() {

  return (
    <div className='header'>
      <img src={ChefLogo} className='logo' />
      <h1>ChefAI</h1>

    </div>
  )
}

export default Header
