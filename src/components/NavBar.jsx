import  burgerMenu  from "..//assets/images/icon-menu.svg";

export const NavBar = () => {
  return (
    <>
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
    
    <div >
        <button>
         <img className="w-20 h-4 cursor-pointer sm:hidden" 
         src={burgerMenu} alt="Menu Hamburgesa" /> 
        </button>
      
    </div>
    </>
    
  )
}
