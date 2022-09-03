import { IVehicle } from "../components/VehicleList/dtos";
import api from "./server";

class Services {
    async deleteVehicle (id: string): Promise<void> {
        try {
            await api.delete(`/cars/${id}`).then((response) => {
                return response.data;
            })
        } catch (error) {
            console.log(error);
        }
    }

    async getVehicles(): Promise<IVehicle[] | undefined> {
        try {
          const response = await api.get('/cars');
          return response.data;
        } catch (err) {
          console.log(err);
        }
      }

    async getVehicle (id: string): Promise<IVehicle | undefined> {
        try {
          const response = await api.get(`/cars/${id}`);
          return response.data;
        } catch (err) {
            console.log(err)
        }
    }

    async updateVehicle (id: string, data: Partial<IVehicle>): Promise<IVehicle | undefined> {
        const body = {
            plate: data.plate,
            chassis: data.chassis,
            renavam: data.renavam,
            model: data.model,
            brand: data.brand,
            year: data.year,
        }

        try {
          const response = await api.put(`/cars/${id}`, body);
          return response.data;
        } catch (err) {
            console.log(err)
        }
    }

}

export const service = new Services();