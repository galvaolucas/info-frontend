import React, { useState, InputHTMLAttributes, useEffect } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import { ClickAwayListener } from "@mui/base";
import InputMask from "react-input-mask";

import { Container, Error, InputContainer, Label, TextArea } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  handleChange: (event: any, typeEvent?: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => any;
  onDisabled?: () => any;
  inputName: string;
  label: string;
  value: string | number;
  error?: string;
  marginOnError?: boolean;
  mask?: string | Array<RegExp | string>;
  disabled?: boolean;
  readOnly?: boolean;
  textArea?: boolean;
  seePassword?: boolean;
  inputType?: string;
  setType?: () => void;
}

export function Input({
  handleChange,
  value,
  error,
  mask,
  label,
  inputName,
  inputType,
  readOnly = false,
  disabled = false,
  textArea = false,
  seePassword = false,
  marginOnError = true,
  onDisabled = () => {},
  setType = () => {},
  ...rest
}: InputProps) {
  const [inputFocused, setInputFocused] = useState(false);
  const [inputFilled, setInputFilled] = useState(false);
  const [inputRef, setInputRef] = useState<HTMLInputElement | HTMLTextAreaElement | null>();
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
    setType();
  }

  useEffect(() => {
    setInputFilled(!!value?.toString()?.length)
  }, [value]);

  useEffect(() => {
    if (disabled) {
      onDisabled();
    }
  }, [disabled]);

  /*function setInputRef( element: HTMLInputElement ) {
    if(!this.inputRef.current){
        this.inputRef.current = element;
    }
  }*/

  return (
    <ClickAwayListener
      onClickAway={() => {
        setInputFocused(false);
      }}
    >
      <Container
        onClick={() => {
          if (disabled || !inputRef) {
            return;
          }
          inputRef.focus();
        }}>
        <InputContainer
          textArea={textArea}
          focused={inputFocused}
          filled={inputFilled}
          disabled={disabled}
          error={!!error}
          marginOnError={marginOnError}
          readOnly={readOnly}
          seePassword={seePassword}
        >
          <Label
            focused={inputFocused}
            error={!!error}
            filled={inputFilled}
            readOnly={readOnly}
          >
            {label}
          </Label>

          {
            textArea ? 
              <TextArea 
                id={inputName}
                className="textarea_element"
                onFocus={() => {
                  if (disabled) {
                    return;
                  }
                  setInputFocused(true);
                }}
                onBlur={
                  () => {
                    setInputFocused(false);
                  }
                }
                ref={(el) => setInputRef(el)}
                value={value}
                disabled={disabled}
                onChange={(event: any) => handleChange(event?.target?.value, event)}
                readOnly={readOnly}
                {...rest}
                >  
              </TextArea> :
              <InputMask
                role="presentation" autoComplete="off"
                onFocus={() => {
                  if (disabled) {
                    return;
                  }
                  setInputFocused(true);
                }}
                onBlur={
                  () => {
                    setInputFocused(false);
                  }
                }
                id={inputName}
                className="input_element"
                mask={!!value?.toString()?.length && !!mask ? mask : ""}
                maskPlaceholder={null}
                value={value}
                disabled={disabled}
                onChange={(event) => handleChange(event?.target?.value, event)}
                readOnly={readOnly}
                {...rest}
              >
            </InputMask>
          }
          {seePassword ? 
            <div className="eye"
              onClick={() => {
                togglePassword();
              }}
            >
              {showPassword ? < AiFillEyeInvisible size={16}/> : < AiFillEye size={16}/>}
            </div>
            : null
          }
        </InputContainer>
        {error && <Error>{error}</Error>}
      </Container>
    </ClickAwayListener>
  );
}
