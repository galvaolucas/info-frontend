import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 80px;

    justify-content: space-around;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;

    border-radius: 15px;
    box-shadow: 3px 3px 3px var(--gray-200);
    background-color: white;
    gap: 40px;

    svg {
        position: absolute;
        left: 100px;
        color: var(--info);
    }
`;

export const ModelContainer = styled.div`
    width: 11rem;
    height: 100%;

    margin-left: 55px;
    display: flex;
    flex-direction: column;

    color: var(--gray-900);
    align-items: center;
    justify-content: center;
`;

export const GeneralContainer = styled.div`
    width: 11rem;
    height: 100%;

    display: flex;
    flex-direction: row;

    font-size: 16px;
    font-weight: 400;
    color: var(--gray-900);
    align-items: center;
    justify-content: center;
`;

export const MainText = styled.h1`
    font-size: 18px;
    font-weight: 600;
`

export const SecondaryText = styled.h2`
    font-size: 12px;
    font-weight: 400;
`

export const AbsoluteButton = styled.button`
    width: 180px;
    height: 35px;

    font-size: 16px;
    font-weight: 500;
    
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;    
    gap: 5px;

    color: var(--info);
    background: var(--gray-900);

    :hover {
        transform: scale(1.1);
        transition: 0.3s;
    }

    svg {
        color: var(--info);
    }
`;