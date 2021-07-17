import { CountryService } from './../services/country.service';
import { Test, TestingModule } from '@nestjs/testing';
import { CountryController } from './country.controller';
import { COUNTRIES } from '../mocks/countries.mock';
import { HttpException } from '@nestjs/common';

describe('Country Controller', () => {
  let controller: CountryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CountryService],
      controllers: [CountryController],
    }).compile();

    controller = module.get<CountryController>(CountryController);
  });

  const responseData = COUNTRIES;

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be return all country data', async () => {
    const countries = await controller.getCountries();
    expect(countries).toEqual(responseData);
  });

  it('should be return country data', async () => {
    const countries = await controller.getCountry(2)
    expect(countries).toEqual(responseData[1]);
  });

  it('should be return HttpException (Country does not exist!)', async (done) => {
    try {
      await controller.getCountry(9)
    } catch (error) {
      expect(error).toBeInstanceOf(HttpException)
      done()
    }
  });

  it('should be return new country data', async () => {
    const newData = {
      id: 5,
      name: 'South Africa',
      region: 'Africa',
      capital: 'Pretoria',
      currencies: [
        {
          code: 'ZAR',
          name: 'South African rand',
          symbol: 'R'
        }
      ]
    }
    let respData = []
    const countries = await controller.addCountry(newData)
    respData = countries;
    respData.push(newData)
    expect(countries).toEqual(respData);
  });

  it('should be return country data exclude index 0', async () => {
    const queryVar = {
      countryId:2
    }
    const countries = await controller.deleteCountry(queryVar)
    expect(countries).toEqual(responseData);
  });

  it('should be return HttpException (Country does not exist!)', async (done) => {
    try {
      const queryVar = {
        countryId: 99
      }
      await controller.deleteCountry(queryVar)
    } catch (error) {
      expect(error).toBeInstanceOf(HttpException)
      done()
    }
  });
});
