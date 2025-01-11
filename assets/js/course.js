let bookstore = document.getElementById('bookstore');
console.log(bookstore);

let jamoa = document.getElementById('jamoa');
console.log(jamoa);


const books = [
    {
        imgSrc: "https://i.ibb.co/y6T848S/Free-Book-Mockup-4-2.jpg",
        imgAlt: "HSK1 Kitobi",
        title: "HSK1 Kitobi",
        description: "HSK1 uchun tayyorlov kitobi. Boshlang'ich darajadagi bilimlarni mustahkamlash uchun mo'ljallangan.",
        price: "50 000 so'm"
    },
    {
        imgSrc: "https://i.ibb.co/MMzTQjP/hfrvr.jpg",
        imgAlt: "HSK2 Kitobi",
        title: "HSK2 Kitobi",
        description: "HSK2 darajasiga mos keluvchi kitob. O'rta darajadagi grammatikani mustahkamlash.",
        price: "50 000 so'm"
    },
    {
        imgSrc: "https://i.ibb.co/GFPkd73/HSK-3-2.jpg",
        imgAlt: "HSK3 Kitobi",
        title: "HSK3 Kitobi",
        description: "HSK3 darajasidagi talabalar uchun ideal kitob. Qo'shimcha mashqlar bilan.",
        price: "50 000 so'm"
    },
    {
        imgSrc: "https://i.ibb.co/McJrQ1f/book-f-4-3.jpg",
        imgAlt: "HSK4 Kitobi",
        title: "HSK4 Kitobi",
        description: "HSK4 darajasiga tayyorlanish uchun mukammal tanlov. Qiyinchilik darajasi yuqoriroq.",
        price: "50 000 so'm"
    },
    {
        imgSrc: "https://i.ibb.co/WVGxtd9/Free-Books-Mockup-4.jpg",
        imgAlt: "HSK5 Kitobi",
        title: "HSK5 Kitobi",
        description: "HSK5 darajasidagi kitob. Yangi so'zlar va murakkab grammatikani o'z ichiga oladi.",
        price: "50 000 so'm"
    },
    {
        imgSrc: "https://i.ibb.co/R602CZ1/Free-Book-r-Mockup-4.jpg",
        imgAlt: "HSK6 Kitobi",
        title: "HSK6 Kitobi",
        description: "HSK6 darajasiga mos keluvchi kitob. Xitoy tilini mukammal o'zlashtirish uchun.",
        price: "50 000 so'm"
    },
    {
        imgSrc: "https://i.ibb.co/DYWMH0N/HSK-1-DESIGN.jpg",
        imgAlt: "Bolalar Uchun Xitoy Tili",
        title: "Bolalar Uchun Xitoy Tili",
        description: "Bolalar uchun maxsus qiziqarli va interaktiv darsliklar. Yoshi kichik talabalar uchun ideal.",
        price: "50 000 so'm"
    }
];

const teamMembers = [
    { name: "Mr. Dilshod ", image: "assets/images/team3.JPG", alt: "Teacher 1" },
    { name: "Miss Sabina", image: "assets/images/team1.jpeg", alt: "Teacher 2" },
    { name: "Mr. Behruz", image: "assets/images/team2.JPG", alt: "Teacher 3" },
    { name: " Miss Hilola", image: "assets/images/team2.jpeg", alt: "Teacher 4" },
    { name: "Mr. Azamat", image: "assets/images/team4.JPG", alt: "Teacher 5" },
    { name: "Mr. Ulug'bek", image: "assets/images/team1.JPG", alt: "Teacher 6" }
];

bookstore.innerHTML = books.map(book => `
  <div class="item">
    <img src="${book.imgSrc}" style="height: 250px; object-fit: cover;" alt="${book.imgAlt}">
    <div class="down-content">
      <h4>${book.title}</h4>
      <p class="p-4">${book.description}</p>
      <div class="info">
        <span>Narxi: ${book.price}</span>
      </div>
    </div>
  </div>
`).join('');

teamMembers.map(member => {
    const teamItem = `
        <div class="item">
            <img src="${member.image}" alt="${member.alt}">
            <div class="down-content">
                <h4>${member.name}</h4>
            </div>
        </div>
    `;
    jamoa.innerHTML += teamItem;
});


