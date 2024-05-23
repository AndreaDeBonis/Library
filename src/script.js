const myLibrary = [];
const bookButton = document.getElementById("addBook")

function Book(title, author, pages, read = false) {
    this.title = title
    this.author = author
    this.pages = pages 
    this.read = read
    this.id =  Math.random().toString(16).slice(2)
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "already read." : "not read yet." } `
    }
}

function addBook(book) {
  myLibrary.push(book)
}

function getTitle () {
  return document.getElementById("title").value
}

function getAuthor () {
  return document.getElementById("author").value
}

function getPages () {
  return document.getElementById("pages").value
}

function createCard (book) {
  const div = document.createElement("div")
  div.setAttribute('data', `${book.id}`)
  const divTitle = document.createElement("div")
  divTitle.className='flex-1'
  const divAuthor = document.createElement("div")
  divAuthor.className='flex-1'
  const divPages = document.createElement("div")
  divPages.className='flex-1'
  const divButtons = document.createElement("div")
  divButtons.className='flex-1 flex justify-end'
  const buttonDelete = document.createElement("button")
  buttonDelete.innerHTML='<i class="material-icons">delete_forever</i>'
  const buttonRead = document.createElement("button")
  buttonRead.innerHTML='<i class="material-icons">book</i>'
  const title = document.createTextNode(`${book.title}`)
  const author = document.createTextNode(`${book.author}`)
  const pages = document.createTextNode(`${book.pages}`)
  /* const buttonDeleteText = document.createTextNode('remove')
  const buttonReadText = document.createTextNode('Read') */
  div.className='rounded-lg border-2 border-transparent hover:border-white w-64 h-72 bg-gray-600 flex flex-col text-2xl p-8'
  divTitle.appendChild(title)
  divAuthor.appendChild(author)
  divPages.appendChild(pages)
  /* buttonDelete.appendChild(buttonDeleteText)
  buttonRead.appendChild(buttonReadText) */

  buttonDelete.className='bg-gray-600 h-8 mx4 rounded-lg hover:bg-red-600 '
  buttonRead.className='bg-gray-600 h-8 mx-4 rounded-lg hover:bg-blue-600 '

  buttonRead.addEventListener("click", function (e) {
    e.preventDefault()
    const id = e.target.parentElement.parentElement.parentElement.getAttribute('data')
    console.log(id)
    const index = myLibrary.map(book => book.id).indexOf(id)

    myLibrary[index].read = !myLibrary[index].read
  })

  buttonDelete.addEventListener("click", function (e) {
    e.preventDefault()
    const id = e.target.parentElement.parentElement.parentElement.getAttribute('data')
    const index = myLibrary.map(book => book.id).indexOf(id)
    myLibrary.splice(index, 1)
    e.target.parentElement.parentElement.parentElement.remove()
  })
  div.appendChild(divTitle)
  div.appendChild(divAuthor)
  div.appendChild(divPages)
  divButtons.appendChild(buttonDelete)
  divButtons.appendChild(buttonRead)
  div.appendChild(divButtons)
  document.getElementById("book-container").appendChild(div)
}

bookButton.addEventListener("click", function (e) {
  e.preventDefault()
  const temp = new Book (getTitle(), getAuthor(), getPages())
  addBook(temp)
  createCard(temp)
} )








/* function Person(name) {
    this.name = name;
  }
  
  Person.prototype.sayName = function() {
    console.log(`Hello, I'm ${this.name}!`);
  };
  
  function Player(name, marker) {
    this.name = name;
    this.marker = marker;
  }
  
  Player.prototype.getMarker = function() {
    console.log(`My marker is '${this.marker}'`);
  };
  
  Object.getPrototypeOf(Player.prototype); // returns Object.prototype
  
  // Now make `Player` objects inherit from `Person`
  Object.setPrototypeOf(Player.prototype, Person.prototype);
  Object.getPrototypeOf(Player.prototype); // returns Person.prototype
  
  const player1 = new Player('steve', 'X');
  const player2 = new Player('also steve', 'O');

  let user = {
    name: "John",
    surname: "Smith",
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    },
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    }
  };
  
  let admin = {
    __proto__: user,
    isAdmin: true
  };
  
  */