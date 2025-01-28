import React, {useContext} from 'react';
import { NotesContext } from '../utils/NotesContext';
import {Modal, Button} from 'react-bootstrap';

function ModalDeleteNotes({ showModalDelete, handleCloseModalDelete, title, id }) {

    const { deleteNotes } = useContext(NotesContext);

    return (
        <Modal show={showModalDelete} onHide={handleCloseModalDelete} centered>
            <Modal.Header closeButton>
                <Modal.Title>
                    Hapus Catatan
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className='fs-6'>Catatan <span className='fw-bold'>{title}</span> akan dihapus secara permanent, apakah anda yakin ingin menghapus catatan?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModalDelete}>
                    Batal
                </Button>
                <Button variant="danger" className='text-white' onClick={() => deleteNotes({id})}>
                    Hapus
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
 
export default ModalDeleteNotes;