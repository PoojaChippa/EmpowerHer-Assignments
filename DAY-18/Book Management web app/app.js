// ======= Firebase Configuration =======

const firebaseConfig = {
  apiKey: "AIzaSyALHYFSbJ2ZUK5tg4VVM6Xal4ERRFuBb4w",
  authDomain: "book-management-web-app-a602a.firebaseapp.com",
  projectId: "book-management-web-app-a602a",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const booksRef = db.collection("books"); // Firestore collection: "books"

// ====== DOM Elements ======
const bookForm = document.getElementById("bookForm");
const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const priceInput = document.getElementById("priceInput");
const imageInput = document.getElementById("imageInput");
const booksGrid = document.getElementById("booksGrid");

// ====== Render Books (cards 3 per row) ======

function renderBooks(books) {
  booksGrid.innerHTML = "";

  books.forEach((book) => {
    const card = document.createElement("div");
    card.className = "book-card";

    const img = document.createElement("img");
    img.src = book.coverImageURL;
    img.alt = book.title;
    img.onerror = () => {
      img.src = "https://via.placeholder.com/150x150?text=No+Image";
    };

    const titleEl = document.createElement("div");
    titleEl.className = "book-title";
    titleEl.textContent = book.title;

    const authorEl = document.createElement("div");
    authorEl.className = "book-author";
    authorEl.textContent = "Author: " + book.author;

    const priceEl = document.createElement("div");
    priceEl.className = "book-price";
    priceEl.textContent = "Price: ₹" + book.price;

    const btnContainer = document.createElement("div");
    btnContainer.className = "card-buttons";

    // Update Author button
    const updateBtn = document.createElement("button");
    updateBtn.className = "btn-update";
    updateBtn.textContent = "Update Author";
    updateBtn.onclick = () => updateAuthor(book.id, book.author);

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn-delete";
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteBook(book.id);

    // View Details button
    const viewBtn = document.createElement("button");
    viewBtn.className = "btn-view";
    viewBtn.textContent = "View Details";
    viewBtn.onclick = () => {
      alert(
        "Title: " +
          book.title +
          "\nAuthor: " +
          book.author +
          "\nPrice: ₹" +
          book.price +
          "\nImage URL: " +
          book.coverImageURL
      );
    };

    btnContainer.appendChild(updateBtn);
    btnContainer.appendChild(deleteBtn);
    btnContainer.appendChild(viewBtn);

    card.appendChild(img);
    card.appendChild(titleEl);
    card.appendChild(authorEl);
    card.appendChild(priceEl);
    card.appendChild(btnContainer);

    booksGrid.appendChild(card);
  });
}

// ====== Realtime Listener (Read) ======

booksRef.orderBy("title").onSnapshot((snapshot) => {
  const books = [];
  snapshot.forEach((doc) => {
    books.push({ id: doc.id, ...doc.data() });
  });
  renderBooks(books);
});

// ====== Create (Add Book) ======

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const price = Number(priceInput.value);
  const coverImageURL = imageInput.value.trim();

  if (!title || !author || !coverImageURL || isNaN(price)) {
    alert("Please fill all fields correctly.");
    return;
  }

  booksRef
    .add({ title, author, price, coverImageURL })
    .then(() => {
      bookForm.reset();
    })
    .catch((err) => {
      console.error("Error adding book:", err);
    });
});

// ====== Update Author ======

function updateAuthor(id, currentAuthor) {
  const newAuthor = prompt("Enter new author name:", currentAuthor);
  if (newAuthor === null) return; // cancelled

  const trimmed = newAuthor.trim();
  if (!trimmed) {
    alert("Author name cannot be empty");
    return;
  }

  booksRef
    .doc(id)
    .update({ author: trimmed })
    .catch((err) => {
      console.error("Error updating author:", err);
    });
}

// ====== Delete Book ======

function deleteBook(id) {
  if (!confirm("Delete this book?")) return;

  booksRef
    .doc(id)
    .delete()
    .catch((err) => {
      console.error("Error deleting book:", err);
    });
}
