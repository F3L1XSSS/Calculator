import React from "react";
import styled from "styled-components";

export enum ButtonType {
    Number,
    Operation
}

type Props = React.HTMLProps<HTMLButtonElement> & {
    buttonType?: ButtonType;
    label: string;
    position?: [x: number, y: number];
    width?: number;
    height?: number;
};

const StyledButton = styled.button`
    background: #9c949b;
    border: none;
    border-radius: 8px;
    color: #ffffff;
    font-size: 24px;
`;

const Button: React.FC<Props> = ({buttonType = ButtonType.Operation, height, label, position, width, onClick}) => {
    const styles: React.CSSProperties = {};
    if (position) {
        styles.gridColumnStart = position[0] + 1;
        styles.gridRowStart = position[1] + 1;
    }
    if (height) {
        styles.gridRowEnd = `span ${height}`;
    }
    if (width) {
        styles.gridColumnEnd = `span ${width}`;
    }
    if (buttonType === ButtonType.Number) {
        styles.color = '#000';
        styles.background = '#E48900'
    }
    return (
         <StyledButton onClick={onClick} style={styles} >
            {label}
             </StyledButton>
    );
};

export default Button;