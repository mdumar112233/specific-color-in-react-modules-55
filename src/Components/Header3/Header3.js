import React from 'react';
import styled from 'styled-components';

const Title = styled.h3`
    font-size: 40px;
    color: red;
`;

const Container = styled.div`
    margin: 10px;
    color: red;
    border: 1px solid green;
`;

const Header3 = () => {
    return (
        <div>
            <Title>This is header tree</Title>
            <Container>
                <h3>This is container head</h3>
                <p>This is my world</p>
            </Container>
        </div>
    );
};

export default Header3;