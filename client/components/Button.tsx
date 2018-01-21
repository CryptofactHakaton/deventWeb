import { Button as AntBtn } from 'antd';

import styled from 'styled-components';
import { ITheme } from '../models/theme';

export const Button = styled(AntBtn)`
    background: ${(props: ITheme) => props.theme.color.primary};
    border-color: ${(props: ITheme) => props.theme.color.primary};

    &:hover {
        background: ${(props: ITheme) => props.theme.color.hover};
        border-color: ${(props: ITheme) => props.theme.color.hover};
    }

    &:focus {
        background: ${(props: ITheme) => props.theme.color.hover};
        border-color: ${(props: ITheme) => props.theme.color.hover};
    }
`;