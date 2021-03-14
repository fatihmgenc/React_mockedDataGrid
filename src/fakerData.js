import { address, random } from 'faker';

export function createFakeData(amount) {
    var faker = require('faker');
    var randomCard = [];
    randomCard.push(faker.helpers.createCard()); // random contact card containing many properties
    for (let i = 0; i < amount - 1; i++) {
        randomCard.push(faker.helpers.createCard())
    }
    randomCard.forEach(c => { c.address = c.address.city })
    console.log(randomCard)
    return randomCard;
}
