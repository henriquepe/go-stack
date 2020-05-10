import React, {useState} from 'react';

function Form(){
  
  const [projects, newProjects] = useState([]);

  const linkProjectInput = document.getElementById('linkProject');

  function addProjects(){
    // if(nameProjectInput.value == null || linkProjectInput == null){
    //   return alert('Campos não preenchidos!');
    // }

    const nameProjectInput = document.getElementById('nameProject');

    newProjects([...projects, `${nameProjectInput.value}`])

    nameProjectInput.value = '';
    
  }

  return (
  <>
  <div className="form">
    <h1>Formulário de Projetos</h1>
    <input id="nameProject" type="text" name="name" placeholder="Digite o nome do projeto"/>
    <input id="linkProject" type="text" name="name" placeholder="Cole o link do projeto"/>
    <button id="btn" type="button" onClick={addProjects}>Adicionar projetos</button>
  </div>
  <div className="listProjects">
    <h1>Projetos</h1>
    <ul>
      {projects.map(project => <li key={project}><a href={linkProjectInput.value}>{project}</a></li>)}
    </ul>
  </div>
  </>  
  )

}

export default Form;
