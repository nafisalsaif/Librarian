var library = [
  { title: "Norse Mythology", year: "2017", author: "Neil Gaiman", publisher: "W. W. Norton & Company" },
  { title: "The Old Man and the Sea", year: "1952", author: "Ernest Hemingway", publisher: "Charles Scribner's Sons" },
  { title: "Mythos: A Retelling of the Myths of Ancient Greece", year: "1981", author: "Stephen Fry", publisher: "Penguin" },
  { title: "The Mythical Man-Month", year: "1975", author: "Fred Brooks", publisher: "Addison-Wesley" },
  { title: "The Pragmatic Programmer", year: "1999", author: "Andy Hunt and Dave Thomas", publisher: "The Pragmatic Bookshelf	" },
  {title:"Nineteen Eighty-Four", year:" 1984",author:" George Orwell",publisher:" dystopian"}
  /* Task 2 */
  
];

/* Task 1 */
function getBookTitle( index ){
  //add code
  return library[index].title;
}

console.log(getBookTitle(3));

/* Task 3 */
function addBook( book ){
  //add code
  library.push(book);
  return library;
}

var newBook = {title:"Nineteen ", year:" 1985",author:" George ",publisher:" dystopian"};
console.log(addBook(newBook));


/* Task 4 */
function bookByAuthor(){
  var sn = [];     
   for(var n=0; n<bookByAuthor.length; n++){   
     for(var s=n; a<bookByAuthor.length-1; s++){   
       if(bookByAuthor[s].bookByAuthor<bookByAuthor[s+1].bookByAuthor){   
         sn=bookByAuthor[s];   
         bookByAuthor[s]=bookByAuthor[j+1];   
         bookByAuthor[s+1]=sn;   
       }    
     }    
   }    
    return library;
  
  //add code
}

console.log(bookByAuthor());

/* Task 5 */
function findByTitle( title ){
  var searchedBook = [];
  library.map(function(book){
    if(book.title.toLowerCase().includes(title)){
    searchedBook.push(book);
    }
  });
  return searchedBook;
  //add code
}

console.log(findByTitle("man"));
console.log(findByTitle("myth"));
