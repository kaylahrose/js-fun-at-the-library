const {
  unshelfBook,
  searchShelf
} = require('./shelf');


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

function checkoutBook(library, bookTitle, shelfName) {
  if (searchShelf(library.shelves[shelfName], bookTitle)) {
    unshelfBook(bookTitle, library.shelves[shelfName])
    return "You have now checked out " + bookTitle + " from the " + library.name + "."
  } else {
    return "Sorry, there are currently no copies of " + bookTitle + " available at the " + library.name + "."
  }
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  // takeStock
};