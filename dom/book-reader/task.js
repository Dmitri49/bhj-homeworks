const fontSize = Array.from(document.querySelectorAll('.font-size'));
const book = document.getElementById('book');

fontSize.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();

        fontSize.forEach((elem) => {elem.classList.remove('font-size_active')});
        item.classList.add('font-size_active');

        const selectSize = item.dataset.size;
    
        if (selectSize === 'small') {
            if (book.classList.contains('book_fs-big')) {
                book.classList.remove('book_fs-big');
            }
            book.classList.add('book_fs-small');
        } else if (selectSize === 'big') {
            if (book.classList.contains('book_fs-small')) {
                book.classList.remove('book_fs-small');
            }
            book.classList.add('book_fs-big');
        } else {
            if (book.classList.contains('book_fs-big')) {
                book.classList.remove('book_fs-big');
            }
            if (book.classList.contains('book_fs-small')) {
                book.classList.remove('book_fs-small');
            };
        };
    });
})