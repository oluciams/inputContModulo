'use strict'
/*
Ejercicio en Clase: 

Book-list
Contact->

Tres inputs para capturar la informacion de 
Nombre apellido tel




Guardar la informacion
Mostrar en pantalla por filas
Funcion de eliminar.


"bonus->" hacer la data permanente (localstorage)

"implementar modal"

"editar la informacion"

1 objetos y prototype
2 clases  //azucar sintactico 

todo:
html ->90%
*/
import name from './modulos/interfaz.js'

import { john, john2 } from './modulos/interfaz.js'

console.log(name, john, john2)
// funcion constructora contacto
function Contact(name, email, phoneNumber) {
    this.id = Math.floor((Math.random() * (1000 - 1 + 1)) + 1);
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
};

// arreglo contactos 
let contactsDirectory

const data = localStorage.getItem('contacts');
// console.log(data)



// 
function InterfazDeUsuario() { }

InterfazDeUsuario.prototype.addContact = function (contact) {
    const list = document.getElementById('contactList');
    const row = document.createElement('tr');
    row.innerHTML = `
    <th id=${contact.id} scope="row">${list.children.length + 1}</th>
    <td>${contact.name}</td>
    <td>${contact.email}</td>
    <td>${contact.phoneNumber}</td>
    <td><i class="fa fa-trash delete"></i></td>`;
    list.appendChild(row);
};

InterfazDeUsuario.prototype.clearFields = function () {
    document.getElementById('contactName').value = '';
    document.getElementById('contactEmail').value = '';
    document.getElementById('contactNumber').value = '';
};


InterfazDeUsuario.prototype.showAlert = function (success) {
    const alert = document.getElementById('alert');
    const message = document.createElement('div');
    message.innerHTML = success ?
        `<div class="alert alert-success d-flex align-items-center" role="alert">
    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
    <div>
     Contacto ha sido guardado exitosamente
    </div>
    </div>`
        :
        `<div class="alert alert-danger d-flex align-items-center" role="alert" id="alertContainer">
    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:">
    <use xlink:href="#exclamation-triangle-fill" />
    </svg>
    <div id="alertMesagge">ERROR No se permiten campos vacios</div>`

    alert.appendChild(message);

    setTimeout(() => {
        document.querySelector('.alert').remove()
    }, 2500);
};

InterfazDeUsuario.prototype.deleteContact = function (target) {

    // borrar el nodo en la interfaz grafica
    target.parentElement.parentElement.remove();

    // arreglo
    const elementId = parseInt(target.parentElement.parentElement.children[0].id, 10)
    const newArray = contactsDirectory.filter(({ id }) => id !== elementId)
    localStorage.setItem('contacts', JSON.stringify(newArray));
}

if (!data) {
    contactsDirectory = [];
} else {
    contactsDirectory = JSON.parse(data);

    const ui = new InterfazDeUsuario()
    contactsDirectory.forEach(element => {

        ui.addContact(element)
    });
}

//funcion del listener del button
function createContact() {
    const name = document.getElementById('contactName').value,
        email = document.getElementById('contactEmail').value,
        phoneNumber = document.getElementById('contactNumber').value

    const ui = new InterfazDeUsuario()

    if (name === '' || email === '' || phoneNumber === '') {
        ui.showAlert();
        return
    }


    const contact = new Contact(name, email, phoneNumber);
    ui.addContact(contact);
    contactsDirectory.push(contact);


    // guardar en el localStorage
    localStorage.setItem('contacts', JSON.stringify(contactsDirectory))
    ui.showAlert(true);
    ui.clearFields();


}

document.getElementById('saveContact').addEventListener('click', createContact);

document.getElementById('contactList').addEventListener('click', (e) => {
    if (e.target.matches('.delete')) {
        const ui = new InterfazDeUsuario();
        ui.deleteContact(e.target);
    }
})






const objeto = {
    name: 'pepe',
    age: 10
}

