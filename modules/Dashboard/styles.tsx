import styled from '../../assets/theme/index';

export const Wrapper = styled.section`
    background-image: url('https://images.unsplash.com/photo-1551418544-cc12bb21ae36?ixlib=rb-1.2.1&auto=format&fit=crop&w=2467&q=80');
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-position: center;
    background-size: cover;
    color: white;
    .wrapper-container {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        background: white;
        color: black;
        height: 50vh;
        padding-top: 3rem;
        width: 70vh;
        border-radius: 20px;
    }
`;

export const Points = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`