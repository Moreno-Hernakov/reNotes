import React, { useRef, useContext } from 'react';
import {Modal, Button} from 'react-bootstrap';
import FormAddNotes from './FormAddNotes';
import { NotesContext } from '../utils/NotesContext';

function ModalAddNotes({ show, onClose }) {
    
    const { createNotes } = useContext(NotesContext);
    const childRef        = useRef(); 
    
    const onsubmit = () =>{
        const childData = childRef.current.getNotes();
        createNotes(childData)
        onClose()
    }
    
    return (
        <Modal show={show} onHide={onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>
                    Tambah Catatan
                </Modal.Title>
            </Modal.Header>
            <FormAddNotes ref={childRef} />
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Tutup
                </Button>
                <Button variant="info" className='text-white' onClick={onsubmit}>
                    Simpan
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
 
export default ModalAddNotes;