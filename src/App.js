//import icons

import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

//import bootstrap
//this enable bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'
//this enable bootstrap js
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


import './App.css';
import Header from './component/Header';
import SideBar from './component/SideBar';
import Main from './component/Main';



function App() {
  return (
    <>
      <Header />
      <SideBar />
      <Main />
    </>
  );
}

export default App;
