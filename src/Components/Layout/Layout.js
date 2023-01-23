import React from 'react';
import styled from "styled-components";

const Container = styled.div`
display:flex;
`;

const LeftPane = styled.div`
display:flex;
width:30%;
`;

const RightPane = styled.div`
display:flex;
width:70%;
`;

const Header = styled.div`
background:yellow;
`;

function Layout({ children }) {
    const {  left, right } = children;
    return (
        <Container>
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