import React, { useState, useEffect } from "react";
import LogoImg from "../../assets/favicon.png";
import { Link } from "react-router-dom";
import "./styles.css";
import api from "../../services/api";
import moment from "moment";
import "moment-timezone";
import Modal from 'react-modal'

Modal.setAppElement('#root')
export default function Resources() {
  const [resources, setResources] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false)
  const [name, setNameUpdt] = useState('');
  const [type, setTypeUpdt] = useState('');
  const [idUpdt, setId] = useState(0);
  const [idDelete, setIdDelete] = useState(0)
  
  useEffect(() => {
    getResources();
  }, []);

  async function getResources() {
    const resources = await api.get("/resources");
    setResources(resources.data);
  }

  async function deleteResource(id) {
    try {
      await api.delete(`/resources/${id}`);
      setResources(resources.filter((resources) => resources.id !== id));
      closeModalDelete(false)
    } catch (err) {
      alert("Erro ao deletar, tente novamente!");
    }
  }

  function closeModal(){
    setModalIsOpen(false);
  }

  function openModal(id){
    setId(id)
    setModalIsOpen(true)
  }

  async function updateResorce(e){
    e.preventDefault();
    const data = { name, type}
    try{
      const response = await api.post(`/resources/${idUpdt}`, data)
      if(response.status === 204){
        setModalIsOpen(false) 
        getResources()   
        return alert('Resource atualizada!')
      }
      alert(response.data.message)
    } catch(err){
      alert(err)
    }  
  }

  function openModalDelete(id){
    setIdDelete(id)
    setModalDeleteOpen(true)
  }

  function closeModalDelete(){
    setModalDeleteOpen(false);
  }

  return (
    <div className="container">
     
      <header>
        <img src={LogoImg} alt="Elven Works" />
        <Link className="button" to="/new/resource">
          Cadastrar nova resource
        </Link>
      </header>
      
      <ul>
        {resources.map((resource) => (
          <li key={resource.id}>
            <strong>{resource.name}</strong>
            <p>Serviço:</p>
            <p> {resource.type}</p>
            <p> Data de Criação: </p>
            <p>{moment(resource.createdAt).format("L")}</p>
            <button 
              type="button" 
              onClick={() => openModalDelete(resource.id)}
            >
              Apagar
            </button>
            <button onClick={() => openModal(resource.id)}> Editar </button>
          </li>
        ))}
      </ul>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
      >
        <h4 className="h4-modal"> Alterar Recurso </h4>
        <div className="modal-container">
          <form onSubmit={updateResorce}>
            <input
              placeholder='Name'
              value={name}
              onChange={e => setNameUpdt(e.target.value)}
            />
            <input
              placeholder='Type of resource'
              value={type}
              onChange={e => setTypeUpdt(e.target.value)}
            />
            <button className='btn-modal' type='submit'>
              Alterar Recurso
            </button>
          </form>
        </div>
      </Modal>

      <Modal
        isOpen={modalDeleteOpen}
        onRequestClose={closeModalDelete}
        className="modal-delete"
      >
        <h4 className="h4-modal"> Deseja excluir a resource?</h4>
        <div className="modal-delete-container"> 
          <button type="button" className="btn-delete-cancel" onClick={() => closeModalDelete()}> Cancelar </button>
          <button type="button" className="btn-delete" onClick={() => deleteResource(idDelete)}> Excluir </button>
        </div>
      </Modal>
    </div>
  );
}
