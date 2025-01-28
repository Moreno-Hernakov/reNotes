import React, {useContext } from 'react';
import {Container,} from 'react-bootstrap';
import NotesListActiveArchive from './NotesListActiveArchive';
import { NotesContext } from '../utils/NotesContext';




function NotesList() {
    const { getActiveNotes, getArchiveNotes } = useContext(NotesContext);
    
    return (
        <Container fluid='true' className='p-lg-4 p-3 bg-light'>
            <NotesListActiveArchive data={getActiveNotes} isActive={true}></NotesListActiveArchive>
            <NotesListActiveArchive data={getArchiveNotes} isActive={false}></NotesListActiveArchive>
        </Container>
    );
}


 
export default NotesList;