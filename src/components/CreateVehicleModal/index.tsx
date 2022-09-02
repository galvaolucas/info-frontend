import { useState } from "react";
import { Modal } from "../Modal";
import { Input } from "../Input";
import { IFormData, ModalProps } from "./dtos";
import { FormContainer, InputContainer } from "./styles";

export function CreateVehicleModal ({open, closeModal}: ModalProps) {
    const [data, setData] = useState<IFormData>({
      plate: '',
      chassis: '',
      renavam: '',
      model: '',
      brand: '',
      year: 0,
    });

    

    return (
        <Modal 
            open={open}
            onRequestClose={closeModal}
        >
          <FormContainer>
            <span className='title'>Cadastrar Veículo</span>
            <InputContainer>
              <Input 
                label='Veículo'
                inputName="vehicle"
                value={data.brand || ''}
                handleChange={(event) =>
                  setData((prevState) => ({
                    ...prevState,
                    brand: event,
                  }))
                }
              />
            </InputContainer>

            <InputContainer>
              <Input 
                label='Marca'
                inputName="model"
                value={data.plate || ''}
                handleChange={(event) =>
                  setData((prevState) => ({
                    ...prevState,
                    model: event,
                  }))
                }
              />
            </InputContainer>

            <InputContainer>
              <Input 
                label='Ano'
                inputName="year"
                value={data.plate || ''}
                handleChange={(event) =>
                  setData((prevState) => ({
                    ...prevState,
                    year: event,
                  }))
                }
              />
            </InputContainer>

            <InputContainer>
              <Input 
                label='Placa'
                inputName="plate"
                value={data.plate || ''}
                handleChange={(event) =>
                  setData((prevState) => ({
                    ...prevState,
                    plate: event,
                  }))
                }
              />
            </InputContainer>

            <InputContainer>
              <Input 
                label='Renavam'
                inputName="renavam"
                value={data.plate || ''}
                handleChange={(event) =>
                  setData((prevState) => ({
                    ...prevState,
                    renavam: event,
                  }))
                }
              />
            </InputContainer>

            <InputContainer>
              <Input 
                label='Nº Chassi'
                inputName="chassis"
                value={data.plate || ''}
                handleChange={(event) =>
                  setData((prevState) => ({
                    ...prevState,
                    chassis: event,
                  }))
                }
              />
            </InputContainer>
            
          </FormContainer>
        </Modal >
    )
}