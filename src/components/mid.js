import React, { useState } from 'react';
import axios from 'axios';


function Mid() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loadedImage, setLoadedImage] = useState(null);
  const [predictions, setPredictions] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Manejar el cambio de archivo seleccionado
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setLoadedImage(URL.createObjectURL(event.target.files[0]));
  };

  // Abrir el cuadro de diálogo para seleccionar archivos
  const handleOpenFileDialog = () => {
    document.getElementById('fileUpload').click();
  };


  // Enviar la imagen al backend y obtener predicciones
  const handlePredict = () => {
    if (!selectedFile) return;

    setLoading(true);
    setError('');

    const formData = new FormData();
    formData.append('file', selectedFile);

    axios.post('https://2f6f-191-98-182-165.ngrok-free.app/predict', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      setPredictions(response.data.pred);
    })
    .catch(error => {
      console.error('Error making prediction: ', error);
      setError('Error al hacer la predicción');
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <div className='container mx-auto px-4 sm:px-8 lg:px-12'>
      <div className='flex flex-col sm:flex-row justify-center items-center h-full'>
        {/* Bloque 1 / CARGAR IMAGEN */}
        <div className='mb-8 sm:mb-0'>
          <h1 className='mb-4 text-center sm:text-left'>Receta original</h1>
          <div className='p-5 bg-white border border-black border-opacity-0 rounded-lg  w-[380px] h-[250px] shadow-md'>
            {/* CARGAR IMAGEN */}
            {!loadedImage && <div className='w-full h-[160px] bg-gray-200' />}
            {loadedImage && <img src={loadedImage} alt='Imagen Cargada' className='w-full h-[160px]' />}
            {/* INPUT FILE */}
            <div className='flex justify-center items-end mt-4'>
              <input type='file' onChange={handleFileChange} className='hidden' id='fileUpload' />
              <button onClick={handleOpenFileDialog} className='mr-2 px-4 py-2 bg-amber-300 border border-black border-opacity-0 rounded-lg shadow-lg hover:bg-amber-400 focus:outline-none transition duration-300'>
                Cargar Archivo
              </button>
              <button className='px-4 py-2 bg-amber-300 border border-black border-opacity-0 rounded-lg shadow-md hover:bg-amber-400 focus:outline-none transition duration-300'>
                Tomar Foto
              </button>
            </div>
          </div>
        </div>
        {/* Bloque 2 / VER IMAGEN */}
          <button onClick={handlePredict} disabled={!selectedFile || loading} className='lg:ml-10 mt-4 sm:mt-0 mb-4 px-4 py-2 bg-amber-300 border border-black border-opacity-0 rounded-lg shadow-md hover:bg-amber-400 focus:outline-none transition duration-300'>
            {loading ? 'Cargando...' : 'Visualizar'}
          </button>

          <div className='flex flex-col items-center sm:ml-10 '>

          {/* Bloque 3 / RECETA TRANSCRITA */}
          <div>
            <h1 className='mb-4 text-center sm:text-left'>Receta Transcrita</h1>
            <div className='flex items-center justify-center p-5 bg-white border border-black border-opacity-5 rounded-lg w-[380px] h-[250px] shadow-lg'>
  <div className='text-center sm:text-left mb-10 '>
    <p className='mb-2 '>{predictions !== null ? `Tu receta es` : ''}</p>
    <p className='text-5xl font-bold'>{predictions !== null ? `${predictions}` : ''}</p>
    {error && <p className='text-red-500'>{error}</p>}
  </div>
</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Mid;
