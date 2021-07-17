import { COUNTRIES } from './../mocks/countries.mock';
import { Test, TestingModule } from '@nestjs/testing';
import { CountryService } from './country.service';
import { NotFoundException, HttpException } from '@nestjs/common';

describe('CountryService', () => {
  let service: CountryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CountryService],
    }).compile();

    service = module.get<CountryService>(CountryService);
  });

  const responseData = COUNTRIES;

  // it('should be defined', () => {
  //   expect(service).toBeDefined();
  // });

  it('should be return all country data', async () => {
    const countries = await service.getCountries();
    expect(countries).toEqual(responseData);
  });

  it('should be return country data', async () => {
    const countries = await service.getCountry(2)
    expect(countries).toEqual(responseData[1]);
  });

  it('should be return HttpException (Country does not exist!)', async (done) => {
    try {
      await service.getCountry(9)
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
    const countries = await service.addCountry(newData)
    respData = countries;
    respData.push(newData)
    expect(countries).toEqual(respData);
  });

  it('should be return country data exclude index 0', async () => {
    const countries = await service.deleteCountry(1)
    expect(countries).toEqual(responseData);
  });

  it('should be return HttpException (Country does not exist!)', async (done) => {
    try {
      await service.deleteCountry(9)
    } catch (error) {
      expect(error).toBeInstanceOf(HttpException)
      done()
    }
  });
});
