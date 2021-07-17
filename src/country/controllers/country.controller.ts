import { CreateCountryDTO } from './../dto/country.dto';
import { CountryService } from './../services/country.service';
import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';

@Controller('countries')
export class CountryController {
    constructor(private countryService: CountryService) { }

    @Get()
    async getCountries() {
        const countries = await this.countryService.getCountries();
        return countries;
    }

    @Get(':countryId')
    async getCountry(@Param('countryId') countryId) {
        const country = await this.countryService.getCountry(countryId);
        return country;
    }

    @Post()
    async addCountry(@Body() createCountryDTO: CreateCountryDTO) {
        const country = await this.countryService.addCountry(createCountryDTO);
        return country;
    }

    @Delete()
    async deleteCountry(@Query() query) {
        const countries = await this.countryService.deleteCountry(query.countryId);
        return countries;
    }
}
