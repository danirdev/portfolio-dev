import Modal from '../iu/Modal';
import PixelButton from '../iu/PixelButton';

export default function Modals({ activeModal, onClose }) {
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
        <div className="mt-4 bg-gray-100 p-2 text-xs border border-gray-300">
          {'>'} education: [Ingeniería de Software, Autodidacta]<br/>
          {'>'} location: "Internet"<br/>
          {'>'} hobby: "Pixel Art & Café"
        </div>
      </Modal>

      <Modal 
        isOpen={activeModal === 'contact'} 
        onClose={onClose} 
        title="Transmitir_Mensaje.exe"
      >
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-bold mb-1 uppercase">ID del Remitente</label>
            <input 
              type="text" 
              className="w-full border-2 border-black p-2 font-mono text-sm focus:bg-yellow-50 focus:outline-none" 
              placeholder="Tu nombre..." 
            />
          </div>
          <div>
            <label className="block text-xs font-bold mb-1 uppercase">Datos del Mensaje</label>
            <textarea 
              className="w-full border-2 border-black p-2 font-mono text-sm h-32 focus:bg-yellow-50 focus:outline-none" 
              placeholder="Escribe aquí..."
            ></textarea>
          </div>
          <PixelButton className="w-full justify-center bg-black text-white hover:bg-gray-800">
            ENVIAR DATOS
          </PixelButton>
        </form>
      </Modal>
    </>
  );
}
