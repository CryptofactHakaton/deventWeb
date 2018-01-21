import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import * as moment from 'moment';

const format = 'YYYY MMMM dd HH:mm';

import { ITheme } from '../../models/theme';

export class Item extends React.Component<any, {}> {

    get time() {
        const { event } = this.props;

        if (event.evnt_date) {
            return moment(event.evnt_date).format(format);
        } else {
            return '';
        }
    }

    render() {
        const { event } = this.props;

        return (
            <Wrapper>
                <Link
                    exact
                    to={`/${event.evnt_id}`}
                >
                    <Title>{event.name}</Title>
                    <Desc>{event.short_desc}</Desc>
                    <Info>{event.city}</Info>&nbsp;
                    <Info>{this.time}</Info>
                </Link>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    display: inline-block;
    margin: 10px 10px;
    padding: 5px 20px;
    width: 380px;
    background: #e6fffb;

    &:hover {
        background: #b5f5ec;
    }
`;

const Title = styled.h3`
    margin: 0;
    padding: 0;
`;

const Desc = styled.pre``;

const Info = styled.span`

`;

const Link = styled(NavLink) `
    color: #333;
    cursor: pointer;

    &:hover {
        color: #333;
        text-decoration: none;
    }

    &:focus {
        text-decoration: none;
    }

`;
