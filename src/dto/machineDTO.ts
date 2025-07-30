export interface inventoryMachineDTO {
    id: Number;
    asset: string;
    serial: string;
    type: string;
    model: string;
    manufacturer: string;
    sgh_status: string;
    hostname: string;
    observation: string;
}

export interface ProductionMachineDTO {
    id: Number;
    local: string;
    workingStation:string;
    cell:string;
    category:string;
    asset: string;
    serial: string;
    sgh_status: string;
    hostname: string;
}

export interface SghMachineDTO{
    id: number;
    asset: string;
    serial: string;
    model: string;
    manufacturer: string;
    cpu: string;
    type: string;
    site: string;
    status: string;
    possession: string;
    operation: string;
}