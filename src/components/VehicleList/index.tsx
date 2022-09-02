import { AbsoluteButton, Container, Infos, TitleText, Tr } from "./styles";
import { RiAddFill } from 'react-icons/ri';
import { VehicleItem } from "../VehicleItem";
import { IVehicle } from "./dtos";

interface IVehicleListProps {
    vehicles: IVehicle[];
}

export function VehicleList ({vehicles}: IVehicleListProps) {
    return (
        <Container>
            <Infos>
                <TitleText>
                    VEÍCULO
                </TitleText>

                <TitleText>
                    MARCA
                </TitleText>

                <TitleText>
                    PLACA
                </TitleText>

                <TitleText>
                    CHASSI
                </TitleText>

                <TitleText>
                    RENAVAM
                </TitleText>

                <TitleText>
                    OPÇÕES
                </TitleText>
            </Infos>
            { vehicles.map((vehicle) => {
                return (
                    <VehicleItem
                        vehicle={vehicle}
                    /> 
                )})
            }
        </Container>
    )
}