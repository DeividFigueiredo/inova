"use client";

import { useEffect, useState } from "react";
import { brandPrinciples, contactInfo, servicePillars } from "./site-data";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePillar, setActivePillar] = useState(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 48);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const capabilityItems = document.querySelectorAll<HTMLElement>(".capability");

    if (!capabilityItems.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleItem = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleItem) {
          setActivePillar(Number((visibleItem.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: "-22% 0px -48% 0px", threshold: [0.25, 0.55, 0.8] },
    );

    capabilityItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [activePillar]);

  const selectedPillar = servicePillars[activePillar];

  return (
    <main>
      <header className={`site-header${isScrolled ? " site-header-scrolled" : ""}`}>
        <a className="brand" href="#top" aria-label="Inova - início">
          <span className="brand-mark">
            <span className="brand-name">INOVA</span>
            <span className="brand-tagline">Inteligência em Gestão Pública</span>
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
          <h1>Inteligência<br /><em>que entrega.</em></h1>
          <p className="hero-description">
            Estratégia, tecnologia e inteligência financeira para apoiar gestores
            públicos em decisões mais claras, eficientes e conectadas às pessoas.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contato">Conheça nosso trabalho <span>↗</span></a>
            <a className="text-link" href="#atuacao">Ver áreas de atuação <span>↓</span></a>
          </div>
        </div>
       
        
      </section>

      <section className="institutional-section" aria-label="Sobre a Inova">
        <div className="institutional-visual">
          <div className="institutional-visual-caption">
            <span className="visual-brand">INOVA <small>Inteligência em Gestão Pública</small></span>
            <span>gestão que transforma</span>
          </div>
        </div>
        <div className="institutional-copy">
          <p className="section-label">/ 00 — A Inova</p>
          <div className="institutional-title">INOVA <small>Inteligência em Gestão Pública</small></div>
          <p>
            Inteligência aplicada para fazer a gestão pública avançar com
            clareza, responsabilidade e impacto real.
          </p>
          <p>
            Unimos visão estratégica, tecnologia e rigor técnico para apoiar
            decisões que melhoram a vida das pessoas e fortalecem os
            territórios.
          </p>
          <a className="institutional-link" href="#atuacao">
            Conheça nossa atuação <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="intro-section" id="sobre">
        <div className="intro-content">
          <div className="intro-copy">
            <div className="section-label">/ 01 — O nosso olhar</div>
            <h2>Atuação ética que une <span>propósito e eficiência.</span></h2>
            <p>
              A Inova apoia órgãos e gestores públicos no aperfeiçoamento da
              governança, transformando desafios burocráticos em entregas
              concretas para a população.
            </p>
          </div>
          <div className="intro-visual" role="img" aria-label="Equipe reunida em uma sessão de planejamento e tomada de decisão" />
        </div>
        <div className="stat-row">
          <div className="stat-item"><span className="stat-icon" aria-hidden="true">◎</span><strong>Missão</strong><span>governança que entrega</span></div>
          <div className="stat-item"><span className="stat-icon" aria-hidden="true">◌</span><strong>Visão</strong><span>inovação aplicada ao público</span></div>
          <div className="stat-item"><span className="stat-icon" aria-hidden="true">✦</span><strong>Valores</strong><span>rigor, integridade e impacto</span></div>
        </div>
      </section>

      <section className="principles-section" aria-label="Princípios da Inova">
        <article><span className="principle-number">01</span><h3>Nossa missão</h3><p>{brandPrinciples.mission}</p></article>
        <article><span className="principle-number">02</span><h3>Nossa visão</h3><p>{brandPrinciples.vision}</p></article>
        <article><span className="principle-number">03</span><h3>Nossos valores</h3><p>{brandPrinciples.values.join(" / ")}</p></article>
      </section>

      <section className="capabilities-section" id="atuacao">
        <div className="section-heading">
          <div className="section-label">/ 02 — Como atuamos</div>
          <h2>Três frentes<br /><span>para transformar.</span></h2>
        </div>
        <div className="capability-story">
          <div key={selectedPillar.number} className="capability-visual" style={{ backgroundImage: `linear-gradient(145deg, rgba(17,18,20,.08), rgba(17,18,20,.7)), url(${selectedPillar.image})` }}>
            <div className="capability-visual-caption">
              <span>{selectedPillar.number} / 03</span>
              <strong>{selectedPillar.title}</strong>
            </div>
          </div>
          <div className="capability-list">
            {servicePillars.map((pillar, index) => (
              <article className={`capability${activePillar === index ? " capability-active" : ""}`} data-index={index} key={pillar.number}>
                <button className="capability-trigger" type="button" onClick={() => setActivePillar(index)} aria-pressed={activePillar === index}>
                  <span className="capability-number">{pillar.number}</span>
                  <h3>{pillar.title}</h3>
                  <span className="capability-arrow" aria-hidden="true">↗</span>
                </button>
                <div className="capability-panel" id={`capability-panel-${pillar.number}`}>
                  <div className="capability-panel-copy">
                    <p>{pillar.text}</p>
                    <ul>{pillar.services.map((service) => <li key={service}>{service}</li>)}</ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contato">
        <div className="contact-index">03 — CONTATO</div>
        <div className="contact-tag">Vamos conversar?</div>
        <h2>O próximo avanço<br /><span>começa agora.</span></h2>
        <p className="contact-description">Conte-nos o desafio. Pensamos juntos no próximo avanço.</p>
        <a className="contact-link" href={`mailto:${contactInfo.email}`}>
          {contactInfo.email} <span>↗</span>
        </a>
      </section>

      <footer className="site-footer">
        <span className="footer-logo">INOVA <small>Inteligência em Gestão Pública</small></span>
        <span>Inteligência em Gestão Pública</span>
        <span>© 2026 Inova</span>
      </footer>
    </main>
  );
}
