const axios = require('axios');
const faker = require('faker');


const apiURL = require('../constants/api').process.env.baseURL;
const generateProduct = (i) => {

    faker.seed(i);
    const id = faker.random.uuid();
    faker.seed(i);
    const name = faker.company.companyName();
    faker.seed(i);
    const image = "http://placeimg.com/1024/768/arch?a=" + i;
    faker.seed(i);
    const adress = faker.address.streetAddress()
    faker.seed(i);
    const description = faker.lorem.paragraph();
    faker.seed(i);
    const night_price = faker.random.number() /10;
    
    return {
        id,
        name,
        image,
        adress,
        description,
        night_price,
        currency: '€',
    }
};


let i = 0;
while (i < 6) {
    const product = generateProduct(i);
    console.log("PRODUCT " + product.id + "created", product);
    axios.post( apiURL + 'products/', {
        ...product,
    })
        .then(res => {
            console.log("inserted ", res.data);
        })
        .catch(err => {
            console.log(err.message);
        });
    i++;
}