import { ReactNode } from "react";

import ReactDOM from "react-dom";
import { RiArrowLeftLine, RiCloseLine } from "react-icons/ri";

import { Container, Backdrop, CloseBtn, Title, BackAction } from "./styles";

interface ModalProps {
  open: boolean;
  children: ReactNode;
  modalWidth?: number;
  noPadding?: boolean;
  inheritOverflow?: boolean;
  onRequestClose?: () => void;
  title?: ReactNode;
  backAction?: () => void;
}

export function Modal({
  open,
  children,
  modalWidth = 400,
  noPadding = false,
  inheritOverflow,
  onRequestClose,
  title,
  backAction
}: ModalProps) {
  return ReactDOM.createPortal(
    <Backdrop open={open}>
      <Container
        modalWidth={modalWidth}
        inheritOverflow={inheritOverflow}
        noPadding={noPadding}
      >
        {!!backAction && (<BackAction onClick={backAction}><RiArrowLeftLine/></BackAction>)}
        {onRequestClose && (
          <CloseBtn onClick={onRequestClose}>
            <RiCloseLine />
          </CloseBtn>
        )}
        {!!title && <Title>{title}</Title>}
        {children}
      </Container>
    </Backdrop>,
    document.body
  );
}
