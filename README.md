# Market.io

Данное приложения является моим школьным проектом,
который будет представлен в конце мая в 2022 году.
Основная концепция - показать, что такое сайты и
как они создаются на реальном примере.

Автор: VladZheltov <vlad.zheltov1@gmail.com>

## Система

Приложение написано на NodeJS с использованием
TypeScript. Перед запуском проекта код необходимо
скомпилировать коммандой

```
npm run build
```

## Скрипты

- start (запуск проекта в режиме PRODUCTION)
- dev (запуск проекта в режиме development)
- build (компиляция ts в js)

## Файловая система

```
./app.ts             // Главный файл приложения
./node_modules       // Модули npm
./package.json       // Файл конфигурации app.ts и зависимостей
./tsconfig.json      // Конфигурация компилятора TypeScript
./.gitignore         // Файл .gitignore :)
./backend            // Файлы, относящиеся к серверу
./backend/classes    // Классы, описывающие разные сущности в коде
./backend/configs    // Внутренние конфиги для модулей
./backend/interfaces // Интерфейсы для описания классов
./backend/modules    // Написанные мной модули (абстракции для упрощения работы)

./frontend               // Файлы, относящиеся к клиенту
./frontend/source        // Файлы исходного кода
./frontend/source/css    // Исходный код CSS
./frontend/source/js     // Исходный код JS (клиентский)
./frontend/source/icon   // Иконки для сайта
./frontend/source/img    // Картинки для сайта
./frontend/views         // Визуальные модули (написанные на ejs)
./frontend/views/pages   // Файлы с основным контентом страниц
./frontend/views/layouts // Составные части и статические куски сайта (header, footer etc.)
```
