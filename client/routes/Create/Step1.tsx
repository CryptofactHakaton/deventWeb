import * as React from 'react';
import { Form, Icon, Input, Button, Checkbox, DatePicker } from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';
const FormItem = Form.Item;
const { TextArea } = Input;

import styled from 'styled-components';
import { ITheme } from '../../models/theme';
// import { Button } from './../../components';

interface IFormForm extends FormComponentProps {
    default: any;
    submit?: (formObject) => void;
}

class CreateDesc extends React.Component<IFormForm, any> {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.submit(values);
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Wrap>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        <Title>
                            Название
                    </Title>
                        {getFieldDecorator('name', {
                            initialValue: this.props.default.name,
                            rules: [{ required: true, message: 'Укажите имя события!' }],
                        })(
                            <Input />
                            )}
                    </FormItem>
                    <FormItem>
                        <Title>
                            Короткое описание
                    </Title>
                        {getFieldDecorator('short_desc', {
                            initialValue: this.props.default.short_desc,
                            rules: [{ required: true, message: 'Введите короткое описание' }],
                        })(
                            <TextArea rows={4} />
                            )}
                    </FormItem>
                    <FormItem>
                        <Title>
                            Полное описание
                    </Title>
                        {getFieldDecorator('long_desc', {
                            initialValue: this.props.default.long_desc,
                            rules: [{ required: true, message: 'Введите короткое описание' }],
                        })(
                            <TextArea rows={10} />
                            )}
                    </FormItem>
                    <FormItem>
                        <Title>
                            Дата и время события
                    </Title>
                        {getFieldDecorator('evnt_date', {
                            initialValue: this.props.default.ev_date,
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
                        <Title>
                            Город
                    </Title>
                        {getFieldDecorator('city', {
                            initialValue: this.props.default.city,
                            rules: [{ required: true, message: 'Введите город' }],
                        })(
                            <Input />
                            )}
                    </FormItem>
                    <FormItem>
                        <Title>
                            Координаты события
                    </Title>
                        {getFieldDecorator('location', {
                            initialValue: this.props.default.location,
                            rules: [{ required: true, message: 'Введите координаты' }],
                        })(
                            <Input />
                            )}
                    </FormItem>
                    <FormItem>
                        <StyleBtn
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                        >
                            Далее
                    </StyleBtn>
                    </FormItem>
                </Form>
            </Wrap>
        );
    }
}

export const Step1 = Form.create()(CreateDesc);

const Wrap = styled.div`
    margin-top: 30px;
`;

const Title = styled.div``;

export const StyleBtn = styled(Button) `
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