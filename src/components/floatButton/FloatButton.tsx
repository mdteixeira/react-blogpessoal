import { Plus } from 'phosphor-react';
import ModalPostagem from '../postagens/modalPostagem/ModalPostagem';

function FloatButton() {
  let floatButton;

  var token = localStorage.getItem('token');

  if (token !== '') {
    floatButton = (
      <div className="fixed bottom-0 right-0 m-5 z-50 bg-primary-400 rounded-full size-16 overflow-hidden flex">
        <div className="opacity-0 flex z-50">{<ModalPostagem />}</div>
        <div className=" absolute top-1/4 left-1/4 ">
          <Plus size={32} color="white" weight="bold" className="z-0" />
        </div>
      </div>
    );
  }

  return <>{floatButton}</>;
}

export default FloatButton;
