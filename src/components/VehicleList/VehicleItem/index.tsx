import { Container, DataContainer, GeneralContainer, IconsContainer, Infos, MainText, ModelContainer, SecondaryText, TitleText } from "./styles";
import { AiFillCar } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi'
import { BsTrash } from 'react-icons/bs';
import { IVehicle } from "../dtos";
import { service } from "../../../services/service";
import { showToast } from "../../Toast";
import { toast, ToastContainer } from "react-toastify";
import { Fragment} from 'react';

interface IVehicleItemProps {
    vehicle: IVehicle;
    reload: () => void;
    setIsEdit: (arg: boolean) => void;
    setEditVehicleId: (id: string) => void;
}

export function VehicleItem ({vehicle, reload, setIsEdit, setEditVehicleId}: IVehicleItemProps) {
    
    
    async function deleteVehicle (id: string) {
        try {
            await service.deleteVehicle(id);
            showToast({
                type: 'success',
                message: 'Veículo deletado com successo!'
            })
            reload();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Fragment>
             <Container>
            <IconsContainer>
                <AiFillCar size={20}/>
            </IconsContainer>
                
            <ModelContainer>
                <TitleText>VEÍCULO</TitleText>
                <DataContainer>
                    <MainText>
                        {vehicle.brand}
                    </MainText>
                    <SecondaryText>
                        {vehicle.year}
                    </SecondaryText>
                </DataContainer>
            </ModelContainer>
            
            <GeneralContainer>
                <TitleText>MARCA/MODELO</TitleText>
                <DataContainer>
                    {vehicle.model}
                </DataContainer>
            </GeneralContainer>

            <GeneralContainer>
                <TitleText>PLACA</TitleText>
                <DataContainer>
                    {vehicle.plate}
                </DataContainer>
            </GeneralContainer>

            <GeneralContainer>
                <TitleText>Nº CHASSI</TitleText>
                <DataContainer>
                    {vehicle.chassis}
                </DataContainer>
            </GeneralContainer>

            <GeneralContainer>
            <TitleText>RENAVAM</TitleText>
            <DataContainer>
                {vehicle.renavam}
            </DataContainer>
            </GeneralContainer>

            <IconsContainer>
                <BiEditAlt 
                    size={20}
                    onClick={() => {
                       setIsEdit(true);
                       setEditVehicleId(vehicle.id);
                    }}
                />
                <BsTrash 
                    size={20}
                    onClick={async () => {
                        deleteVehicle(vehicle.id);
                    }}
                />
            </IconsContainer>
        </Container>
        <ToastContainer position="top-right" newestOnTop/>
        </Fragment>

       
    )
}