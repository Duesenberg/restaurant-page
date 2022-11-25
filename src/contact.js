const contact = () => {
  const content = document.querySelector('.content');

  /* main content */
  const mainfieldContainer = document.createElement('div');
  mainfieldContainer.classList.add('mainfieldcontainer');
  content.appendChild(mainfieldContainer);

  const mainField = document.createElement('div');
  mainField.classList.add('mainfield');
  mainfieldContainer.appendChild(mainField);

    /* contact 1 */
  const contactNo1 = document.createElement('div');
  contactNo1.classList.add('card');
  mainField.appendChild(contactNo1);

  const mrduesy = document.createElement('div');
  mrduesy.classList.add('title');
  mrduesy.textContent = 'Mr. Duesy - Owner';
  contactNo1.appendChild(mrduesy);

  const mrduesyInfo = document.createElement('div');
  mrduesyInfo.classList.add('text');
  mrduesyInfo.textContent = 'Phone: 123-456-789';
  contactNo1.appendChild(mrduesyInfo);

  const mrduesyInfo2 = document.createElement('div');
  mrduesyInfo2.classList.add('text');
  mrduesyInfo2.textContent = 'E-mail: mr_duesy@realmail.com';
  contactNo1.appendChild(mrduesyInfo2);

  /* contact 2 */
  const contactNo2 = document.createElement('div');
  contactNo2.classList.add('card');
  mainField.appendChild(contactNo2);

  const mrsduesy = document.createElement('div');
  mrsduesy.classList.add('title');
  mrsduesy.textContent = 'Mrs. Duesy - Secretary';
  contactNo2.appendChild(mrsduesy);

  const mrsduesyInfo = document.createElement('div');
  mrsduesyInfo.classList.add('text');
  mrsduesyInfo.textContent = 'Phone: 123-456-788';
  contactNo2.appendChild(mrsduesyInfo);

  const mrsduesyInfo2 = document.createElement('div');
  mrsduesyInfo2.classList.add('text');
  mrsduesyInfo.textContent = 'E-mail: mrs_duesy@realmail.com';
  contactNo2.appendChild(mrsduesyInfo2);
  
  /* contact 3 */
  const contactNo3 = document.createElement('div');
  contactNo3.classList.add('card');
  mainField.appendChild(contactNo3);

  const lilduesy = document.createElement('div');
  lilduesy.classList.add('title');
  lilduesy.textContent = 'Duesy Jr. - Cook';
  contactNo3.appendChild(lilduesy);

  const lilduesyInfo = document.createElement('div');
  lilduesyInfo.classList.add('text');
  lilduesyInfo.textContent = 'Phone: 123-456-787s';
  contactNo3.appendChild(lilduesyInfo);
  
  const lilduesyInfo2 = document.createElement('div');
  lilduesyInfo2.classList.add('text');
  lilduesyInfo2.textContent = 'E-mail: jr_duesy@realmail.com';
  contactNo3.appendChild(lilduesyInfo2); 
}

export {contact};