Q1
Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки зрения
-пользователя;
Отображается на всех устройствах и браузерах корректно.Высокая скорость загрузки.Отзывчивость сайта.Приятный и удобный дизайн, для наиболее комфортного взаимодействия.
-менеджера проектов;
Соответствие верстки поставленной задачи со стороны заказчика, а так же сроков исполнения, качества.Соответствие работы используемой компанией технологии.Компонентный подход.
-дизайнера;
Выполнение задания в полном соответствии с предоставленным дизайнерским решением. Отступы, цвета, предложенные анимационные решения. Если указано, то perfect pixel.
-верстальщика;
Понятный код. Возможность переиспользования компонентов. Правильное именование классов. Семантика(правильное использование тегов). Отсутствие возможности заблудиться в верстке при внесении правок.
-клиентского программиста;
Понятный код. Возможность переиспользования компонентов. Правильное именование классов. Семантика(правильное использование тегов). Отсутствие возможности заблудиться в верстке при внесении правок. Плюсом будет сопутствующая документация, своего рода гид по проекту и комментарии.
-серверного программиста;
Возможность быстро и безболезненно посадить сайт на хостинг. Правильно прописаная настройка сборщика (webpack...)
Q2
Опишите основные особенности верстки крупных многостраничных сайтов, дизайн
которых может меняться в процессе реализации и поддержки.
Расскажите о своем опыте верстки подобных сайтов: какие методологии, инструменты
и технологии вы применяли на практике.
 В первую очередь, необходимо использовать компонентный подход, позволяющий быстро и качественно переиспользовать, менять местами  и модифицировать сверстанные компоненты . В связи с этим можно использовать React, Pug если не используется React  и ему подобные. А так же использование BEM  подхода и использованте препроцессоров для быстрого изменения стилей блоков(SCSS...)
 Я стараюсь использовать React, BEM, SCSS, module.scss. В основном этонебольшие учебные проекты и сайт визитка находящийся в разработке. Опыта в серьезных проектах пока еще нет, но очень хочется его получить!
 Q3
Опишите основные особенности верстки сайтов, которые должны одинаково хорошо
отображаться как на любом современном компьютере, так и на смартфонах и
планшетах под управлением iOS и Android. Расскажите о своем опыте верстки
подобных сайтов: какие инструменты и технологии вы применяли, как проверяли
результат на различных устройствах, какие именно устройства требовалось
поддерживать.
Для одинакового отображения сайтов на различных устройствач необходимо использовать либо резиновую верстку,путем установления например процентных величин, либо использовать медиазапроссы с указанием диапазонов, для конкретных гаджетов. Проверку результата чаще всего я производил с помощью встроенной в браузер панели разработчика.
Q4
Расскажите, какие инструменты помогают вам экономить время в процессе
написания, проверки и отладки кода.
Чаще всего использую REACT, что позволяет использовать встроенный сборщик. А так использовал и Gulp и Webpack и Parcel. Для отладки использую debugger.
В процессе написания кода хорошо помогает SCSS , а так же встроенный EMMET.
Q5
Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на
Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия?
Сталкивались ли вы с подобными проблемами на практике?
К сожалению не готов ответить корректно на этот вопрос, так как небыло такой практики.Но теоретически я бы посмотрел установленные пакеты в pasckage.json и их совместимость с браузерами. А так ,как нет доступа к исходникам, начал бы копать в панели разработчика браузера меняя стили именно тех элементов, которые некорректны.
Ну и самый простой способ это Google. 
Q6
Дизайнер отдал вам макет, в котором не показано, как должны выглядеть
интерактивные элементы при наведении мыши. Ваши действия?
Если не указано, на усмотрение разработчика, то связался бы с менеджером проекта, или с дизайнером.
Q7
Какие ресурсы вы используете для развития в профессиональной сфере? Приведите
несколько конкретных примеров (сайты, блоги и так далее).
Какое направление развития вам более близко: JS-программирование, HTML/CSS-
верстка или что-то ещё?
Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам
интересны?
Мои ресурсы для самообучения это:
-developer.mozilla.org;
-документация React;
-freeCodeCamp;
-html5Book;
-Youtube It Kamasutra;
-Youtube Арчаков блог;
-Youtube Фрилансер по жизни;
-Youtube Владилен Минин;
-learn.javascript.ru;
-поисковые системы.
Наиболее близко мне 
-изучение React;
-Html,css,Js.
Большой интерес, что хотелось бы еще изучить, вызывает бэкенд и SQL.
Q8
Расскажите нам о себе и предоставьте несколько ссылок на последние работы,
выполненные вами.
О себе:
Мне 42 года. Образование высшее экономическое.Работаю торговым представителем. В 19 году проходил курсы в Нетологии, где считаю получил только самые азы, все остальное саморазвитие. Очень затянул , хоть и старый , но четкий курс  из 100 уроков по React it Kamasutra на ютубе. Хорошо заходит ютуб проект React Pizza(Арчаков блог). Хочется более быстрого развития в разработке и участия в реальных коммандных проектах. Готов полностью уйти в IT.Дайте только возможность.
Проекты только учебные:
--https://github.com/GudkovSergey/portfolioSite   В разработке.
- https://gudkovsergey.github.io/Social-network/
- https://github.com/GudkovSergey/ReactPizza
- https://github.com/greyJs
