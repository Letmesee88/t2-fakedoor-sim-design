# Фейкдор «Эксклюзивный дизайн SIM за ГБ»

Прототип growth-эксперимента для t2 (тестовое задание PM-стажёра, команда Вовлечения).

Юзер открывает прототип и попадает на **главный экран t2** (subscriber home — балланс, остатки, истории, SIM-карты). На белой части видит **зелёный баннер «Эксклюзивный дизайн sim»** — это entry point эксперимента (по ТЗ). Тап → экран кастомизации с **9 эксклюзивными дизайнами и ценой в ГБ**. Цены прошиты по 3 когортам (A/B/C) для прайсинг-теста через `localStorage`. После клика «Купить» — disclosure: «это был тест, ничего не списано» + 1 короткий вопрос про WTP.

## Запуск локально

Открыть `index.html` в браузере. Никаких билдов, никаких npm install — Babel-standalone компилирует JSX на лету.

```sh
open index.html      # macOS
xdg-open index.html  # Linux
start index.html     # Windows
```

Или через локальный сервер (если браузер ругается на `file://` для CORS):
```sh
python3 -m http.server 8080
# → http://localhost:8080
```

## Деплой на GitHub Pages

1. Создать публичный репо, например `t2-fakedoor`.
2. Запушить содержимое этой папки в `main`.
3. Settings → Pages → Source: `main` / root → Save.
4. Через 1–2 минуты страница на `https://<username>.github.io/t2-fakedoor`.

CDN-кеш ~10 мин — после старта эксперимента **не править код**.

## Структура

```
.
├── index.html               # entry point
├── colors_and_type.css      # дизайн-токены t2 (из Claude Design / Figma)
├── designs.js               # 9 дизайнов + когорты + event-логика (vanilla JS)
├── icons.jsx                # Lucide-замены t2 v6 иконок
├── components.jsx           # базовые компоненты (StatusBar, Button, и т.п.)
├── phoneframe.jsx           # рамка-телефон для desktop-просмотра
├── HomeScreen.jsx           # Шаг 0 — главный экран t2 с зелёным баннером (entry point)
├── CustomizationScreen.jsx  # Шаг 1 ★ — плашка SIM + 3×3 сетка дизайнов + CTA
├── DisclosureScreen.jsx     # Шаг 2 — disclosure + 1 вопрос WTP
├── FinalScreen.jsx          # финальное «спасибо»
├── App.jsx                  # hash-роутер + общий state выбранного дизайна
└── assets/skins/            # 9 SIM-скинов × 2 размера (square + wide)
```

## Когорты и цены

Юзер случайно попадает в одну из трёх когорт при первом заходе. Когорта сохраняется в `localStorage` (ключ `t2_fakedoor_cohort`).

| Тир | Дизайны | Когорта A | Когорта B | Когорта C |
|---|---|---|---|---|
| Базовые | Пиксель, Идиллия, Зелёный мех | 10 ГБ | 25 ГБ | 50 ГБ |
| Средние | Розовый леопард, Кислотный леопард, Малиновое настроение | 25 ГБ | 50 ГБ | 75 ГБ |
| Премиум | Аниме, Утка нуар, Жидкое серебро | 50 ГБ | 75 ГБ | 100 ГБ |

Сменить когорту вручную (для проверки):
```js
// в DevTools console
localStorage.setItem('t2_fakedoor_cohort', 'A');  // или 'B', 'C'
location.reload();
```

Сбросить сессию полностью:
```js
localStorage.clear();
location.reload();
```

## События

Все события идут в `console.log`. Открой DevTools → Console.

| event_type | когда |
|---|---|
| `session_start` | первое открытие в этой сессии |
| `home_view` | загрузка главного экрана |
| `story_tap` | тап на сторис (`story_id`) |
| `banner_click` | тап на зелёный баннер «Эксклюзивный дизайн sim» |
| `screen1_view` | загрузка экрана кастомизации |
| `design_select` | тап на карточку дизайна (`design_id`, `tier`, `price_gb`) |
| `cta_click` | тап на «Купить за X ГБ» |
| `screen2_view` | загрузка disclosure |
| `wtp_answer` | клик «Готово» (`wtp_value`: 10/25/50/75/100/-1/null) |

Особые значения `wtp_value`:
- `null` — юзер не выбрал ни один вариант, просто нажал «Готово»
- `-1` — выбрал «Не стал бы покупать»

## Production-путь (для t2)

Этот прототип — **демо для тестового задания**, не продакшен. Чтобы реально запустить эксперимент:

1. В `designs.js` заменить тело `logEvent` на POST в Supabase / PostHog / Google Sheets webhook.
2. Подключить настоящие иконки t2 v6 (сейчас Lucide-замены).
3. Подключить лицензионные шрифты T2 Halvar Breit + T2 Rooftop (сейчас Archivo Black + Manrope как замена).
4. Замерить базовый CTR баннера за неделю до запуска.
5. Применить guardrails мониторинг (см. PRD).

Подробности — в `../test-task/PRD.md`.

## Стек

- Vanilla HTML + CSS + Vanilla JS (`designs.js`)
- React 18 + Babel-standalone через CDN — для JSX без бандлера
- Дизайн-токены и компоненты из [Claude Design](https://claude.ai/design) бандла t2 Design System

Никаких зависимостей, никаких билдов, ноль npm.
