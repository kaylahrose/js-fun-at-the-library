function shelfBook(book, collection) {
  if (collection.length < 3)
    collection.unshift(book)
}

module.exports = {
  shelfBook,
  // unshelfBook,
  // listTitles,
  // searchShelf
};