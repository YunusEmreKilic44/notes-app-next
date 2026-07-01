import NoteDetail from "@/components/NoteDetail";
import Link from "next/link";

export default async function NotePage({
  params,
}: {
  params: Promise<{ noteId: string }>;
}) {
  const { noteId } = await params;

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <Link
            href="/notes"
            className="text-blue-500 hover:text-blue-600 mb-4 inline-block"
          >
            ← Back to all notes
          </Link>
        </div>

        <NoteDetail noteId={Number(noteId)} />
      </div>
    </div>
  );
}
