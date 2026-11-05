import { useEffect, useState } from 'react'
import { ServiceIcon } from './components/ServiceIcon'
import { copy, type Language } from './i18n'
import { supabaseConfiguration } from './lib/supabase'

function Arrow() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6" /></svg>
}

export default function App() {
  const [language, setLanguage] = useState<Language>('zh')
  const text = copy[language]

  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en'
    document.title = `${text.brand} · ${language === 'zh' ? 'CSNS Community' : 'Membership & Events'}`
  }, [language, text.brand])

  return (
    <>
      <a className="skip-link" href="#main">{text.skip}</a>
      <header className="site-header page-width">
        <a href="#main" className="brand" aria-label={text.brand}>
          <span className="brand-mark" aria-hidden="true">华</span>
          <span><strong>{text.brand}</strong><small>{text.brandDetail}</small></span>
        </a>
        <nav aria-label={language === 'zh' ? '主导航' : 'Main navigation'}>
          <a className="services-link" href="#services">{text.servicesLink}</a>
          <a className="about-link" href="https://cs-ns.com/" target="_blank" rel="noreferrer">{text.aboutLink}<span aria-hidden="true"> ↗</span></a>
          <button className="language-button" type="button" aria-label={text.languageLabel} onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}>
            <span aria-hidden="true">◎</span> {language === 'zh' ? 'English' : '中文'}
          </button>
        </nav>
      </header>

      <main id="main">
        <section className="hero page-width" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" />{text.eyebrow}</p>
            <h1 id="hero-title">{text.title[0]}<br /><span>{text.title[1]}</span></h1>
            <p className="introduction">{text.introduction}</p>
            <a className="primary-link" href="#services">{text.explore}<Arrow /></a>
            <p className="location"><span aria-hidden="true">⌖</span>{text.location}<span className="location-rule" /><span>{text.preparing}</span></p>
          </div>

          <div className="card-scene">
            <div className="scene-ring ring-one" /><div className="scene-ring ring-two" />
            <div className="membership-card" role="img" aria-label={text.cardLabel}>
              <div className="card-top"><span>CSNS<span className="card-period">.</span></span><span className="card-flower" aria-hidden="true">✳</span></div>
              <div className="card-middle"><p>{text.cardLabel}</p><h2>{text.cardTitle}</h2><span className="card-art" aria-hidden="true"><i /><i /><i /><i /></span></div>
              <div className="card-bottom"><span>{text.cardName}</span><span>HALIFAX, NS</span></div>
            </div>
            <div className="card-caption"><span className="caption-line" />{text.cardNote}</div>
          </div>
        </section>

        <section className="services-section" id="services" aria-labelledby="services-title">
          <div className="page-width">
            <div className="section-heading"><div><p className="eyebrow">{text.servicesEyebrow}</p><h2 id="services-title">{text.servicesTitle}</h2></div><p>{text.servicesDescription}</p></div>
            <div className="service-grid">
              {text.services.map((service, index) => (
                <article className="service-card" key={service.icon}>
                  <div className="service-card-top"><span className="service-icon"><ServiceIcon name={service.icon} /></span><span className="service-number">0{index + 1}</span></div>
                  <h3>{service.title}</h3><p>{service.description}</p><span className="upcoming">{text.upcoming}<span aria-hidden="true">↗</span></span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="community-section page-width" aria-labelledby="community-title"><div><p className="eyebrow">CONNECTED BY COMMUNITY</p><h2 id="community-title">{text.communityTitle}</h2><p>{text.communityDescription}</p></div><div className="community-tags">{text.communityTags.map(tag => <span key={tag}><span aria-hidden="true">✓</span>{tag}</span>)}</div></section>
      </main>

      <footer className="site-footer page-width"><span className="footer-name">CSNS<span> Community</span></span><p>{text.footer}</p><small>{text.prototype}</small></footer>

      {import.meta.env.DEV && <aside className="developer-status" aria-label="Local development status">FEAT-001 · Supabase configuration: {supabaseConfiguration.status}{supabaseConfiguration.status === 'ready' ? ' (connectivity not checked)' : ''}</aside>}
    </>
  )
}
