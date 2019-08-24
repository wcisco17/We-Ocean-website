// @ts-ignore
import styled, { CustomStylesProps } from '../../assets/theme';

export const Title = styled.h2`
    font-size: ${(p: CustomStylesProps) => p.size};
    color:  ${(p: CustomStylesProps) => p.color};
`;

export const Wrapper = styled.section`
    display: grid;
    grid-template-areas: 
        "text images";
    grid-template-columns: 800px;
    grid-template-rows: 70vh;
    align-items: flex-end;
    justify-content: center;
    .text {
        grid-area: text;
        max-width: 500px;
        display: flex;
        flex-direction: column;
        line-height: 1.8;
        align-items: center;
        justify-content: flex-end;
        line-height: 2;
        .wrapper-home_title {
            padding-left: 4rem;
        }
        .wrapper-home_button {
            display: flex;
        }
    }
    .image {
        grid-area: images;
        img {
            width: 700px;
            height: 520px;
        }
    }
`;

export const Text = styled.p`
    color:  ${(p: CustomStylesProps) => p.color};
    font-size: ${(p: CustomStylesProps) => p.size};
`;