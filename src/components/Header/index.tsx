import { AbsoluteButton, Container } from "./styles";
import { RiAddFill } from 'react-icons/ri';
import { useEffect, useState } from "react";
import { CreateVehicleModal } from "../CreateVehicleModal";
import { IVehicle } from "../VehicleList/dtos";

interface IHeader {
    reload: () => void;
    editVehicle?: IVehicle;
    isEdit: boolean;
    setIsEdit: (arg: boolean) => void;
}

export function Header ({ reload, editVehicle, isEdit, setIsEdit}: IHeader) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if(isEdit && editVehicle) {
            console.log(isEdit, editVehicle);
            setOpen(true);
        }
    }, [isEdit, editVehicle]);
    
    const toggleModal = () => {
        setOpen(!open);
    }

    return (
        <>
        <CreateVehicleModal 
            open={open}
            closeModal={() => {
                toggleModal();
                setIsEdit(false);
            }}
            reload={reload}
            editVehicle={editVehicle}
            isEdit={isEdit}
        />
        <Container>
            <AbsoluteButton
                onClick={() => {
                    toggleModal();
                }}
            >
                <RiAddFill size={20} />
                Cadastrar Veículo
            </AbsoluteButton>
        </Container></>
    )
}