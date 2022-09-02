import { AbsoluteButton, Container } from "./styles";
import { RiAddFill } from 'react-icons/ri';
import { useState } from "react";
import { CreateVehicleModal } from "../CreateVehicleModal";

export function Header () {
    const [open, setOpen] = useState(false);
    
    const toggleModal = () => {
        setOpen(!open);
    }

    return (
        <>
        <CreateVehicleModal 
            open={open}
            closeModal={toggleModal} 
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