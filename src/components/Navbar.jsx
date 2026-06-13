import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav
        className={`nav-container ${scrolled ? 'scrolled' : ''}`}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          transition: 'all .3s',
          background: scrolled ? 'rgba(247,245,242,.94)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid #E5E2DC' : 'none',
        }}
      >
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{
            width: 40, height: 40, background: '#E8620A', borderRadius: 10,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Unbounded', sans-serif", fontSize: 14, fontWeight: 900,
            color: '#fff', letterSpacing: '-1px',
          }}>LS</div>
          <div style={{ fontFamily: "'Unbounded', sans-serif", fontSize: 15, fontWeight: 700, color: '#1C1C1E', letterSpacing: '-0.3px', lineHeight: 1.1 }}>
            Legend Stroy
            <span style={{ color: '#E8620A', display: 'block', fontSize: 10, fontWeight: 400, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              Строительные материалы
            </span>
          </div>
        </a>

        <ul className="nav-links" style={{ display: 'flex', gap: 36, listStyle: 'none' }}>
          {[['#catalog','Каталог'],['#about','О нас'],['#partners','Партнёры'],['#contact','Контакты']].map(([href, label]) => (
            <li key={href}>
              <a href={href} style={{ textDecoration: 'none', color: '#3A3A3C', fontSize: 13, fontWeight: 500, letterSpacing: '0.3px', transition: 'color .2s' }}
                onMouseEnter={e => e.target.style.color='#E8620A'}
                onMouseLeave={e => e.target.style.color='#3A3A3C'}
              >{label}</a>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <a href="tel:+998913034777" className="nav-phone" style={{ fontSize: 13, fontWeight: 600, color: '#1C1C1E', textDecoration: 'none', borderBottom: '1.5px solid #E8620A', paddingBottom: 1 }}>
            +998 (91) 303-47-77
          </a>
          <a href="#contact"
            style={{ background: '#E8620A', color: '#fff', padding: '10px 22px', borderRadius: 8, fontSize: 12, fontWeight: 600, letterSpacing: '0.3px', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'all .2s' }}
            onMouseEnter={e => { e.target.style.background='#FF8040'; e.target.style.transform='translateY(-1px)' }}
            onMouseLeave={e => { e.target.style.background='#E8620A'; e.target.style.transform='translateY(0)' }}
          >
            Написать нам
          </a>
          <button className="hamburger" onClick={() => setMenuOpen(true)} aria-label="Меню">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button className="mobile-menu-close" onClick={closeMenu}>✕</button>
        {[['#catalog','Каталог'],['#about','О нас'],['#partners','Партнёры'],['#contact','Контакты']].map(([href, label]) => (
          <a key={href} href={href} onClick={closeMenu}>{label}</a>
        ))}
        <a href="tel:+998913034777" style={{ fontSize: 16, fontFamily: 'Geologica', letterSpacing: 0, fontWeight: 600, color: '#E8620A' }}>
          +998 (91) 303-47-77
        </a>
      </div>
    </>
  )
}
