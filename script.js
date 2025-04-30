
for(let i = 1; i <= 10; i++){
    console.log(i);
}

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
  }

  let animals = ["dog", "cat", "rabbit", "parrot"];

for (let i = 0; i < animals.length; i++) {
  console.log("I like " + animals[i] + "s.");
}
let colors = ["red", "green", "blue", "yellow"];

for (let i = colors.length - 1; i >= 0; i--) {
  console.log(colors[i]);
}

let person = {
    name: "Lauren",
    age: 30,
    favoriteColor: "purple"
  };

  console.log("My name is " + person.name + ". I'm " + person.age + " and my favorite color is " + person.favoriteColor + ".");

  person.hobby = "painting";

console.log(person);

let books = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", pages: 310 },
    { title: "1984", author: "George Orwell", pages: 328 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281 }
  ];
  
  for (let i = 0; i < books.length; i++) {
    let book = books[i];
    console.log(`${book.title} by ${book.author} - ${book.pages} pages`);
  }

  
  for (let i = 0; i < books.length; i++) {
    if (books[i].isFavorite) {
      console.log(`${books[i].title} by ${books[i].author} - ${books[i].pages} pages`);
    }
  }
  
  function describePerson(person) {
    return `${person.name} is ${person.age} years old and loves ${person.hobby}.`;
  }
  
  let anotherPerson = {
    name: "Jane",
    age: 25,
    hobby: "painting"
};

console.log(describePerson(anotherPerson));
  