# Тестовое задание: таблица для вывода данных

Задание написано на react + vite + MUI. На странице размещена небольшая таблица из 20 строк, в каждой из которых по 4 колонок.
В этой таблице отображены фильмы с постером, названием, описанием
рейтингом, датой релиза и количеством просмотров. При клике на строку открывается модальное окно с дополнительной информацией о фильме. Также модальное окно открывается при клике по постеру, там уже картинка.
Также перед таблицей можно увидеть логику сортировки и фильтрации и еще checkbox для переключения темы. Задание размещено на gh-pages по
адрресу : [GitHub Pages](https://azazefir.github.io/table-for-data-output/).

## Оглавление

- [Установка](#установка)
- [Запуск проекта](#Запуск-проекта)
- [Структура проекта](#структура-проекта)

## Установка

1. Клонируйте репозиторий: `https://github.com/AzaZefir/table-for-data-output.git`
2. Перейдите в каталог проекта: `cd table-for-data-output`
3. Установите зависимости: `npm install`

## Запуск проекта

Выполните команду: `npm run dev`

Приложение будет доступно по адресу [http://localhost:5173](http://localhost:5173).


## Структура проекта

- /src
  - /api                                          # Каталог для API-запросов
    - api.js           # Файл для определения функций API-запросов
    - fetchMovies.js   # Файл для выполнения запросов на получение списка фильмов
  - /assets                                       # Каталог для изображений и шрифтов проекта
  - /components                                   # Каталог для React-компонентов
    - /dataTable          # Каталог для компонентов, относящихся к таблице данных
        - /filter             # Каталог для компонентов и логики, связанных с фильтрацией данных
        - /sort               # Каталог для компонентов и логики, связанных с сортировкой данных
        - /tableDataList      # Каталог для компонентов, отображающих данные в таблице
        - /tableHead          # Каталог для компонентов, отображающих заголовок таблицы
        - /theme              # Каталог для компонентов и логики, связанных с темой оформления
    - /ratings            # Каталог для компонентов, связанных с рейтингами
    - /skeletonLoader     # Каталог для компонентов, отвечающих за загрузку скелетов
  - /consts             # Каталог для файлов с константами
  - /context            # Каталог для контекстов приложения
    - ColorModeContext.jsx  # Файл с контекстом для управления цветовой темой
  - /helper             # Каталог для вспомогательных утилит и функций
    - getFilterLabel.js   # Файл с функцией для получения метки фильтра
    - getSortLabel.js     # Файл с функцией для получения метки сортировки
  - /hooks              # Каталог для кастомных хуков
    - useFetchMovies.jsx    # Файл с хуком для выполнения запросов к API для получения фильмов
    - useThemeMode.jsx      # Файл с хуком для управления темой приложения (светлая/темная)
  App.css              # Файл стилей для главного компонента приложения
- App.jsx              # Главный компонент приложения
- index.css            # Файл стилей для index.html
- main.jsx             # Основной файл входа приложения
- MuiDataTable.jsx     # Файл с компонентом MuiDataTable