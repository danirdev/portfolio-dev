import {useState} from 'react'; //
import Modal from '../iu/Modal';
import PixelButton from '../iu/PixelButton';

export default function Modals ({activeModal, onClose})
{
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) =>
  {
    e.preventDefault();
    setStatus('submitting');

    const form = e.target;
    const data = new FormData(form);

    try
    {
      const response = await fetch(import.meta.env.VITE_FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if(response.ok)
      {
        setStatus('success');
        form.reset();
        setTimeout(() => {onClose(); setStatus(null);}, 3000);
      } else
      {
        setStatus('error');
      }
    } catch(error)
    {
      setStatus('error');
    }
  };

  return (
    <>
      <Modal
        isOpen={activeModal === 'bio'}
        onClose={onClose}
        title="Bio_Data.txt"
      >
        <p className="mb-4">
          Soy un desarrollador apasionado por la geometría del código y la precisión del diseño.
        </p>
        <p>
          Me especializo en crear aplicaciones web que no solo funcionan, sino que se sienten sólidas y bien construidas.
          Mi enfoque combina la estética retro con la tecnología moderna.
        </p>
        <div className="mt-4 bg-gray-100 p-2 text-xs border border-gray-300 font-mono">
          {'>'} education: [Ingeniería Informática, Técnico Electrónico]<br />
          {'>'} certificados: "Full Stack Developer"<br />
          {'>'} location: "Jujuy, Argentina"<br />
          {'>'} lenguage: "Ingles B1"<br />
          {'>'} hobby: "Futbol & Café"
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === 'contact'}
        onClose={onClose}
        title="Transmitir_Mensaje.exe"
      >
        {status === 'success' ? (
          <div className="flex flex-col items-center justify-center h-48 text-center space-y-4 animate-pulse">
            <div className="text-4xl">✅</div>
            <h3 className="font-bold text-xl uppercase">¡Transmisión Exitosa!</h3>
            <p className="text-xs font-mono">Los datos han sido recibidos en el servidor central.</p>
            <PixelButton onClick={() => setStatus(null)} className="mt-4">
              NUEVA_TRANSMISION
            </PixelButton>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-bold mb-1 uppercase" htmlFor="name">ID del Remitente</label>
              <input
                id="name"
                name="name" // Importante para Formspree
                type="text"
                required
                className="w-full border-2 border-black p-2 font-mono text-sm focus:bg-yellow-50 focus:outline-none"
                placeholder="Tu nombre..."
              />
            </div>
            <div>
              <label className="block text-xs font-bold mb-1 uppercase" htmlFor="message">Datos del Mensaje</label>
              <textarea
                id="message"
                name="message" // Importante para Formspree
                required
                className="w-full border-2 border-black p-2 font-mono text-sm h-32 focus:bg-yellow-50 focus:outline-none"
                placeholder="Escribe aquí..."
              ></textarea>
            </div>

            {status === 'error' && (
              <p className="text-red-600 text-xs font-bold bg-red-100 p-2 border border-red-500">
                [ERROR]: Error en la conexión. Intente nuevamente.
              </p>
            )}

            <PixelButton
              type="submit"
              disabled={status === 'submitting'}
              className={`w-full justify-center bg-black text-white hover:bg-gray-800 ${status === 'submitting' ? 'opacity-50 cursor-wait' : ''}`}
            >
              {status === 'submitting' ? 'TRANSMITIENDO...' : 'ENVIAR DATOS'}
            </PixelButton>
          </form>
        )}
      </Modal>
    </>
  );
}