import { AbsoluteButton, Container, Infos, TitleText, Tr } from "./styles";
import { RiAddFill } from 'react-icons/ri';
import { VehicleItem } from "../VehicleItem";

export function VehicleList () {
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
            <VehicleItem

            />
        </Container>
    )
}