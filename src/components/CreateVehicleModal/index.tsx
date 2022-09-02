import { useEffect, useState } from "react";
import { Modal } from "../Modal";
import { Input } from "../Input";
import { IFormData, ModalProps } from "./dtos";
import { AbsoluteButton, FormContainer, InputContainer } from "./styles";
import api from "../../services/server";
import { showToast } from "../Toast";

export function CreateVehicleModal ({open, editVehicle, closeModal, reload}: ModalProps) {
    const [data, setData] = useState<IFormData>({
      plate: '',
      chassis: '',
      renavam: '',
      model: '',
      brand: '',
      year: 0,
    });

    useEffect(() => {
      if(editVehicle) {
        setData({
          ...data,
          plate: editVehicle.plate,
          chassis: editVehicle.chassis,
          renavam: editVehicle.renavam,
          model: editVehicle.model,
          brand: editVehicle.brand,
          year: editVehicle.year,
        })
      }
    }, [editVehicle])

    async function createVehicle () {
      const body = {
        plate: data.plate,
        chassis: data.chassis,
        renavam: data.renavam,
        model: data.model,
        brand: data.brand,
        year: data.year,
      }

      try {
        const response = await api.post('/cars', body);
        showToast({
          type: 'success',
          message: 'Veículo Cadastrado com Sucesso!'
        })
        closeModal();
        reload();
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }

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
                label='Marca/Modelo'
                inputName="model"
                value={data.model || ''}
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
                value={data.year || ''}
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
                value={data.renavam || ''}
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
                value={data.chassis || ''}
                handleChange={(event) =>
                  setData((prevState) => ({
                    ...prevState,
                    chassis: event,
                  }))
                }
              />
            </InputContainer>
            
            <AbsoluteButton
              onClick={async () => {
                await createVehicle();
              }}
            >
              Cadastrar
            </AbsoluteButton>

          </FormContainer>
        </Modal >
    )
}