import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { useNavigate } from 'react-router-dom';

export default function Logout({ showModal, setShowModal }) {
  const modalRef = useRef();
  const navigate = useNavigate();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const onHandleLogout = () => {
      localStorage.removeItem("token"); 
      navigate.push("/")
      setShowModal(false)
    }

  return (
    <>
      {showModal ? (
        <div className='background-modal' onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <div className='modal-wrapper-success' showModal={showModal}>
              <div className='modal-content-point'>
                <div className='modal-message-logout'>
                  Yakin ingin keluar? 
                </div>
                <div className='logout-btns'>
                  <button type='button' className="modal-logout-btn-n" onClick={()=> setShowModal(false)}>
                    Tidak
                  </button>
                  <button type='button' className="modal-logout-btn-y" onClick={onHandleLogout}>
                    Yakin
                  </button>
                </div>
              </div>
            </div>
          </animated.div>
        </div>
      ) : null}
    </>
  );
};