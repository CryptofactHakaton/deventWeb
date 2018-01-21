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

class TicketDesc extends React.Component<IFormForm, any> {

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
                        Softcap
                    </Title>
                    {getFieldDecorator('softcap', {
                        initialValue: this.props.default.softcap,
                        rules: [{ required: true, message: 'Укажите нижнюю границу' }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem>
                    <Title>
                        HardCap
                    </Title>
                    {getFieldDecorator('hardcap', {
                        initialValue: this.props.default.hardcap,
                        rules: [{ required: true, message: 'Укажите верхнюю границу' }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem>
                    <Title>
                        Цена
                    </Title>
                    {getFieldDecorator('price', {
                        initialValue: this.props.default.price,
                        rules: [{ required: true, message: 'Укажите цену' }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem>
                    <Title>
                        Время окончания продажи
                    </Title>
                    {getFieldDecorator('end_sale_date', {
                        initialValue: this.props.default.end_sale_date,
                        rules: [{ required: true, message: 'Введите дату' }],
                    })(
                        <DatePicker
                            showTime
                            format="YYYY-MM-DD HH:mm:ss"
                            placeholder=""
                        />
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

export const Step2 = Form.create()(TicketDesc);

const Wrap = styled.div`
    margin-top: 30px;
`;

const Title = styled.div``;