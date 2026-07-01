"use client";

import { useNotes } from "@/context/NotesContext";
import { notFound } from "next/navigation";

export default function NoteDetail({ noteId }: { noteId: number }) {
  const { notes } = useNotes();

  const note = notes.find((n) => n.id === noteId);

  if (!note) {
    notFound();
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <header className="mb-4">
        <h1 className="text-2xl font-bold text-black">Note #{note.id}</h1>
        <p className="text-sm text-gray-500">Created: {note.createdAt}</p>
      </header>

      <div className="prose">
        <p className="text-gray-700 leading-relaxed">{note.text}</p>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-600">Note ID from URL: {noteId}</p>
      </div>
    </div>
  );
}
