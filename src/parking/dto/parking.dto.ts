export class Slot {
    slot: SlotItem[]
}

export class SlotItem {
    no: number;
    status: number;
    vehicle: string;
}

export class ParkingDto {
    slotData: Slot
}