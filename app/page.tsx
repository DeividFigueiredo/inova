const capabilities = [
  {
    number: "01",
    title: "Planejamento",
    text: "Estratégias que conectam prioridades públicas, orçamento e impacto real.",
  },
  {
    number: "02",
    title: "Dados & controle",
    text: "Informação organizada para decisões mais rápidas, seguras e transparentes.",
  },
  {
    number: "03",
    title: "Transformação",
    text: "Processos mais simples, equipes preparadas e serviços que chegam melhor.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Inova - início">
          <span className="brand-mark">
            <img src="/inova-logo.jpeg" alt="Inova" />
          </span>
        </a>
        <nav className="main-nav" aria-label="Navegação principal">
          <a href="#atuacao">Atuação</a>
          <a href="#sobre">A Inova</a>
          <a href="#contato">Contato</a>
        </nav>
        <a className="header-cta" href="#contato">
          Fale com a Inova <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Inteligência para quem transforma</p>
          <h1>Gestão pública<br /><em>em movimento.</em></h1>
          <p className="hero-description">
            A Inova combina estratégia, dados e tecnologia para tornar decisões
            públicas mais claras, eficientes e conectadas às pessoas.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contato">Conheça nosso trabalho <span>↗</span></a>
            <a className="text-link" href="#atuacao">Ver áreas de atuação <span>↓</span></a>
          </div>
        </div>
        <div className="hero-aside">
          <div className="aside-rule" />
          <p>Estratégia que<br /><strong>gera impacto.</strong></p>
          <span className="aside-index">01 — 04</span>
        </div>
        <div className="hero-stamp" aria-hidden="true">INOVA<br /><span>2026</span></div>
      </section>

      <section className="intro-section" id="sobre">
        <div className="section-label">/ 01 — O nosso olhar</div>
        <div className="intro-content">
          <h2>O futuro da gestão pública pede <span>coragem para fazer diferente.</span></h2>
          <p>
            Governar é lidar com complexidade todos os dias. Por isso, criamos
            clareza onde existe ruído e movimento onde existe inércia. Somos
            parceiros de gestores que querem entregar mais, com método e visão.
          </p>
        </div>
        <div className="stat-row">
          <div><strong>+ impacto</strong><span>em cada decisão</span></div>
          <div><strong>1 direção</strong><span>para resultados reais</span></div>
          <div><strong>∞ possibilidades</strong><span>de transformar</span></div>
        </div>
      </section>

      <section className="capabilities-section" id="atuacao">
        <div className="section-heading">
          <div className="section-label">/ 02 — Como atuamos</div>
          <h2>Ideias que<br /><span>viram entrega.</span></h2>
        </div>
        <div className="capability-list">
          {capabilities.map((capability) => (
            <article className="capability" key={capability.number}>
              <span className="capability-number">{capability.number}</span>
              <div><h3>{capability.title}</h3><p>{capability.text}</p></div>
              <span className="capability-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contato">
        <div className="contact-tag">Vamos conversar?</div>
        <h2>O próximo avanço<br /><span>começa agora.</span></h2>
        <a className="contact-link" href="mailto:contato@inova.gestao.br">contato@inova.gestao.br <span>↗</span></a>
      </section>

      <footer className="site-footer">
        <span className="footer-logo">INOVA</span>
        <span>Inteligência em Gestão Pública</span>
        <span>© 2026 Inova</span>
      </footer>
    </main>
  );
}
