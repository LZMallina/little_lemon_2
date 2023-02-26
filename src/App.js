import './App.css';
import Header from './components/Header'
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import BookingPage from './components/BookingPage';
import Orderonline from './components/Orderonline';
import Login from './components/Login';
import RegistrationForm from './components/RegistrationForm';
import ConfirmationPage from './components/ConfirmationPage'
import Footer from './components/Footer';
//import CartContextProvider from './context/CartContext';
import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <>
    <Header />
        <main className="content">
          <Switch>
            <Route exact path="/" element ={<Home />}><Home /></Route>
            <Route exact path="/about" element ={<About />}><About /></Route>
            <Route exact path="/menu" element = {<Menu />}><Menu /></Route>
            <Route exact path="/reservation" element ={<BookingPage />}><BookingPage /></Route>
            <Route exact path="/orderonline" element ={<Orderonline />}><Orderonline /></Route>
            <Route exact path="/login" element ={<Login />}><Login /></Route>
            <Route exact path="/registration" element = {<RegistrationForm />}><RegistrationForm /></Route>
            <Route exact path="/confirmation" element ={<ConfirmationPage />}><ConfirmationPage /></Route>
          </Switch>
        </main>
      
        <Footer />
    </>
  );
}

export default App;
