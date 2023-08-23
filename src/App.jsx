import logo from "./assets/logo.png";

function App() {
  return (
    <>
      <div className="geral">
        <div className="container">
          <form>
            <div className="inputContainer">
              <label htmlFor="email">Login</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Digite seu login"
              />
            </div>
            <div className="inputContainer">
              <label htmlFor="senha">Senha</label>
              <input
                type="senha"
                name="senha"
                id="senha"
                placeholder="Digite sua senha"
              />
            </div>
            <button className="button">Entrar</button>
            <a href="">Esqueceu sua senha?</a>
            <div className="footer">
              <p>Não tem uma conta?</p>
              <a href="">Criar uma conta</a>
            </div>
          </form>
        </div>
        <div className="direita"> 
         <img className="logo.png" src={logo} alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
