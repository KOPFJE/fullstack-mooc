import axios from 'axios';
const serverURI = 'http://localhost:3001/api/persons';

const getPersons = async () => {
    const res = await axios.get(serverURI).then(response => response.data);
    console.log(res);
    return res;
};

const addPerson = async newPerson => {
    const res = await axios.post(serverURI, newPerson).then(response => response.data);
    return res;
};

const updatePerson = async (id, newPerson) => {
    const res = await axios.put(`${serverURI}/${id}`, newPerson).then(response => response.data);
    return res;
}

const deletePerson = async (id) => {
    const res = await axios.delete(`${serverURI}/${id}`).then(response => response.data);
    return res;
}

const routes = {
    getPersons,
    addPerson,
    updatePerson,
    deletePerson
};

export default routes;