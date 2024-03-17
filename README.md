# library-api
A reusable RESTful API for book library applications, created in the NodeJS environment with ExpressJS, MongoDB, and Mongoose.

## Documents Schema

### Books Document
![Books Schema](/images/book-schema.webp)

## Available Endpoints

`api/books`: Access library of book.

`api/books/{id}`: Access a single book.

## API Reference

### <strong>`GET`</strong> `api/books/` 
Get all books in the database. 
#### Response: 200
<hr>

### <strong>`GET`</strong> `api/books/{book_id}`:
Get a single book with the id {book_id}.
#### Path Params: book_id (required)
#### Response: 200
<hr>

### <strong>`POST`</strong> `api/books/` 
Add a book to the database.
#### Body Params: {title (required), authors (required), genre, imageURL, blurb, read, favorite, dateAdded}
#### Response: 200
<hr>

### <strong>`PUT`</strong> `api/books/{book_id}`
Update a book with the id {book_id}.
#### Path Params: book_id (required)
#### Body Params: {title (required), authors (required), genre, imageURL, blurb, read, favorite, dateAdded}
#### Response: 200
<hr>

### <strong>`DELETE`</strong> `api/books/{book_id}`
Delete a book with the id {book_id}.
#### Path Params: book_id (required)
#### Response: 200

