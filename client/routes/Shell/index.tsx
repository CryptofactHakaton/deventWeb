import * as React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Icon } from 'antd';

import { ITheme } from '../../models/theme';

export default class Shell extends React.Component<{}, {}> {
    render() {
        return (
            <Wrapper>
                <Title>
                    <Link
                        exact
                        to={'/'}
                    >
                        <Marked>DE</Marked>vent
                    </Link>
                </Title>
                <Actions>
                    <Link
                        exact
                        to={'/new'}
                    >
                        + создать
                    </Link>
                </Actions>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    font-size: 1.6rem;
    margin: 25px 0;
    padding: 0 35px;

    display: flex;
    justify-content: space-between;

    color: #333;
`;

const Title = styled.div`
    font-size: 2rem;
`;

const Marked = styled.span`
    color: ${(props: ITheme) => props.theme.color.primary}
`;

const Actions = styled.div`

`;

const Add = styled.div`
    cursor: pointer;
    &:hover {
        color: ${(props: ITheme) => props.theme.color.primary};
    }
`;

const Link = styled(NavLink) `
    color: #333;
    &:focus {
        text-decoration: none;
    }

    cursor: pointer;
    &:hover {
        color: ${(props: ITheme) => props.theme.color.primary};
    }
`;
