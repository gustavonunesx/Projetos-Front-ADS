import React, { useState } from "react";

import "./Cadastro.css";

function Cadastro({contacts, setContacts}) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const addContact = async () => {
        try {
            const response = await fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    name: name,
                    phone: phone
                })
            });

            const data = await response.json();
            console.log("Contato Criado com Sucesso!", data);
        } catch (error) {
            console.error("Erro: Erro ao cadastrar o contato!", error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !phone.trim()) {
            return; 
        }
    }

    return (
        <div className="cadastro-container">
            <h2>Cadastrar Contato</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Nome:"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input 
                    type="text"
                    placeholder="Telefone:"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <button type="submit" onClick={addContact}>Salvar</button>
            </form>
        </div>
    );
}

export default Cadastro;