import React, { useState }  from 'react';
import { ToastContainer } from 'react-toastify';

import ModalAddNotes from './ModalAddNotes';
import NavbarNotes from './NavbarNotes';
import NotesList from './NotesList';
import FooterNotes from './FooterNotes';
import { NotesProvider } from '../utils/NotesContext';

function RenotesApp() {
    const [show, setShow] = useState(false);
    const handleShow    = () => setShow(true);
    const handleClose   = () => setShow(false);

    return (
        <>
            <NotesProvider>
                <NavbarNotes onShow={handleShow} />
                <ModalAddNotes show={show} onClose={handleClose} />
                <ToastContainer />
                <NotesList/>
            </NotesProvider>
            <FooterNotes/>
        </>
    );
}
 
export default RenotesApp;