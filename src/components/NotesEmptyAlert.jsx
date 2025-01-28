import React from 'react';

function NotesEmptyAlert({isActive}) {

    let notes   = isActive ? 'Catatan' : 'Arsip'
    let icon    = isActive ? 'fa-file-pen' : 'fa-file-arrow-down'

    return (
        <div className='shadow py-5 rounded-4 text-info text-center fw-bold'>
            <i className={"fa-solid fa-5x " + icon}></i> 
            <p className=' fs-2 m-0'>{notes} Kosong</p>
            <p>Tambahkan {notes}</p>
        </div>
    );
}
 
export default NotesEmptyAlert;