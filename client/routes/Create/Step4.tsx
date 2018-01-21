import * as React from 'react';
import { Form, Icon, Input, Checkbox, DatePicker } from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';
const FormItem = Form.Item;
const { TextArea } = Input;

import styled from 'styled-components';
import { Button } from './../../components';

interface IFormForm extends FormComponentProps {
    submit?: (formObject) => void;
    back?: () => void;
    wallet: string;
}

class WalletDesc extends React.Component<IFormForm, any> {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.submit(values);
            }
        });
    }

    handleBack = () => {
        const { back } = this.props;

        if (back)
            back();
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        
        return (
            <Wrap>
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    <Title>
                        Адрес вашего кошелька
                    </Title>
                    <Input 
                        value={this.props.wallet}
                        disabled
                    />
                </FormItem>
                <FormItem>
                    <Button
                        onClick={this.handleBack}
                    >
                        Назад
                    </Button>
                    <Button 
                        type="primary"
                        htmlType="submit" 
                        className="login-form-button"
                    >
                        Создать событие
                    </Button>
                </FormItem>
            </Form>
            </Wrap>
        );
    }
}

export const Step4 = Form.create()(WalletDesc);

const Wrap = styled.div`
    margin-top: 30px;
`;

const Title = styled.div``;