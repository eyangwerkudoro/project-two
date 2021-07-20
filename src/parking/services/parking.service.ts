import { SlotItem, ParkingDto } from './../dto/parking.dto';
import { Injectable, Logger } from '@nestjs/common';
import { PARKING } from '../mocks/parking.mock';

@Injectable()
export class ParkingService {
    parking = PARKING

    createParking(slotCount: any): Promise<any> {
        Logger.log(`create_parking_lot ${slotCount}`)
        return new Promise(resolve => {
            const slotData = []
            for (let a = 0; a < slotCount; a++) {
                const slotItem: SlotItem = {
                    no: a,
                    status: 0,
                    vehicle: ''
                }
                slotData.push(slotItem)
            }
            this.parking = { ...this.parking, slotData }
            resolve(this.parking)
        });
    }

    addParking(vehicles: any): Promise<any> {
        const parkingVehicles = []
        return new Promise(async resolve => {
            Logger.log(`Getting Slot data`)
            const parkingDto: ParkingDto = await this.statusParking();
            if (parkingDto.slotData) {
                const slotDatas: any = parkingDto.slotData;
                Logger.log(`Counting slot available, by status = 0`)
                const availSlot = slotDatas.reduce((slotItem, item) => Object.values(item).some(status => status === 0) ? ++slotItem : slotItem, 0)
                Logger.log(`Got Available slot ${availSlot}`)

                for (let a = 0; a < availSlot; a++) {
                    const selectedIndex = slotDatas.find(obj => {
                        return obj.status === 0;
                    });
                    const addRemoveIdx = slotDatas.indexOf(selectedIndex);

                    slotDatas.splice(addRemoveIdx, 1);
                    const slotItem: SlotItem = { no: addRemoveIdx, status: vehicles[a] ? 1 : 0, vehicle: vehicles[a] || '' }
                    slotDatas.splice(addRemoveIdx, 0, slotItem);

                    const parkingVahicle = {
                        vehicle: `${vehicles[a]}`,
                        slot: addRemoveIdx
                    }
                    parkingVehicles.push(parkingVahicle)
                }
            }
            resolve(parkingVehicles)
        });
    }

    leaveParking(vehicles: any): Promise<any> {
        const leavingVehicles = []
        return new Promise(async resolve => {
            for (let a = 0; a < vehicles.length; a++) {
                const parkingDto: ParkingDto = await this.statusParking();
                if (parkingDto.slotData) {
                    const slotDatas: any = parkingDto.slotData;
                    const selectedIndex = slotDatas.find(obj => {
                        return obj.vehicle === vehicles[a];
                    });
                    const addRemoveIdx = slotDatas.indexOf(selectedIndex);

                    if (addRemoveIdx > -1) {
                        Logger.log(`Remove item by index ${addRemoveIdx}`)
                        slotDatas.splice(addRemoveIdx, 1);

                        Logger.log(`Adding new item in index ${addRemoveIdx}`)
                        const slotItem: SlotItem = {no: addRemoveIdx, status: 0, vehicle: '' }
                        slotDatas.splice(addRemoveIdx, 0, slotItem);
                    }
                    const leavingVehicle = {
                        vehicle: `${vehicles[a]}`,
                        slot: addRemoveIdx
                    }
                    leavingVehicles.push(leavingVehicle)
                }
            }
            resolve(leavingVehicles)
        });
    }

    statusParking(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.parking)
        });
    }
}
