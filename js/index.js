// const cardsWrapper = document.querySelector("#cards-wrapper");
// const bookInfoWrapper = document.querySelector("#book-info-wrapper");

// fetch(`https: //www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyAEsL9k8pIYr7HcdjfEbMf-r46C-GlA3ek`)
//     .then(response => response.json())
//     .then(data => renderData(data.items))
//     .catch(err => renderError(err))

// function renderData(data) {
//     data.forEach(item => {
//         cardsWrapper.innerHTML += `<div class="card py-2" style="width: 18rem;">
//         <img src=${item.volumeInfo.imageLinks.smallThumbnail} class="card-img-top card-img-custom" alt="card">
//         <div class="card-body">
//             <h5 class="card-title">${shortenDescription("word", 3, item.volumeInfo.title)}</h5>
//             <h6 class="text-secondary">${item.volumeInfo.authors[0]}</h6>
//             <h6 class="text-secondary">${item.volumeInfo.publishedDate}</h6>
//             <div class="d-flex justify-content-center gap-2 align-items-center mb-1">
//                 <button class="btn btn-warning w-50">Bookmark</button>
//                 <button class="btn btn-primary w-50" onClick='showMore()'>More info</button>
//             </div>
//             <a href=${item.volumeInfo.previewLink} class="btn btn-secondary w-100">Read</a>
//         </div>
//     </div>`
//     });
// }

// function shortenDescription(type, length, str) {
//     if (type === "word") return str.split(" ").slice(0, length).join(" ") + "..."
//     return str.split("").slice(0, length).join("") + "..."
// }

// function showMore() {
//     bookInfoWrapper.classList.remove("d-none");

//     fetch(`https: //www.googleapis.com/books/v1/volumes/8Pr_kLFxciYC`)
//         .then(response => response.json())
//         .then(data => renderItemData(data))
//         .catch(err => renderError(err))

//     function renderItemData(data) {
//         bookInfoWrapper.innerHTML = `<div class="w-50 bg-light p-5 ms-auto h-100 overflow-scroll">
//         <div class="d-flex justify-content-between align-items-center mb-3">
//             <h2 class="fs-2 d-lg-inline-block">${data.volumeInfo.title}</h2>
//             <button class="btn btn-danger" onclick='closeBookInfo()'>close</button>
//         </div>
//         <img src=${data.volumeInfo.imageLinks.thumbnail} alt="book" class="mb-3">

//         <p class="mb-3 text-secondary">${data.volumeInfo.description}</p>
//         <ul class="list-unstyled fs-5 fw-bold">
//             <li class="mb-3">Author: <span class="text-light bg-primary rounded-4 fs-6 p-2 fw-lighter">${data.volumeInfo.authors[0]}</span></li>
//             <li class="mb-3">Published: <span class="text-light bg-primary rounded-4 fs-6 p-2 fw-lighter">${data.volumeInfo.publishedDate}</span></li>
//             <li class="mb-3">Publishers: <span class="text-light bg-primary rounded-4 fs-6 p-2 fw-lighter">${data.volumeInfo.publisher}</span></li>
//             <li class="mb-3">Categories: <span class="text-light bg-primary rounded-4 fs-6 p-2 fw-lighter">${data.volumeInfo.categories[0]}</span></li>
//             <li class="mb-3">Pages Count: <span class="text-light bg-primary rounded-4 fs-6 p-2 fw-lighter">${data.volumeInfo.pageCount}</span></li>
//         </ul>

//     </div>`
//     }
// }

// function closeBookInfo() {
//     bookInfoWrapper.classList.add("d-none");
// }































// const data = fetch('https://www.googleapis.com/books/v1/volumes?q=a');




// data.then((res) => {
//     console.log(res);
//     return res.json()
// }).then((date) => {
//     console.log(data);
// });







// const elBooks = document.querySelector(".books")


// books.forEach((book) => {
//     console.log(book);
//     const newDiv = document.createElement("div")

//     newDiv.className = "col-4"

//     newDiv.innerHTML = `
//                         <div class="card">
//                             <img class="card-img-top" src="..." alt="Card image cap">
//                             <div class="card-body">
//                                 <h5 class="card-title">${books.items.title}</h5>
//                                 <p class="card-text">${books.items.authors}</p>
//                             </div>

//                             <div class="card-body">
//                                 <a href="#" class="card-link">${books.items.selfLink}</a>
//                                 <p class="card-link">${books.items.publishedDate}</p>
//                             </div>
//                         </div>`;

//     elBooks.appendChild(newDiv)
// })


// fetch('https://www.googleapis.com/books/v1/volumes?q=a')
//     .then((res) => {
//         return res.json()
//     })
//     .then((data) => {
//         console.log(data);
//     });



// const searchTerms = 'Harry Potter'; // Qidiruv so'zini yozing
// const maxResults = 40; // Natijalar soni (maksimum 40 ta)
// const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerms}&maxResults=${maxResults}`;

// fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data);
//         // Ma'lumotlar brauzerga chiqariladi
//     })
//     .catch((err) => {
//         console.error(err);
//         // Xatolik haqida xabar chiqariladi
//     });