import { forwardRef, useImperativeHandle, useState } from "react";
import './Modal.css';

const Modal = (props, ref) => {
    const [modalState, setModalState] = useState(false);
    useImperativeHandle(ref, () => ({
        openModal: () => setModalState(true)
    }));

   modalState ? document.body.classList.add('active-modal') : document.body.classList.remove('active-modal');

    if (!modalState) return null;

    return (
        <div className="modal__container" onClick={() => setModalState(false)}>
            <div className="modal__content">
                <h2>{props.text}</h2>
            </div>
        </div>

    )
}

export default forwardRef(Modal)