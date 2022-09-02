import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100px;

`;

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
    background: white;
    border: 1px solid var(--info);

    :hover {
        transform: scale(1.1);
        transition: 0.3s;
    }

    svg {
        color: var(--info);
    }
`;