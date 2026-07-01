"use client";
import { useNotes } from "@/context/NotesContext";
import Link from "next/link";

const AllNotes = () => {
  const { notes } = useNotes();

  if (notes.length === 0) {
    return <p>No Notes yet. Add your first note on the home page.</p>;
  }

  return (
    <div>
      {notes.map((note) => (
        <div
          className="p-4 border border-gray-200 rounded-lg mb-4"
          key={note.id}
        >
          <h3 className="font-semibold mb-2">Note #{note.id}</h3>
          <p className="text-gray-600 mb-2">{note.text}</p>
          <p className="text-xs text-gray-500 mb-2">
            Created: {note.createdAt}
          </p>
          <Link
            href={`/notes/${note.id}`}
            className="text-blue-500 hover:text-blue-600 text-sm"
          >
            view details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AllNotes;
