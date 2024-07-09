// Displaying an object's properties on the console

var movie1;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");

var movie2;

movie2 = {
  title: "The Incredibles",
  actors: "Craig T. Nelson, Holly Hunter",
  directors: "Brad Bird"
};

console.log("Movie information for " + movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------");

var blogPost;

blogPost = {
  title: "My First Blog Post",
  author: "John Doe",
  content: "This is my first blog post. I'm excited to share my thoughts with the world!",
  date: "2022-01-01"
};

console.log("Blog Post information for " + blogPost.title);
console.log("------------------------------");
console.log("Author: " + blogPost.author);
console.log("Content: " + blogPost.content);
console.log("Date: " + blogPost.date);
console.log("------------------------------");