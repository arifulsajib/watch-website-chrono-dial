import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import AuthProvider from "./Context/AuthProvider";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Empty from "./Pages/Empty/Empty";
import AllCollections from "./Pages/AllCollections/AllCollections";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import About from "./Pages/About/About";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/allCollections">
              <AllCollections></AllCollections>
            </Route>
            <PrivateRoute path="/placeOrder/:watchId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path="*">
              <Empty></Empty>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
