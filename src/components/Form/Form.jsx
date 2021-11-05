import React from 'react';
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import { useState } from 'react';
import './Form.sass'
import { Form, Input, InputNumber, DatePicker, Select } from 'antd';
const { Option } = Select;

const Formulario = () => {    
    const [inputFirstName, setInputFirstName] = useState('');
    const [inputLastName, setInputLastName] = useState('');
    const [inputCheckIn, setInputCheckIn] = useState('');
    const [inputCheckOut, setInputCheckOut] = useState('');
    const [selectCategory, setSelectCategory] = useState('Confort');
    const [selectNumberGuests, setSelectNumberGuest] = useState('1');

    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
      setIsModalVisible(true);
    };
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };

    return (
        <div>
            <Button type="primary" onClick={showModal}>
               Cargar nueva reserva
            </Button>
            <Modal title="Cargar nueva reserva" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
        footer={[
            <Button key="back" onClick={handleCancel}>
              Cancelar
            </Button>,
            <Button key="submit" type="primary" onClick={handleOk}>
              Confirmar reserva
            </Button>,
          ]}>
            <Form>
              <Form.Item name={['name']} label="Nombre" rules={[{ required: true, message: 'Ingresar nombre' }]}>
                <Input />
              </Form.Item>
              <Form.Item name={['apellido']} label="Apellido" rules={[{ required: true, message: 'Ingresar apellido' }]}>
                <Input />
              </Form.Item>
              <Form.Item name="date-picker" label="Fecha de Check In:" rules={[{ required: true, message: 'Ingresar fecha de Check In' }]}>
                <DatePicker />
              </Form.Item>
              <Form.Item name="date-picker" label="Fecha de Check Out:" rules={[{ required: true, message: 'Ingresar fecha de Check Out' }]} >
                <DatePicker />
              </Form.Item>
              <Form.Item
                name="category"
                label="Categoría"
                rules={[{ required: true, message: 'Seleccionar categoría' }]}
              >
                <Select placeholder="Seleccionar categoría">
                  <Option value='Confort'>Confort</Option>
                  <Option value='Superior'>Superior</Option>
                  <Option value='Junior Suite'>Junior Suite</Option>
                  <Option value='Senior Suite'>Senior Suite</Option>
                </Select>
              </Form.Item>

              <Form.Item >
              <ModalPrueba 
                    inputFirstName={inputFirstName} 
                    inputLastName={inputLastName}
                    inputCheckIn={inputCheckIn}
                    inputCheckOut={inputCheckOut}
                    selectCategory={selectCategory}
                    selectNumberGuests={selectNumberGuests}
                    />  
              </Form.Item>
            </Form>
                {/* <ModalPrueba 
                    inputFirstName={inputFirstName} 
                    inputLastName={inputLastName}
                    inputCheckIn={inputCheckIn}
                    inputCheckOut={inputCheckOut}
                    selectCategory={selectCategory}
                    selectNumberGuests={selectNumberGuests}
                    />   */}             
            </Modal>

        </div>
    );
};
/* const ModalFormulario = () => {

} */

const ModalPrueba = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

   const {
    inputFirstName,
    inputLastName,
    inputCheckIn,
    inputCheckOut,
    selectCategory,
    selectNumberGuests
   } = props

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
  
    return (
      <>
        <Button type="primary" onClick={showModal}>
          Enviar
        </Button>
        <Modal title="Confirmación de reserva" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
        footer={[
            <Button key="back" onClick={handleCancel}>
              Cancelar
            </Button>,
            <Button key="submit" type="primary" onClick={handleOk}>
              Confirmar reserva
            </Button>,
          ]}
        >
            <p>Nombre: {inputFirstName}</p>
            <p>Apellido: {inputLastName}</p>
            <p>Fecha de Check In: {inputCheckIn}</p>
            <p>Fecha de Check Out: {inputCheckOut}</p>
            <p>Categoría: {selectCategory}</p>
            <p>Número de invitados: {selectNumberGuests}</p>

      {/* <Form>
      <Form.Item name={['name']} label="Nombre" rules={[{ required: true, message: 'Ingresar nombre' }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['apellido']} label="Apellido" rules={[{ required: true, message: 'Ingresar apellido' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="date-picker" label="Fecha de Check In:" rules={[{ required: true, message: 'Ingresar fecha de Check In' }]}>
        <DatePicker />
      </Form.Item>
      <Form.Item name="date-picker" label="Fecha de Check Out:" rules={[{ required: true, message: 'Ingresar fecha de Check Out' }]} >
        <DatePicker />
      </Form.Item>
      <Form.Item
        name="category"
        label="Categoría"
        rules={[{ required: true, message: 'Seleccionar categoría' }]}
      >
        <Select placeholder="Seleccionar categoría">
          <Option value='Confort'>Confort</Option>
          <Option value='Superior'>Superior</Option>
          <Option value='Junior Suite'>Junior Suite</Option>
          <Option value='Senior Suite'>Senior Suite</Option>
        </Select>
      </Form.Item>

      <Form.Item >
        <Button type="primary" htmlType="submit">
          Enviar
        </Button>
      </Form.Item>
    </Form> */}
        </Modal>
      </>
    );
  };

export default Formulario;