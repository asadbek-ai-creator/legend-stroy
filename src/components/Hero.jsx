export default function Hero() {
  const images = [
    { src: 'https://plus.unsplash.com/premium_photo-1678812165213-12dc8d1f3e19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8cGFpbnQlMjBidWNrZXRzfGVufDB8fHx8MTc4MTM0MTUwNnww&ixlib=rb-4.1.0&q=80&w=600', label: 'Краски', badge: 'В наличии' },
    { src: 'https://plus.unsplash.com/premium_photo-1675103339078-88b54e155e71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8YnJpY2tzfGVufDB8fHx8MTc4MTM0MTUwNnww&ixlib=rb-4.1.0&q=80&w=600', label: 'Кирпич' },
    { src: 'https://plus.unsplash.com/premium_photo-1681989490797-dbe51c438b61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8Y29uc3RydWN0aW9uJTIwdG9vbHN8ZW58MHx8fHwxNzgxMzQxMzc5fDA&ixlib=rb-4.1.0&q=80&w=600', label: 'Инструменты' },
    { src: 'https://plus.unsplash.com/premium_photo-1683140589868-4f9b38110050?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8aW50ZXJpb3IlMjBmaW5pc2hpbmd8ZW58MHx8fHwxNzgxMzQxNTA2fDA&ixlib=rb-4.1.0&q=80&w=600', label: 'Отделка', badge: 'Новинки' },
  ]

  return (
    <section style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr', paddingTop: 80, overflow: 'hidden', position: 'relative', background: '#F7F5F2' }}>
      <div className="hero-left" style={{ padding: '80px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 600, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#E8620A', marginBottom: 28 }}>
          <span style={{ width: 24, height: 2, background: '#E8620A', display: 'inline-block' }}></span>
          Строительные материалы
        </div>

        <h1 style={{ fontFamily: "'Unbounded', sans-serif", fontSize: 'clamp(42px, 4.5vw, 68px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-2px', color: '#1C1C1E', marginBottom: 24 }}>
          ВСЁ ДЛЯ
          <em style={{ color: '#E8620A', fontStyle: 'normal', display: 'block' }}>ВАШЕЙ СТРОЙКИ</em>
        </h1>

        <p style={{ fontSize: 16, color: '#8E8E93', lineHeight: 1.8, fontWeight: 300, maxWidth: 420, marginBottom: 48 }}>
          Мы предлагаем вам любые виды строительных материалов.
        </p>

        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <a href="#catalog"
            style={{ background: '#E8620A', color: '#fff', padding: '15px 32px', borderRadius: 10, fontSize: 14, fontWeight: 600, textDecoration: 'none', transition: 'all .25s', display: 'inline-flex', alignItems: 'center', gap: 8 }}
            onMouseEnter={e => { e.currentTarget.style.background='#FF8040'; e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 12px 32px rgba(232,98,10,.3)' }}
            onMouseLeave={e => { e.currentTarget.style.background='#E8620A'; e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none' }}
          >Смотреть каталог →</a>
          <a href="#contact"
            style={{ background: 'transparent', color: '#1C1C1E', padding: '15px 32px', borderRadius: 10, fontSize: 14, fontWeight: 600, textDecoration: 'none', transition: 'all .25s', border: '1.5px solid #E5E2DC' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor='#E8620A'; e.currentTarget.style.color='#E8620A' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='#E5E2DC'; e.currentTarget.style.color='#1C1C1E' }}
          >Связаться с нами</a>
        </div>

        <div style={{ display: 'flex', gap: 40, marginTop: 64, paddingTop: 40, borderTop: '1px solid #E5E2DC' }}>
          {[['1000','Товаров в наличии',true],['10','Лет на рынке',false],['500','Клиентов',true]].map(([val, lbl, hasSup]) => (
            <div key={lbl}>
              <div style={{ fontFamily: "'Unbounded', sans-serif", fontSize: 30, fontWeight: 700, color: '#1C1C1E', lineHeight: 1 }}>
                {val}{hasSup && <sup style={{ fontSize: '.55em', color: '#E8620A' }}>+</sup>}
              </div>
              <div style={{ fontSize: 12, color: '#8E8E93', marginTop: 5, fontWeight: 400 }}>{lbl}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ position: 'relative', overflow: 'hidden', background: '#EDE8E0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', height: '100%', gap: 3 }}>
          {images.map((img, i) => (
            <div key={i} style={{ overflow: 'hidden', position: 'relative' }}
              onMouseEnter={e => e.currentTarget.querySelector('img').style.transform='scale(1.04)'}
              onMouseLeave={e => e.currentTarget.querySelector('img').style.transform='scale(1)'}
            >
              <img src={img.src} alt={img.label} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .6s ease', filter: 'saturate(.9)' }} />
              <span style={{ position: 'absolute', bottom: 12, left: 12, background: 'rgba(28,28,30,.75)', backdropFilter: 'blur(8px)', color: '#fff', fontSize: 11, fontWeight: 600, padding: '5px 12px', borderRadius: 20, letterSpacing: '0.5px' }}>
                {img.label}
              </span>
              {img.badge && (
                <span style={{ position: 'absolute', top: 14, right: 14, background: '#E8620A', color: '#fff', fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', padding: '4px 10px', borderRadius: 4 }}>
                  {img.badge}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
