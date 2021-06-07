import idGenerator from './helpers.js';

export default function Contact(name, email, phoneNumber) {
    this.id = idGenerator(1000, 1)
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
};

// ejemplo clases 

class Contacto {
    constructor(name, email, phoneNumber) {

        id = idGenerator(1000, 1)
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
}