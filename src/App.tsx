import { Container } from "./styles";
import { AiOutlineHeart, AiOutlineCheck } from 'react-icons/ai';
import computer from '../src/assets/computer.png';
import { useEffect, useState } from "react";
import api from "./services/server";
import { Header } from "./components/Header";
import { VehicleList } from "./components/VehicleList";

interface IVehicle {
    plate: string;
    chassis: string;
    renavam: string;
    model: string;
    brand: string;
    year: number;
}

export function App() {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);

  useEffect(() => {
    getVehicles();
  }, [])

  async function getVehicles() {
    try {
      await api.get('/cars').then((response) => {
        setVehicles(response.data);
      })
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <Header />
      <VehicleList
        vehicles={vehicles}
      />
    </Container>
  );
}