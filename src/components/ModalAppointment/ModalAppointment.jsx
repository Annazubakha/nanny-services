import ReactDOM from 'react-dom';
import { useEffect } from 'react';

import { Icon } from 'components';

import s from './ModalAppointment.module.css';

const modalRoot =
  document.getElementById('modalRoot') || document.createElement('div');
modalRoot.id = 'modalRoot';
document.body.appendChild(modalRoot);
export const ModalAppointment = ({ children, toggleModal, title }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [toggleModal]);

  const handleClickOnBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  return ReactDOM.createPortal(
    <div onClick={handleClickOnBackdrop} className={s.wrapper}>
      <div className={s.content_appointment_wrapper}>
        <button className={s.closeModalBtn} type="button" onClick={toggleModal}>
          <Icon id="close" size={32} />
        </button>
        <div className={s.content_appointment}>
          <h2 className={s.title}>{title}</h2>
          {children}
        </div>
      </div>
    </div>,
    modalRoot
  );
};
