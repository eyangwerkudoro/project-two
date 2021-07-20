import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountryModule } from './country/country.module';
import { ParkingModule } from './parking/parking.module';

@Module({
  imports: [CountryModule, ParkingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
