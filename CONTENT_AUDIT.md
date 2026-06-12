# CONTENT AUDIT — Legend Stroy React Project
> Every piece of hardcoded text a business owner must replace to make this site their own.
> Colors and images are excluded. Duplicate occurrences (same value in multiple files) are flagged so nothing is missed.

---

## 1. COMPANY INFO

| # | File | What it is | Current value |
|---|------|-----------|---------------|
| 1 | `Navbar.jsx` line 30 | Logo mark initials (orange square) | `LS` |
| 2 | `Navbar.jsx` line 32 | Company name (logo text) | `Legend Stroy` |
| 3 | `Navbar.jsx` line 34 | Logo sub-tagline | `Строительные материалы` |
| 4 | `Hero.jsx` line 14 | Section eyebrow label | `Строительные материалы` |
| 5 | `Hero.jsx` line 18 | Hero H1 — line 1 | `ВСЁ ДЛЯ` |
| 6 | `Hero.jsx` line 19 | Hero H1 — line 2 (orange accent) | `ВАШЕЙ СТРОЙКИ` |
| 7 | `Hero.jsx` line 23 | Hero description paragraph | `Legend Stroy — широкий ассортимент строительных и отделочных материалов с доставкой на объект. От фундамента до финишной отделки.` |
| 8 | `Hero.jsx` line 31 | Primary CTA button label | `Смотреть каталог →` |
| 9 | `Hero.jsx` line 36 | Secondary CTA button label | `Связаться с нами` |
| 10 | `About.jsx` line 30 | About section eyebrow | `О компании` |
| 11 | `About.jsx` line 33 | About H2 — line 1 | `МЫ СТРОИМ` |
| 12 | `About.jsx` line 33 | About H2 — line 2 (orange accent) | `ВАШЕ ДОВЕРИЕ` |
| 13 | `About.jsx` line 36 | About paragraph 1 | `Legend Stroy — ваш надёжный поставщик строительных материалов с 2019 года. Работаем напрямую с производителями по всему региону.` |
| 14 | `About.jsx` line 39 | About paragraph 2 | `Наш склад площадью 4 000 м² обеспечивает постоянное наличие товаров. Доставим на объект в день заказа.` |
| 15 | `Partners.jsx` line 61 | Partners H2 — line 1 | `НАДЁЖНЫЕ` |
| 16 | `Partners.jsx` line 61 | Partners H2 — line 2 (orange accent) | `ПАРТНЁРЫ` |
| 17 | `Partners.jsx` line 65 | Partners section intro paragraph | `Долгосрочные партнёрские отношения с ведущими строительными компаниями — основа нашей репутации.` |
| 18 | `ContactSection.jsx` line 42 | Contact H2 — line 1 | `СВЯЖИТЕСЬ` |
| 19 | `ContactSection.jsx` line 42 | Contact H2 — line 2 (orange accent) | `С НАМИ` |
| 20 | `ContactSection.jsx` line 45 | Contact section intro paragraph | `Наш менеджер ответит в течение часа и поможет подобрать нужные материалы по оптимальной цене.` |
| 21 | `Footer.jsx` line 9 | Footer logo — company name | `Legend Stroy` *(duplicate of #2)* |
| 22 | `Footer.jsx` line 10 | Footer logo — sub-tagline | `Строительные материалы` *(duplicate of #3)* |
| 23 | `Footer.jsx` line 14 | Footer brand description | `Широкий ассортимент строительных материалов с доставкой на объект. Работаем с 2019 года.` |
| 24 | `Footer.jsx` line 39 | Copyright year | `2025` |
| 25 | `Footer.jsx` line 39 | Copyright company name | `Legend Stroy` *(duplicate of #2)* |
| 26 | `Footer.jsx` line 40 | Footer bottom-right tagline (includes city) | `Строительные материалы — Нукус` |

---

## 2. CONTACT DETAILS

> ⚠️ All four values appear in **two places each** — update both or risk inconsistency.

| # | Files | Field | Current value |
|---|-------|-------|---------------|
| 27 | `Navbar.jsx` line 51–52 | Phone number (nav) | `+998 (90) 123-45-67` / `href="tel:+998901234567"` |
| 28 | `ContactSection.jsx` line 49 | Phone number (contact section) | `+998 (90) 123-45-67` / `href="tel:+998901234567"` *(duplicate of #27)* |
| 29 | `Footer.jsx` line 21 | Phone number (footer) | `+998 (90) 123-45-67` / `href="tel:+998901234567"` *(duplicate of #27)* |
| 30 | `ContactSection.jsx` line 50 | Email address (contact section) | `info@legendstroy.uz` / `href="mailto:info@legendstroy.uz"` |
| 31 | `Footer.jsx` line 21 | Email address (footer) | `info@legendstroy.uz` / `href="mailto:info@legendstroy.uz"` *(duplicate of #30)* |
| 32 | `ContactSection.jsx` line 51 | Physical address (contact section) | `г. Нукус, ул. Промышленная, 18` |
| 33 | `Footer.jsx` line 21 | Physical address (footer) | `г. Нукус, ул. Промышленная, 18` *(duplicate of #32)* |
| 34 | `ContactSection.jsx` line 52 | Working hours (contact section) | `Пн–Сб: 08:00 — 18:00` |
| 35 | `Footer.jsx` line 21 | Working hours (footer) | `Пн–Сб: 08:00 — 18:00` *(duplicate of #34)* |
| 36 | `ContactSection.jsx` line 78 | Phone input placeholder | `+998 (__) ___-__-__` |

---

## 3. PRODUCT CATALOG

> All 14 products are defined in the `products` array in `Catalog.jsx` (lines 13–28).

### Category: `paint` — Краски и покрытия

| # | Brand | Product Name | Description | Badge | New Badge |
|---|-------|-------------|-------------|-------|-----------|
| 37 | `Dulux` | `Фасадная краска Premium` | `Атмосферостойкая, для наружных работ. Укрывистость класса A.` | Краски | Новинка |
| 38 | `Tikkurila` | `Интерьерная краска Euro Matt` | `Матовая, моющаяся. Для стен и потолков внутри помещений.` | Краски | — |
| 39 | `Knauf` | `Грунтовка глубокого проникновения` | `Укрепляет основание, улучшает адгезию. Для пористых поверхностей.` | Краски | — |

### Category: `masonry` — Кладочные материалы

| # | Brand | Product Name | Description | Badge | New Badge |
|---|-------|-------------|-------------|-------|-----------|
| 40 | `Wienerberger` | `Кирпич облицовочный M150` | `Одинарный, гладкий. Морозостойкий, для наружных стен.` | Кладочные | — |
| 41 | `Ytong` | `Газобетонный блок D400` | `Лёгкий, тёплый, точные геометрические размеры. 600×250×200 мм.` | Кладочные | Хит |
| 42 | `Kuveitcement` | `Цемент ПЦ 500 Д0` | `Портландцемент М500. Мешок 50 кг. Для несущих конструкций.` | Кладочные | — |

### Category: `hydro` — Гидроизоляция

| # | Brand | Product Name | Description | Badge | New Badge |
|---|-------|-------------|-------------|-------|-----------|
| 43 | `TechnoNIKOL` | `Рулонная гидроизоляция Техноэласт` | `Для кровли и фундаментов. Полиэстеровая основа, толщина 4 мм.` | Гидроизоляция | — |
| 44 | `Mapei` | `Обмазочная гидроизоляция Mapelastic` | `Двухкомпонентная, эластичная. Для ванных комнат и бассейнов.` | Гидроизоляция | — |

### Category: `fastener` — Крепёж и метизы

| # | Brand | Product Name | Description | Badge | New Badge |
|---|-------|-------------|-------------|-------|-----------|
| 45 | `Hilti` | `Химический анкер HIT-RE 500` | `Высокопрочное крепление в бетоне и кирпиче. Сертифицирован.` | Крепёж | — |
| 46 | `Forceberg` | `Саморезы по металлу 3.5×25` | `Оцинкованные. Для монтажа ГКЛ и металлоконструкций. Уп. 1000 шт.` | Крепёж | — |

### Category: `wood` — Пиломатериалы

| # | Brand | Product Name | Description | Badge | New Badge |
|---|-------|-------------|-------------|-------|-----------|
| 47 | `ЛесСтрой` | `Брус строительный 150×150` | `Камерная сушка, сорт B. Длина 6 м. Для каркасного строительства.` | Пиломатериалы | — |
| 48 | `Свеза` | `Фанера ФСФ 1525×1525×18` | `Влагостойкая, сорт 2/3. Для опалубки, полов, перегородок.` | Пиломатериалы | Новинка |

### Category: `tools` — Инструменты

| # | Brand | Product Name | Description | Badge | New Badge |
|---|-------|-------------|-------------|-------|-----------|
| 49 | `Bosch` | `Перфоратор GBH 2-26 DRE` | `800 Вт, SDS-plus. Режимы: сверление, удар, долбление. 2.7 Дж.` | Инструменты | — |
| 50 | `Makita` | `Угловая шлифмашина GA5030` | `720 Вт, диск 125 мм. 11 000 об/мин. Лёгкая и надёжная.` | Инструменты | — |

---

## 4. COMPANY STATS & HISTORY

### Hero.jsx — Stats bar (lines 40–47)

| # | File | Stat value | Label |
|---|------|-----------|-------|
| 51 | `Hero.jsx` | `800` (+ superscript `+`) | `Товаров в наличии` |
| 52 | `Hero.jsx` | `6` | `Лет на рынке` |
| 53 | `Hero.jsx` | `300` (+ superscript `+`) | `Клиентов` |

### FeaturesStrip.jsx — 4 feature tiles (lines 1–6)

| # | File | Num | Title | Description |
|---|------|-----|-------|-------------|
| 54 | `FeaturesStrip.jsx` | `800+` | `Позиций товаров` | `Постоянно в наличии на складе` |
| 55 | `FeaturesStrip.jsx` | `2 ч` | `Доставка` | `Быстрая доставка на объект` |
| 56 | `FeaturesStrip.jsx` | `100%` | `Сертификация` | `Все товары с сертификатами` |
| 57 | `FeaturesStrip.jsx` | `6 лет` | `Опыт работы` | `Надёжный партнёр для строителей` |

### About.jsx — Numbered list (lines 3–8)

| # | File | Number | Title | Description |
|---|------|--------|-------|-------------|
| 58 | `About.jsx` | `01` | `Широкий ассортимент` | `800+ позиций от ведущих брендов всегда в наличии` |
| 59 | `About.jsx` | `02` | `Гарантия качества` | `Все товары сертифицированы и проходят входной контроль` |
| 60 | `About.jsx` | `03` | `Быстрая доставка` | `Собственный автопарк — доставка по городу за 2 часа` |
| 61 | `About.jsx` | `04` | `Оптовые условия` | `Специальные цены и отсрочка для строительных компаний` |

### About.jsx — Stat cards (lines 60–79)

| # | File | Card style | Label | Value | Description |
|---|------|-----------|-------|-------|-------------|
| 62 | `About.jsx` | Orange (full-width) | `Склад` | `4 000` | `м² — постоянное наличие всех позиций` |
| 63 | `About.jsx` | Dark | `Товаров` | `800+` | `позиций в наличии` |
| 64 | `About.jsx` | Outline | `Доставка` | `2 ч` | `минимальный срок по городу` |

### Founding year (mentioned in prose)

| # | File | Location | Current value |
|---|------|----------|---------------|
| 65 | `About.jsx` line 36 | Paragraph 1 text | `2019` |
| 66 | `Footer.jsx` line 14 | Brand description text | `2019` *(duplicate of #65)* |

---

## 5. PARTNER TESTIMONIALS

> All 3 partners are defined in the `partners` array in `Partners.jsx` (lines 3–7).

| # | Field | Partner 1 | Partner 2 | Partner 3 |
|---|-------|-----------|-----------|-----------|
| 67 | Company type | `Генеральный подрядчик` | `Жилищное строительство` | `Промышленное строительство` |
| 68 | Company name | `СтройМастер` | `НовоДом` | `ПромБилд` |
| 69 | Testimonial text | `Legend Stroy обеспечивает все наши объекты материалами с нужными характеристиками и в нужные сроки. Надёжный партнёр на протяжении 4 лет.` | `Широкий ассортимент, быстрая доставка и лояльные условия оплаты — именно то, что нужно строительной компании. Рекомендуем.` | `Сотрудничаем по поставке промышленных покрытий и специализированного крепежа для производственных объектов. Качество на высоте.` |
| 70 | Years together | `4 года` | `3 года` | `2 года` |
| 71 | Badge label | `Ключевой партнёр` | `Постоянный клиент` | `Официальный партнёр` |

---

## 6. NAVIGATION & FOOTER LINKS

### Navbar.jsx — Navigation links (line 40)

| # | Label | href |
|---|-------|------|
| 72 | `Каталог` | `#catalog` |
| 73 | `О нас` | `#about` |
| 74 | `Партнёры` | `#partners` |
| 75 | `Контакты` | `#contact` |
| 76 | `Написать нам` *(CTA button)* | `#contact` |

### Catalog.jsx — Category filter tab labels (lines 3–11)

| # | id | Label |
|---|----|-------|
| 77 | `all` | `Все товары` |
| 78 | `paint` | `Краски и покрытия` |
| 79 | `masonry` | `Кладочные материалы` |
| 80 | `hydro` | `Гидроизоляция` |
| 81 | `fastener` | `Крепёж и метизы` |
| 82 | `wood` | `Пиломатериалы` |
| 83 | `tools` | `Инструменты` |

### ContactSection.jsx — Form category dropdown options (lines 85–92)

| # | Option label |
|---|-------------|
| 84 | `Краски и покрытия` |
| 85 | `Кладочные материалы` |
| 86 | `Гидроизоляция` |
| 87 | `Крепёж и метизы` |
| 88 | `Пиломатериалы` |
| 89 | `Инструменты` |
| 90 | `Общий вопрос` |

### Footer.jsx — Three link columns (lines 19–21)

**Column 1 — Навигация**

| # | Label | href |
|---|-------|------|
| 91 | `Каталог` | `#catalog` |
| 92 | `О компании` | `#about` |
| 93 | `Партнёры` | `#partners` |
| 94 | `Контакты` | `#contact` |

**Column 2 — Категории**

| # | Label | href |
|---|-------|------|
| 95 | `Краски и покрытия` | `#catalog` |
| 96 | `Кладочные материалы` | `#catalog` |
| 97 | `Гидроизоляция` | `#catalog` |
| 98 | `Крепёж и метизы` | `#catalog` |
| 99 | `Пиломатериалы` | `#catalog` |
| 100 | `Инструменты` | `#catalog` |

**Column 3 — Контакты** *(already covered in Section 2)*

| # | Label | href |
|---|-------|------|
| 101 | `+998 (90) 123-45-67` | `tel:+998901234567` |
| 102 | `info@legendstroy.uz` | `mailto:info@legendstroy.uz` |
| 103 | `г. Нукус, ул. Промышленная, 18` | `#` |
| 104 | `Пн–Сб: 08:00 — 18:00` | `#` |

---

## SUMMARY

| Section | Unique items | Notes |
|---------|-------------|-------|
| 1. Company Info | 20 text blocks | 5 values appear 2–3× across files |
| 2. Contact Details | 4 unique values | Each appears in 2–3 locations (9 total occurrences) |
| 3. Product Catalog | 56 strings | 14 products × 4 fields (brand, name, desc, badge) |
| 4. Stats & History | 26 values/labels | Founding year appears in 2 places |
| 5. Partner Testimonials | 15 fields | 3 partners × 5 fields each |
| 6. Navigation & Footer | 33 labels/links | Many are shared with catalog category names |
| **TOTAL** | **154 items** | **~40 are duplicates of the same value in a different file** |

### Priority order for a real client handoff

1. **Do first (blocking):** Section 2 — contact details (phone, email, address, hours) — wrong info is immediately visible
2. **Do second (identity):** Section 1 — company name, tagline, founding year, all headings/descriptions
3. **Do third (content):** Section 3 — replace all 14 demo products with real inventory
4. **Do fourth (credibility):** Section 5 — replace demo partner testimonials with real ones
5. **Do last (polish):** Section 4 — update stats to match real numbers; Section 6 — adjust nav/category labels if needed
