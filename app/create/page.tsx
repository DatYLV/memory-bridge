export default function CreatePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-8 rounded-2xl shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create Memory
        </h2>

        <input
          type="text"
          placeholder="Title"
          className="w-full p-3 mb-4 border rounded-lg"
        />

        <textarea
          placeholder="Write your memory..."
          className="w-full p-3 mb-4 border rounded-lg"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700"
        >
          Save Memory
        </button>
      </form>
    </main>
  );
}
