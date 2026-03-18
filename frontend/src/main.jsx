  import react from "react"; 
  import ReactDOM from "react-dom/client"
  import App from './App'
  import './index.css'
import { BrowserRouter } from "react-router-dom";
import ShopContextProvider from "./context/ShopContext";

  ReactDOM.createRoot(Document.getElementById('root')).render(
    <BrowserRouter>
    
    <ShopContextProvider>
        <App/>
    </ShopContextProvider>
       
    </BrowserRouter>
  )