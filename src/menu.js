const menu = () => {
  const content = document.querySelector('.content');

  /* main content */
  const mainfieldContainer = document.createElement('div');
  mainfieldContainer.classList.add('mainfieldcontainer');
  content.appendChild(mainfieldContainer);

  const mainField = document.createElement('div');
  mainField.classList.add('mainfield');
  mainfieldContainer.appendChild(mainField);

  /* recipe1 */
  const recipeCard1 = document.createElement('div');
  recipeCard1.classList.add('card');
  mainField.appendChild(recipeCard1);

  const recipeTitle1 = document.createElement('div');
  recipeTitle1.classList.add('title');
  recipeTitle1.textContent = "Canary - $7.36";
  recipeCard1.appendChild(recipeTitle1);

  const recipeText1 = document.createElement('div');
  recipeText1.classList.add('text');
  recipeText1.textContent = "Fresh slices of banana with Nutella";
  recipeCard1.appendChild(recipeText1);

  /* recipe2 */
  const recipeCard2 = document.createElement('div');
  recipeCard2.classList.add('card');
  mainField.appendChild(recipeCard2);

  const recipeTitle2 = document.createElement('div');
  recipeTitle2.classList.add('title');
  recipeTitle2.textContent = "Razz Dream - $9.99";
  recipeCard2.appendChild(recipeTitle2);

  const recipeText2 = document.createElement('div');
  recipeText2.classList.add('text');
  recipeText2.textContent = "Raspberries, cream cheese, razz drizzle topped with ABC'auce";
  recipeCard2.appendChild(recipeText2);

  /* recipe3 */
  const recipeCard3 = document.createElement('div');
  recipeCard3.classList.add('card');
  mainField.appendChild(recipeCard3);

  const recipeTitle3 = document.createElement('div');
  recipeTitle3.classList.add('title');
  recipeTitle3.textContent = "Last Wednesday - $10.46";
  recipeCard3.appendChild(recipeTitle3);

  const recipeText3 = document.createElement('div');
  recipeText3.classList.add('text');
  recipeText3.textContent = "Egg, bacon, swiss cheese, mushroom, dijon mustard & spinach";
  recipeCard3.appendChild(recipeText3);

  /* recipe4 */
  const recipeCard4 = document.createElement('div');
  recipeCard4.classList.add('card');
  mainField.appendChild(recipeCard4);

  const recipeTitle4 = document.createElement('div');
  recipeTitle4.classList.add('title');
  recipeTitle4.textContent = "Chicken Bacon Ranch - $10.46";
  recipeCard4.appendChild(recipeTitle4);

  const recipeText4 = document.createElement('div');
  recipeText4.classList.add('text');
  recipeText4.textContent = "Chopped chicken, bacon, sharp cheddar, tomato, spinach, ranch";
  recipeCard4.appendChild(recipeText4);

  /* recipe5 */
  const recipeCard5 = document.createElement('div');
  recipeCard5.classList.add('card');
  mainField.appendChild(recipeCard5);

  const recipeTitle5 = document.createElement('div');
  recipeTitle5.classList.add('title');
  recipeTitle5.textContent = "Bacon Cheeseburger - $5.55";
  recipeCard5.appendChild(recipeTitle5);

  const recipeText5 = document.createElement('div');
  recipeText5.classList.add('text');
  recipeText5.textContent = "Beef, cheddar cheese, avocado, ranch sauce";
  recipeCard5.appendChild(recipeText5);

  /* recipe6 */
  const recipeCard6 = document.createElement('div');
  recipeCard6.classList.add('card');
  mainField.appendChild(recipeCard6);

  const recipeTitle6 = document.createElement('div');
  recipeTitle6.classList.add('title');
  recipeTitle6.textContent = "Chipotle Veggie Burger - $5.55";
  recipeCard6.appendChild(recipeTitle6);

  const recipeText6 = document.createElement('div');
  recipeText6.classList.add('text');
  recipeText6.textContent = "Veggie patty, avocado, pickled red onions, tomato, chipotle aioli";
  recipeCard6.appendChild(recipeText6);

  /* recipe7 */
  const recipeCard7 = document.createElement('div');
  recipeCard7.classList.add('card');
  mainField.appendChild(recipeCard7);

  const recipeTitle7 = document.createElement('div');
  recipeTitle7.classList.add('title');
  recipeTitle7.textContent = "Strawberry Short Crepe - $10.46";
  recipeCard7.appendChild(recipeTitle7);

  const recipeText7 = document.createElement('div');
  recipeText7.classList.add('text');
  recipeText7.textContent = "Angel food cake, strawberries, ABC'ause & graham crackers";
  recipeCard7.appendChild(recipeText7);

  /* recipe8 */
  const recipeCard8 = document.createElement('div');
  recipeCard8.classList.add('card');
  mainField.appendChild(recipeCard8);

  const recipeTitle8 = document.createElement('div');
  recipeTitle8.classList.add('title');
  recipeTitle8.textContent = "Crepe Pizza - $9.99";
  recipeCard8.appendChild(recipeTitle8);

  const recipeText8 = document.createElement('div');
  recipeText8.classList.add('text');
  recipeText8.textContent = "Mozzarella, pepperoni, marinara & additional 2 ingredients of your choice";
  recipeCard8.appendChild(recipeText8);
}

export {menu};