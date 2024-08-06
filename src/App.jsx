import { Header } from "./components/Header"
import { MainArticle } from "./components/MainArticle"
import { NewContainer } from "./components/NewContainer"
import { ArticleContainer } from "./components/ArticleContainer"
import { Footer } from "./components/Footer"
import { Menucito } from "./components/Menucito"
import { useState } from "react"


function App() {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <main className="px-4 pt-6">
     <Header abrirCerrar={toggOpen}/>
     {isOpen && <Menucito/>} 
     <div className="lg:flex lg:gap-8">
      <MainArticle/>
      <NewContainer/>
      </div> 

      <ArticleContainer/>
      <Footer/>
    </main>
  )
}

export default App
