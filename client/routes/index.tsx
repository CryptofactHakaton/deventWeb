import * as React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import List from './List';
import Shell from './Shell';

export interface IRoutesProps extends React.Props<any> {}
export class Routes extends React.Component<IRoutesProps, any> {
    render() {
        return (
            <Router>
                <AppWrapper>
                    <Shell/>
                    <Switch>
                        <Route exact path={'/'} component={List} />
                        <Redirect to={'/'} />
                    </Switch>
                </AppWrapper>
            </Router>
        );
    }
}

const AppWrapper = styled.div`

`;

export default Routes;
