import Popup from 'reactjs-popup';
import FormularioPostagem from '../formularioPostagem/FormularioPostagem';
import 'reactjs-popup/dist/index.css';
import './ModalPostagem.css';

function ModalPostagem() {
  return (
    <Popup
      trigger={
        <button className="border rounded-3xl px-4 hover:bg-white hover:text-primary-800">
          Nova postagem
        </button>
      }
      modal
      className=""
    >
      <FormularioPostagem />
    </Popup>
  );
}

export default ModalPostagem;
