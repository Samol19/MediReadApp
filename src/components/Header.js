import React from 'react'
import '../App.css';
import logo from '../logo.png';

function Header() {
  return (
    
    <header>
         <img src={logo}/>
         <div className='pr'>  
            <div className='hidden sm:block'> <h3>Instrucciones:</h3> </div>
           <div>
           <h3 className='hidden sm:block'>1.Carga la imagen</h3>
            <h3 className='hidden sm:block'>2. Dale a "Visualizar"</h3>
            <h3 className='hidden sm:block'>3. ¡Mira tu receta!</h3>

           </div>

         </div>
    </header>
  )
}

export default Header