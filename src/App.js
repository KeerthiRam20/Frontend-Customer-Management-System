import Menu from "./componenets/Menu";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'; 
import Home from "./componenets/Home";
import About from "./componenets/About";
import Services from "./componenets/Services";
import Contact from "./componenets/Contact";
import AddCustomer from "./componenets/AddCustomer";
import ViewAllCustomers from "./componenets/ViewAllCustomers";
import ViewSingleCustomer from "./componenets/ViewSingleCustomer";

 function App() {
  return (
    <div >
      <Router>
     <Menu/>
     <Route exact path="/" component={Home}/>
     <Route exact path="/about" component={About}/>
     <Route exact path="/services" component={Services}/>
     <Route exact path="/contact" component={Contact}/>
     <Route exact path="/add-customer" component={AddCustomer}/>
     <Route exact path="/view-all-customers" component={ViewAllCustomers}/>
     <Route exact path="/view-single-customer" component={ViewSingleCustomer}/>
   
     </Router>
    </div>
  );
}

export default App;
