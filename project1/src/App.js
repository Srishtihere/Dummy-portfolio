import Aboutsection from './components/Aboutsection';
import Contactsection from './components/Contactsection';
import CopyRight from './components/CopyRight';
import Footer from './components/Footer';
import Masthead from './components/Masthead';
import Navbar from './components/Navigation'
import Portfolio from './components/Portfolio';
import './App.css';
const App = () => {
  return(
    <>
       {/* <!-- Navigation--> */}
        <Navbar/>
        {/* <!-- Masthead--> */}
        <Masthead/>
        {/* <!-- Portfolio Section--> */}
        <Portfolio/>
        {/* <!-- About Section--> */}
        <Aboutsection/>
        {/* <!-- Contact Section--> */}
        <Contactsection/>
        {/* <!-- Footer--> */}
        <Footer/>
        {/* <!-- Copyright Section--> */}
        <CopyRight/>
    </>
  );
}

export default App;