import React from 'react';
import { Layout, Menu , Button, message} from 'antd';
import {
  FileMarkdownOutlined,
  UserOutlined,
  CheckCircleOutlined,
  CheckSquareOutlined,
  BgColorsOutlined
} from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom'
import { UserContext } from '../context/userContext'
import routes from '../routes.json'

const { Sider, Content } = Layout;

type props = {
  children: React.ReactNode,
}

function Sidenav(props: props) {
  const history = useHistory()
  const {
    userQualifications,
    user,
    userJobs,
    userInformations,
    userSkill,
  } = React.useContext(UserContext)
  const checkModel = () =>{
    
      history.push(routes.ViewModel.path)
    
  }

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={false} style={{
          overflow: 'hidden',
          height: 'auto',
          position: 'relative',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<FileMarkdownOutlined size={45} />}>
            <Link to={routes.models.path}>
              Selecionar modelo
            </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined size={45} />}>
            <Link to={routes.personalData.path}>
              Informações pessoais
            </Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<CheckSquareOutlined />}>
            <Link to={routes.workExperiences.path}>
              Experiências de trabalho
            </Link>
          </Menu.Item>

          <Menu.Item key="4" icon={<CheckSquareOutlined />}>
            <Link to={routes.TrainingAndQualification.path}>
              Formações e qualificações
            </Link>
          </Menu.Item>

          <Menu.Item key="5" icon={<CheckCircleOutlined />}>
            <Link to={routes.Skills.path}>
              Habilidades
            </Link>
          </Menu.Item>

          <Menu.Item key="6" icon={<CheckCircleOutlined />}>
            <Link to={routes.AdditionalInformation.path}>
              Informações adicionais
            </Link>
          </Menu.Item>

          <Menu.Item key="7" icon={<BgColorsOutlined />}>
              <Button onClick={()=>checkModel()} danger type="link">
                Visualizar model
              </Button>
          </Menu.Item>

        </Menu>
      </Sider>
      <Layout className="site-layout">
        {/* <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle,
          })}
          
        </Header> */}
        <Content
          style={{
            padding: 24,
            alignSelf: 'center',
            minHeight: '100vh'
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default Sidenav;
