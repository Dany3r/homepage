import { NavBar } from "./NavBar";
import logo from '../assets/images/logo.svg'
export const Header = () => {
  return (
    <header className="flex place-content-between items-center mb-8 ... sticky top-0 "> 
        <img src={logo} alt='Logo'/>
        <NavBar/>
    </header>
  )
}
