import * as React from 'react';
import styled, { CustomStylesProps, theme } from '../../assets/theme/index';

interface IProps {
    onClick: () => void;
    text: string;
    textColor: string;
    backgroundColor: string;
    shadow?: boolean;
    padLeft?: string;
    padRight?: string;
}

const Button = styled.a`
      padding: 20px 30px;
      border-radius: 5px;
      cursor: pointer;
      display: inline-block;
      font-size: 17px;
      margin-left: ${(p: CustomStylesProps) => p.padLeft};
      margin-right:${(p: CustomStylesProps) => p.padRight};
      box-shadow: ${(p: CustomStylesProps) => p.withBoxShadow ? theme.colors.shadow : ''};
`;

export default ({ onClick, text, textColor, backgroundColor, shadow, padLeft, padRight }: IProps) => {
    return (
        <Button
            withBoxShadow={shadow}
            style={{ color: textColor, backgroundColor }}
            padLeft={padLeft}
            padRight={padRight}
            onClick={onClick}>
            {text}
        </Button>
    );
};
