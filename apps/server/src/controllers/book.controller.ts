import { Request, Response, NextFunction } from 'express';
import { BookModel } from '../models/book.model.js';
import { HttpException } from '../middlewares/error.middleware.js';

export const getBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const books = await BookModel.findAll();
    res.status(200).json({ success: true, data: books });
  } catch (error) {
    next(error);
  }
};

export const getBookById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    if (!id) throw new HttpException(400, 'Book ID is required');

    const book = await BookModel.findById(id);
    if (!book) {
      throw new HttpException(404, `Book with ID ${id} not found`);
    }

    res.status(200).json({ success: true, data: book });
  } catch (error) {
    next(error);
  }
};

export const createBook = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { title, author, genre, publishedYear } = req.body;
    if (!title || !author) {
      throw new HttpException(400, 'Title and Author are required fields');
    }

    const newBook = await BookModel.create({
      title,
      author,
      genre: genre || 'Unknown',
      publishedYear: publishedYear ? Number(publishedYear) : new Date().getFullYear(),
    });

    res.status(201).json({ success: true, data: newBook });
  } catch (error) {
    next(error);
  }
};

export const updateBook = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    if (!id) throw new HttpException(400, 'Book ID is required');

    const updatedBook = await BookModel.update(id, req.body);
    if (!updatedBook) {
      throw new HttpException(404, `Book with ID ${id} not found`);
    }

    res.status(200).json({ success: true, data: updatedBook });
  } catch (error) {
    next(error);
  }
};

export const deleteBook = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    if (!id) throw new HttpException(400, 'Book ID is required');

    const deleted = await BookModel.delete(id);
    if (!deleted) {
      throw new HttpException(404, `Book with ID ${id} not found`);
    }

    res.status(200).json({ success: true, message: 'Book deleted successfully' });
  } catch (error) {
    next(error);
  }
};
