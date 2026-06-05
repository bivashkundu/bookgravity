export interface TBook {
  id: string;
  title: string;
  author: string;
  genre: string;
  publishedYear: number;
}

// In-memory mock database of books
let booksDb: TBook[] = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Classic',
    publishedYear: 1925,
  },
  {
    id: '2',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    publishedYear: 1960,
  },
  {
    id: '3',
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    publishedYear: 1949,
  },
];

export const BookModel = {
  async findAll(): Promise<TBook[]> {
    return booksDb;
  },

  async findById(id: string): Promise<TBook | null> {
    return booksDb.find((book) => book.id === id) || null;
  },

  async create(bookData: Omit<TBook, 'id'>): Promise<TBook> {
    const newBook: TBook = {
      id: String(booksDb.length + 1),
      ...bookData,
    };
    booksDb.push(newBook);
    return newBook;
  },

  async update(id: string, bookData: Partial<Omit<TBook, 'id'>>): Promise<TBook | null> {
    const index = booksDb.findIndex((book) => book.id === id);
    if (index === -1) return null;
    booksDb[index] = { ...booksDb[index]!, ...bookData };
    return booksDb[index]!;
  },

  async delete(id: string): Promise<boolean> {
    const originalLength = booksDb.length;
    booksDb = booksDb.filter((book) => book.id !== id);
    return booksDb.length < originalLength;
  },
};
