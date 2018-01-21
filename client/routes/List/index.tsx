import * as React from 'react';
import styled from 'styled-components';

import { api } from './../../api';
import { Item } from './Item';

export default class List extends React.Component<{}, any> {

    state = {
        events: [],
    };

    componentDidMount() {
        api.getList().then((response) => {
            this.setState({
                events: response.data,
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
        return (
            <Wrapper>
                <Title>Доступные события:</Title>
                {this.events}
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`

`;

const Title = styled.h2``;
