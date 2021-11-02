import React from 'react';

const Form = () => {
    return (
        <div>
            <form action="">
                <label htmlFor="first_name">Nombre</label>
                <input type="text" id="first_name" placeholder="Nombre" required/>

                <label htmlFor="last_name">Apellido</label>
                <input type="text" id="last_name" placeholder="Apellido" required/>

                <label htmlFor="check_in_date">Fecha Check In</label>
                <input type="date" id="check_in_date" required/>

                <label htmlFor="check_out_date">Fecha Check Out</label>
                <input type="date" id="check_out_date" required/>

                <label htmlFor="category">Categoria</label>
                <select name="category" id="category">
                <option value='Confort'>Confort</option>
                <option value='Superior'>Superior</option>
                <option value='Junior Suite'>Junior Suite</option>
                <option value='Senior Suite'>Senior Suite</option>
                </select>

                <label htmlFor="number_of_guests">Número de invitados</label>
                <select name="number_of_guests" id="number_of_guests">
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                </select>

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Form;