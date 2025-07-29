const getTheTitles = function(books) {
    let bookTitle = [];
    books.forEach((element) => {
        bookTitle.push(element.title);
    });
    return bookTitle;
};

// Do not edit below this line
module.exports = getTheTitles;
