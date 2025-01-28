import React,{ useRef, useContext, useState } from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import { NotesContext } from '../utils/NotesContext';
import ModalDeleteNotes from './ModalDeleteNotes';

function NotesItem({archived, title, id}) {

    const icon          = archived ? 'up' : 'down'
    const btnColor      = archived ? 'primary' : 'success'
    const { archiveOrActiveNotes } = useContext(NotesContext);

    const [showModalDelete, setShowModalDelete] = useState(false);
    const handleShowModalDelete     = () => setShowModalDelete(true);
    const handleCloseModalDelete    = () => setShowModalDelete(false);

    const propertyDeleteNotes = { title, showModalDelete, handleCloseModalDelete, id }

    return (
        <>
            <ModalDeleteNotes {...propertyDeleteNotes}></ModalDeleteNotes>
            <Row className='mb-3 justify-content-between'>
                <Col >
                    <h5 className='my-auto'>{ title }</h5>
                </Col>
                <Col className='justify-content-center d-flex'>
                    <Button onClick={handleShowModalDelete} variant="outline-danger" size='sm' className='px-4 mx-1  my-auto rounded-pill'>
                        <i className="fa-solid fa-trash"></i> 
                    </Button>
                    <Button onClick={() => archiveOrActiveNotes({id, archived})} variant={'outline-'+ btnColor} size='sm' className='px-4 mx-1  my-auto rounded-pill' >
                        <i className={"fa-solid fa-file-arrow-" + icon}></i> 
                    </Button>
                </Col>
            </Row>
        </>
    );
}
 
export default NotesItem;