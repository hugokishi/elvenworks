import React, { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import LogoImg from '../../assets/favicon.png';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

export default function NewResource() {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const history = useHistory();

  async function handleResource(e) {
    e.preventDefault();
  
    const data = {
      name,
      type,
    };

    try {
      const response = await api.post('/resources', data);

      if (response.status === 201) {
        alert('Cadastro realizado com sucesso!');
        return history.push('/');
      }

      if(response.status === 200){
        alert(response.data.message)
      }

    } catch (err) {
      console.log()
      alert('Não foi possivel cadastrar o recurso!');
    }
  }

  return (
    <div className='new-resource-container'>
      <div className='content'>

        <section>
          <img src={LogoImg} alt='Elven Works' />
          <Link className='back-link' to='/'>
            <FiArrowLeft size={16} color='#E02041' />
            Voltar para Home
          </Link>
        </section>

        <form onSubmit={handleResource}>
          <input
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <select value={type} onChange={e => setType(e.target.value)}>
            <option value="" defaultChecked> Selecione um tipo </option>
            <option value="Database"> Database </option>
            <option value="S3"> S3 </option>
            <option value="Api"> Api </option>       
          </select>
          <button className='button-resource' type='submit'>
            Cadastrar Recurso
          </button>
        </form>

      </div>
    </div>
  );
}
