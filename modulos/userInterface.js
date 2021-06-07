export default function InterfazDeUsuario() { }

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

    target.parentElement.parentElement.remove();
    const elementId = parseInt(target.parentElement.parentElement.children[0].id, 10)
    const newArray = contactsDirectory.filter(({ id }) => id !== elementId)
    localStorage.setItem('contacts', JSON.stringify(newArray));
}


// 
class UI {

    clearFields = function () {
        document.getElementById('contactName').value = '';
        document.getElementById('contactEmail').value = '';
        document.getElementById('contactNumber').value = '';
    };
}

const iu = new UI()

iu.clearFields()