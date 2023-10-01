const {BookModel, UserModel} = require(".../models");


//DTO
const IssuedBook = require("../dto/book-dto.js");

exports.getAllbooks = async() => {
    const books = await BookModel.find();
    if(books.length === 0){
        return res.status(404).json({
            success: false,
            message: "No Books found. "
        })
    }return res.status(200).json({
        success: true,
        data: books
    })
}

exports.getBookbyId = async(req, res)=>{
    const {id} = req.params;
    // const book = books.find((each)=>each.id === id);
    const book = await BookModel.findById(id);
    
    if(!book){
        return res.status(404).json({
            success: false,
            message: "Book Does Not Exist"
        })
    }
    return res.status(200).json({
        success: true,
        data: book
    })
}

exports.getAllissuedbooks = async(req, res)=>{
    const user = await UserModel.find({
        issuedBooks: {$exists: true},
    }).populate("issuedBook");

    if(issuedBooks.length === 0){
        return res.status(404).json({success: false, message: "No books issued yet."});
    }
    return res.status(200).json({success: true, data: issuedBooks})
}

exports.addNewBook = async (req, res)=>{
    const {data} = req.body;

    if(!data){
        return res.status(400).json({
            success: false,
            message: "No data provided to add a book"
        })
    }

    // const book = books.find((each)=> each.id === data.id);
    await BookModel.create(data);

    const allBooks = await BookModel.find();
    // if(book){
    //     return res.status(404).json({success: false, message: "Book with the given ID already exists"})
    // }

    // const allBooks = [...books, data];
    return res.status(200).json({success: true, data: allBooks})
}

exports.updateBookById = async  (req, res)=>{
    const {id} = req.params;
    const {data} = req.body;


    const updatedBook = await BookModel.findOneAndUpdate({
        _id: id,
    },
         data,
         {
        new: true,
    })

    return res.status(200).json({
        success: true,
        data: updatedBook
    })
}

