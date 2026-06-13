import { useState, useEffect, useRef } from 'react'

const categories = [
  { id: 'all', label: 'Все товары' },
  { id: 'paint', label: 'Краски и покрытия' },
  { id: 'masonry', label: 'Кладочные материалы' },
  { id: 'hydro', label: 'Гидроизоляция' },
  { id: 'fastener', label: 'Крепёж и метизы' },
  { id: 'wood', label: 'Пиломатериалы' },
  { id: 'tools', label: 'Инструменты' },
]

const products = [
  { cat: 'masonry', img: 'https://plus.unsplash.com/premium_photo-1681589433879-c823909b13be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8cGxhc3RlcmluZyUyMHdhbGx8ZW58MHx8fHwxNzgxMzQxNTA2fDA&ixlib=rb-4.1.0&q=80&w=600', badge: 'Кладочные', newBadge: 'Хит', brand: 'KNAUF', name: 'Ротбанд', desc: 'Флагманская универсальная гипсовая штукатурка для выравнивания стен и потолков внутри помещений. Обеспечивает гладкую поверхность, часто не требующую дополнительного шпаклевания.' },
  { cat: 'masonry', img: 'https://plus.unsplash.com/premium_photo-1681589433879-c823909b13be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8cGxhc3RlcmluZ3xlbnwwfHx8fDE3ODEzNDE1MDZ8MA&ixlib=rb-4.1.0&q=80&w=600', badge: 'Кладочные', brand: 'ELERON', name: 'Гипсовая шпаклевка', desc: 'Мелкофракционный материал для внутренней отделки сухих помещений. Создаёт идеально гладкие стены и потолки под покраску, обои или декоративную штукатурку.' },
  { cat: 'masonry', img: 'https://plus.unsplash.com/premium_photo-1670475328127-635b170a830b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8Y29uY3JldGUlMjBmbG9vcnxlbnwwfHx8fDE3ODEzNDE1MDV8MA&ixlib=rb-4.1.0&q=80&w=600', badge: 'Кладочные', brand: 'ELERON', name: 'Наливной пол гипсовый', desc: 'Высокопрочный и износостойкий наливной пол. Выдерживает большие нагрузки, подходит для помещений с высокой проходимостью.' },
  { cat: 'masonry', img: 'https://plus.unsplash.com/premium_photo-1661322610748-32b33eada183?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8ZHJ5d2FsbHxlbnwwfHx8fDE3ODEzNDE1MDV8MA&ixlib=rb-4.1.0&q=80&w=600', badge: 'Кладочные', brand: 'KNAUF', name: 'Гипсокартонный лист', desc: 'Строительно-отделочный материал для облицовки стен, перегородок и декоративных конструкций. Обеспечивает звукопоглощение.' },
  { cat: 'paint', img: 'https://plus.unsplash.com/premium_photo-1726826693849-208029303ce0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8cHJpbWVyJTIwcGFpbnR8ZW58MHx8fHwxNzgxMzQxNTA2fDA&ixlib=rb-4.1.0&q=80&w=600', badge: 'Краски', brand: 'KNAUF', name: 'Мультигрунд', desc: 'Универсальная грунтовка для обработки поверхностей из бетона, кирпича, гипса и цемента. Снижает впитывающую способность основания.' },
  { cat: 'paint', img: 'https://plus.unsplash.com/premium_photo-1681487367144-3ac7acfead6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8cHJpbWVyJTIwYnVja2V0fGVufDB8fHx8MTc4MTM0MTUwNnww&ixlib=rb-4.1.0&q=80&w=600', badge: 'Краски', brand: 'KNAUF', name: 'Тифенгрунд', desc: 'Паропроницаемая грунтовка глубокого проникновения. Укрепляет мелящиеся поверхности, улучшает адгезию перед шпаклевкой и покраской.' },
  { cat: 'hydro', img: 'https://plus.unsplash.com/premium_photo-1681589434276-356f2a909d41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8d2F0ZXJwcm9vZmluZ3xlbnwwfHx8fDE3ODEzNDE1MDV8MA&ixlib=rb-4.1.0&q=80&w=600', badge: 'Гидроизоляция', brand: 'KNAUF', name: 'Флэхендихт', desc: 'Гидроизоляция для влажных помещений: ванных, душевых. Защищает чувствительные к влаге основания из гипса и гипсокартона.' },
  { cat: 'fastener', img: 'https://plus.unsplash.com/premium_photo-1682144577628-72dec59f91aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8bWV0YWwlMjBwcm9maWxlfGVufDB8fHx8MTc4MTM0MTUwNnww&ixlib=rb-4.1.0&q=80&w=600', badge: 'Крепёж', brand: 'UNI', name: 'Профиль для гипсокартона', desc: 'Металлические элементы из оцинкованной стали для монтажа каркаса. Толщина 0.4–0.6 мм, делятся на потолочные, стеновые и угловые виды.' },
  { cat: 'fastener', img: 'https://plus.unsplash.com/premium_photo-1673208484535-66a8f7d05294?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8bWV0YWwlMjBzdHVkc3xlbnwwfHx8fDE3ODEzNDE1MDZ8MA&ixlib=rb-4.1.0&q=80&w=600', badge: 'Крепёж', brand: 'UNI', name: 'Направляющие профили', desc: 'Оцинкованные П-образные профили для формирования жёсткого каркаса стен и потолков. Задают плоскость и распределяют нагрузку.' },
  { cat: 'masonry', img: 'https://plus.unsplash.com/premium_photo-1683121110421-2619f41ac5d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8cm9ckJTIwd29vbCUyMGluc3VsYXRpb258ZW58MHx8fHwxNzgxMzQxNTA2fDA&ixlib=rb-4.1.0&q=80&w=600', badge: 'Кладочные', newBadge: 'Новинка', brand: 'KNAUF', name: 'Базальтовая вата Knauf Insulation', desc: 'Высокоэффективный экологичный утеплитель из горных пород по технологии ECOSE®. Обеспечивает тепло- и шумоизоляцию.' },
  { cat: 'fastener', img: 'https://plus.unsplash.com/premium_photo-1754561936024-f788d54addc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8ZmliZXJnbGFzcyUyMG1lc2glMjB0YXBlfGVufDB8fHx8MTc4MTM0MTUwNnww&ixlib=rb-4.1.0&q=80&w=600', badge: 'Крепёж', brand: 'KNAUF', name: 'Серпянка Knauf', desc: 'Армирующая лента из стекловолокна с самоклеящимся слоем. Предотвращает растрескивание шпаклевки на стыках и углах конструкций.' },
  { cat: 'paint', img: 'https://plus.unsplash.com/premium_photo-1664303562514-3a923e14732e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8aW50ZXJpb3IlMjBwYWludCUyMGJ1Y2tldHxlbnwwfHx8fDE3ODEzNDE1MDZ8MA&ixlib=rb-4.1.0&q=80&w=600', badge: 'Краски', brand: 'Alina Paint', name: 'Краска Alina Paint', desc: 'Экологичные акриловые и водоэмульсионные составы для внутренних и наружных работ. Высокая укрывистость и стойкость к выгоранию.' },
  { cat: 'paint', img: 'https://plus.unsplash.com/premium_photo-1726826693849-208029303ce0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8ZGVjb3JhdGl2ZSUyMHBhaW50fGVufDB8fHx8MTc4MTM0MTUwNnww&ixlib=rb-4.1.0&q=80&w=600', badge: 'Краски', newBadge: 'Новинка', brand: 'Bianco', name: 'Отточенто Бьянко', desc: 'Паропроницаемая краска с эффектом бархата или шелка. Меняет оттенок при разном освещении, имитируя роскошную велюровую ткань.' },
  { cat: 'paint', img: 'https://plus.unsplash.com/premium_photo-1675747812144-fdc9926d451d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8dHJhdmVydGluZSUyMHBsYXN0ZXJ8ZW58MHx8fHwxNzgxMzQxNTA1fDA&ixlib=rb-4.1.0&q=80&w=600', badge: 'Краски', brand: 'Sobsan', name: 'Сабсан травертин', desc: 'Декоративная штукатурка для имитации природного камня травертина. Подходит для фасадов и интерьеров, высокая паропроницаемость и долговечность.' },
]

function ProductCard({ product }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.08 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="reveal"
      style={visible ? { opacity: 1, transform: 'translateY(0)' } : {}}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        background: '#fff', borderRadius: 14, overflow: 'hidden',
        border: hovered ? '1px solid transparent' : '1px solid #E5E2DC',
        transition: 'all .3s', cursor: 'pointer',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? '0 20px 50px rgba(28,28,30,.12)' : 'none',
      }}>
        <div style={{ width: '100%', aspectRatio: '4/3', overflow: 'hidden', position: 'relative', background: '#EDE8E0' }}>
          <img src={product.img} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .5s ease', transform: hovered ? 'scale(1.06)' : 'scale(1)' }} />
          <span style={{ position: 'absolute', top: 10, left: 10, background: 'rgba(28,28,30,.7)', backdropFilter: 'blur(6px)', color: '#fff', fontSize: 10, fontWeight: 600, padding: '4px 10px', borderRadius: 20, letterSpacing: '0.5px' }}>
            {product.badge}
          </span>
          {product.newBadge && (
            <span style={{ position: 'absolute', top: 10, right: 10, background: '#2D6A4F', color: '#fff', fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', padding: '4px 9px', borderRadius: 4 }}>
              {product.newBadge}
            </span>
          )}
        </div>
        <div style={{ padding: '18px 18px 20px' }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#8E8E93', marginBottom: 5 }}>{product.brand}</div>
          <div style={{ fontSize: 15, fontWeight: 600, color: '#1C1C1E', lineHeight: 1.3, marginBottom: 8 }}>{product.name}</div>
          <div style={{ fontSize: 12, color: '#8E8E93', lineHeight: 1.6, fontWeight: 300, marginBottom: 14 }}>{product.desc}</div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 14, borderTop: '1px solid #E5E2DC' }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: '#E8620A', textTransform: 'uppercase', letterSpacing: '0.8px' }}>Узнать цену</span>
            <div style={{ width: 30, height: 30, background: hovered ? '#E8620A' : '#EDE8E0', color: hovered ? '#fff' : '#1C1C1E', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, transition: 'all .2s' }}>→</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Catalog() {
  const [activeCat, setActiveCat] = useState('all')
  const filtered = activeCat === 'all' ? products : products.filter(p => p.cat === activeCat)

  return (
    <section id="catalog" className="section-padding">
      <div className="catalog-header">
        <div>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#E8620A', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <span style={{ width: 24, height: 2, background: '#E8620A', display: 'inline-block' }}></span>
            Наши товары
          </div>
          <h2 className="text-fluid-h2" style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 800, letterSpacing: '-1.5px', color: '#1C1C1E', lineHeight: 1.05 }}>
            КАТАЛОГ<br/>ПРОДУКЦИИ
          </h2>
        </div>
        <a href="#contact"
          style={{ background: '#E8620A', color: '#fff', padding: '15px 32px', borderRadius: 10, fontSize: 14, fontWeight: 600, textDecoration: 'none', transition: 'all .25s', alignSelf: 'flex-end', display: 'inline-flex', alignItems: 'center' }}
          onMouseEnter={e => { e.currentTarget.style.background='#FF8040'; e.currentTarget.style.transform='translateY(-2px)' }}
          onMouseLeave={e => { e.currentTarget.style.background='#E8620A'; e.currentTarget.style.transform='translateY(0)' }}
        >Запросить прайс →</a>
      </div>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 48 }}>
        {categories.map(cat => (
          <button key={cat.id} onClick={() => setActiveCat(cat.id)}
            style={{
              padding: '9px 20px', borderRadius: 100, fontSize: 13, fontWeight: 500,
              border: `1.5px solid ${activeCat === cat.id ? '#E8620A' : '#E5E2DC'}`,
              background: activeCat === cat.id ? '#E8620A' : 'transparent',
              color: activeCat === cat.id ? '#fff' : '#3A3A3C',
              cursor: 'pointer', transition: 'all .2s', fontFamily: "'Geologica', sans-serif",
            }}
          >{cat.label}</button>
        ))}
      </div>

      <div className="grid-4">
        {filtered.map((product, i) => (
          <ProductCard key={`${product.cat}-${i}`} product={product} />
        ))}
      </div>
    </section>
  )
}
