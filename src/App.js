import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./composants/Home";
import Products from "./composants/Products";
import {useState} from "react";

const App = () => {
  const [currentRoute, setCurrentRoute] = useState()
  const handleClick = () => {
    const path = window.location.path
    console.log(path)

  }
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul className="nav nav-pills">
            <li onClick={()=>setCurrentRoute('home')}>
              <Link className={currentRoute==='home'?'btn btn-info':'btn btn-outline-info'} to="/home">Home</Link>
            </li>
            <li onClick={()=>setCurrentRoute('produits')}>
              <Link className={currentRoute==='produits'?'btn btn-info':'btn btn-outline-info'} to="/produits">Produits</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/home"
            element={<Home/>}/>
          <Route path="/produits"
            element={<Products/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )

}

export default App;
