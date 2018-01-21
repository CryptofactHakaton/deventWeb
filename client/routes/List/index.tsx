import * as React from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';

import { api } from './../../api';
import { Item } from './Item';

export default class List extends React.Component<{}, any> {

    state = {
        events: [],
        loading: true,
    };

    componentDidMount() {
        api.getList().then((response) => {
            this.setState({
                events: response.data,
                loading: false,
            });
        });
    }

    get events() {
        const { events } = this.state;

        return events.map((event, idx) => {
            return (
                <Item
                    key={idx}
                    event={event}
                />
            );
        });
    }

    render() {

        if (this.state.loading) {
            return (
                <Wrapper>
                    <Centr>
                        <Spin size="large" />
                    </Centr>
                </Wrapper>
            );
        }

        return (
            <Wrapper>
                <Title>Доступные события:</Title>
                <Container>
                    {this.events}
                </Container>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    width: 800px;
    margin: 0 auto;
`;

const Centr = styled.div`
    text-align: center;
`;

const Container = styled.div`
`;

const Title = styled.h2`
    text-align: center;
`;
