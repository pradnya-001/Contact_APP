import contacts from "./contacts.js";
let mainElement = document.getElementById('contacts-container')

contacts.forEach((contact) =>{
    // console.log(`Name: ${contact.name}`);
    // console.log(`Mobile: ${contact.mobile}`);
    // console.log(`Email: ${contact.email}`);
    // console.log(`Photo: ${contact.photo}`);
    // console.log('-------------------'); 
 let divElement = document.createElement('div');
 divElement.setAttribute('class', 'contact-card');

divElement.innerHTML =  `<img src=${contact.photo} alt="avatar" />
        <div class="contact-info">
          <h2>${contact.name}</h2>
          <p></p>📞${contact.mobile}
          <p>✉️ ${contact.email}</p>
        </div>`



 mainElement.appendChild(divElement);

//  console.log(contact.name)
//  console.log(contact.mobile)
//  console.log(contact.email)
//  console.log(contact.photo)


} ) 