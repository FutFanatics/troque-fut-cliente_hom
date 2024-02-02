import React, { useState } from 'react';
import Modal from 'react-modal';
import { SH1, STextParagraph } from '../componentsStyled/Text';
import { Box } from '../componentsStyled/Box';
import Button from '../componentsStyled/Button';
import MapClique from './mapclique';

interface ModalCliqueProps {
  isOpen: boolean;
  children?: React.ReactNode;
  onRequestClose: () => void;
  dadosFinais:any;
}

const ModalClique: React.FC<ModalCliqueProps> = ({ isOpen, onRequestClose, dadosFinais}) => {
  const [locker, setLocker] = useState<String>("")
  console.log('novosdados', dadosFinais)
  const updatelocker = (locker: string) =>{
    setLocker(locker);
  }
  const handleConfirmar = () => {
    dadosFinais.locker = locker;
    onRequestClose();
  }
  console.log('cade', locker)
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="c-modal_aceite">
      <MapClique updatelocker={updatelocker}></MapClique>
      <button onClick={onRequestClose} className='btn-close btn-close_clique'></button>
      <button onClick={handleConfirmar} className="button-fut">confirmar</button>
    </Modal>
  );
};

export default ModalClique;
