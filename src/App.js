import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Calendar from './Calendar/Calendar';



function App() {
  return (
    <div className="App">
      {/* <Calendar /> */}
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
