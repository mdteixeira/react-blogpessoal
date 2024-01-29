import Popup from 'reactjs-popup';
import './ModalPostagem.css';
import FormularioPostagem from '../formularioPostagem/FormularioPostagem';
import 'reactjs-popup/dist/index.css';

function ModalPostagem() {
  return (
    <Popup
      trigger={
        <button className="border rounded-3xl px-4 hover:bg-white hover:text-primary-800">
          Nova postagem
        </button>
      }
      modal
    >
      <div>
        <FormularioPostagem />
      </div>
    </Popup>
  );
}

export default ModalPostagem;
