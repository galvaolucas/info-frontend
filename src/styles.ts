import styled from 'styled-components';

interface ButtonProps {
    addedProduct?: boolean;
    wishlist?: boolean;
}

export const Container = styled.div`
    width: 100%;
    height: 100%;

    padding: 40px;

    display: flex;
    align-items: center;
    flex-direction: column;
`;

