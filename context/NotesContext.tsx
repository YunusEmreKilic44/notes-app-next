import { createContext } from "react";

interface Note {
  id: number;
  text: string;
  createdAt: string;
}

interface NotesContextType {
  notes: Note[];
  addNote: (text: string) => void;
  deleteNote: (id: number) => void;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);
