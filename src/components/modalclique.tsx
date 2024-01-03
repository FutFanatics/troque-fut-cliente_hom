import React from 'react';
import Modal from 'react-modal';
import { SH1, STextParagraph } from '../componentsStyled/Text';
import { Box } from '../componentsStyled/Box';
import Button from '../componentsStyled/Button';
import MapClique from './mapclique';

interface ModalCliqueProps {
  isOpen: boolean;
  children?: React.ReactNode;
  onRequestClose: () => void;
}

const ModalClique: React.FC<ModalCliqueProps> = ({ isOpen, onRequestClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="c-modal_aceite">
      <MapClique></MapClique>
      <button onClick={onRequestClose} className='btn-close btn-close_clique'></button>
    </Modal>
  );
};

export default ModalClique;
