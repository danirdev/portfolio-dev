import {User} from 'lucide-react';
import PixelButton from '../iu/PixelButton';
import profileImg from '../../assets/perfil.png';

export default function ProfileCard ({onOpenBio, onOpenContact})
{

  const profileImageUrl = profileImg;

  return (
    <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
      <div className="w-32 h-32 mx-auto bg-gray-100 border-2 border-black mb-4 flex items-center justify-center overflow-hidden relative group">
        {profileImageUrl ? (
          <img
            src={profileImageUrl}
            alt="Foto de perfil de Daniel Ramos"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-16 h-16 relative">
            <div className="absolute top-0 left-0 w-full h-full border-2 border-black opacity-20 group-hover:opacity-100 transition-opacity"></div>
            <User size={48} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
        )}
      </div>

      <h2 className="font-mono font-bold text-xl mb-1">Daniel Ramos</h2>
      <p className="font-mono text-xs text-gray-500 mb-4 bg-gray-100 py-1 inline-block px-2">FULL_STACK_DEV</p>

      <div className="text-left space-y-2 border-t-2 border-dashed border-gray-300 pt-4 text-xs font-mono">
        <div className="flex justify-between">
          <span>EXP:</span>
          <span className="font-bold">5 AÑOS</span>
        </div>
        <div className="flex justify-between">
          <span>GITHUB:</span>
          <span className="font-bold">danir_dev</span>
        </div>
        <div className="flex justify-between">
          <span>DISPONIBLE:</span>
          <span className="font-bold text-green-600 animate-pulse">SI</span>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <PixelButton onClick={onOpenBio} className="w-full justify-center cursor-pointer  ">
          Ver Bio_Data
        </PixelButton>
        <PixelButton onClick={onOpenContact} className="w-full justify-center cursor-pointer">
          Iniciar_Chat
        </PixelButton>
      </div>
    </div>
  );
}
