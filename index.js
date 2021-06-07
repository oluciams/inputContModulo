"use strict";
/*
Titulo Autor ISBN
Usar clases --> 
Usar Modulos
Implementar validaciones *bonus
*/



import InterfazDeUsuario from './modulos/userInterface.js';
import Contact from './modulos/contact.js'

// arreglo contactos 
let contactsDirectory

const data = localStorage.getItem('contacts');

if (!data) {
    contactsDirectory = [];
} else {
    contactsDirectory = JSON.parse(data);
    const ui = new InterfazDeUsuario();
    contactsDirectory.forEach(contact => {
        ui.addContact(contact);
    });
};

function createContact() {
    const name = document.getElementById('contactName').value,
        email = document.getElementById('contactEmail').value,
        phoneNumber = document.getElementById('contactNumber').value

    const ui = new InterfazDeUsuario();

    if (name === '' || email === '' || phoneNumber === '') {
        ui.showAlert();
        return;
    };

    const contact = new Contact(name, email, phoneNumber);
    ui.addContact(contact);
    contactsDirectory.push(contact);

    localStorage.setItem('contacts', JSON.stringify(contactsDirectory))
    ui.showAlert(true);
    ui.clearFields();
};

document.getElementById('saveContact').addEventListener('click', createContact);
                                      //addIventLisener
document.getElementById('contactList').addEventListener('click', (e) => {
    if (e.target.matches('.delete')) {
        const ui = new InterfazDeUsuario();
        ui.deleteContact(e.target);
    }
});