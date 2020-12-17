import React from 'react';
import './App.css';

function Reserva() {
  const api = 'https://6h8l3r0pog.execute-api.us-east-1.amazonaws.com';

        const [form, setForm] = React.useState({
            nome: '',
            email: '',
            cpf: '',
            diploma: '',
            produto: '',
        });
        const [radio, setRadio] = React.useState('');
        const [select, setSelect] = React.useState('');

        const [response, setResponse] = React.useState(null);

        function handleSubmit(event) {

            event.preventDefault();

            form.diploma = radio;
            form.produto = select;

            console.log(JSON.stringify(form));

            fetch(api, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            }).then((response) => {
                setResponse(response);
            });

            form.nome= '';
            form.email= '';
            form.cpf= '';
            setRadio('');
            setSelect('');
        }

        function handleChange({ target }) {

            if(target.type === "radio"){
                setRadio(target.value);
                return;
            }

            const { id, value } = target;
            setForm({ ...form, [id]: value });
        }

        return (
          <section id="reserva">
            <form onSubmit={handleSubmit}>
                <h1> Faça já sua reserva </h1>
                <label htmlFor="nome">Nome:</label>
                <input 
                    type="text" 
                    id="nome" 
                    value={form.nome} 
                    onChange={handleChange} />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={form.email}
                    onChange={handleChange}
                />
                <label htmlFor="cpf">CPF:</label>
                <input
                    type="number"
                    id="cpf"
                    value={form.cpf}
                    onChange={handleChange}
                />
                <label htmlFor="diploma"><p>Você possui diploma universitário?</p></label>
                <label value="sim">
                <input
                type="radio"
                value="sim"
                checked={radio === 'sim'}
                onChange={handleChange}
                />
                Sim
                </label>
                <label value="não">
                    <input
                    type="radio"
                    value="não"
                    checked={radio === 'não'}
                    onChange={handleChange}
                    />
                    Não
                </label>
                <label htmlFor="produto"><p>Escolha o produto desejado:</p></label>
                <select value={select} onChange={({ target }) => setSelect(target.value)}>
                    <option value="" disabled>
                    Selecione 
                    </option>
                    <option value="minion-rindo">Minion Rindo Mas De Desespero</option>
                    <option value="minion-esperando">Minion Esperando Ela Responder</option>
                    <option value="minion-detento">Minion Detento Em Bangu 8</option>
                </select>
                <input type="submit" value="Enviar" />
            </form>
          </section>
        );
}

export default Reserva;