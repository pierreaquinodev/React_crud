/* eslint-disable */
import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import "./Read.css";

const Read = () => {
    const firstName = useRef(null);
    const lastName = useRef(null);
    const age = useRef(null);
    const email = useRef(null);

    const [person, setPerson] = useState([]);

    useEffect(() => {
        async function fetchPerson() {
            const fetchPer = await axios
                .get("http://localhost:3000/person")
                .then((res) => {
                    setPerson(res.data);
                })
                .catch((err) => {
                    console.log(`Ocorreu um erro: ${err}`);
                });
        }
        fetchPerson();
    }, []);

    function deletePerson(id) {
        axios
            .delete(`http://localhost:3000/person/${id.target.id}`)
            .then(() => {
                console.log("Registro excluido");
            });
        window.location.reload();
    }

    function editPerson(id) {
        async function getEditPerson() {
            const getPerson = await axios
                .get(`http://localhost:3000/person/${id.target.id}`)
                .then((res) => {
                    firstName.current.value = res.data.first_name;
                    lastName.current.value = res.data.last_name;
                    age.current.value = res.data.age;
                    email.current.value = res.data.email;
                })
                .catch((err) => {
                    console.log(`Ocorreu um erro: ${err}`);
                });
        }
        getEditPerson();
    }

    return (
        <div className="readContainer">
            <form className="editForm" action="">
                <label>first name</label>
                <input type="text" ref={firstName} />
                <br />
                <label>last name</label>
                <input type="text" ref={lastName} />
                <br />
                <label>age</label>
                <input type="text" ref={age} />
                <br />
                <label>email</label>
                <input type="text" ref={email} />
                <br />
                <button>Save</button>
            </form>

            <table className="personTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {person.map((eachPerson) => {
                        return (
                            <tr key={eachPerson.id}>
                                <td>{eachPerson.id}</td>
                                <td>{eachPerson.first_name}</td>
                                <td>{eachPerson.last_name}</td>
                                <td>{eachPerson.age}</td>
                                <td>{eachPerson.email}</td>
                                <th>
                                    <button className="deleteButton">
                                        <img
                                            onClick={deletePerson}
                                            id={eachPerson.id}
                                            src="/delete.png"
                                            width="20px"
                                        />
                                    </button>
                                    <button className="editButton">
                                        <img
                                            onClick={editPerson}
                                            id={eachPerson.id}
                                            src="/edit.png"
                                            width="20px"
                                        />
                                    </button>
                                </th>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Read;
