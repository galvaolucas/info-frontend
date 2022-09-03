import { Container } from "./styles";
import { AiOutlineHeart, AiOutlineCheck } from 'react-icons/ai';
import computer from '../src/assets/computer.png';
import { useEffect, useState } from "react";
import api from "./services/server";
import { Header } from "./components/Header";
import { VehicleList } from "./components/VehicleList";
import { service } from "./services/service";

interface IVehicle {
    id: string;
    plate: string;
    chassis: string;
    renavam: string;
    model: string;
    brand: string;
    year: number;
}

export function App() {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [edit, setIsEdit] = useState(false);
  const [editVehicle, setIsEditVehicle] = useState<IVehicle>();
  const [editVehicleId, setEditVehicleId] = useState<string>();

  useEffect(() => {
    getVehicles();
  }, [])

  useEffect(() => {
    if(editVehicleId) {
      getVehicle(editVehicleId);
    }
  }, [editVehicleId])

  async function getVehicle (id: string) {
    const edit = await service.getVehicle(id);
    setIsEditVehicle(edit);
  }

  async function getVehicles () {
    const cars = await service.getVehicles();
    cars && setVehicles(cars);
  }

  return (
    <Container>
      <Header
        isEdit={edit}
        editVehicle={editVehicle} 
        reload={getVehicles}
        setIsEdit={setIsEdit}
      />
      <VehicleList
        vehicles={vehicles}
        reload={getVehicles}
        setIsEdit={setIsEdit}
        setEditVehicleId={setEditVehicleId}
      />
    </Container>
  );
}