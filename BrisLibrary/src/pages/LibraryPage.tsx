import BookCard from './../components/BookCard';

function LibraryPage() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <BookCard title="1984" author="George Orwell" />
      <BookCard title="The Great Gatsby" author="F. Scott Fitzgerald" />
    </div>
  );
}
export default LibraryPage;
