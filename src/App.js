import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Header3 from './Components/Header3/Header3';
import HeaderTwo from './Components/HeaderTwo/HeaderTwo';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className='App'>
      {/* <Header></Header> */}
      <HeaderTwo></HeaderTwo>
      <Header3></Header3>
      <Home/>
      <Footer></Footer>
    </div>
  );
}

export default App;
