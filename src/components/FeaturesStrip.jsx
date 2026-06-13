const features = [
  { num: '1000+', title: 'Позиций товаров', desc: 'Постоянно в наличии на складе' },
  { num: '1 день', title: 'Доставка', desc: 'Быстрая доставка на объект' },
  { num: '100%', title: 'Сертификация', desc: 'Все товары с сертификатами' },
  { num: '10 лет', title: 'Опыт работы', desc: 'Надёжный партнёр для строителей' },
]

export default function FeaturesStrip() {
  return (
    <div className="feature-strip">
      {features.map((f, i) => (
        <div key={i} className="feature-card"
          onMouseEnter={e => e.currentTarget.style.background='rgba(255,255,255,.03)'}
          onMouseLeave={e => e.currentTarget.style.background='transparent'}
        >
          <div style={{ fontFamily: "'Unbounded', sans-serif", fontSize: 28, fontWeight: 700, color: '#E8620A', marginBottom: 8 }}>{f.num}</div>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 5 }}>{f.title}</div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', lineHeight: 1.6 }}>{f.desc}</div>
        </div>
      ))}
    </div>
  )
}
