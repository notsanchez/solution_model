import React from 'react';
import './style/style.sass'

function App() {
  return (
    <div >
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"/>

      <header id="main-banner">
        <div className="nav-container">
          <a href="#" className='brand'>
            <i className="fas fa-brain"></i>Example
          </a>
          <nav>
            <ul className="nav-container-navbar">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Serviços</a>
              </li>
              <li>
                <a href="">Contato</a>
              </li>
              <li>
                <a href="" className='btn btn-primary'>Entrar</a>
              </li>
              <li>
                <a href="" className='btn'>Registrar</a>
              </li>
            </ul>
          </nav>
          <i className="fas fa-bars"></i>
        </div>
        <div className="title-container">
          <h2>Nós desenvolvemos</h2>
          <h1>Proderosas Experiências</h1>
          <a href="#" className='btn btn-primary btn-rounded'>Fazer Orçamento</a>
        </div>
      </header>
      <main className="services-container">
        <h2>O que fazemos</h2>
        <div className="services-card-container">
          <div className="services-card">
            <i className="fab fa-buffer"></i>
              <h3>Desenvolvimento Full Stack</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quis similique odio repudiandae non, optio debitis minima laborum. Illo nam fugiat quam enim sunt nihil expedita animi! Molestias, iste possimus.</p>
            
          </div>
          <div className="services-card">
            <i className="fas fa-bolt"></i>
              <h3>Sites leves e rápidos</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quis similique odio repudiandae non, optio debitis minima laborum. Illo nam fugiat quam enim sunt nihil expedita animi! Molestias, iste possimus.</p>
            
          </div>
          <div className="services-card">
            <i className="fas fa-cart-plus"></i>
              <h3>E-commerces</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quis similique odio repudiandae non, optio debitis minima laborum. Illo nam fugiat quam enim sunt nihil expedita animi! Molestias, iste possimus.</p>
            
          </div>
          <div className="services-card">
            <i className="fas fa-chart-line"></i>
              <h3>SEO</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quis similique odio repudiandae non, optio debitis minima laborum. Illo nam fugiat quam enim sunt nihil expedita animi! Molestias, iste possimus.</p>
            
          </div>
          <div className="services-card">
            <i className="fas fa-chess-pawn"></i>
              <h3>Estratégias de Marketing</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quis similique odio repudiandae non, optio debitis minima laborum. Illo nam fugiat quam enim sunt nihil expedita animi! Molestias, iste possimus.</p>
          </div>
          <div className="services-card">
            <i className="fas fa-cloud"></i>
              <h3>Hospedagem AWS/Azure</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quis similique odio repudiandae non, optio debitis minima laborum. Illo nam fugiat quam enim sunt nihil expedita animi! Molestias, iste possimus.</p>
          </div>
        </div>
        <a href="#" className='btn btn-primary btn-rounded'>Veja todos os serviços</a>
      </main>
      <section className="jobs-container">
        <h2>Alguns de nossos trabalhos</h2>
        <div className="jobs-list">
          <div className="first-job" id='job1'>
            <div className="job-card-cover">
              <p className="job-card-title">Projeto 1</p>
              <p className="job-card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusantium suscipit, quidem fuga laboriosam sint voluptas, quis totam nisi, fugit magni culpa molestiae porro quaerat exercitationem harum aut et possimus?</p>
            </div>
          </div>
          <div className="other-jobs-container">
            <div className="job-card" id='job2'>
              <div className="job-card-cover">
                <p className="job-card-title">Projeto 2</p>
                <p className="job-card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusantium suscipit, quidem fuga laboriosam sint voluptas, quis totam nisi, fugit magni culpa molestiae porro quaerat exercitationem harum aut et possimus?</p>
              </div>
            </div>
            <div className="job-card" id='job3'>
              <div className="job-card-cover">
                <p className="job-card-title">Projeto 3</p>
                <p className="job-card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusantium suscipit, quidem fuga laboriosam sint voluptas, quis totam nisi, fugit magni culpa molestiae porro quaerat exercitationem harum aut et possimus?</p>
              </div>
            </div>
            <div className="job-card" id='job4'>
              <div className="job-card-cover">
                <p className="job-card-title">Projeto 4</p>
                <p className="job-card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusantium suscipit, quidem fuga laboriosam sint voluptas, quis totam nisi, fugit magni culpa molestiae porro quaerat exercitationem harum aut et possimus?</p>
              </div>
            </div>
            <div className="job-card" id='job5'>
              <div className="job-card-cover">
                <p className="job-card-title">Projeto 5</p>
                <p className="job-card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusantium suscipit, quidem fuga laboriosam sint voluptas, quis totam nisi, fugit magni culpa molestiae porro quaerat exercitationem harum aut et possimus?</p>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="footer-container">
            <div className="footer-desc-container">
              <h3 className="footer-title">Example</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, architecto. Error, aspernatur? Distinctio maiores, accusamus, consequatur vero animi ratione quia earum dicta atque eum maxime officiis a itaque eos! Aspernatur.</p>
            </div>
            <div className="footer-links-container">
              <div className="footer-links-container-list">
                <p className="footer-title">Links</p>
                <ul>
                  <li>
                    <a href="#">Base de conhecimentos</a>
                  </li>
                  <li>
                    <a href="#">Trabalhe conosco</a>
                  </li>
                  <li>
                    <a href="#">Ultimos projetos</a>
                  </li>
                  <li>
                    <a href="#">Politica de privacidade</a>
                  </li>
                  <li>
                    <a href="#">Contato</a>
                  </li>
                </ul>
              </div>
              <div className="footer-links-container-list">
                <p className="footer-title">Links</p>
                <ul>
                  <li>
                    <a href="#">Base de conhecimentos</a>
                  </li>
                  <li>
                    <a href="#">Trabalhe conosco</a>
                  </li>
                  <li>
                    <a href="#">Ultimos projetos</a>
                  </li>
                  <li>
                    <a href="#">Politica de privacidade</a>
                  </li>
                  <li>
                    <a href="#">Contato</a>
                  </li>
                </ul>
              </div>
              <div className="footer-links-container-list">
                <p className="footer-title">Links</p>
                <ul>
                  <li>
                    <a href="#">Base de conhecimentos</a>
                  </li>
                  <li>
                    <a href="#">Trabalhe conosco</a>
                  </li>
                  <li>
                    <a href="#">Ultimos projetos</a>
                  </li>
                  <li>
                    <a href="#">Politica de privacidade</a>
                  </li>
                  <li>
                    <a href="#">Contato</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-copy-right-container">
              <p>&copy; 2022 Example</p>
              <p>A melhor agencia web para seus projetos</p>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default App;
