# frontsite — Личный кабинет банка

Монорепозиторий с двумя реализациями одного и того же дизайна (Figma «Личный кабинет»).

## Состав

| Папка | Стек | Описание |
|---|---|---|
| **`avanti-lk/`** | Vue 3 (Composition API) + Vite + Vue Router, JavaScript | Чистая SPA-версия: 20 переиспользуемых компонентов, адаптив 1440px/390px, все компоненты < 300 строк, без inline JS/CSS. Laravel-заготовки в `resources/` и `routes/`. |
| **корень /** | Vue 3 + TypeScript + Inertia + vue-tsc | Полная версия: TypeScript-типы, Inertia-интеграция под Laravel, страницы Home/Profile. |

## Деплой

- `avanti-lk` → `https://avanti-lk.vercel.app` (через `vercel.json` в своей папке)
- корень → деплоится аналогично через собственный `vercel.json`

## Запуск

### avanti-lk
```bash
cd avanti-lk
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/
```

### корень
```bash
npm install
npm run dev
npm run build
```

## Требования к компонентам (avanti-lk)

1. Разделение на компоненты: кнопка — отдельный компонент
2. Один компонент = один файл
3. Имя файла = доменное имя + назначение (`avanti_*`)
4. Формат: `название_проекта_назначение.vue`
5. Файл ≤ 300 строк
6. Переиспользуемость через props/slots
7. Composition API `<script setup>`
8. Без inline JS и inline CSS