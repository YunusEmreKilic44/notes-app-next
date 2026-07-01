import AllNotes from "@/components/AllNotes";
import Link from "next/link";

const NotesPage = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <Link
            className="text-blue-500 hover:text-blue-600 mb-4 inline-block"
            href="/"
          >
            Back to Home
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-8">All Notes</h1>

        <AllNotes />
      </div>
    </div>
  );
};

export default NotesPage;
