import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.component'
import { useEffect, useRef } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import ServiceItem from './components/service-section/Service/Service.component'
import { getServices } from './redux/services/service.reducer';
import ServiceContent from './components/service-section/service-content/service-content.component';
import Collaboration from './components/collaboration/collaboration.component';

function App() {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getServices());
  },[dispatch]);
  const servicesRef = useRef(new Array())

  
  return (
    <div className="App">
      <Header/>
      <ServiceItem servicesRef={servicesRef}/>
      <ServiceContent servicesRef={servicesRef}/>
      <Collaboration/>
    </div>
  );
}

export default App;
