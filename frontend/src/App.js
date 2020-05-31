import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username"/>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs"/>
          </div>
          
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude"/>
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude"/>
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/37749585?s=460&u=ceac6a0bfee92633798d78d3021aca008f491485&v=4" alt="Desenvolvedor"/>
              <div className="user-info">
                <strong>Rodrigo Barbosa</strong>
                <span>ReactJS, Node, Angular</span>
              </div>
            </header>
            <p>Desenvolvedor Full Stack. Apaixonado por tecnologias de desenvolvimento e como elas movem o mundo.</p>
            <a href="http://github.com/diego3g">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/37749585?s=460&u=ceac6a0bfee92633798d78d3021aca008f491485&v=4" alt="Desenvolvedor"/>
              <div className="user-info">
                <strong>Rodrigo Barbosa</strong>
                <span>ReactJS, Node, Angular</span>
              </div>
            </header>
            <p>Desenvolvedor Full Stack. Apaixonado por tecnologias de desenvolvimento e como elas movem o mundo.</p>
            <a href="http://github.com/diego3g">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/37749585?s=460&u=ceac6a0bfee92633798d78d3021aca008f491485&v=4" alt="Desenvolvedor"/>
              <div className="user-info">
                <strong>Rodrigo Barbosa</strong>
                <span>ReactJS, Node, Angular</span>
              </div>
            </header>
            <p>Desenvolvedor Full Stack. Apaixonado por tecnologias de desenvolvimento e como elas movem o mundo.</p>
            <a href="http://github.com/diego3g">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/37749585?s=460&u=ceac6a0bfee92633798d78d3021aca008f491485&v=4" alt="Desenvolvedor"/>
              <div className="user-info">
                <strong>Rodrigo Barbosa</strong>
                <span>ReactJS, Node, Angular</span>
              </div>
            </header>
            <p>Desenvolvedor Full Stack. Apaixonado por tecnologias de desenvolvimento e como elas movem o mundo.</p>
            <a href="http://github.com/diego3g">Acessar perfil no Github</a>
          </li>
        </ul>

      </main>
    </div>
  );
}

export default App;
