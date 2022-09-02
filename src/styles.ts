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

export const OutterContainer = styled.div`
    width: 100vw;
    height: 600px;
    display: flex;
    justify-content: center;
    margin-top: 30px;
`;

export const Step = styled.div`
    width: 100vw;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const InternalContainer = styled.div`
    width: 240px;
    height: 504px;
`;

export const AbsoluteButton = styled.button<ButtonProps>`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    position: absolute;
    margin-left: 200px;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;    

    box-shadow: none;
    border: none;

    background: ${(props) => props.wishlist ? "var(--red-500)" : "var(--gray-200)"};

    :hover {
        background: ${(props) => props.wishlist ? "var(--red-600)" : "var(--pink-100)"};

        svg {
            color: ${(props) => props.wishlist ? "var(--white)" : "var(--red-500)"};
        }
    }

    svg {
        color:  ${(props) => props.wishlist ? "var(--white)" : "var(--gray-900)"};
    }
`;

export const ImageContainer = styled.div`
    width: 240px;
    height: 240px;
`;

export const Description = styled.div`
    width: 240px;
    height: 60px;
    margin-top: 32px;

    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
`;

export const OriginalPrice = styled.s`
    width: 240px;
    height: 20px;
    display: flex;
    justify-content: flex-start;
    margin-top: 24px;

    font-weight: 500;
    font-size: 14px;
    color: var(--gray-600);
    line-height: 20px;
`;

export const DiscountPrice = styled.div`
    width: 240px;
    height: 24px;
    display: flex;
    justify-content: flex-start;
    margin-top: 4px;

    font-weight: 600;
    font-size: 20px;
    color: var(--red-500);
    line-height: 24px;
    letter-spacing: -0.005em;
`;

export const Informations = styled.div`
    width: 240px;
    height: 16px;
    display: flex;
    justify-content: flex-start;
    margin-top: 4px;
`;

export const TextGray = styled.text`
    font-weight: 500;
    font-size: 12px;
    color: var(--gray-700);
    line-height: 16px;
    letter-spacing: -0.005em;
`;

export const TextBlack = styled.text`
    font-weight: 500;
    font-size: 12px;
    color: var(--gray-900);
    line-height: 16px;
    letter-spacing: -0.005em;
`;

export const Button = styled.button<ButtonProps>`
    width: 240px;
    height: 48px;
    margin-top: 32px;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 24px;
    gap: 10px;
    color: ${(props) => props.addedProduct ? "var(--gray-900)" : "var(--white)"};

    box-shadow: none;
    border: none;

    background-color: ${(props) => props.addedProduct ? "var(--green-100)" : "var(--green-400)"};
    border-radius: 5px;
    align-self: stretch;

    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.005em;

    :hover {
        background: var(--green-600);
    }

    svg {
        color: var(--gray-900);
    }
`;


