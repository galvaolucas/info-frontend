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

    async editVehicle (id: string): Promise<void> {
        try {
            await api.put(`/cars/${id}`).then((response) => {
                return response.data;
            })
        } catch (error) {
            console.log(error);
        }
    }

    async getVehicle (id: string) {
        try {
          const response = await api.get(`cars/${id}`);
          return response.data;
        } catch (err) {
            console.log(err)
        }
    }

}

export const service = new Services();