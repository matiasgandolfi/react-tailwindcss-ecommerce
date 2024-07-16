import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home";
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from "../MyOrders";
import NotFound from '../NotFound';
import SignIn from '../SignIn';
import Navbar from '../../Comoponentes/Navbar'
import { ShoppingCartProvider } from "../../Context";

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home/>},
    {path: '/my-order', element: <MyOrder/>},
    {path: '/my-orders', element: <MyOrders/>},
    {path: '/my-account', element: <MyAccount/>},
    {path: '/sign-in', element: <SignIn/>},
    {path: '/*', element: <NotFound/>},
  ]);

  return routes
}

const App = () => {
    return (
      <ShoppingCartProvider>
        <BrowserRouter>
          <AppRoutes/>
          <Navbar/>
        </BrowserRouter>
      </ShoppingCartProvider>
    )
  }
  
  export default App;
  