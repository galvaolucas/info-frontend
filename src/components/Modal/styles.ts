import styled, { css } from "styled-components";

interface BackdropProps {
  open: boolean;
}

interface ContainerProps {
  modalWidth: number;
  inheritOverflow?: boolean;
  noPadding: boolean;
}

export const Backdrop = styled.div<BackdropProps>`
  position: fixed;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: none;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.7);
  background: linear-gradient(
    360deg,
    #161c24 0%,
    rgba(22, 28, 36, 0.48) 91.29%
  );
  transition: visibility 225ms;
  visibility: hidden;
  opacity: 0;

  ${({ open }) =>
    open &&
    css`
      visibility: visible;
      opacity: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    `};
`;

export const Container = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${({ modalWidth }) => modalWidth}px;
  max-height: calc(100% - 64px);
  background: #ffffff;
  border-radius: 10px;
  padding: ${({ noPadding }) => (noPadding ? 0 : 32)}px;
  position: relative;
  overflow-y: auto;

  ${({ inheritOverflow }) =>
    inheritOverflow &&
    css`
      overflow: inherit;
      max-height: unset;
    `};

  @media (max-width: 540px) {
    width: 90vw;
    max-height: calc(100% - 64px);
    overflow-y: auto;
  }
`;

export const CloseBtn = styled.button`
  border: none;
  outline: none;
  background: transparent;
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 1.8rem;
  cursor: pointer;
  color: var(--gray-200);
  transition: color 100ms ease-in-out;
  :hover {
    color: var(--info);
  }
`;

export const BackAction = styled.button`
  border: none;
  outline: none;
  background: transparent;
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 1.8rem;
  cursor: pointer;
  color: var(--gray-200);
  transition: color 100ms ease-in-out;
  :hover {
    color: var(--info);
  }
`

export const Title = styled.div`
  margin-top: 15px;
`;