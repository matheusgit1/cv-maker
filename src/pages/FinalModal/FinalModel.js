import React from 'react'
import { Card, Modal, Upload, message } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { UserContext } from '../../context/userContext'
import './index.css'


export default function FinalModel() {
  const defaultImageUser = `https://icon-library.com/images/default-user-icon/default-user-icon-8.jpg`;
  const {
    userQualifications,
    user,
    userJobs,
    userInformations,
    userSkill
  } = React.useContext(UserContext)

  console.log(user)
  console.log(userJobs)
  console.log(userInformations)
  console.log(userSkill)
  console.log(userQualifications)


  return (
    <React.Fragment>
      <div id="main">
        <h4 className="title">{user?.name}</h4>
        <hr style={{ color: "#111", height: 2 }} />
        <ul className="head-list">
          <li key="1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
            </svg>
            telefone: {user?.phone}<br />
          </li>
          <li key="2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
            </svg>
            Endereço: {user?.adress}<br />
          </li>
          <li key="3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
            </svg>
            Email: {user?.email}<br />
          </li>
          <li key="4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
            Linkedin: {user?.linkedin}<br />
          </li>
        </ul>
        <hr style={{ color: '#111', height: 2 }} />
        <p className="introduction">
          {user?.introduction}
        </p>
        <hr style={{ color: '#111', height: 2 }} />
        <h3 style={{ fontSize: 15 }}>Experiências de trabalho</h3>
        {
          userJobs ? userJobs[0].jobs.map((element, index) => {
            return (
              <div key={index} id="jobs">
                <h4 style={{ fontSize: 13, marginTop: 5, marginLeft: 10, marginRight: 10 }}>Empresa: {element.company} {element.isAtual === "sim" ? "  -  Emprego Atual" : null}</h4>
                <p style={{ fontSize: 13, marginTop: 5, marginLeft: 10, marginRight: 10 }}>Cargo: {element.office}</p>
                <p style={{ fontSize: 13, marginTop: 5, marginLeft: 10, marginRight: 10 }}>Tarefas: {element.tasks}</p>
                <p style={{ fontSize: 13, marginTop: 5, marginLeft: 10, marginRight: 10 }}>Inicio: {element?.entry?._d.toLocaleDateString()}</p>
                {
                  element?.isAtual === "sim" ? null : <p style={{ fontSize: 13, marginTop: 5, marginLeft: 10, marginRight: 10, color: "#111" }}>Saida: {element?.output._d.toLocaleDateString()}</p>
                }

              </div>
            )
          }) : null
          
        }
        <hr style={{ color: '#111', height: 2 }} />
        <h3 style={{ fontSize: 15 }}>Formações qualificações</h3>
        {
          userQualifications ? (
            userQualifications[0].formations.map((element, index) => {
              console.log("element")
              return (
                <div key={index} id="jobs">
                  <h4 style={{ fontSize: 13, marginTop: 5, marginLeft: 10, marginRight: 10 }}>Faculdade: {element?.university} {element?.isAtual === "sim" ? "  -  curso Atual" : null}</h4>
                  <p style={{ fontSize: 13, marginTop: 5, marginLeft: 10, marginRight: 10 }}>curso: {element?.course}</p>
                  <p style={{ fontSize: 13, marginTop: 5, marginLeft: 10, marginRight: 10 }}>resumo: {element?.resume}</p>
                  <p style={{fontSize: 13, marginTop: 5, marginLeft: 10, marginRight: 10}}>Inicio: {element?.entry._d.toLocaleDateString()}</p>
                  {
                    element?.isAtual === "sim" ? null : <p style={{fontSize: 13, marginTop: 5, marginLeft: 10, marginRight: 10}}>Saida: {element?.output._d.toLocaleDateString()}</p>
                  }
                </div>
              )
            })
          ) : null
          
        }

        <hr style={{ color: '#111', height: 2 }} />
        <h3 style={{ fontSize: 15 }}>Habilidades importantes</h3>
        {
          userSkill ? (
            userSkill[0].skills.map((element, index) => {
              return (
                <div key={index} id="jobs">
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <h4 style={{ fontSize: 13, marginTop: 5, marginLeft: 10, marginRight: 10 }}>{element?.skill}: <input disabled={true} type="range" min="1" max="100" value={element?.slider} /></h4>
                  </div>
                </div>
              )
            })
          ) : null
        }

        <hr style={{ color: '#111', height: 2 }} />
        <h3 style={{ fontSize: 15 }}>informações adicionais</h3>
        {
          userInformations ? (
            userInformations[0].addictionaisInformations.map((element, index) => {
              return (
                <div key={index} id="jobs">
                  <h4 style={{ fontSize: 13, marginTop: 2, marginLeft: 10, marginRight: 10 }}>{element?.name}</h4>
                  <p style={{ fontSize: 13, marginTop: 2, marginLeft: 10, marginRight: 10 }}>{element?.description}</p>
                </div>
              )
            })
          ) : null
        }

      </div>
    </React.Fragment>
  )
}