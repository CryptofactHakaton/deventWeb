import * as React from 'react';
import styled from 'styled-components';

import { Steps } from 'antd';
const Step = Steps.Step;

import { Step1 } from './Step1';

interface IState {
    step: number;
    dataStep1: any;
}

export default class CreateForm extends React.Component<{}, IState> {

    state = {
        step: 0,
        dataStep1: null,
    }

    onStep1Submit = (data) => {
        this.setState((state: IState) => ({
            step: 1,
            dateStep1: {
                ...state.dataStep1,
                ...data,       
            },
        }));
    }

    render() {
        const { step } = this.state;
        return (
            <Wrapper>
                <Steps current={step}>
                    <Step title="Описание">
                    </Step>
                    <Step title="Владелец"  />
                    <Step title="Оплата"  />
                </Steps>
                {step === 0 && (
                    <Step1
                        submit={this.onStep1Submit}
                    />
                )}
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    width: 600px;
    margin: 0 auto;
    font-size: 1.4rem;
`;

const SingleInput = styled.div`
    margin: 10px;
`;


