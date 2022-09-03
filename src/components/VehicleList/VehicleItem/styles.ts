import styled from 'styled-components';
import global from '../../../styles/responsive';

export const Container = styled.div`
    width: 100%;
    height: 100px;

    justify-content: space-around;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;

    border-radius: 15px;
    box-shadow: 3px 3px 3px var(--gray-600);
    background-color: white;

    @media(max-width: ${global.responsive.medium.width.value}${global.responsive
    .medium.width.unit}) {
        flex-direction: column;
        gap: 15px;
        align-items: center;
        width: calc(100vw - 55%);
        height: 400px;
    }
`;

export const ModelContainer = styled.div`
    width: 13rem;
    height: 60px;

    gap: 10px;
    margin-left: 55px;
    display: flex;
    flex-direction: column;

    color: var(--gray-900);
    align-items: center;
    justify-content: center;

    @media(max-width: ${global.responsive.medium.width.value}${global.responsive
    .medium.width.unit}) {
        margin-left: 0px;
    }
`;

export const GeneralContainer = styled.div`
    width: 11rem;
    height: 60px;

    display: flex;
    flex-direction: column;
    gap: 10px;

    font-size: 16px;
    font-weight: 400;
    color: var(--gray-900);
    align-items: center;
    justify-content: start;
`;

export const IconsContainer = styled.div`
    height: 100%;

    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: center;
    gap: 30px;
    transition: 0.3s;

    svg {
        color: var(--info);
        cursor: pointer;

        :hover {
            transform: scale(1.2);
        }
    }
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

export const Infos = styled.table`
    width: 100%;
    display: flex;
    flex-direction: row;

    padding-left: 50px;
    align-items: center;
    justify-content: space-around;
`

export const TitleText = styled.h1`
    font-size: 12px;
    font-weight: 800;

    color: var(--gray-600);
`
export const DataContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`;
