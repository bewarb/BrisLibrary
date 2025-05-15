function BookCard({ title, author }: { title: string; author: string }) {
    return (
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-700">{author}</p>
      </div>
    );
  }
  export default BookCard;
  