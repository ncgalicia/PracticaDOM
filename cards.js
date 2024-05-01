const CARDS_CONTAINER = document.getElementById("card-container");

function createUserCard(user) {
    const CARD = document.createElement("div");
    const NAME_SECTION = createSection("h3", user.userName);
    const DECS_SECTION = createSection("p", user.desc);
    const AGE_SECTION = createSection("p", user.age);
    const BOOK_SECTION = createBookList(user.fav_books.books);

    CARD.append(NAME_SECTION, DECS_SECTION, AGE_SECTION, BOOK_SECTION);
    CARDS_CONTAINER.appendChild(CARD);
}

function createSection(tag, text) {
    const section = document.createElement(tag);
    section.textContent = text;
    return section;
}

function createBookList(books) {
    const bookList = document.createElement("ul");
    books.forEach(book => {
        const listItem = document.createElement("li");
        listItem.textContent = book;
        bookList.appendChild(listItem);
    });
    return bookList;
}

const users = [
    {
        id: 1,
        userName: "yarelg",
        desc: "Sobre mí",
        age: 26,
        fav_books: {
            books: ["Angeles y Demonios", "Tu cerebro tiene hambre", "El principito", "Antes de que el café se enfríe", "Muerte en Pekín"],
        },
    },
    {
        id: 2,
        userName: "ngalicia",
        desc: "Sobre mí",
        age: 26,
        fav_books: {
            books: ["Angeles y Demonios", "Tu cerebro tiene hambre", "El principito", "Antes de que el café se enfríe", "Muerte en Pekín"],
        },
    },
   
];

users.forEach(user => createUserCard(user));
