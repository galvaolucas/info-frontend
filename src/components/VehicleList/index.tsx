import { Container } from "./styles";
import { VehicleItem } from "./VehicleItem";
import { IVehicle } from "./dtos";

interface IVehicleListProps {
    vehicles: IVehicle[];
    reload: () => void;
    setIsEdit: (arg: boolean) => void;
    setEditVehicleId: (arg: string) => void;
}

export function VehicleList ({vehicles, reload, setIsEdit, setEditVehicleId}: IVehicleListProps) {

    return (    
        <Container>
            { vehicles.map((vehicle) => {
                return (
                    <VehicleItem
                        key={vehicle.id}
                        vehicle={vehicle}
                        reload={reload}
                        setIsEdit={setIsEdit}
                        setEditVehicleId={setEditVehicleId}
                    /> 
                )})
            }
        </Container>
    )
}