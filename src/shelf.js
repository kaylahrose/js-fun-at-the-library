function shelfBook(book, collection) {
  if (collection.length < 3)
    collection.unshift(book)
}

function unshelfBook(bookTitle, shelf) {
  var titles = shelf.map(getBookTitles)
  var index = titles.indexOf(bookTitle)
  shelf.splice(index, 1);
}

function getBookTitles(book) {
  return book.title
}

function listTitles(shelf) {
  var titles = shelf.map(getBookTitles)
  return titles.join(", ")
}

function searchShelf(shelf, bookTitle) {
  var titles = shelf.map(getBookTitles)
  return titles.includes(bookTitle)
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};