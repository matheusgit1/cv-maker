import React from 'react'
import { Form, Input, InputNumber, Button, Card, PageHeader, message } from 'antd';
import { UserContext } from '../context/userContext'
import {useHistory} from 'react-router-dom'

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

type TUser = {
  name: string;
  email: string;
  adress: string;
  phone: string;
  linkedin: string;
  age: number
  introduction: string;
}

export default function UserData() {
  const history = useHistory()
  const {user, createPersonalUserData } = React.useContext(UserContext)
  const [name, setName] = React.useState<string>('')
  const [email, setEmail] = React.useState<string>('')
  const [adress, setAdress] = React.useState<string>('')
  const [phone, setPhone] = React.useState<string>('')
  const [linkedin, setLinkedin] = React.useState<string>('')
  const [age, setAge] = React.useState<number>(0)
  const [introduction, setIntroduction] = React.useState<string>('')


  const onFinish = async (values: TUser) => {
    createPersonalUserData({
      name: name,
      email: email,
      adress: adress,
      phone: phone,
      linkedin: linkedin,
      age: age,
      introduction: introduction
    })
    message.success("informações salvas com sucesso")
  };

  return (
    <React.Fragment>
      {/* <PageHeader
        className="site-page-header"
        onBack={() => history.goBack()}
        title="Dados pessoais"
        subTitle="informe seus dados pessoais"
        extra={[
          <Button key="1" type="primary">
            ir para "Trabalhos"
          </Button>,
        ]}
      /> */}

      <Card title="Informações pessoais" size="default" style={{ width: '120vh', alignContent: 'center', borderRadius: 12 }}>
        <Form {...layout} name="personal-data" onFinish={onFinish} validateMessages={validateMessages}>
          <Form.Item name={['user', 'name']} label="Nome" initialValue={name}
            rules={[
              {
                required: true,
                message: 'seu nome é importante'
              },
            ]}
          >
            <Input onChange={(e) => setName(e.target.value)} placeholder="nome" />
          </Form.Item>

          <Form.Item name={['user', 'email']} label="Email" initialValue={user ? user.email : email}
            rules={[
              {
                type: 'email',
                message: 'seu email é importante'
              },
            ]}
          >
            <Input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="email@email" />
          </Form.Item>

          <Form.Item name={['user', 'adress']} label="Endereço" initialValue={user ? user.adress : adress}
            rules={[
              {
                required: true,
                message: 'seu endereço é importante'
              },
            ]}
          >
            <Input onChange={(e) => setAdress(e.target.value)} placeholder="rua tal numero tal" />
          </Form.Item>

          <Form.Item name={['user', 'phone']} label="Telefone" initialValue={user ? user.phone : phone}
            rules={[
              {
                required: true,
                message: 'seu telefone de contato é importante'
              },
            ]}
          >
            <Input type="tel" onChange={(e) => setPhone(e.target.value)} placeholder="27997822665" />
          </Form.Item>

          <Form.Item name={['user', 'linkedin']} label="Linkedin" initialValue={user ? user.linkedin : linkedin}
            rules={[
              {
                required: false,
                message: 'seu perfil no linkein'
              },
            ]}
          >
            <Input onChange={(e) => setLinkedin(e.target.value)} placeholder="perfil do linkedin" />
          </Form.Item>

          <Form.Item name={['user', 'age']} label="Idade" initialValue={user ? user.age : age}
            rules={[
              {
                required: true,
                type: 'number',
                message: 'sua idade é importante',
                min: 0,
                max: 99,
              },
            ]}
          >
            <InputNumber type="number" value={age} onChange={(e) => setAge(e)} placeholder="idade" />
          </Form.Item>

          <Form.Item name={['user', 'introduction']} label="Apresentação" initialValue={user ? user.introduction : introduction}
            rules={[
              {
                required: true,
                message: 'fale sobre voce, isso é importante'
              }
            ]}
          >
            <Input.TextArea onChange={(e) => setIntroduction(e.target.value)} placeholder='false um pouco de voce' maxLength={500} style={{ maxHeight: '25vh' }} />
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
            <Button type="primary" htmlType="submit">
              SALVER INFORMAÇÕES
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </React.Fragment>
  )
}
