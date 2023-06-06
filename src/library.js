function createLibrary(name) {
  return {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    },
  }
}

function addBook(library, book) {
  var shelf = book.genre
  library.shelves[shelf].push(book)
}

module.exports = {
  createLibrary,
  addBook,
  // checkoutBook,
  // takeStock
};