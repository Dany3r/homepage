
import logo from '../assets/images/logo.svg'
import  burgerMenu  from "..//assets/images/icon-menu.svg";

export const Header = ({abrirCerrar}) => {


  return (
    <header className="flex place-content-between items-center mb-8 ... sticky top-0 bg-white "> 
        <img src={logo} alt='Logo'/>
        <ul className="hidden sm:flex text-[18px] sm:w-[428px] 
    sm:place-content-around sm:text-[16px] sm:items-center ">

        <li>
            <a href="#">Home</a>
        </li>
        <li>
            <a href="#">Popular</a>
        </li>
        <li>
            <a href="#">Viral</a>
        </li>
        <li>
            <a href="#">Categorias</a>
        </li>
    </ul>
    
    <div onClick={abrirCerrar} >
        <button>
         <img className="w-20 h-4 cursor-pointer sm:hidden" 
         src={burgerMenu} alt="Menu Hamburgesa" /> 
        </button>
    </div>
    </header>
  )
}
