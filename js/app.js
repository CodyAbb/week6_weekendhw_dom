document.addEventListener('DOMContentLoaded', () => {
  console.log('javascript loaded');

  const submitForm = document.querySelector('#form');
  submitForm.addEventListener('submit', handleSubmitForm);

  const deleteAll = document.querySelector('#delete-all-button');
  deleteAll.addEventListener('click', handleDeleteButton);
});

const handleSubmitForm = event => {
  event.preventDefault();

  let title = event.target.title.value;
  let rating = event.target.rating.value;
  let select = event.target.select.value;
  let comments = event.target.comments.value;
  const movieList = document.querySelector('.movie-list');

  const liTitle = document.createElement('li');
  liTitle.textContent = `Title: ${title}`;
  liTitle.classList.add("filmItemDetails");

  const liRating = document.createElement('li');
  liRating.textContent = `${rating} stars out of 5`;
  liRating.classList.add("filmItemDetails");

  const liSelect = document.createElement('li');
  liSelect.textContent = `Snapchot: ${select}`;
  liSelect.classList.add("filmItemDetails");

  const liComments = document.createElement('li');
  liComments.textContent = `Thoughts: ${comments}`;
  liComments.classList.add("filmItemDetails");

  const liFilmItems = document.createElement('li');
  liFilmItems.classList.add("filmItem");

  liFilmItems.appendChild(liTitle);
  liFilmItems.appendChild(liRating);
  liFilmItems.appendChild(liSelect);
  liFilmItems.appendChild(liComments);

  movieList.appendChild(liFilmItems);

  const submitForm = document.querySelector('#form');
  submitForm.reset();
};



const handleDeleteButton = event => {
  const movieList = document.querySelector('.movie-list');
  movieList.innerHTML = '';
};
