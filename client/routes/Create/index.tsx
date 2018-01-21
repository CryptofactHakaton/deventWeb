import * as React from 'react';
import styled from 'styled-components';

import { Steps } from 'antd';
const Step = Steps.Step;

import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import { Step4 } from './Step4';

import { wallet } from './../../models';
import { api } from './../../api';

interface IState {
    step: number;
    dataStep1: any;
    dataStep2: any;
    dataStep3: any;
}

export default class CreateForm extends React.Component<{}, IState> {

    state = {
        step: 0,
        dataStep1: {},
        dataStep2: {},
        dataStep3: {},
    }

    onStep1Submit = (data) => {
        this.setState((state: IState) => ({
            step: 1,
            dataStep1: data,
        }));
    }

    onStep2Submit = (data) => {
        this.setState((state: IState) => ({
            step: 2,
            dataStep2: data,
        }));
    }

    onStep3Submit = (data) => {
        this.setState((state: IState) => ({
            step: 3,
            dataStep3: data,
        }));
    }

    onStep4Submit = (data) => {
        const { state } = this;

        let event = {
            ...state.dataStep1,
            ...state.dataStep2,
            ...state.dataStep3,
            contract_adr: wallet.getAddr()
        }

        api.createEvent(event).then((response) => {
            console.log('complete', response);
        })
    }

    onBack = () => {
        this.setState((state: IState) => ({
            ...state,
            step: state.step - 1,
        }))
    }

    render() {
        const { step } = this.state;

        return (
            <Wrapper>
                <Steps current={step}>
                    <Step title="Описание" />
                    <Step title="Билеты" />
                    <Step title="Владелец" />
                    <Step title="Оплата" />
                </Steps>
                {step === 0 && (
                    <Step1
                        default={this.state.dataStep1}
                        submit={this.onStep1Submit}
                    />
                )}
                {step === 1 && (
                    <Step2
                        default={this.state.dataStep2}
                        submit={this.onStep2Submit}
                        back={this.onBack}
                    />
                )}
                {step === 2 && (
                    <Step3
                        default={this.state.dataStep3}
                        submit={this.onStep3Submit}
                        back={this.onBack}
                    />
                )}
                {step === 3 && (
                    <Step4
                        wallet={wallet.getAddr()}
                        submit={this.onStep4Submit}
                        back={this.onBack}
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


