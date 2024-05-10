import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { Icon } from 'components';

import s from './Modal.module.css';
import { useLocation } from 'react-router-dom';

const modalRoot =
  document.getElementById('modalRoot') || document.createElement('div');
modalRoot.id = 'modalRoot';
document.body.appendChild(modalRoot);
export const Modal = ({ children, toggleModal, title }) => {
  const location = useLocation();
  const [isNanniesPage, setIsNanniesPage] = useState(false);
  useEffect(() => {
    setIsNanniesPage(location.pathname.includes('/nannies'));
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
  }, [toggleModal, setIsNanniesPage, location.pathname]);

  const handleClickOnBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };
  const modalClassName = isNanniesPage ? s.content_appointment : s.content;
  return ReactDOM.createPortal(
    <div onClick={handleClickOnBackdrop} className={s.wrapper}>
      <div className={modalClassName}>
        <button className={s.closeModalBtn} type="button" onClick={toggleModal}>
          <Icon id="close" size={32} />
        </button>
        <div>
          <h2 className={s.title}>{title}</h2>
          {children}
        </div>
      </div>
    </div>,
    modalRoot
  );
};
