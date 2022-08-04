import { AbsoluteButton, Button, Container, Description, DiscountPrice, ImageContainer, Informations, InternalContainer, OriginalPrice, OutterContainer, Step, TextBlack, TextGray } from "./styles";
import { AiOutlineHeart, AiOutlineCheck } from 'react-icons/ai';
import computer from '../src/assets/computer.png';
import { GlobalStyle } from "./styles/global";
import { useEffect, useState } from "react";
import api from "./services/server";

export function App() {
  const [addedProduct, setAddedProduct] = useState(false);
  const [maxSteps, setMaxSteps] = useState(0);
  const [steps, setSteps] = useState(0);
  const [wishlist, setWishlist] = useState(false);
  const [products, setProducts] = useState<IProducts[]>();

  const toggleAddedProduct = () => {
    setAddedProduct(!addedProduct);
  }

  const toggleWishlist = () => {
    setWishlist(!wishlist);
  }

  const toggleSteps = () => {
    setSteps((prevState) => prevState + 1);
  }

  useEffect(() => {
    if(products) {
      setMaxSteps(products.length);
    }
  }, [products])

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if(maxSteps === steps) {
      setSteps(0);
    }
  }, [steps])

  async function getProducts() {
    try {
      await api.get('/products').then((response) => {
        setProducts(response.data);
      })
    } catch (err) {
      console.log(err);
    }
  }

  const currency = function(number: number){
    return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2}).format(number);
  };

  return (
    <div className="App">
      <OutterContainer>
        <Container>
            {
              products && products.map((product, index) => {
                if (index === steps)
                return (
                  <InternalContainer>
                    <ImageContainer>
                      <AbsoluteButton
                        wishlist={wishlist}
                        onClick={() => {
                          toggleWishlist();
                        }}
                      >
                        <AiOutlineHeart size={26}/>
                      </AbsoluteButton>
                      <img src={computer} alt='computer'/>
                    </ImageContainer>
                    <Description>
                      {product.description}
                    </Description>
                    <OriginalPrice>
                      {currency(product.price)}
                    </OriginalPrice>
                    <DiscountPrice>
                      {currency(product.discount)}
                    </DiscountPrice>
                    <Informations>
                      <TextGray>
                        em até&nbsp;
                      </TextGray>
                      <TextBlack>
                        {product.parcel}x&nbsp; 
                      </TextBlack>
                      <TextGray>
                        de&nbsp;
                      </TextGray>
                      <TextBlack>
                        {currency(product.parcel_price)}&nbsp; 
                      </TextBlack>
                      <TextGray>
                        sem juros
                      </TextGray>
                    </Informations>
                    {<Button
                      addedProduct={addedProduct}
                      onClick={() => {
                        toggleAddedProduct();
                      }}
                    > 
                      {addedProduct ? <AiOutlineCheck size={20}/> : null}
                      {addedProduct ? "ADICIONADO" : "ADICIONAR"}
                    </Button>
                    }
                </InternalContainer>
                )
              })
            }
        </Container>
      </OutterContainer>
      <Step>
        <Button
          onClick={() => {
            toggleSteps();
          }}
        >
          PRÓXIMO PRODUTO
        </Button>
      </Step>
      <GlobalStyle />
    </div>
  );
}