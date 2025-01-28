import React, { createContext, useState } from "react";
import { getInitialData } from './index';
import { toast } from 'react-toastify';


export const NotesContext = createContext();


export const NotesProvider = ({ children }) => {

  const [notes, setNotes] = useState(getInitialData());
  const [originalNotes, setOriginalNotes] = useState(notes);

  const getArchiveNotes  =  notes.filter(e => e.archived)
  const getActiveNotes   =  notes.filter(e => !e.archived)

  const setAllNotes = (data) => {
    setNotes(data)
    setOriginalNotes(data)
  };

  const archiveOrActiveNotes = ({id, archived}) => {
    setAllNotes(prevNotes =>
      prevNotes.map(note =>
        note.id === id ? { ...note, archived: !archived } : note
      )
    );
  };

  const deleteNotes = ({id}) => {
    const filterNotes = notes.filter(e => e.id !== id)
    setAllNotes(filterNotes)
    toast.success('Catatan Berhasil Dihapus');
  };

  const findNotes = ({title}) => {
    const search = title.trim()
    const result = search
      ? originalNotes.filter(e => e.title?.toLowerCase().includes(search))
      : originalNotes;
    setNotes(result); 
  };

  const createNotes = ({title,body}) => {
    const note = {
      id: new Date(),
      title: title,
      body: body,
      createdAt: new Date(),
      archived: false,
    }

    setAllNotes([...notes, note])
    toast.success('Catatan Berhasil Ditambahkan');
  };

  return (
    <NotesContext.Provider value={{ notes, getActiveNotes, getArchiveNotes, archiveOrActiveNotes, deleteNotes, createNotes, findNotes }}>
      {children}
    </NotesContext.Provider>
  );
};