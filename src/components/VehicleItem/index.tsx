import { AbsoluteButton, Container, GeneralContainer, MainText, ModelContainer, SecondaryText } from "./styles";
import { AiFillCar } from 'react-icons/ai';

export function VehicleItem () {
    return (
        <Container>
            <AiFillCar size={20}/>
                <ModelContainer>
                    <MainText>
                        FOX
                    </MainText>
                    <SecondaryText>
                        2011
                    </SecondaryText>
                </ModelContainer>
                <GeneralContainer>
                    VOLKSWAGEN
                </GeneralContainer>
                <GeneralContainer>
                    KGH7E16
                </GeneralContainer>
                <GeneralContainer>
                    09093182884172737
                </GeneralContainer>
                <GeneralContainer>
                    00225184567
                </GeneralContainer>
                <GeneralContainer>
                    VOLKSWAGEN
                </GeneralContainer>
        </Container>
    )
}