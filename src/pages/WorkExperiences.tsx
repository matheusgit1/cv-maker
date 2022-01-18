
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

type TJobs = {
  jobs: {
    company: string;
    entry: {
      _d: Date;
      _f: string
    };
    isAtual: string;
    office: string;
    output: {
      _d: Date;
      _f: string
    }
    tasks: string;
  }
}



export default function WorkExperiences() {
  const history = useHistory()
  const [form] = Form.useForm();
  const { userJobs, createUserJobsExperiences } = React.useContext(UserContext)
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];


  const onFinish = (values: TJobs) => {
    console.log("values: ", values)
    createUserJobsExperiences(values)
    message.success("experiencia criadas com sucesso")
  };

  return (
    <React.Fragment>
      {/* <PageHeader
        className="site-page-header"
        onBack={() => history.goBack()}
        title="Trabalhos anteriores"
        subTitle="informe seus trabalhos anteriores"
        extra={[
          <Button key="1" type="primary">
            ir para "Formações e qualificações"
          </Button>,
        ]}
      /> */}

      <Card title="Experiências de trabalho" size="default" style={{ width: '120vh', alignContent: 'center', borderRadius: 12 }}>
        <Form form={form} {...layout} name="personal-data" onFinish={onFinish} validateMessages={validateMessages}>
          <Form.List name="jobs">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <div key={key}>
                    <Form.Item key={`${key}-${key + 1}`} {...restField} name={[name, 'company']} label="Empresa"
                      rules={[
                        {
                          required: true,
                          message: 'o lugar onde você trabalhou é importante'
                        },
                      ]}
                    >
                      <Input placeholder="empresa" />
                    </Form.Item>

                    <Form.Item key={`${key}-${key + 2}`}  {...restField} name={[name, 'entry']} label="Entrada"
                      rules={[
                        {
                          required: true,
                          message: 'o period de tempo que você trabalhou é interessatnes'
                        },
                      ]}
                    >
                      <DatePicker key={`${key}-${key}-${key + 1}`} placeholder="selecione a data" />
                    </Form.Item>

                    <Form.Item key={`${key}-${key + 3}`} {...restField} name={[name, 'output']} label="Saida"
                      rules={[
                        {
                          required: true,
                          message: 'sua saida é importante'
                        },
                      ]}
                    >
                      <DatePicker key={`${key}-${key}-${key + 1}`} placeholder="selecione a data" />
                    </Form.Item>

                    <Form.Item key={`${key}-${key + 4}`} {...restField} name={[name, 'isAtual']} label="É seu emprego atual?">
                      {/* <Checkbox > é seu trabalho atual?{"  "}</Checkbox> */}
                      <Select
                        placeholder="diga se ainda trabalha aqui"
                        allowClear
                      >
                        <Option value="sim">É meu emprego atual</Option>
                        <Option value="nao">não é meu trabalho atual</Option>
                      </Select>
                    </Form.Item>

                    <Form.Item key={`${key}-${key + 5}`}  {...restField} name={[name, 'office']} label="Cargo"
                      rules={[
                        {
                          required: true,
                          message: 'o cargo que você trabalhou é importante'
                        },
                      ]}
                    >
                      <Input placeholder="ex: desenvolvedor web fronte-end junior" />
                    </Form.Item>

                    <Form.Item key={`${key}-${key + 6}`}  {...restField} name={[name, 'tasks']} label="Descrição de tarefas"
                      rules={[
                        {
                          required: true,
                          message: 'descreva suas funções nesse cargo/empresa'
                        },
                      ]}
                    >
                      <Input.TextArea placeholder="ex: acompanhar processos desenvolvimentos junto ao time" maxLength={500} style={{ maxHeight: '35vh' }} />
                    </Form.Item>

                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 5 }}>
                      <Button type="primary" onClick={() => remove(key)} block icon={<MinusCircleOutlined />} danger>
                        Remover essa experiencia
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
              CRIAR EXPERIÊNCIAS
            </Button>
          </Form.Item>

        </Form>
      </Card>
    </React.Fragment>
  )
}
