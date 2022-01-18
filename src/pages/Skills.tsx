
import React from 'react'
import { Form, Input, Button, Card, message, Space, Slider, Select, PageHeader } from 'antd';
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

type TSkill = {
  skills: {
    skill: string;
    slider: number
  }
}



export default function Skills() {
  const history = useHistory()
  const [form] = Form.useForm()
  const { createUserSkills } = React.useContext(UserContext)



  const onFinish = (values: TSkill) => {
    createUserSkills(values)
    message.success("experiencia criadas com sucesso")
  };

  //console.log("user jobs: ", userJobs)
  return (
    <React.Fragment>
      {/* <PageHeader
        className="site-page-header"
        onBack={() => history.goBack()}
        title="Habilidae"
        subTitle="que você julga interessatnes"
        extra={[
          <Button key="1" type="primary">
            ir para "Formações e qualificações"
          </Button>,
        ]}
      /> */}

      <Card title="Habilidades" size="default" style={{ width: '120vh', alignContent: 'center', borderRadius: 12 }}>
        <Form form={form} {...layout} name="personal-data" onFinish={onFinish} validateMessages={validateMessages}>
          <Form.List name="skills">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <div key={key}>
                    <Form.Item
                      wrapperCol={{ ...layout.wrapperCol, offset: 5 }}
                      key={`${key}-${key}`}
                      {...restField}
                      name={[name, 'skill']}
                      rules={[{ required: true, message: 'suas habilidades são importantnes' }]}
                    >
                      <Input placeholder="ex: photoshop" />
                    </Form.Item>

                    <Form.Item
                      wrapperCol={{ ...layout.wrapperCol, offset: 5 }}
                      key={`${key}-${key + 1}`}
                      {...restField}
                      name={[name, 'slider']}
                      rules={[{ required: true, message: 'o qunato disso você domina' }]}
                    >
                      <Slider defaultValue={30} min={0} max={100} />
                    </Form.Item>

                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 5 }}>
                      <Button type="primary" onClick={() => remove(key)} block icon={<MinusCircleOutlined />} danger>
                        Remover essa habilidade
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
              CRIAR HABILIDADES
            </Button>
          </Form.Item>

        </Form>
      </Card>
    </React.Fragment>
  )
}
