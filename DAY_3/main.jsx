import React from "react"
import ReactDOM from "react-dom"
import "./App.css"
import Indya from "./component/app"
import Head from "./component/Head"
import { Header,Footer} from "./component/Head.jsx"
    


   
  
  
const heading =React.createElement("h1",{id:"head"},"hello world")
  const root =ReactDOM.createRoot(document.getElementById("root"))
  root.render(
    <div>
    <Head/>
    <Header/>
    <Footer/>
    <Indya/>
    
   
   </div>
  )
