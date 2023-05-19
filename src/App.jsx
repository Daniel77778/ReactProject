import { useState } from 'react'; // Importing the useState hook from the 'react' module
import { Register } from "./components/Register"; // Importing the Register component
import { Login } from "./components/Login"; // Importing the Login component
import { Header } from './components/Header'; // Importing the Header component
import { ProductList } from './components/ProductList'; // Importing the ProductList component
import "./index.css"; // Importing the index.css file
import "./app.css"; // Importing the app.css file

function App() {
  const [allProducts, setAllProducts] = useState([]); // Declaring a state variable allProducts and its setter function using the useState hook
  const [total, setTotal] = useState(0); // Declaring a state variable total and its setter function using the useState hook
  const [countProducts, setCountProducts] = useState(0); // Declaring a state variable countProducts and its setter function using the useState hook

  const [view, setView] = useState("register"); // Declaring a state variable view and its setter function using the useState hook

  function changeView(ev) {
    view == "login" ? setView("register") : setView("login"); // Conditional statement to change the value of the view state variable
  }

  function renderView(ev) {
    switch (view) {
      case "register":
        return <Register />; // Rendering the Register component
        break;
      case "login":
        return <Login />; // Rendering the Login component
        break;
      case "main":
        return <MainMenu />; // Rendering the MainMenu component
        break;
      default:
        break;
    }
  }
  
  return (
    <>
      <div className="appContainer">
        {renderView()} 
        <button onClick={changeView}>CAMBIAR VISTA</button> 
      </div>

      <Header
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      /> 

      <ProductList
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
    </>
  );
}

export default App; // Exporting the App component as the default export

