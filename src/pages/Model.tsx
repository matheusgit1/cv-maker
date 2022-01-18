import React from 'react'
import { List, Card, PageHeader, Button} from 'antd';
import {UserContext} from '../context/userContext'

export default function Model() {

  const changeLayout = (src: string) => {
    /**do something with image adress */
  }
  const data = [
    {
      isHoverable: true,
      title: 'Modelo 1',
      scr: 'https://www.cvmaker.com/assets/images/cvs/3/cv-example-standford-424954.jpg'
    },
    {
      isHoverable: false,
      title: 'Modelo 2',
      scr: 'https://craft-cv.com/image/en/65/online-cv-maker.png'
    },
    {
      isHoverable: false,
      title: 'Modelo 3',
      scr: 'https://www.cvmaker.pt/assets/images/cvs/7/cv-example-otago-333333.min.jpg'
    },
    {
      isHoverable: false,
      title: 'Modelo 4',
      scr: 'https://www.cvmaker.com/assets/images/cvs/2/cv-example-harvard-3f6591.jpg'
    },
  ];

  return (
    <React.Fragment>
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="Modelos"
        subTitle="selecione o que mais te agrada"
        extra={[
          <Button key="1" type="primary">
            ir para "Dados pessoais"
          </Button>,
        ]}
      />
      <div>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <Card
                hoverable={item.isHoverable}
                onClick={() => { changeLayout(item.scr) }}
                style={{ width: 240, opacity: item.isHoverable ? '100%' : '50%' }}
                cover={<img alt="model" src={item.scr} />}
              >
                <Card.Meta title={item.title} description={!item.isHoverable ? "em breve" : ""} />
              </Card>
            </List.Item>
          )}
        />
      </div>
    </React.Fragment>
  )
}
