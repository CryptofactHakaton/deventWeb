import * as React from 'react';
import styled from 'styled-components';
import { Button, InputNumber, Input, message } from 'antd';

import { api } from './../../api';
import { wallet } from './../../models';

export default class Details extends React.Component<any, {}> {

    state = {
        event: null,
        count: 0,
        email: '',
    };

    componentDidMount() {
        const id = this.props.match.params.id;

        api.getEvent(id).then((response) => {
            this.setState({
                event: response.data,
            });
        });
    }

    onNumberChange = (count) => {
        this.setState((state) => ({
            ...state,
            count,
        }));
    }

    onEmailChange = (e) => {
        const email = e.target.value;

        this.setState((state) => ({
            ...state,
            email,
        }));
    }

    submit = () => {
        const id = this.props.match.params.id;

        api.buyTicket(id, this.state.email, wallet.getAddr()).then((response) => {
            if (response.status === 200) {
                message.success('Билеты успешно куплены');
            } else {
                message.error('Произошла ошибка');
            }
        });
    }

    render() {
        const { event } = this.state;

        if (!event) {
            return (
                <Wrapper>
                    Loading...
                </Wrapper>
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

                <div>
                    <Intro>
                        Регистрация на событие:
                    </Intro>
                    <InputName>Количество билетов:</InputName>
                    <InputNumber
                        value={this.state.count}
                        onChange={this.onNumberChange}
                    />
                    <InputName>Адрес email:</InputName>
                    <Input
                        value={this.state.email}
                        onChange={this.onEmailChange}
                    />
                    <Button
                        type="primary"
                        onClick={this.submit}
                    >
                        Купить билеты
                    </Button>
                </div>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    width: 800px;
    margin: 0 auto;
`;

const Item = styled.div`
    margin-bottom: 15px;
`;
const Title = styled.h5`
    color: #777;
`;
const Val = styled.div``;

const Intro = styled.h4``;
const InputName = styled.div``;
