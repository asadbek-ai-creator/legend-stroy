import { useEffect, useRef, useState } from 'react'

function RevealDiv({ children, style }) {
  const ref = useRef(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect() } }, { threshold: 0.08 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return <div ref={ref} className="reveal" style={vis ? { ...style, opacity: 1, transform: 'translateY(0)' } : style}>{children}</div>
}

const inputStyle = {
  width: '100%', background: '#F7F5F2', border: '1.5px solid #E5E2DC',
  borderRadius: 8, padding: '13px 15px', color: '#1C1C1E',
  fontFamily: "'Geologica', sans-serif", fontSize: 14, fontWeight: 400,
  outline: 'none', transition: 'border-color .2s', WebkitAppearance: 'none', boxSizing: 'border-box',
}

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', company: '', phone: '', category: '', message: '' })

  const handleSubmit = () => {
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleFocus = e => { e.target.style.borderColor = '#E8620A'; e.target.style.boxShadow = '0 0 0 3px rgba(232,98,10,.08)' }
  const handleBlur = e => { e.target.style.borderColor = '#E5E2DC'; e.target.style.boxShadow = 'none' }

  return (
    <section id="contact" className="section-padding" style={{ background: '#EDE8E0' }}>
      <div className="contact-grid">
        <RevealDiv>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#E8620A', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <span style={{ width: 24, height: 2, background: '#E8620A', display: 'inline-block' }}></span>
            Контакты
          </div>
          <h2 style={{ fontFamily: "'Unbounded', sans-serif", fontSize: 'clamp(28px, 2.5vw, 42px)', fontWeight: 800, letterSpacing: '-1.5px', color: '#1C1C1E', lineHeight: 1.1, marginBottom: 18 }}>
            СВЯЖИТЕСЬ<em style={{ color: '#E8620A', fontStyle: 'normal', display: 'block' }}>С НАМИ</em>
          </h2>
          <p style={{ fontSize: 15, color: '#8E8E93', lineHeight: 1.85, fontWeight: 300, marginBottom: 40 }}>
            Наш менеджер ответит в течение часа и поможет подобрать нужные материалы по оптимальной цене.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              ['Телефон', <a href="tel:+998913034777" style={{ color: '#1C1C1E', textDecoration: 'none' }} onMouseEnter={e=>e.target.style.color='#E8620A'} onMouseLeave={e=>e.target.style.color='#1C1C1E'}>+998 (91) 303-47-77</a>],
              ['Email', <a href="mailto:linad-nukus@mail.ru" style={{ color: '#1C1C1E', textDecoration: 'none' }} onMouseEnter={e=>e.target.style.color='#E8620A'} onMouseLeave={e=>e.target.style.color='#1C1C1E'}>linad-nukus@mail.ru</a>],
              ['Адрес', "г. Нукус, ул. 60-летия Каракалпакстана, 17/1"],
              ['Режим', 'Пн–Вс: 09:00 — 18:00'],
            ].map(([key, val], i) => (
              <div key={key} style={{ display: 'flex', gap: 16, padding: '16px 0', borderBottom: '1px solid rgba(28,28,30,.1)', borderTop: i === 0 ? '1px solid rgba(28,28,30,.1)' : 'none' }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#8E8E93', minWidth: 90, paddingTop: 1 }}>{key}</div>
                <div style={{ fontSize: 15, color: '#1C1C1E', fontWeight: 500 }}>{val}</div>
              </div>
            ))}
          </div>
        </RevealDiv>

        <RevealDiv style={{ background: '#fff', borderRadius: 16, padding: 40, boxShadow: '0 8px 40px rgba(28,28,30,.08)' }}>
          <h3 style={{ fontFamily: "'Unbounded', sans-serif", fontSize: 18, fontWeight: 700, color: '#1C1C1E', letterSpacing: '-0.5px', marginBottom: 28 }}>Написать нам</h3>

          <div className="form-2col">
            <div>
              <label style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#8E8E93', marginBottom: 7 }}>Имя</label>
              <input type="text" placeholder="Ваше имя" style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#8E8E93', marginBottom: 7 }}>Компания</label>
              <input type="text" placeholder="Название" style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
            </div>
          </div>

          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#8E8E93', marginBottom: 7 }}>Телефон</label>
            <input type="tel" placeholder="+998 (__) ___-__-__" style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
          </div>

          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#8E8E93', marginBottom: 7 }}>Интересует</label>
            <select style={inputStyle} onFocus={handleFocus} onBlur={handleBlur}>
              <option value="">Выберите категорию</option>
              <option>Краски и покрытия</option>
              <option>Кладочные материалы</option>
              <option>Гидроизоляция</option>
              <option>Крепёж и метизы</option>
              <option>Пиломатериалы</option>
              <option>Инструменты</option>
              <option>Общий вопрос</option>
            </select>
          </div>

          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#8E8E93', marginBottom: 7 }}>Сообщение</label>
            <textarea placeholder="Опишите ваш запрос..." style={{ ...inputStyle, resize: 'vertical', minHeight: 100 }} onFocus={handleFocus} onBlur={handleBlur}></textarea>
          </div>

          <button onClick={handleSubmit}
            style={{
              width: '100%', background: submitted ? '#2D6A4F' : '#E8620A', color: '#fff',
              border: 'none', borderRadius: 8, padding: 15,
              fontFamily: "'Unbounded', sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: '0.5px',
              cursor: 'pointer', transition: 'all .25s', marginTop: 6,
            }}
            onMouseEnter={e => { if (!submitted) { e.target.style.background='#FF8040'; e.target.style.transform='translateY(-2px)'; e.target.style.boxShadow='0 8px 24px rgba(232,98,10,.3)' } }}
            onMouseLeave={e => { if (!submitted) { e.target.style.background='#E8620A'; e.target.style.transform='translateY(0)'; e.target.style.boxShadow='none' } }}
          >
            {submitted ? '✓ Сообщение отправлено!' : 'Отправить сообщение →'}
          </button>
        </RevealDiv>
      </div>
    </section>
  )
}
