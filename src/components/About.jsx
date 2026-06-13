import { useEffect, useRef, useState } from 'react'

const listItems = [
  { num: '01', title: 'Широкий ассортимент', desc: '800+ позиций от ведущих брендов всегда в наличии' },
  { num: '02', title: 'Гарантия качества', desc: 'Все товары сертифицированы и проходят входной контроль' },
  { num: '03', title: 'Быстрая доставка', desc: 'Собственный автопарк — доставка по городу за 2 часа' },
  { num: '04', title: 'Оптовые условия', desc: 'Специальные цены и отсрочка для строительных компаний' },
]

function RevealDiv({ children, style, className }) {
  const ref = useRef(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect() } }, { threshold: 0.08 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return <div ref={ref} className={`reveal${className ? ' ' + className : ''}`} style={vis ? { ...style, opacity: 1, transform: 'translateY(0)' } : style}>{children}</div>
}

export default function About() {
  return (
    <section id="about" className="about-section">
      <div style={{ position: 'absolute', top: -100, right: -100, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,98,10,.12), transparent 70%)', pointerEvents: 'none' }}></div>

      <div className="about-grid">
        <RevealDiv>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#E8620A', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <span style={{ width: 24, height: 2, background: '#E8620A', display: 'inline-block' }}></span>
            О компании
          </div>
          <h2 className="text-fluid-h2" style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, letterSpacing: '-1.5px', color: '#fff', lineHeight: 1.05, marginBottom: 24 }}>
            МЫ СТРОИМ<em style={{ color: '#E8620A', fontStyle: 'normal', display: 'block' }}>ВАШЕ ДОВЕРИЕ</em>
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,.5)', lineHeight: 1.85, fontWeight: 300, marginBottom: 18, maxWidth: 440 }}>
            Legend Stroy — ваш надёжный поставщик строительных материалов с 2016 года. Работаем напрямую с производителями по всему региону.
          </p>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,.5)', lineHeight: 1.85, fontWeight: 300, maxWidth: 440 }}>
            Наш склад площадью 10 000 м² обеспечивает постоянное наличие товаров. Доставим на объект в день заказа.
          </p>
          <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column' }}>
            {listItems.map((item, i) => (
              <div key={item.num} style={{ display: 'flex', gap: 18, alignItems: 'flex-start', padding: '18px 0', borderBottom: '1px solid rgba(255,255,255,.07)', borderTop: i === 0 ? '1px solid rgba(255,255,255,.07)' : 'none' }}>
                <div style={{ fontFamily: "'Unbounded', sans-serif", fontSize: 11, fontWeight: 700, color: '#E8620A', letterSpacing: 1, minWidth: 26, paddingTop: 2 }}>{item.num}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 3 }}>{item.title}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </RevealDiv>

        <RevealDiv>
          <div className="about-stats-grid">
            {/* Full width — Склад */}
            <div className="about-stat-full"
              onMouseEnter={e => e.currentTarget.style.transform='translateY(-4px)'}
              onMouseLeave={e => e.currentTarget.style.transform='translateY(0)'}
            >
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 10, color: 'rgba(255,255,255,.65)' }}>Склад</div>
              <div className="about-stat-num" style={{ fontSize: 48, color: '#fff' }}>10 000</div>
              <div style={{ fontSize: 13, marginTop: 6, lineHeight: 1.5, color: 'rgba(255,255,255,.6)' }}>м² — постоянное наличие всех позиций</div>
            </div>
            {/* Товаров */}
            <div style={{ borderRadius: 14, padding: 28, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)', transition: 'transform .3s', cursor: 'default' }}
              onMouseEnter={e => e.currentTarget.style.transform='translateY(-4px)'}
              onMouseLeave={e => e.currentTarget.style.transform='translateY(0)'}
            >
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 10, color: 'rgba(255,255,255,.35)' }}>Товаров</div>
              <div className="about-stat-num" style={{ fontSize: 48, color: '#fff' }}>1000+</div>
              <div style={{ fontSize: 13, marginTop: 6, lineHeight: 1.5, color: 'rgba(255,255,255,.4)' }}>позиций в наличии</div>
            </div>
            {/* Доставка */}
            <div style={{ borderRadius: 14, padding: 28, background: 'transparent', border: '1px solid rgba(255,255,255,.1)', transition: 'transform .3s', cursor: 'default' }}
              onMouseEnter={e => e.currentTarget.style.transform='translateY(-4px)'}
              onMouseLeave={e => e.currentTarget.style.transform='translateY(0)'}
            >
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 10, color: 'rgba(255,255,255,.35)' }}>Доставка</div>
              <div className="about-stat-num" style={{ fontSize: 48, color: '#E8620A' }}>1 день</div>
              <div style={{ fontSize: 13, marginTop: 6, lineHeight: 1.5, color: 'rgba(255,255,255,.4)' }}>минимальный срок по городу</div>
            </div>
          </div>
        </RevealDiv>
      </div>
    </section>
  )
}
