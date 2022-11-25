import styled from '@emotion/styled';

export const Container = styled.div`
    padding: 20px;
    width: 400px;
`;


export const Button = styled.button`
    width: 100px;
    height: 50px;
    font-weight: bold;
    &:not(:last-child) {
        margin-right: 20px;
    }
`;