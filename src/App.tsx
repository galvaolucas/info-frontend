import { AbsoluteButton, Button, Container, Description, DiscountPrice, ImageContainer, Informations, InternalContainer, OriginalPrice, OutterContainer, Step, TextBlack, TextGray } from "./styles";
import { AiOutlineHeart, AiOutlineCheck } from 'react-icons/ai';
import computer from '../src/assets/computer.png';
import { useEffect, useState } from "react";
import api from "./services/server";
import { Header } from "./components/Header";
import { VehicleList } from "./components/VehicleList";

export function App() {
  const [addedProduct, setAddedProduct] = useState(false);
  const [maxSteps, setMaxSteps] = useState(0);
  const [steps, setSteps] = useState(0);
  const [wishlist, setWishlist] = useState(false);
  const [products, setProducts] = useState<IProducts[]>();


  // async function getProducts() {
  //   try {
  //     await api.get('/products').then((response) => {
  //       setProducts(response.data);
  //     })
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  return (
    <Container>
      <Header />
      <VehicleList />
    </Container>
  );
}