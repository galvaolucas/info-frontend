import { AbsoluteButton, Container, GeneralContainer, MainText, ModelContainer, SecondaryText } from "./styles";
import { AiFillCar } from 'react-icons/ai';
import { IVehicle } from "../VehicleList/dtos";

interface IVehicleItemProps {
    vehicle: IVehicle;
}

export function VehicleItem ({vehicle}: IVehicleItemProps) {
    return (
        <Container>
            <AiFillCar size={20}/>
                <ModelContainer>
                    <MainText>
                    {vehicle.brand}
                    </MainText>
                    <SecondaryText>
                    {vehicle.year}
                    </SecondaryText>
                </ModelContainer>
                <GeneralContainer>
                {vehicle.model}
                </GeneralContainer>
                <GeneralContainer>
                {vehicle.plate}
                </GeneralContainer>
                <GeneralContainer>
                {vehicle.chassis}
                </GeneralContainer>
                <GeneralContainer>
                {vehicle.renavam}
                </GeneralContainer>
                <GeneralContainer>
                    
                </GeneralContainer>
        </Container>
    )
}