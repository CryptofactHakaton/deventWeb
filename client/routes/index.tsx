import * as React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import theme from '../models/theme'

import Create from './Create';
import List from './List';
import Shell from './Shell';

export interface IRoutesProps extends React.Props<any> {}
export class Routes extends React.Component<IRoutesProps, any> {
    render() {
        return (
            <Router>
                <ThemeProvider theme={theme}>
                    <div>
                        <Shell/>
                        <AppWrapper>
                            <Switch>
                                <Route exact path={'/new'} component={Create} />
                                <Route exact path={'/'} component={List} />
                                <Redirect to={'/'} />
                            </Switch>
                        </AppWrapper>
                    </div>
                </ThemeProvider>
            </Router>
        );
    }
}

const AppWrapper = styled.div`
    max-width: 1280px;
    margin: 0 auto;
`;

export default Routes;
