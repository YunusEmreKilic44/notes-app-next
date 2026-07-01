"use client";

import { useNotes } from "@/context/NotesContext";
import { useState } from "react";

const NoteInput = () => {
  const [noteText, setNoteText] = useState<string>("");
  const { addNote } = useNotes();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (noteText.trim()) {
      addNote(noteText.trim());
    }

    setNoteText("");
  };

  return (
    <div className="mb-8">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="note">
            Add a new note
          </label>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 
            focus:ring-blue-500 focus:border-transparent resize-none"
            id="note"
            placeholder="Write your note here..."
            rows={3}
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
          ></textarea>
        </div>

        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 
          disabled:bg-gray-300 disabled:cursor-not-allowed"
          type="submit"
        >
          Add Note
        </button>
      </form>
    </div>
  );
};

export default NoteInput;
