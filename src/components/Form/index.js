import { ErrorMessage, Formik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { phoneNumber } from "../../utils/validations";

import "./styles.css";

export default function Form() {
  const [country, setCountry] = useState();
  const [city, setCity] = useState();

  useEffect(() => {
    fetch("https://amazon-api.sellead.com/country")
      .then((response) => response.json())
      .then((data) => setCountry(data));

    fetch(" https://amazon-api.sellead.com/city")
      .then((response) => response.json())
      .then((data) => setCity(data));
  }, []);

  const validations = Yup.object().shape({
    name: Yup.string().required("O nome é obrigatório!"),
    email: Yup.string()
      .email("Digite um Email Válido")
      .required("O Email é obrigatório!"),
    cpf: Yup.string().required("O CPF é obrigatório!"),
    country: Yup.string().required("O País é obrigatório!"),
    city: Yup.string().required("A Cidade é obrigatório!"),
    phone: Yup.string()
      .matches(phoneNumber, "Digita um numero correto")
      .required("O Telefone é obrigatório!"),
  });

  return (
    <div className="container">
      <Formik
        initialValues={{
          name: "",
          email: "",
          cpf: "",
          country: "",
          city: "",
          phone: "",
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
        validationSchema={validations}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <div className="content">
              <div className="user-details">
                <h2>Dados Pessoais</h2>
                <div className="input-box">
                  <label htmlFor="name">NOME</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    id="name"
                    onChange={props.handleChange}
                    value={props.values.name}
                  />
                  {props.errors.name && (
                    <div id="feedback">{props.errors.name}</div>
                  )}
                </div>
                <div className="input-box">
                  <label htmlFor="email">EMAIL</label>
                  <input
                    type="email"
                    placeholder="Fulano@fulano.com"
                    id="email"
                    onChange={props.handleChange}
                    value={props.values.email}
                  />
                  {props.errors.email && (
                    <div id="feedback">{props.errors.email}</div>
                  )}
                </div>

                <div className="input-box">
                  <label htmlFor="phone">TELEFONE</label>
                  <input
                    type="text"
                    placeholder="(82) 9XXXX-XXXX"
                    id="phone"
                    onChange={props.handleChange}
                    value={props.values.phone}
                  />
                  {props.errors.phone && (
                    <div id="feedback">{props.errors.phone}</div>
                  )}
                </div>
                <div className="input-box">
                  <label htmlFor="cpf">CPF</label>
                  <input
                    type="text"
                    placeholder="000.000.000-00"
                    id="cpf"
                    onChange={props.handleChange}
                    value={props.values.cpf}
                  />
                  {props.errors.cpf && (
                    <div id="feedback">{props.errors.cpf}</div>
                  )}
                </div>
              </div>
              <div className="destination">
                <h2>Destino</h2>
                <div className="input-box">
                  <label htmlFor="country">PAÍS</label>
                  <select
                    id="country"
                    className="select-input"
                    onChange={props.handleChange}
                    value={props.values.country}
                  >
                    <option value="">Selecione o País</option>
                    {country?.map(({ name }) => (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                  {props.errors.country && (
                    <div id="feedback">{props.errors.country}</div>
                  )}
                </div>
                <div className="input-box">
                  <label htmlFor="city">CIDADE</label>
                  <select
                    id="city"
                    className="select-input"
                    onChange={props.handleChange}
                    value={props.values.city}
                  >
                    <option value="">Selecione a Cidade</option>
                    {city?.map(({ name, id }) => (
                      <option key={id} value={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                  {props.errors.city && (
                    <div id="feedback">{props.errors.city}</div>
                  )}
                </div>
              </div>
            </div>
            <button type="submit" className="submit">
              Enviar
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
