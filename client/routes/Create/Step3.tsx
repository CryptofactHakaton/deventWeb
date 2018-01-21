import * as React from 'react';
import { Form, Icon, Input, Checkbox, DatePicker } from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';
const FormItem = Form.Item;
const { TextArea } = Input;

import styled from 'styled-components';
import { Button } from './../../components';

interface IFormForm extends FormComponentProps {
    default: any;
    submit?: (formObject) => void;
    back?: () => void;
}

class OwnerDesc extends React.Component<IFormForm, any> {

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

        if (back) {
            back();
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Wrap>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        <Title>
                            Имя организатора
                        </Title>
                        {getFieldDecorator('owner_name', {
                            initialValue: this.props.default.owner_name,
                            rules: [{ required: true, message: 'Введите имя' }],
                        })(
                            <Input />,
                        )}
                    </FormItem>
                    <FormItem>
                        <Title>
                            Телефон
                    </Title>
                        {getFieldDecorator('phone', {
                            initialValue: this.props.default.phone,
                            rules: [{ required: true, message: 'Укажите телефон' }],
                        })(
                            <Input />,
                        )}
                    </FormItem>
                    <FormItem>
                        <Title>
                            Email
                    </Title>
                        {getFieldDecorator('owner_email', {
                            initialValue: this.props.default.owner_email,
                            rules: [{ required: true, message: 'Email' }],
                        })(
                            <Input />,
                        )}
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
                            Далее
                        </Button>
                    </FormItem>
                </Form>
            </Wrap>
        );
    }
}

export const Step3 = Form.create()(OwnerDesc);

const Wrap = styled.div`
    margin-top: 30px;
`;

const Title = styled.div``;
