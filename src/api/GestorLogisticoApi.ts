import { Driver } from "../types/Driver";
import { GlDashBoard } from "../types/GlDashBoard";
import { Order } from "../types/Order";
import { Truck } from "../types/Truck";
import Api from "./ApiClass";

class GlApi extends Api {
    constructor() {
        super()
    }

    private baseApiPath = super.getBase();

    async getGarage(): Promise<Truck[]> {
        let response;
        response = await fetch(this.baseApiPath + 'garage');
        return response.json();
    }

    async getOrders(): Promise<Order[]> {
        let response;
        response = await fetch(this.baseApiPath + 'orders');
        return response.json();
    }

    async getOrderByID(id: string): Promise<Order> {
        let response;
        response = await fetch(this.baseApiPath + 'orders/' + id);
        return response.json();
    }

    async getDrivers(): Promise<Driver[]> {
        let response;
        response = await fetch(this.baseApiPath + 'drivers');
        return response.json();
    }

    async getGlDashBoard(): Promise<GlDashBoard> {
        let response;
        response = await fetch(this.baseApiPath + 'dashboard');
        return response.json();
    }

}

export default GlApi;