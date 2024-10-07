import { Navigate, Route, Routes, Link } from 'react-router-dom';

import { HomePage } from '../routes/HomePage';
import { Navbar } from './Navbar';
import { Create } from '../routes/Create';
import { Edit } from '../routes/Edit';
import { Contact } from '../routes/Contact';


export const MainApp = () => {
  return (
    <>
      <div className='content'>
          <Navbar />
          <hr />
          <Routes>
              <Route path='/' element={ <HomePage></HomePage>}></Route>
              <Route path='/create' element={ <Create></Create>}></Route>
              <Route path='/edit/:key' element={ <Edit></Edit>}></Route>
              <Route path='/contact' element={ <Contact></Contact>}></Route>
          </Routes>
        </div>
    </>
  )
}