export class Phone {

    id: number = require('crypto').randomBytes(12).toString('hex');

    price: string;
    priceSup: string;
    oldPrice: string;
    promotion: string;
    description: string;
    parcela: string;
    parcelaSup: string;
    image: string;

    constructor(phone: any, image: any) {
        this.price = stringLocale(phone.price)
            .split(',')[0];

        this.priceSup = stringLocale(phone.price)
            .split(',')[1];

        this.oldPrice = stringLocale(phone.oldprice);

        this.promotion = getPromotion(phone.oldprice, phone.price);

        this.description = phone.description;

        this.parcela = getParcelas(phone.price)
            .split(',')[0];

        this.parcelaSup = getParcelas(phone.price)
            .split(',')[1];

        this.image = image;
    }

}

const formato = { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' };

function stringLocale(string: string) {
    let number = Number(string.replace(',', '.'));
    return (number.toLocaleString('pt-BR', formato));
}

function getPromotion(stringAntigo: string, stringNovo: string) {

    let oldprice = Number(stringAntigo.replace(',', '.'));
    let price = Number(stringNovo.replace(',', '.'));

    let retorno: number = Number(
        ((oldprice - price) * 100) / oldprice);

    if (retorno > 15) {
        return (`${retorno.toFixed(0)}% OFF`);
    } else {
        return ('');
    }

}

function getParcelas(stringPrice: string) {
    let price: number = Number(stringPrice.replace(',', '.'));
    price = price / 10;
    return (stringLocale(price.toString()));
}
