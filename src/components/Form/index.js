import "./styles.css";

export default function Form() {
  return (
    <div className="container">
      <form>
        <div className="content">
          <div className="user-details">
            <h2>Dados Pessoais</h2>
            <div className="input-box">
              <label htmlFor="name">NOME</label>
              <input
                type="text"
                required
                placeholder="Digite Seu Nome"
                id="name"
              />
            </div>
            <div className="input-box">
              <label htmlFor="email">EMAIL</label>
              <input
                type="email"
                required
                placeholder="Digite Seu Email"
                id="email"
              />
            </div>
            <div className="input-box">
              <label htmlFor="tel">TELEFONE</label>
              <input
                type="tel"
                required
                placeholder="Digite Seu Telefone"
                id="tel"
              />
            </div>
            <div className="input-box">
              <label htmlFor="cpf">CPF</label>
              <input
                type="text"
                required
                placeholder="Digite Seu CPF"
                id="cpf"
              />
            </div>
          </div>
          <div className="destination">
            <h2>Destino</h2>
            <div className="input-box">
              <label htmlFor="country">PAÍS</label>
              <select id="country" className="select-input" required>
                <option value="">Selecione o País</option>
              </select>
            </div>
            <div className="input-box">
              <label htmlFor="city">Cidade</label>
              <select id="city" className="select-input" required>
                <option value="">Selecione a Cidade</option>
              </select>
            </div>
          </div>
        </div>
        <button className="submit">Enviar</button>
      </form>
    </div>
  );
}
