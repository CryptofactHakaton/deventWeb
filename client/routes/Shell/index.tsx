import * as React from 'react';
import styled from 'styled-components';

export default class Shell extends React.Component<{}, {}> {
    render() {
        return (
            <Wrapper>
                Alwayes on top
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    margin: 10px 0;
`;
