import React from 'react'
import '../App.css';
import logo from '../logo.png';

function Header() {
  return (
    
    <header>
         <img src={logo}/>
         <div className='pr'>  
            <div> <h3>Instrucciones:</h3> </div>
           <div>
           <h3>1. Carga la imagen / Tomar foto</h3>
            <h3>2. Dale click a "Visualizar"</h3>
            <h3>3. ¡Mira tu receta!</h3>

           </div>

         </div>
    </header>
  )
}

export default Header