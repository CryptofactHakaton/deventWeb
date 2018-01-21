import * as React from 'react';
import styled from 'styled-components';

import { api } from './../../api';

export default class Details extends React.Component<any, {}> {

    state = {
        event: null,
    };

    componentDidMount() {
        const id = this.props.match.params.id;

        api.getEvent(id).then((response) => {
            this.setState({
                event: response.data,
            });
        });
    }

    render() {
        const { event } = this.state;

        if (!event) {
            return (
                <div>
                    Loading...
                </div>
            );
        }

        return (
            <Wrapper>
                <Item>
                    <Title>Назнвание</Title>
                    <Val>{event.name}</Val>
                </Item>
                <Item>
                    <Title>Описание</Title>
                    <Val>{event.long_desc}</Val>
                </Item>
                <Item>
                    <Title>Город</Title>
                    <Val>{event.city}</Val>
                </Item>
                <Item>
                    <Title>Когда</Title>
                    <Val>{event.evnt_date}</Val>
                </Item>
                <Item>
                    <Title>Координаты мероприятия</Title>
                    <Val>{event.location}</Val>
                </Item>
                <Item>
                    <Title>Цена</Title>
                    <Val>{event.price}</Val>
                </Item>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`

`;

const Item = styled.div`
    margin-bottom: 15px;
`;
const Title = styled.h5`
    color: #777;
`;
const Val = styled.div``;
