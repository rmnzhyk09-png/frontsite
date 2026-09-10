# Avanti — Личный кабинет

Современное SPA «Личный кабинет» финансового сервиса *Avanti*.
Адаптив: **Desktop (1440px)** и **Mobile (390px)**.

## Технологии

- **Vue 3** — Composition API (`<script setup>`), без inline JS/CSS
- **Vue Router 4** — SPA-роутинг
- **Vite 6** — сборка
- **Laravel-совместимость** — файлы в `resources/` и `routes/` готовы к переносу в Laravel
- **Vercel** — `vercel.json` для деплоя

## Экраны

| Роут | Экран | Описание |
|---|---|---|
| `/` | Home | Дашборд: шаги заявки, карточка суммы, алерт |
| `/profile` | Profilo | Данные, безопасность, статус шагов |
| `/bank-loading` | Банк прогрузка | Анимация проверки 12 банков-партнёров, круговой прогресс, статусы «Verificata / In attesa», кнопка «Avvia la verifica» |
| `/iban` | Ввод IBAN | Градиентная карточка суммы, форма IBAN (модалка, табы «1 Conto / 2 Verifica», валидация 27 символов), чеклист шагов |
| `/login` | Login | Авторизация |

Поток: Home → (`/bank-loading`) → `/iban` → `/profile`.

## Быстрый старт (standalone SPA)

```bash
npm install
npm run dev      # локально http://localhost:5173
npm run build    # продакшн в dist/
npm run preview  # превью сборки
npm run smoke    # SSR-smoke страх: рендерит все 5 роутов и ловит runtime-ошибки
```

## Деплой на Vercel

```bash
npm i -g vercel
vercel            # интерактивный деплой
vercel --prod     # прод
```

Конфиг уже в `vercel.json`: framework `vite`, выход в `dist/`, SPA-rewrites.

## API-слой

Настоящие HTTP-запросы через `src/api/avanti_api_client.js` к бэкенду:

| Метод | Endpoint | Сервис |
|---|---|---|
| GET | `/profile` | получить профиль |
| PATCH | `/profile/email` | сменить email |
| PATCH | `/profile/name` | сменить имя |
| POST | `/profile/email/verify` | верифицировать email |
| PATCH | `/profile/password` | сменить пароль |
| POST | `/profile/iban` | сохранить IBAN |

Если бэкенд недоступен (статический деплой), `src/services/avanti_profile_service.js`
использует безопасный fallback на `localStorage` — приложение полностью рабочее
и без сервера. Базовый URL задаётся через `VITE_API_BASE_URL` (по умолчанию `/api`).

## Интеграция в Laravel

Компоненты лежат в `src/` (для standalone) и дублируются точкой входа под Laravel:

| Standalone (Vercel) | Laravel |
|---|---|
| `index.html` + `src/main.js` | `resources/views/app.blade.php` + `resources/js/app.js` |
| `src/router.js` | маршруты в `routes/web.php` |
| `src/api/*` + `src/services/*` | конроллеры `/api/profile*` |

Для Laravel нужно добавить `laravel-vite-plugin` и в `vite.config.js` указать вход `resources/js/app.js`. Blade-шаблон уже готов.

## Структура

```
src/
├── api/          авanti_api_client.js — fetch-клиент
├── services/     avanti_profile_service.js — методы профиля + локальный fallback
├── components/   атомы → молекулы → организмы (нет файла > 300 строк)
├── pages/        экраны Home, Profilo, Login, BankLoading, Iban
├── composables/  avanti_useResponsive.js, avanti_useProfile.js,
│                 avanti_useBankLoading.js (симуляция проверки банков)
└── styles/       дизайн-токены (CSS-переменные)
```

## Дизайн-система

Первичный цвет `#2491AA`, градиент `#2491AA → #1A7488`, успех `#1E7D33`,
трек `#E8E8E8`, шрифт Inter, радиусы: карточки 16px, кнопки 8/16px.
Все токены в `src/styles/avanti_tokens.css`.