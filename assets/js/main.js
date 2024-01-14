const dropDownBtn = document.querySelector('.dropdown__button');
const dropDownList = document.querySelector('.dropdown__list');
const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
const dropDownInput = document.querySelector('.dropdown__input-hidden');

dropDownBtn.addEventListener('click', function() {
    dropDownList.classList.toggle('dropdown__list--visible');
    this.classList.add('dropdown__button--active');
});

dropDownListItems.forEach(function(listItem) {
    listItem.addEventListener('click', function(e) {
        e.stopPropagation();
        dropDownBtn.innerText = this.innerText;
        dropDownBtn.focus();
        dropDownInput.value = this.dataset.value;
        dropDownList.classList.remove('dropdown__list--visible');
    });
});

document.addEventListener('click', function(e) {
    if (e.target !== document.querySelector('.dropdown__button')) {
        dropDownBtn.classList.remove('dropdown__button--active');
        dropDownList.classList.remove('dropdown__list--visible');
    }
})

document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab' || e.key === 'Escape') {
        dropDownBtn.classList.remove('dropdown__button--active');
        dropDownList.classList.remove('dropdown__list--visible');
    }
})