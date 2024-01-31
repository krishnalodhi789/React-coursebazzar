import logo from './logo.svg';
import './App.css';

import Base from './components/base'
import Home from './components/home'

import {Routes, Route} from 'react-router-dom';

function App() {
  return (

<Routes>
   <Route path='/' element={<Base />} >
    <Route index element={<Home />}/>
   </Route>

</Routes>



  );
}

export default App;
