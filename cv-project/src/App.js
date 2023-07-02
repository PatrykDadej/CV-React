import { useState } from 'react';
import './App.css';
import TopSection from './Components/TopSection';
import ContactDetails from './Components/ContactDetails';


function App() {

  const [contscts,setContacts] = useState({
    tel:'07597222722'
  })


  return (
    <div className="App">
      <div className = 'wholeCV'>
        <TopSection Name = 'Patryk' SecondName = 'Dadej' jobPosition = 'Soft Dev' personalStatement = 'dasldsfsdfsdfsd sdfsdfd fdsfsdfsdfsdf sdf sdfsdfsdfsdfsd sdfsdfsfsdf sdsfsdfsdfsj'/>
        <ContactDetails tel = {contscts.tel}/>
      </div>
    </div>
  );
}

export default App;
