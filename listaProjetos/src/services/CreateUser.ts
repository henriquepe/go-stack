/*
  Para criar um usuário preciso de um nome
  email e senha.

*/


export default function createUser(name, email, password){
  const user = {
    name,
    email,
    password
  }

  return user;
}