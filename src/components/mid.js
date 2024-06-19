import React, { useEffect } from 'react'; // Asegúrate de importar useEffect
import '../App.css';

function Mid() {
  return (
    //modelo
    <div className='flex flex-row justify-around items-center h-full'>
      {/* Bloque 1 / CARGAR IMAGEN */}
      <div>
        <h1>Receta original</h1>
        <div className='p-5 mr-5 mt-7 bg-white border border-black border-opacity-0 rounded-[50px] inline-block w-[400px] h-[260px] shadow-[0_0_15px_rgba(0,0,0,0.3)]'>
          {/* CARGAR IMAGEN */}
          <div className='w-[300px] h-[160px]'></div>
          {/* BOTON IMAGEN */}
          <div>
            <button className='mr-5 p-2 pl-4 pr-4 bg-amber-300 border border-black border-opacity-0 rounded-[50px] inline-block shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:bg-amber-300 hover:shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform'>Cargar Archivo</button>
            <button className='mr-5 p-2 pl-4 pr-4 bg-amber-300 border border-black border-opacity-0 rounded-[50px] inline-block shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:bg-amber-300 hover:shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform'>Tomar Foto</button>
          </div>
        </div>
      </div>
      {/* Bloque 2 / VER IMAGEN */}
      <button className='mr-5 p-2 pl-4 pr-4 bg-amber-300 border border-black border-opacity-0 rounded-[50px] h-[40px] inline-block shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:bg-amber-300 hover:shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform'>Visualizar</button>
      {/* Bloque 2 / VER IMAGEN */}
      <div>
        <h1>Receta Transcribida</h1>
        <div className='p-5 mr-5 mt-7 bg-white border border-black border-opacity-0 rounded-[50px] inline-block w-[400px] h-[260px] shadow-[0_0_15px_rgba(0,0,0,0.3)]'>
        </div>
      </div>
    </div>
  );
}

export default Mid;
