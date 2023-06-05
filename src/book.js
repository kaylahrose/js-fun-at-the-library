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
  return collection
}

function calculatePageCount(title) {
  return title.length * 20;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  // writeBook,
  // editBook
}