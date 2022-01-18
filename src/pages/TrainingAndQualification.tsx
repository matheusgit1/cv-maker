
import React from 'react'
import { Form, Input, Button, Card, message, DatePicker, Checkbox, Select, PageHeader } from 'antd';
import { UserContext } from '../context/userContext'
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom'
import moment from 'moment'

const { Option } = Select;

const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 17,
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

type TFormation = {
  formations: {
    university: string;
    entry: {
      _d: Date;
      _f: string
    };
    isAtual: string;
    course: string;
    output: {
      _d: Date;
      _f: string
    }
    resume: string;
  }

}



export default function TrainingAndQualification() {
  const history = useHistory()
  const [form] = Form.useForm();
  const { userQualifications, createUserQualificationsAndFormations } = React.useContext(UserContext)
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];


  const onFinish = (values: TFormation) => {
    createUserQualificationsAndFormations(values)
    message.success("qualificações criadas com sucesso")
  };

  return (
    <React.Fragment>
      {/* <PageHeader
        className="site-page-header"
        onBack={() => history.goBack()}
        title="Formações e qualificações"
        subTitle="informe suas qualificações"
        extra={[
          <Button key="1" type="primary">
            ir para "Habilidades e destaques"
          </Button>,
        ]}
      /> */}

      <Card title="Qualificações e formações" size="default" style={{ width: '120vh', alignContent: 'center', borderRadius: 12 }}>
        <Form form={form} {...layout} name="formations" onFinish={onFinish} validateMessages={validateMessages}>
          <Form.List name="formations">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <div key={key}>
                    <Form.Item key={`${key}-${key + 1}`} {...restField} name={[name, 'university']} label="Faculdade"
                      rules={[
                        {
                          required: true,
                          message: 'o lugar onde você estudou é importante'
                        },
                      ]}
                    >
                      <Input placeholder="faculdade" />
                    </Form.Item>

                    <Form.Item key={`${key}-${key + 2}`}  {...restField} name={[name, 'entry']} label="Entrada"
                      rules={[
                        {
                          required: true,
                          message: 'o period de tempo que você estudou é interessatnes'
                        },
                      ]}
                    >
                      <DatePicker key={`${key}-${key}-${key + 1}`} placeholder="selecione a data" />
                    </Form.Item>

                    <Form.Item key={`${key}-${key + 3}`} {...restField} name={[name, 'output']} label="Finalização"
                      rules={[
                        {
                          required: true,
                          message: 'sua saida é importante'
                        },
                      ]}
                    >
                      <DatePicker key={`${key}-${key}-${key + 1}`} placeholder="selecione a data" />
                    </Form.Item>

                    <Form.Item key={`${key}-${key + 4}`} {...restField} name={[name, 'isAtual']} label="Aina estou estudando?">
                      {/* <Checkbox > é seu trabalho atual?{"  "}</Checkbox> */}
                      <Select
                        placeholder="selecione uma opção"
                        allowClear
                      >
                        <Option value="sim">É meu curso atual</Option>
                        <Option value="nao">não é meu curso atual</Option>
                      </Select>
                    </Form.Item>

                    <Form.Item key={`${key}-${key + 5}`}  {...restField} name={[name, 'course']} label="Curso"
                      rules={[
                        {
                          required: true,
                          message: 'O curso é importatne'
                        },
                      ]}
                    >
                      <Input placeholder="ex: desenvolvedor web fronte-end" />
                    </Form.Item>

                    <Form.Item key={`${key}-${key + 6}`}  {...restField} name={[name, 'resume']} label="Resumo do curso"
                      rules={[
                        {
                          required: true,
                          message: 'descreva seu curso em poucas palavras'
                        },
                      ]}
                    >
                      <Input.TextArea placeholder="resumo do curso" maxLength={500} style={{ maxHeight: '35vh' }} />
                    </Form.Item>

                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 5 }}>
                      <Button type="primary" onClick={() => remove(key)} block icon={<MinusCircleOutlined />} danger>
                        Remover essa curso
                      </Button>
                    </Form.Item>



                  </div>
                ))}
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 5 }}>
                  <Button type="primary" onClick={() => add()} block icon={<PlusOutlined />}>
                    ADICIONAR NOVO CAMPO
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 5 }}>
            <Button type="primary" htmlType="submit" >
              CRIAR FORMAÇÕES
            </Button>
          </Form.Item>

        </Form>
      </Card>
    </React.Fragment>
  )
}
