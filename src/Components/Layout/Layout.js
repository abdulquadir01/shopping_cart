import React from 'react';
import styled from "styled-components";

const Container = styled.div`
display:flex
`;

const LeftPane = styled.div`
display:flex;
flex:3
`;

const RightPane = styled.div`
display:flex;
flex:7 
`;

const Header = styled.div`
background:"yellow"
`;

function Layout({ children }) {
    const { header, left, right } = children;
    return (
        <Container>
            <Header>
                {header}
            </Header>
            <LeftPane>
                {left}
            </LeftPane>

            <RightPane>
                {right}
            </RightPane>
        </Container>
    )
}

export default Layout