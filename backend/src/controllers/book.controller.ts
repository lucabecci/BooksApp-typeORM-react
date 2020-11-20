import {Handler, Request, Response} from 'express'
import {getRepository, Repository} from 'typeorm'

import {Book} from '../entitys/Book'
class BookController {

    public getBooks: Handler = async(req: Request, res: Response): Promise<Response> => {
        const bookRepository: Repository<Book> = getRepository(Book)
        const books = await bookRepository.find()
        return res.status(200).json({
            succes: true,
            books
        })
    }

    public newBook: Handler = async (req: Request, res: Response): Promise<Response> => {
        try{
            const { name, description, author, color } = req.body
            const bookRepository: Repository<Book> = getRepository(Book)
            const book = new Book()
            book.name = name
            book.description = description
            book.author = author
            book.color = color

            await bookRepository.save(book)
            return res.status(200).json({
                succes: true,
                book
            })
        }
        catch(e){
            return res.status(400).json({
                succes: false, 
                message: 'Internal server error, tryl later'
            })
        }
    }

    public getBook: Handler = async (req: Request, res: Response): Promise<Response> => {
        try{
            const id: string = req.params.id
            const idBook = parseInt(id)
            const bookRepository:Repository<Book> = getRepository(Book)
            const book = await bookRepository.find({ id: idBook })
            if(book.length < 1){
                return res.status(400).json({
                    succes: false,
                    message: 'ID not found, send a valid ID'
                })
            }
            return res.status(200).json({
                succes: true,
                book
            })
        }
        catch(e){
            return res.status(500).json({
                succes: false,
                message: 'Internal server erro, try later'
            })
        }
    }

    public editBook: Handler = async (req: Request, res: Response): Promise<Response> => {
       try{
            const id: string = req.params.id
            const {name, description, author, color} = req.body
            const idBook = parseInt(id)
            const bookRepository:Repository<Book> = getRepository(Book)
            const book = await bookRepository
                .createQueryBuilder()
                .update(Book)
                .set( { name, description, author, color })
                .where({id: idBook})
                .execute()
            
            if(book.affected! < 1){
                return res.status(400).json({
                    succes: false,
                    message: 'ID invalid, please send a valid ID'
                })
            }    
            return res.status(200).json({
                succes: true,
                book
            })
       }
       catch(e){
           return res.status(500).json({
               succes: false,
               message: 'Internal server ERROR, try later'
           })
       }
    }

    public deleteBook: Handler = async (req: Request, res: Response): Promise<Response> => {
       try{
            const id: string = req.params.id
            const idBook = parseInt(id)
            const bookRepository:Repository<Book> = getRepository(Book)
            const book = await bookRepository.find({id: idBook})

            const bookDeleted = await bookRepository.remove(book)
            if(bookDeleted.length < 1){
                return res.status(400).json({
                    succes: false,
                    message: 'ID invalid, send a valid ID'
                })
            }
            return res.status(200).json({
                succes: true,
                bookDeleted
            })
       }
       catch(e){
            return res.status(500).json({
                succes: false,
                message: 'Internal server ERROR, try later'
            })
       }
    }

}

export default BookController