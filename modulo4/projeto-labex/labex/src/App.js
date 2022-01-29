import {BrowserRouter,Switch,Route} from "react-router-dom";
import ListTripsPage from './components/pages/ListTripsPage';
import {LoginPage} from './components/pages/LoginPage';





 function App() {
  return (
    
    <BrowserRouter>
      <Switch>

         <Route path= "/log" element={<LoginPage/>} />
         <Route path= "/listtrip" element={<ListTripsPage/>} />


        
      </Switch>
    </BrowserRouter>


    
  );
}

export default App;

