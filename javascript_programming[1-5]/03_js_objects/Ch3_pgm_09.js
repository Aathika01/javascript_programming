// Concatenating string properties

var book1;
var book2;
var book3;

book1 = {
	title: "The Hobbit",
	author: "J. R. R. Tolkien",
	genre: "Fantasy"
};

book2 = {
	title: "Northern Lights",
	author: "Philip Pullman",
	genre: "Fantasy"
};

book3 = {
	title: "To Kill a Mockingbird",
	author: "Harper Lee",
	genre: "Classic"
};

console.log(book1.title + " by " + book1.author + " (" + book1.genre + ")");
console.log(book2.title + " by " + book2.author + " (" + book2.genre + ")");
console.log(book3.title + " by " + book3.author + " (" + book3.genre + ")");