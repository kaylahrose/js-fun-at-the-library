const {
  unshelfBook,
  shelfBook,
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
  shelfBook(book, library.shelves[shelf])
}

function checkoutBook(library, bookTitle, shelfName) {
  if (searchShelf(library.shelves[shelfName], bookTitle)) {
    unshelfBook(bookTitle, library.shelves[shelfName])
    return "You have now checked out " + bookTitle + " from the " + library.name + "."
  } else {
    return "Sorry, there are currently no copies of " + bookTitle + " available at the " + library.name + "."
  }
}

function takeStock(library, shelfName) {
  if (shelfName) {
    return "There are a total of " + 
    library.shelves[shelfName].length +
    " " + shelfName + 
    " books at the " +
    library.name + "."
  } else {
    var shelfCount = Object.values(library.shelves).map(shelf => shelf.length)
    var sum = shelfCount.reduce((partialSum, a) => partialSum + a, 0)
    return "There are a total of " + sum +
    " books at the " +
    library.name + "."
  }
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};