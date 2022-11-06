/* eslint-disable */
import React from "react";
import "./Create.css";
import axios from "axios";
import { useForm } from "react-hook-form";

const Create = () => {
    const { register, handleSubmit } = useForm();

    async function onSubmit(personData) {
        const response = await axios.post("http://localhost:3000/person", {
            first_name: personData.first_name,
            last_name: personData.last_name,
            age: personData.age,
            email: personData.email,
        });

        console.log("Usuario cadastrado!");
    }

    return (
        <div className="createContainer">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Name
                    <br />
                    <input type="text" {...register("first_name")} />
                </label>
                <br />
                <label>
                    Last Name
                    <br />
                    <input type="text" {...register("last_name")} />
                </label>
                <br />
                <label>
                    Age
                    <br />
                    <input type="number" {...register("age")} />
                </label>
                <br />
                <label>
                    E-mail
                    <br />
                    <input type="text" {...register("email")} />
                </label>
                <br />
                <button className="createButton" type="submit">
                    Create
                </button>
            </form>
        </div>
    );
};

export default Create;
