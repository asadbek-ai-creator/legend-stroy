import { useEffect, useRef, useState } from 'react'

const partners = [
  { type: 'Генеральный подрядчик', name: 'СтройМастер', text: 'Legend Stroy обеспечивает все наши объекты материалами с нужными характеристиками и в нужные сроки. Надёжный партнёр на протяжении 4 лет.', years: '4 года', badge: 'Ключевой партнёр' },
  { type: 'Жилищное строительство', name: 'НовоДом', text: 'Широкий ассортимент, быстрая доставка и лояльные условия оплаты — именно то, что нужно строительной компании. Рекомендуем.', years: '3 года', badge: 'Постоянный клиент' },
  { type: 'Промышленное строительство', name: 'ПромБилд', text: 'Сотрудничаем по поставке промышленных покрытий и специализированного крепежа для производственных объектов. Качество на высоте.', years: '2 года', badge: 'Официальный партнёр' },
]

function PartnerCard({ partner }) {
  const ref = useRef(null)
  const [vis, setVis] = useState(false)
  const [hov, setHov] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect() } }, { threshold: 0.08 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="pcard reveal" style={vis ? { opacity: 1, transform: 'translateY(0)' } : {}}>
      <div
        style={{
          background: '#fff', border: hov ? '1px solid transparent' : '1px solid #E5E2DC',
          borderRadius: 14, padding: 32, transition: 'all .3s',
          transform: hov ? 'translateY(-4px)' : 'none',
          boxShadow: hov ? '0 16px 48px rgba(28,28,30,.1)' : 'none',
        }}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
      >
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#8E8E93', marginBottom: 14 }}>{partner.type}</div>
        <div style={{ fontFamily: "'Unbounded', sans-serif", fontSize: 20, fontWeight: 700, color: '#1C1C1E', marginBottom: 12, letterSpacing: '-0.5px' }}>{partner.name}</div>
        <div style={{ fontSize: 13, color: '#8E8E93', lineHeight: 1.75, marginBottom: 20 }}>{partner.text}</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 16, borderTop: '1px solid #E5E2DC' }}>
          <div style={{ fontFamily: "'Unbounded', sans-serif", fontSize: 18, fontWeight: 700, color: '#E8620A' }}>{partner.years}</div>
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', color: '#3A3A3C', background: '#EDE8E0', padding: '5px 12px', borderRadius: 4 }}>{partner.badge}</div>
        </div>
      </div>
    </div>
  )
}

export default function Partners() {
  const headRef = useRef(null)
  const [headVis, setHeadVis] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setHeadVis(true); obs.disconnect() } }, { threshold: 0.08 })
    if (headRef.current) obs.observe(headRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="partners" className="section-padding" style={{ background: '#F7F5F2' }}>
      <div ref={headRef} className={`partners-head reveal${headVis ? ' vis' : ''}`}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#E8620A', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <span style={{ width: 24, height: 2, background: '#E8620A', display: 'inline-block' }}></span>
            Партнёры
          </div>
          <h2 className="text-fluid-h2" style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, letterSpacing: '-1.5px', color: '#1C1C1E', lineHeight: 1.05 }}>
            НАДЁЖНЫЕ<em style={{ color: '#E8620A', fontStyle: 'normal', display: 'block' }}>ПАРТНЁРЫ</em>
          </h2>
        </div>
        <p style={{ fontSize: 15, color: '#8E8E93', lineHeight: 1.8, fontWeight: 300 }}>
          Долгосрочные партнёрские отношения с ведущими строительными компаниями — основа нашей репутации.
        </p>
      </div>

      <div className="grid-3">
        {partners.map(p => <PartnerCard key={p.name} partner={p} />)}
      </div>
    </section>
  )
}
