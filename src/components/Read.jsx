/* eslint-disable */

import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Read.css";

const Read = () => {
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

    function editPerson() {}

    return (
        <div className="readContainer">
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
                                    <button
                                        onClick={deletePerson}
                                        className="deleteButton"
                                    >
                                        <img
                                            id={eachPerson.id}
                                            src="/delete.png"
                                            width="20px"
                                        />
                                    </button>
                                    <button
                                        onClick={editPerson}
                                        className="editButton"
                                    >
                                        <img
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
