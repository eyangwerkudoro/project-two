import { ParkingService } from './../services/parking.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('parking')
export class ParkingController {
    constructor(private parkingService: ParkingService) { }

    @Post('/create/:slotCount')
    async createParking(@Param('slotCount') slotCount) {
        await this.parkingService.createParking(slotCount)
        return `Created parking lot with ${slotCount} ${slotCount > 1 ? `slots` : `slot`}`;
    }

    @Post('add')
    async addParking(@Body() vehicles: any) {
        const parking = await this.parkingService.addParking(vehicles)
        let response = ``
        if (parking.length > 0) {
            vehicles.forEach(e => {
                const slotItem = parking.find(obj => {
                    return obj.vehicle === e;
                });
                response += (slotItem) ? `${slotItem.vehicle} Allocated slot number: ${slotItem.slot+1}\n` : `${e} cannot be park, slot is full\n`;
            });
        } else response = `Parking slot is not available`;
        return response;
    }

    @Post('leave')
    async leaveParking(@Body() vehicles: any) {
        const parking = await this.parkingService.leaveParking(vehicles)
        let response = ''
        if (parking.length > 0) {
            parking.forEach(e => {
                if (e.slot > -1)
                    response += `Registrationnumber ${e.vehicle} with Slot Number ${e.slot+1} is free with Charge (30???)\n`
                else
                    response += `Registrationnumber ${e.vehicle} not found\n`
            });
        } else response = `Parking slot is not available`;
        return response;
    }

    @Get('status')
    async statusParking() {
        const statusParking = await this.parkingService.statusParking()
        let response = 'Slot No. \t\t\tRegistration No.\n';

        if (statusParking.slotData)
            statusParking.slotData.forEach(e => {
                response += (e.status === 1) ? `${e.no+1}\t\t${e.vehicle}\n` : `   ${e.no+1}\t\t\t\t[Available]\n`;
            });
        return response;
    }
}
