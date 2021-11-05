import React from 'react';
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import { useState } from 'react';
import './Form.sass'
import { Form, Input, DatePicker, Select } from 'antd';
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
            <Button type="primary" onClick={showModal} className="btn-modal">
               Cargar nueva reserva
            </Button>
            <Modal title="Cargar nueva reserva" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
        footer={[            
            <ModalPrueba 
            inputFirstName={inputFirstName} 
            inputLastName={inputLastName}
            inputCheckIn={inputCheckIn}
            inputCheckOut={inputCheckOut}
            selectCategory={selectCategory}
            selectNumberGuests={selectNumberGuests}
            />,
            <Button key="back" onClick={handleCancel}>
              Cancelar
            </Button>
          ]}>
            <form>
                <label htmlFor="first_name">Nombre:</label>
                <input type="text" id="first_name" placeholder="Nombre" value={inputFirstName} onInput={e => setInputFirstName(e.target.value)} required/>   

                <label htmlFor="last_name">Apellido:</label>
                <input type="text" id="last_name" placeholder="Apellido" value={inputLastName} onInput={e => setInputLastName(e.target.value)} required/>

                <label htmlFor="check_in_date">Fecha Check In:</label>
                <input type="date" id="check_in_date" value={inputCheckIn} onInput={e => setInputCheckIn(e.target.value)} required/>

                <label htmlFor="check_out_date">Fecha Check Out:</label>
                <input type="date" id="check_out_date" value={inputCheckOut} onInput={e => setInputCheckOut(e.target.value)} required/>

                <label htmlFor="category">Categoria:</label>
                <select name="category" id="category" value={selectCategory} onInput={e => setSelectCategory(e.target.value)}>
                <option value='Confort'>Confort</option>
                <option value='Superior'>Superior</option>
                <option value='Junior Suite'>Junior Suite</option>
                <option value='Senior Suite'>Senior Suite</option>
                </select>

                <label htmlFor="number_of_guests">Número de invitados:</label>
                <select name="number_of_guests" id="number_of_guests" value={selectNumberGuests} onInput={e => setSelectNumberGuest(e.target.value)}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                </select>                               
            </form>                          
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
        </Modal>
      </>
    );
  };

export default Formulario;