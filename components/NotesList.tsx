"use client";
import { useNotes } from "@/context/NotesContext";

const NotesList = () => {
  const { notes, deleteNote } = useNotes();

  const recentNotes = notes.slice(0, 3);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Your Recent Notes</h2>
      {recentNotes.length === 0 ? (
        <p className="text-gray-500 italic">
          No notes yet. Add your first note above!
        </p>
      ) : (
        <div className="space-y-3">
          {recentNotes.map((note) => (
            <div
              className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm relative group"
              key={note.id}
            >
              <p className="text-gray-800 mb-2 pr-12">{note.text}</p>
              <p className="text-xs text-gray-500">{note.createdAt}</p>
              <button
                className="absolute top-2 text-3xl right-2 text-red-500 hover:text-red-700 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => deleteNote(note.id)}
              >
                X
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotesList;
