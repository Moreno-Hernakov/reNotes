import React from 'react';
import { Row } from 'react-bootstrap';
import NotesItem from './NotesItem';
import NotesEmptyAlert from './NotesEmptyAlert';

function NotesListActiveArchive({data, isActive}) {
    const title = isActive ? 'Catatan Aktif' : 'Arsip'

    function NotesAlertItem(){
        let notesAlertResult

        !!data.length 
            ? notesAlertResult = data.map(note => <NotesItem key={note.id} {...note}></NotesItem>)
            : notesAlertResult = <NotesEmptyAlert isActive={isActive} ></NotesEmptyAlert> 

        return notesAlertResult
    }

    return (
        <>
            <p className='fs-4 text-start fw-bold mx-3'>{ title }</p>
            <Row className='mx-3 mb-5'>
                <NotesAlertItem />
            </Row>
        </>
    );
}
 
export default NotesListActiveArchive;