const home = () => {
  const content = document.querySelector('.content');

  /* main content */
  const mainfieldContainer = document.createElement('div');
  mainfieldContainer.classList.add('mainfieldcontainer');
  content.appendChild(mainfieldContainer);

  const mainField = document.createElement('div');
  mainField.classList.add('mainfield');
  mainfieldContainer.appendChild(mainField);

  /* review card */
  const reviewCard = document.createElement('div');
  reviewCard.classList.add('card');
  mainField.appendChild(reviewCard);

  const reviewText = document.createElement('div');
  reviewText.classList.add('text');
  reviewText.textContent = "'I've had a splendid time dining at this very real restaurant.";
  reviewCard.appendChild(reviewText);

  const reviewText2 = document.createElement('div');
  reviewText2.classList.add('text');
  reviewText2.textContent = "Duesy is the best restaurant owner!'";
  reviewCard.appendChild(reviewText2);

  const reviewPerson = document.createElement('div');
  reviewPerson.classList.add('title');
  reviewPerson.textContent = "Suzy - A customer who is very real as well.";
  reviewCard.appendChild(reviewPerson);

  /* working hours card */
  const timeCard = document.createElement('div');
  timeCard.classList.add('card');
  mainField.appendChild(timeCard);
  const timeTitle = document.createElement('div');
  timeTitle.classList.add('title');
  timeTitle.textContent = "Working hours:";
  timeCard.appendChild(timeTitle);
  const timeText = document.createElement('div');
  timeText.classList.add('text');
  timeText.textContent = 'Monday - Thursday: 6am - 10pm';
  timeCard.appendChild(timeText);
  const timeText2 = document.createElement('div');
  timeText2.classList.add('text');
  timeText2.textContent = 'Friday & Saturday: 6am - 12pm';
  timeCard.appendChild(timeText2);

  /* location */
  const locationCard = document.createElement('div');
  locationCard.classList.add('card');
  mainField.appendChild(locationCard);
  const locTitle = document.createElement('div');
  locTitle.classList.add('title');
  locTitle.textContent = "Location:";
  locationCard.appendChild(locTitle);
  const locText = document.createElement('div');
  locText.classList.add('text');
  locText.textContent = "1234 Somewhere Dr., RealState, Earth 12345";
  locationCard.appendChild(locText);
}

export {home};