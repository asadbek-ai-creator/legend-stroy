export default function Footer() {
  return (
    <>
      <footer className="footer-grid">
        <div>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div style={{ width: 40, height: 40, background: '#E8620A', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Unbounded', sans-serif", fontSize: 14, fontWeight: 900, color: '#fff', letterSpacing: '-1px' }}>LS</div>
            <div style={{ fontFamily: "'Unbounded', sans-serif", fontSize: 15, fontWeight: 700, color: '#fff', letterSpacing: '-0.3px', lineHeight: 1.1 }}>
              Legend Stroy
              <span style={{ color: '#E8620A', display: 'block', fontSize: 10, fontWeight: 400, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Строительные материалы</span>
            </div>
          </a>
          <p style={{ marginTop: 14, fontSize: 13, color: 'rgba(255,255,255,.3)', lineHeight: 1.8, maxWidth: 260 }}>
            Широкий ассортимент строительных материалов с доставкой на объект. Работаем с 2016 года.
          </p>
        </div>

        {[
          { title: 'Навигация', links: [['#catalog','Каталог'],['#about','О компании'],['#partners','Партнёры'],['#contact','Контакты']] },
          { title: 'Категории', links: [['#catalog','Краски и покрытия'],['#catalog','Кладочные материалы'],['#catalog','Гидроизоляция'],['#catalog','Крепёж и метизы'],['#catalog','Пиломатериалы'],['#catalog','Инструменты']] },
          { title: 'Контакты', links: [['tel:+998913034777','+998 (91) 303-47-77'],['mailto:linad-nukus@mail.ru','linad-nukus@mail.ru'],['#',"г. Нукус, ул. 60-летия Каракалпакстана, 17/1"],['#','Пн–Вс: 09:00 — 18:00']] },
        ].map(col => (
          <div key={col.title}>
            <h4 style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,.25)', marginBottom: 18 }}>{col.title}</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {col.links.map(([href, label]) => (
                <li key={label}>
                  <a href={href} style={{ textDecoration: 'none', fontSize: 13, color: 'rgba(255,255,255,.45)', transition: 'color .2s' }}
                    onMouseEnter={e => e.target.style.color='#E8620A'}
                    onMouseLeave={e => e.target.style.color='rgba(255,255,255,.45)'}
                  >{label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </footer>
      <div className="footer-bottom">
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,.2)' }}>© 2025 <em style={{ color: '#E8620A', fontStyle: 'normal' }}>Legend Stroy</em>. Все права защищены.</p>
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,.2)' }}>Строительные материалы — Нукус</p>
      </div>
    </>
  )
}
