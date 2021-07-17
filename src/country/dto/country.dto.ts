export class CreateCountryDTO {
    id: number;
    name: string;
    region: string;
    capital: string;
    currencies: currencyDTO[]
}

export class currencyDTO {
    code: string;
    name: string;
    symbol: string;
}