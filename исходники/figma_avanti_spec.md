# Спецификация Figma — Avanti «Личный кабинет» (файл figma_fresh.json)

Источник: ответ Figma REST API (nodes). 4 фрейма: `1:15` Home (desktop), `1:2583` Profilo (desktop), `18:967` home-mobile, `19:1228` profilo-mobile.
Координаты — absoluteBoundingBox (x,y), размеры (width×height). Все значения — из JSON, без интерполяции.

## Общие палитры

| Hex | Назначение |
|---|---|
| `#F8FAFB` | Фон страниц (desktop+mobile), fill кнопки «Получить средства» |
| `#FFFFFF` | Белые поверхности, тексты на цветном фоне |
| `#2491AA` | Primary-акцент (кнопки, кружки шагов, иконки, активный пункт меню) |
| `#1A7488` | Тёмный оттенок primary (градиент) |
| `GRADIENT #2491AA→#1A7488` | Фон карточки баланса; цвет текста «Preleva i fondi» и стрелки «→» |
| `#1A2332` | Основной текст (тёмно-синий) |
| `#71717A` | Вторичный текст, лейблы полей |
| `#A1A1AA` | Третичный текст, неактивные иконки |
| `#E4E4E7` | Бордеры, неактивные сегменты прогресса, у inactive-чипсов |
| `#E2EDF0` | Бордер карточки шагов |
| `#C7E3EA` | Бордер баннера прогресса (desktop) |
| `#D4D4D8` | Неактивные линии шагов, бордер неактивных кружков |
| `#EAF4F6` | Светло-бирюзовая заливка (бейджи, активный пункт меню, фон баннера, обводка кружка «Документы») |
| `#F0F2F5` | Разделители чеклиста |
| `#F4F4F5` | Неактивные чипсы/кружки («Подпись», кнопки-плейсхолдеры) |
| `#EF4444` | Красный бейдж уведомлений |
| `#9A0606` | Счётчик на SMS-попапе |
| `#000000` | Заливка кнопки редактирования «Modifica nome» (desktop) |
| `SEG 4` | `GRADIENT #2491AA→#E4E4E7` (полузаполненный сегмент) |
| Вариант логотипа | `fillOverrideTable` у Vector 44: `#245CAA` (r.1405/g.359/b.6648) |

Шрифты: **Inter** (весь UI), **Geist** (баннеры прогресса и их чек-строки, счётчики).

---

## 1:15 «Home» (desktop) — 1440×889
Фон `#F8FAFB`. layoutMode HORIZONTAL, clipsContent. Внутри «Основной контент» 1440×889 (VERTICAL, gap 20).

### Шапка «Компонент шапки» — 1440×171 (VERTICAL)
- **Верхняя панель** 1440×111, `#FFFFFF`, stroke `#E4E4E7`/1px, HORIZONTAL, padding T16 R32 L32, primaryAlign SPACE_BETWEEN.
  - **Панель шапки** 1376×79 (28,1481).
    - **Строка навигации** 1376×79, HORIZONTAL, gap, padding L40 R40, SPACE_BETWEEN.
      - **Внутренняя навигация** 864×79 (68,1481), HORIZONTAL, gap **52**, padding T20 B20.
        - **Логотип** GROUP 152×39 (68,1501): Vector 44 (залитый силуэт) 48×37.6 at (68,1501.9) fill `#2491AA`; текст **"Avanti"** at (128,1501) 92×39 — Inter **32px w700** lh38.7 ls**-1.6** fill `#000000`.
        - **Пункты меню** 660×38 (272,1501.5) HORIZONTAL gap12. Каждый пункт 210.67×38:
          - Home: bg `#EAF4F6`, иконка-дом stroke `#2491AA`/2, текст **"Home"** Inter14 w600 `#2491AA`.
          - Documenti: bg `#F8FAFB`, иконка stroke `#71717A`/2, **"Documenti"** Inter14 w500 `#1A2332`.
          - Profilo: bg `#F8FAFB`, иконка-профиль stroke `#71717A`/2, **"Profilo"** Inter14 w500 `#1A2332`.
      - **Пункт — Ассистенция** 156×39 (1208,1501), `#2491AA`, **cornerRadius 8**, HORIZONTAL gap12, padding T10 R12 B10 L12.
        - Иконка чат 18×18 (bubble Vector, stroke `#FFFFFF`/1.27px).
        - **"Assistenza"** at (1250,1511) 102×19 — Inter **16px w600** lh19.36 `#FFFFFF`.
        - **Бейдж уведомлений** 22×22 (1353,1491) `#EF4444` r11, stroke `#FFFFFF`/2px.
  - **Нижняя панель** 1440×60 (-4,1576) HORIZONTAL gap20 padding T10 R72 B10 L72, SPACE_BETWEEN.
    - **Блок профиля** 163×40 (68,1586): Аватар 40×40 (IMAGE) r20, (120,1590) **"Marco Rossi"** Inter14 w600 `#1A2332`, **"ikoei@09gmail.com"** Inter12 w400 `#71717A`.
    - **Хлебные крошки** 140×17 (1224,1597.5) gap8: **"Piattaforma"** Inter14 w500 `#71717A`, **"/"** Inter14 w500 `#A1A1AA`, **"Home"** Inter14 w600 `#1A2332`.

### Контент страницы 1440×698 (-4,1656), HORIZONTAL gap40, padding L72 R72 B40
**Левая колонка** 792×658 (68,1656) VERTICAL gap32.

- **Компонент шагов** 792×130 `#FFFFFF` r16 stroke `#E2EDF0`/1px, VERTICAL gap16, padding T20 R24 B20 L24.
  - Заголовок (SPACE_BETWEEN): **"Passo 4 di 5"** Inter13 w700 `#1A2332` | **"3 / 5 completati"** Inter13 w500 `#71717A`.
  - **Ряд шагов** 744×58 (92,1708) HORIZONTAL gap51. Каждый шаг 108×58:
    - **Симуляция** (92): круг **36×36** `#2491AA` r18 + галочка (stroke `#FFFFFF`/2); линия слева `#FFFFFF` 22×2; линия справа `#2491AA` 468×2. Метка **"Simul."** Inter11 w600 `#2491AA`.
    - **Одобрение** (251): круг `#2491AA`, линия справа `#2491AA`. **"Approv."** Inter11 w600 `#2491AA`.
    - **Аккаунт** (410): круг `#2491AA`. **"Account"** Inter11 w600 `#2491AA`.
    - **Документы** (569): круг `#EAF4F6`, stroke `#2491AA`/2px, иконка-загрузка stroke `#2491AA`/2; линия справа `#D4D4D8` 101×2. **"Docum."** Inter11 **w700** `#2491AA`.
    - **Подпись** (728): круг `#F4F4F5` stroke `#D4D4D8`/1.5, иконка-ручка stroke `#A1A1AA`/2; линии `#D4D4D8`/`#FFFFFF`. **"Firma"** Inter11 w500 `#A1A1AA`.
- **Компонент главной колонки** (246:4822) 792×340 (68,1818).
  - **Карточка — Одобренная сумма** 792×340, r20, фон `GRADIENT_LINEAR #2491AA→#1A7488`, padding 32, VERTICAL gap16, CENTER.
    - Мета: **"Il tuo saldo"** Inter13 w600 `#EAF4F6` ls0.13; **"Importo approvato dai nostri partner"** Inter16 w600 `#EAF4F6` ls0.16. Бейдж статуса 130×21 `#FFFFFF` r99: **"Completa i passaggi"** Inter11 w700 `#FFFFFF`.
    - Сумма: **"€ 12 000"** 220×63 — Inter **52px w700** lh62.9 ls**-0.78** `#FFFFFF`; **"Prestito personale • TAN 3,8%"** Inter14 w400 `#EAF4F6`.
    - **Кнопка — Получить средства** 728×64 `#F8FAFB` **r14**, gap12, padding T18 R24 B18 L24. Иконка-банк 28×28 (Vector 23.3×21, stroke-графика); **"Preleva i fondi"** Inter18 w600 `GRADIENT #2491AA→#1A7488` ls0.036; **"→"** Inter18 w500 gradient.
    - Низ: линия `#FFFFFF`/1px + **"Fondi disponibili dopo l'approvazione dei documenti"** Inter12 w400 `#EAF4F6`.
- **Баннер прогресса** 792×124 (68,2190) `#EAF4F6` r16 stroke `#C7E3EA`/1px, gap16, padding T16 R20 B16 L20.
  - Иконка-замок 44×44 `#2491AA` r22 (Vector внутри stroke `#FFFFFF`).
  - **"Per il prelievo dei fondi, completa tutti gli step"** Geist13 w600 `#1A2332`; бейдж счётчика 126×22: **"3 / 5 Completati"** Geist11 w700 ls0.33; **"Step ancora da completare"** Geist12 w500 `#71717A`.
  - Чекбоксы: **"Documenti"** / **"Firma"** Geist13 w500 `#1A2332`, флажки 18×18 `#FFFFFF`.
  - Кнопка-стрелка 36×36 `#2491AA` r18, Vector stroke `#FFFFFF`/2.

**Правая колонка** 464×646 (900,1656) VERTICAL gap32.
- **Карточка — Личные данные** 464×131 `#FFFFFF` r16 stroke `#E4E4E7`/1px, padding24.
  - **"Dati personali"** Inter15 w600 `#1A2332`. Ряды: **"Cognome"** (12 w400 `#71717A`) / **"Intesa Sanpaolo S.p.A."** (13 w600 `#1A2332`); **"Nome"** / **"Marco Rossi"**.
- **Карточка — Чеклист верификации** 464×483 (900,1819) `#FFFFFF` r16 stroke `#E4E4E7`/1px.
  - Заголовок: **"Completa tutti gli step"** Inter11 w700 `#2491AA` **ls0.55**; **"Per il prelievo dei fondi, completa tutti gli step"** Inter13 w600 `#1A2332`; кнопка-свернуть 32×32 `#F8FAFB` r8 stroke `#E4E4E7`/1 (шеврон stroke `#71717A`/2).
  - Разделители: `#F0F2F5` 1px.
  - Шаги (444×76 каждый, padding16, gap12):
    - Симуляция завершена / Кредит одобрен / Аккаунт создан: иконка 44×44 `#2491AA` r22; title Inter14 w600 `#1A2332`; **"Completato"** Inter11 w500 `#2491AA`; статус 28×28 `#2491AA` r14 (галочка stroke `#FFFFFF`/2.5).
    - Загрузка документов (строка bg `#EAF4F6`): иконка 44×44 `#FFFFFF` stroke `#2491AA`/2.44; **"Documenti caricati"** Inter14 **w700**; **"Step attuale • Azione richiesta"** Inter11 w600 `#2491AA`; кнопка-перейти 28×28 `#2491AA` r14.
    - Подписание договора: иконка 44×44 `#F4F4F5` r22; **"Contratto firmato"** Inter14 w500 `#71717A`; **"In attesa"** Inter11 w400 `#A1A1AA`; кнопка 28×28 `#F4F4F5`.
  - Индикатор прогресса: 5 сегментов **83.2×4**, r99: Seg1-3 `#2491AA`, Seg4 `GRADIENT #2491AA→#E4E4E7`, Seg5 `#E4E4E7`.

Справа внизу служебный слой `270:8234 messages-list` 52×69 (аватары/счётчики — не видимый элемент дизайна).

---

## 1:2583 «Profilo» (desktop) — 1440×1092
Фон `#F8FAFB`.

### Шапка «Панель навигации» 1440×171 — идентична Home
- Верхняя панель 1440×111 `#FFFFFF` stroke `#E4E4E7`/1px; логотип + меню 660×38 (активен **Profilo**: bg `#EAF4F6`, иконка stroke `#2491AA`, текст **"Profilo"** Inter14 w500 `#2491AA`; Home уходит в пассив `#F8FAFB`).
- **Ассистенция** 156×39 `#2491AA` r8 + бейдж 22×22 `#EF4444`.
- Нижняя панель: аватар 40×40 IMAGE r20; **"Marco Rossi"** / **"ikoei@09gmail.com"**; крошки **"Piattaforma" / "Home"** (y 3126.5).

### Контент страницы 1440×921 (-4,3165), padding L72 R72 B40, gap40
**Левая колонка** 792×881 (68,3165) VERTICAL gap32.
- **Компонент шагов** 792×130 (инстанс того же: бейдж «Passo 4 di 5», «3 / 5 completati», кружки 36×36+ соединительные линии — как в Home).
- **Карточка — Личные данные** 792×354 `#FFFFFF` r16 stroke `#E4E4E7`/1px padding24 gap16.
  - Заголовок: **"Dati personali"** Inter15 w600 + **Кнопка «Modifica nome»** 146×37 r8, fill `#000000`, stroke `#2491AA`/1px; текст Inter14 w500 `#1A2332`.
  - Ряды (label 12 w400 `#71717A` / value 13 w600 `#1A2332`): Cognome / **Intesa Sanpaolo S.p.A.**; Nome / **Marco Rossi**; Email / **ikoei@09gmail.com**; Importo approvato / **12 000 €**; Tipo di documento / **Passaporto**; Tipo di documento / **AB1234567**.
  - Блок IBAN: **"IBAN"**; Поле IBAN 744×40 `#F8FAFB` r8 stroke `#E4E4E7`/1px padding12 → текст **"-"** Inter13 w600 `#1A2332` + иконка-копирование Vector 14×14 stroke `#2491AA`/2.
- **Карточка — Безопасность** 792×333 `#FFFFFF` r16 stroke `#E4E4E7`/1px, padding24, SPACE_BETWEEN.
  - Заголовок: иконка-щит 32×32 `#EAF4F6` r8 (Vector stroke `#2491AA`/2) + **"Sicurezza"** Inter15 w600 `#1A2332`.
  - Разделители `#E4E4E7` 1px.
  - Строка «Смена пароля»: **"Cambia la password del tuo account."** Inter13 w400 `#71717A`; кнопка **«Cambia password»** 148×36 r8 `#FFFFFF` stroke `#2491AA` **/1.5px**, текст Inter13 w600 `#2491AA`.
  - Строка «Смена почты»: **"Cambia l'indirizzo email del tuo account."**; кнопка **«Cambia email»** 148×36, текст Inter13 w600 `#2491AA`.
  - Блок «Верификация почты» 744×98 `#EAF4F6` r10 padding16: **"Verifica email"** Inter13 w600 `#1A2332`; бейдж `#FFFFFF` r12 (**"Non verificata"** Inter11 w600 `#2491AA`); **"Verifica il tuo indirizzo email per proteggere il tuo account."** Inter13 w400 `#71717A`; кнопка **«Отправить код»** 132×36 `#2491AA` r8.

**Правая колонка** 464×679 (900,3165) VERTICAL gap32.
- Карточка «Личные данные» 464×131 — как Home (y 3165).
- **Карточка — Чеклист верификации** 464×516 (900,3328). Заголовок 464×89 `#FFFFFF` padding T20 R24 B20 L24: **"Completa tutti gli step"** (eY: ls0.55) / **"Per il prelievo dei fondi, completa tutti gli step"**; бейдж-счётчик 116×23 `#EAF4F6` r99; кнопка-свернуть 32×32.
  - Шаги 464×76, gap16, padding L24 R24: иконки 44×44 (3× `#2491AA`, «Документы» `#FFFFFF` stroke `#2491AA`/2, «Подпись» `#F4F4F5`); статусы: completed 28×28 `#2491AA`, перейти 32×32 `#2491AA` / `#F4F4F5`; тексты как в Home.
  - Индикатор: 5 сегментов **80×6**, r99: Seg1-3 `#2491AA`, Seg4-5 `#E4E4E7`.
- **SMS-попап** 270:8295 464×108.44 (900,3880) `#2491AA` r16: аватар 60.44×60.44 IMAGE r30.2 + точка 18.89 `#2491AA` stroke `#FFFFFF`/2.83; **"Schierano Deborah"** Inter22 w600 `#FFFFFF`; счётчик 19×16 `#9A0606` r10 (**"2"** Inter10 w700 `#FFFFFF`); превью **"Salve. Mi chiamo Deborah, sarò la sua consulente personale dedicata."** Inter16 w400 `#FFFFFF`.

---

## 18:967 «home-mobile» — 390×1139
Фон `#F8FAFB`. layoutMode VERTICAL, primaryAxis CENTER.

### Шапка 390×62
- **Верхняя панель** 390×62 `#FFFFFF` stroke `#E4E4E7`/1px, padding T12 R16 B12 L16, SPACE_BETWEEN.
  - **Логотип** 104×29 (1504,1481.5): Vector 34×26 fill `#2491AA` + **"Avanti"** Inter22 w700 ls-1.1 `#1A2332` (отличие от desktop: текст тёмный, а не чёрный).
  - Справа 109×38 (gap12): колокольчик 38×38 `#EAF4F6` r6.33 (Vector stroke `#2491AA`/2.375), бейдж **"4"** 12.67 `#EF4444` r6.33; аватар 32×32 IMAGE r16 stroke `#2491AA`/1 + инициалы **"MR"** Inter13 w600 `#1A2332`.

### Контент 390×1077 (T16 R16 B0 L16, gap20, CENTER)
- **Заголовок шагов** 358×92 `#FFFFFF` r16 stroke `#E2EDF0`/1px, padding16, gap12.
  - **"Passo 4 di 5"** Inter10 w700 `#1A2332` | **"3 / 5 completati"** Inter10 w500 `#71717A`.
  - **Ряд шагов** 326×36 (SPACE_BETWEEN), кружки **20×20 r10**, линии 2px (`#2491AA` ×4, `#D4D4D8` перед подписью):
    - Simul. (`#2491AA` круг), Approv. (`#2491AA`), Account (`#2491AA`), Docum. (круг `#EAF4F6` stroke `#2491AA`/1.43, **w700**), Firma (круг `#F4F4F5` stroke `#D4D4D8`/1.07, иконка `#A1A1AA`).
    - Метки Inter10: Simul./Approv./Account w600 `#2491AA`, Docum. w700 `#2491AA`, Firma w500 `#A1A1AA`.
- **Компонент главной колонки** 358×248.
  - **Карточка баланса** 358×248 r20 `GRADIENT #2491AA→#1A7488`, padding20, gap12:
    - Мета: **"Il tuo saldo"** Inter13 **w300** `#EAF4F6` ls0.13; **"Importo approvato dai nostri partner"** Inter10 w600 `#EAF4F6` ls0.1; бейдж 130×21 `#FFFFFF` r99 (**"Completa i passaggi"** Inter11 w700).
    - **"€ 12 000"** Inter36 w700 ls-0.54 `#FFFFFF`; **"Prestito personale • TAN 3,8%"** Inter12 w400 `#EAF4F6`.
    - **Кнопка — Получить средства** 318×46 `#F8FAFB` **r9**, gap4: иконка-банк 20×20 (Vector 16.7×15), **"Preleva i fondi"** Inter16 w600 gradient ls0.032, **"→"** Inter18 w500 gradient.
    - **"Fondi disponibili dopo l'approvazione dei documenti"** Inter12 w500 `#EAF4F6`.
- **Баннер прогресса** 358×136 `#EAF4F6` r16 stroke `#2491AA`/**1px**, padding16, gap12.
  - Замок 32×32 `#2491AA` r16; **"Per il prelievo dei fondi, completa tutti gli step"** Geist13 w600 `#1A2332`; **"Step ancora da completare"** Geist11 w500 `#71717A`.
  - Чекбоксы 16×16 `#FFFFFF` stroke `#2491AA`/1: **"Documenti"**, **"Firma"** (Geist13 w500 `#1A2332`); бейдж **"3 / 5"** 51×22 `#2491AA` r99 (Geist11 w700 ls0.33 `#FFFFFF`).
- **Карточка — Чеклист верификации** 358×443 `#FFFFFF` r16 stroke `#E4E4E7`/1px.
  - Заголовок Y=2079: «Completa tutti gli step» (ls0.55) / описательный текст; кнопка-свернуть 20×20 `#F8FAFB` r5 stroke `#E4E4E7`/0.625.
  - Шаги 358×68: иконки **36×36** r18 (3× `#2491AA`, Документы `#FFFFFF` + stroke `#2491AA`/2, Подпись `#F4F4F5`); статусы **22×22** r11; тексты идентичны desktop (Inter13 w600 / **w700** для «Documenti caricati»).
  - Индикатор: 5 сегментов **62×4** r99.
- **Пункты меню (нижняя навигация)** 390×62 (1488,2542) `#FFFFFF`, **stroke top `#2491AA`/3px**, gap12, SPACE_BETWEEN, padding L20 R20.
  - **Home** (активен): 40×41 `#EAF4F6` r8, иконка stroke `#2491AA`/1.11, текст **"Home"** Inter14 w600 `#2491AA`.
  - **Documenti**: 73×41 `#F4F4F5`, иконка stroke `#1A2332`, текст "Documenti" Inter14 w500 `#1A2332`.
  - **Profilo**: 44×41 `#F4F4F5`, иконка `#1A2332`, текст "Profilo" w500.
  - **Ассистенция**: 108×43 (1750,2551.5) `#2491AA` r8, padding T4 R16 B4 L16, без заливки всей кнопки; bubble stroke `#FFFFFF`/1.27; **"Assistenza"** Inter12 w600 `#FFFFFF`.

---

## 19:1228 «profilo-mobile» — 390×1495
Фон `#F8FAFB`. layoutMode VERTICAL.

### Шапка 390×62 — идентична home-mobile (логотип, колокольчик с бейджем "4", аватар "MR").

### Контент 390×1371 (1536,3056), T16 R16 B20 L16, gap20
- **Заголовок шагов** 358×92 — тот же компонент (Passo 4 di 5; кружки 20×20).
- **Карточка — Личные данные** 358×305 `#FFFFFF` r16 stroke `#E4E4E7`/1px padding16 gap16.
  - **"Dati personali"** Inter15 w600; кнопка **«Modifica nome»** 109×31 r8 stroke `#2491AA`/1 (заливки нет — прозрачная), текст Inter12 w500 `#1A2332`.
  - Ряды (label/value оба Inter13, label `#71717A` w400, value `#1A2332` w600): Cognome, Nome, Email, Importo approvato, Tipo di documento / Passaporto, Tipo di documento / AB1234567.
  - Блок IBAN: поле 326×36 `#F8FAFB` r8 stroke `#E4E4E7`/1px padding10; **"-"** + иконка-копирование Vector 14×14 stroke `#2491AA`/2.
- **Карточка — Безопасность** 358×435 `#FFFFFF` r16 stroke `#E4E4E7`/1px padding16 gap16.
  - Щит 32×32 `#EAF4F6` r8 (stroke `#2491AA`/2) + **"Sicurezza"** Inter15 w600.
  - Разделители `#E4E4E7`.
  - Смена пароля: **"Cambia la password del tuo account."** Inter13 w400; кнопка 326×40 r8 `#FFFFFF` stroke `#2491AA`/1.5 → **"Cambia password"** Inter13 w600 `#2491AA`.
  - Смена почты: **"Cambia l'indirizzo email del tuo account."**; кнопка **"Cambia email"** 326×40.
  - Верификация почты 326×140 `#EAF4F6` r10 padding14: иконка "?" 20×20 `#FFFFFF` r10 stroke `#2491AA`; **"Verifica email"** Inter13 w600; бейдж r12 (**"Non verificata"** Inter11 w600 `#2491AA`); **"Verifica il tuo indirizzo email per proteggere il tuo account."**; кнопка **«Invia codice»** 298×36 `#2491AA` r8 (текст Inter13 w600 `#FFFFFF`; на desktop кнопка называлась «Отправить код», здесь `#FFFFFF`).
- **Карточка — Чеклист** 358×443 (1552,3964) — идентична home-mobile.
- Нижняя навигация 390×62 stroke top `#2491AA`/3px: активен **Profilo** (`#EAF4F6`, текст `#2491AA`), Home/Documenti пассив.

---

## Иконки и графика (svg/image)
- Все иконки — **векторные контурные** (stroke-графика), заливок нет (`fills:[]`), кроме залитых силуэтов логотипа и точек/галочек.
- **Логотип**: Vector44 (desktop) — залитый `#2491AA`; mobile — залитый вектор 34×26 `#2491AA` + надпись "Avanti".
- **Аватары**: фото-IMAGE (плейсхолдеры): desktop 40×40 r20, mobile 32×32 r16 (в SMS-попапе 60.44 r30.2).
- **Иконки-строки**: банк (в кнопке Прелева) — Vector stroke-графия 23.3×21/2.8px; чат-bubble `#FFFFFF` 1.27px; колокольчик `#2491AA` 2.375px; замок — белая обводка внутри teal-круга; щит `#2491AA`/2px; шеврон/галочки/стрелки — белые или `#71717A`/`#A1A1AA` 2px.
- Этих растровых изображений (`IMAGE`) 4: автары «Блок профиля» (desktop×2 экрана), «Аватар профиля» mobile (×2), avatar SMS-попапа.

## Ключевые числа для сверки
| Параметр | Desktop | Mobile |
|---|---|---|
| Фрейм | 1440×889 / 1440×1092 | 390×1139 / 390×1495 |
| Кружки шагов | 36×36 (r18), линия 2px | 20×20 (r10), линия 2px |
| Кнопка Assistenza | 156×39, r8, Inter16 w600 | нижняя навигация 108×43, r8, Inter12 w600 |
| Логотип "Avanti" | Inter32 w700 ls-1.6 | Inter22 w700 ls-1.1 |
| Заголовок "Passo 4 di 5" | Inter13 w700 | Inter10 w700 |
| Сумма "€ 12 000" | Inter52 w700 ls-0.78 | Inter36 w700 ls-0.54 |
| "Preleva i fondi" | Inter18 w600 ls0.036 | Inter16 w600 ls0.032 |
| Шаги чеклиста | иконка 44×44, статус 28×28 | иконка 36×36, статус 22×22 |
| Сегменты прогресса | 83.2×4 / 80×6 | 62×4 |