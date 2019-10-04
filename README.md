# ⚛ React + Express – SSR Setup with TypeScript

## Features

-   Инструменты
    -   🔥 Babel 7
    -   📦 Webpack 4
    -   🔥 ESLint 5 (with a set of custom rules which may be mostly identical to AirBnB with some personal flavor added)
    -   🔥 TypeScript (via Babel)
    -   🔥 Prettier
    -   🔥 Jest 24
    -   🐐 React Testing Library
    -   ✅ Server Side Rendering with Express
    -   ✅ Hot Module Reloading (HMR)
    -   ✅ CSS Modules
    -   ✅ PostCSS
    -   ✅ Precommit hooks via lint-staged + Husky
    -   ✅ Optional static deployment without the need for Node.js on the server

*   Библиотеки
    -   ⚛ React 16.x (latest), with Hooks!
    -   ✅ Redux + Thunk middleware + AxiosInstance
    -   ✅ Immer
    -   ✅ Reselect
    -   ✅ React Router 5
    -   ✅ React Helmet
    -   ✅ React Final Form
    -   ✅ Lodash
    -   ✅ Moment
    -   ✅ React select

## Установка

Сделать **форк** репозитория

После того, как сделан форк, склоньте проект, `cd` в директорию проекта, выполните `yarn install` (или `npm install`) в командной строке для установки зависимостей. 

Готово!
## Использование

Сервер node по умолчанию запускается на 8500 порту, если хотите его изменить, то задайте его в `process.env.PORT`. Можно использовать файл `.env` для задания переменных окружения. Также есть файл конфигураций(`src/server/config.js`), в котором задается url для бэкенда.

### Используемые скрипты:

#### `yarn start`

Starts the app in development mode: creates a new client and server dev build using webpack, starts the Express server build (for both file serving and server side pre-rendering) and keeps webpack open in watchmode. Updates the app (if possible) on change using HMR.

#### `yarn build`

Creates a new build, optimized for production. Does **not** start a dev server or anything else.

#### `yarn test`

Run all tests using jest.

#### `yarn test:update`

Update all Jest snapshots (if there are any)

#### `yarn lint:js`

Run ESLint for all JavaScript and TypeScript files

#### `yarn lint:css`

Run Stylelint for all CSS files

#### `yarn lint`

Run lint:js and lint:css in parallel

#### `yarn analyze`

Starts `webpack-bundle-analyzer` to give you the opportunity to analyze your bundle(s)

#### `yarn depgraph`

Creates an image of your dependency graph. Requires [GraphVIZ](https://www.graphviz.org/) to be in your system's `PATH`

#### `yarn plop`

Run plop to create new React components or Redux reducers via CLI

## Environment Variables

There are a few environment variables you can set to adjust the setup to your needs

| Variable         | Default            | Description                                                                                                                                                                                                                                                                                      |
| ---------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `PORT`           | `8500`             | Port number your application will be served on.                                                                                                                                                                                                                                                  |
| `HOST`           | `http://localhost` | Host (including protocol!) your application will be served on. This is usually neglectable as most of the time your application will be served via remote proxy (e.g. Nginx) on localhost. **Note:** this is only for convenience. The server itself will not be bound exclusively to that host. |
| `DEVSERVER_HOST` | `http://localhost` | Optional. Different host for the Webpack Dev Server to be served on.                                                                                                                                                                                                                             |


##Советы

### Обновление проекта

Если вы хотите, чтобы _ваш_ проект обновлялся совместно с _этим_ проектом, Вы можете добавить **React SSR Starter** как удаленный репозиторий. Команда:
```
git remote add upstream git@github.com:infmax/react-ssr-setup.git
```

Подробнее: [Удаленные репозитории](https://git-scm.com/book/ru/v1/Основы-Git-Работа-с-удалёнными-репозиториями).

### Импортируйте SVG как ReactComponent

```
import { ReactComponent as Logo } from './Logo.svg';
```

Далее, можно использовать SVG как JSX `<div><Logo /></div>`.

## Changelog

[CHANGELOG.md](CHANGELOG.md)

## License

MIT.

