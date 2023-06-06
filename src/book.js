function createTitle(title) {
  return "The " + title 
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns
  }
}

function saveReview(review, collection) {
  if (!collection.includes(review))
    collection.push(review)
}

function calculatePageCount(title) {
  return title.length * 20;
}

function writeBook(title, character, genre) {
  return{
    title: title,
    mainCharacter: character,
    genre: genre,
    pageCount: calculatePageCount(title)
  }
}

function editBook(book) {
  book.pageCount = book.pageCount / 4 * 3;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook,
}