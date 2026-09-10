# Avanti — Личный кабинет

Современное SPA «Личный кабинет» финансового сервиса *Avanti*.
Адаптив: **Desktop (1440px)** и **Mobile (390px)**.

## Технологии

- **Vue 3** — Composition API (`<script setup>`), без inline JS/CSS
- **Vue Router 4** — SPA-роутинг
- **Vite 6** — сборка
- **Laravel-совместимость** — файлы в `resources/` и `routes/` готовы к переносу в Laravel
- **Vercel** — `vercel.json` для деплоя

## Быстрый старт (standalone SPA)

```bash
npm install
npm run dev      # локально http://localhost:5173
npm run build    # продакшн в dist/
npm run preview  # превью сборки
```

## Деплой на Vercel

```bash
npm i -g vercel
vercel            # интерактивный деплой
vercel --prod     # прод
```

Конфиг уже в `vercel.json`: framework `vite`, выход в `dist/`, SPA-rewrites.

## Интеграция в Laravel

Компоненты лежат в `src/` (для standalone) и дублируются точкой входа под Laravel:

| Standalone (Vercel) | Laravel |
|---|---|
| `index.html` + `src/main.js` | `resources/views/app.blade.php` + `resources/js/app.js` |
| `src/router.js` | маршруты в `routes/web.php` |

Для Laravel нужно добавить `laravel-vite-plugin` и в `vite.config.js` указать вход `resources/js/app.js`. Blade-шаблон уже готов.

## Структура

```
src/
├── components/   атомы → молекулы → организмы (нет файла > 300 строк)
├── pages/        экраны Home, Profilo, Login
├── composables/  avanti_useResponsive.js
└── styles/       дизайн-токены (CSS-переменные)
```

## Дизайн-система

Первичный цвет `#2491AA`, шрифт Inter, радиусы: карточки 16px, кнопки 8/16px.
Все токены в `src/styles/avanti_tokens.css`.