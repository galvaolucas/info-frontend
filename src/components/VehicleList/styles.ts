import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 300px;

    display: flex;
    flex-direction: column;

    align-items: center;
    gap: 20px;
`;

export const Tr = styled.tr`

`

export const Infos = styled.table`
    width: 100%;
    display: flex;
    flex-direction: row;

    padding-left: 50px;
    align-items: center;
    justify-content: space-around;
`

export const TitleText = styled.td`
    font-size: 12px;
    font-weight: 800;

    color: var(--gray-600);
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
    background: var(--gray-200);

    :hover {
        transform: scale(1.1);
        transition: 0.3s;
    }

    svg {
        color: var(--info);
    }
`;