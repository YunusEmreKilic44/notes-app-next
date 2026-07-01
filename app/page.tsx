import NoteInput from "@/components/NoteInput";
import NotesList from "@/components/NotesList";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">My Notes App</h1>

        <div className="mb-6 text-center">
          <Link
            href="/notes"
            className="text-blue-500 hover:text-blue-600 underline"
          >
            View all notes →
          </Link>
        </div>
        <NoteInput />

        <NotesList />
      </div>
    </div>
  );
}
