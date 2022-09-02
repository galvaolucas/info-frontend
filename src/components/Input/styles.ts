import styled, { css } from "styled-components";

type InputContainerProps = {
  textArea?: boolean;
  focused?: boolean;
  filled: boolean;
  error?: boolean;
  marginOnError?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  seePassword?: boolean;
};

export const Container = styled.div`
  position: relative;
  width: 100%;
  cursor: text;
`;

export const InputContainer = styled.div<InputContainerProps>`
  width: 100%;
  height:  ${({ textArea }) => textArea ? "80px" : "46px"};
  border: 2px solid #989898;
  border-radius: 10px;
  margin-bottom: ${({ error, marginOnError }) =>
    error && marginOnError ? 10 : 0}px;
  transition: all 0.4s ease;
  background: ${({ disabled }) =>
    disabled ? '#EFEFEF' : "var(--white)"};


${({ seePassword }) =>
    (seePassword
      ? css`
          display: flex;
          align-items: center;

          .eye {
            position: absolute;
            margin-left: 130px;

            :hover {
              cursor: pointer;
            }

            svg {
              color: var(--info);
            }
          }
        `
      : css`
          
        `
    )}

  ${({ focused, filled, readOnly }) =>
    (!focused && !filled) || readOnly
      ? css`
          display: flex;
          align-items: center;
        `
      : css`
          border: 2px solid var(--info);
        `}



  ${({ focused, filled, readOnly }) =>
    (!focused ||readOnly) &&
    filled &&
    css`
      border: 2px solid #989898;
    `};

  ${({ error }) =>
    error &&
    css`
      border: 2px solid var(--formError);
    `}

  .textarea_element {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    padding: 10px 24px;
    font-size: 16px;
    color: var(--gray-900);

    &::placeholder {
      color: var(--gray-200);
    }
  }

  .input_element {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    padding-left: 24px;
    font-size: 16px;
    color: var(--gray-900);

    &::placeholder {
      color: var(--gray-200);
    }
  }
`;

export const Input = styled.div``;

export const Label = styled.span<InputContainerProps>`
  position: absolute;
  left: 12px;


  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: #989898;
  margin-left: 20px;

  transition: all 0.5s ease;

  ${({ focused, filled, readOnly }) =>
    (focused || filled) &&
    css`
      position: absolute;
      top: -7px;
      left: 0px;
      background: var(--white);
      padding: 0 6px;
      color: ${readOnly ? "var(--gray-900);" : "var(--info)"};
      transform: scale(0.75);
      transform-origin: left;
    `}

  ${({ error }) =>
    error &&
    css`
      color: var(--formError);
    `}
`;

export const Error = styled.div`
  position: absolute;
  bottom: -17px;
  left: 11px;

  font-size: 12px;
  color: var(--formError);
`;

export const TextArea = styled.textarea`
  
`