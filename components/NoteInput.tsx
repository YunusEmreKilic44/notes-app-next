"use client";

const NoteInput = () => {
  return (
    <div className="mb-8">
      <form className="space-y-4">
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
