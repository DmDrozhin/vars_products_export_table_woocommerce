export default {
  DarumiDecors: {
  // Sets of decors. Can applied to certain door model and specified in price list from factory

    // DecorsSer1 - DecosrSet4 - for FRAME doors
    DecorSet1: ['Дуб ольс', 'Дуб мембау', 'Дуб боровий', 'Дуб натуральний', 'Дуб честнат', 'Венге панга', 'Білий текстурний', 'Димчастий краст', 'Сірий краст', 'Сірий бетон', 'Горіх бургун', 'Горіх роял'],

    DecorSet2: ['Білий матовий'],

    DecorSet3: ['Дуб ольс', 'Дуб боровий', 'Дуб натуральний', 'Горіх бургун', 'Горіх роял', 'Венге панга'],

    DecorSet4: ['Білий текстурний', 'Дуб мембау', 'Дуб честнат', 'Димчастий краст', 'Сірий краст', 'Сірий бетон'],

    // DecorSet5 - only for PANEL doors
    DecorSet5: ['Дуб ольс', 'Дуб боровий', 'Дуб натуральний', 'Горіх бургун', 'Горіх роял', 'Венге панга', 'Димчастий краст', 'Сірий краст', 'Сірий бетон'],

    // All decores - for misc reasons
    AllDecors: ['Дуб ольс', 'Дуб мембау', 'Дуб боровий', 'Дуб натуральний', 'Дуб честнат', 'Венге панга', 'Білий текстурний', 'Димчастий краст', 'Сірий краст', 'Сірий бетон', 'Горіх бургун', 'Горіх роял', 'Білий матовий'],

    // Sets of glass color. Can applied to certain door model and specified in price list from factory

    GlassSet1: ['Сатин білий', 'Чорне скло'],
    GlassSet2: ['Сатин білий', 'Сатин бронза', 'Чорне скло'],
    GlassSet3: ['Сатин білий', 'Сатин бронза'],
    GlassSet4: ['Сатин білий + ромб графіт D1', 'Сатин білий', 'Сатин бронза'],
    GlassSet5: ['Без скла - «глухе» полотно'],

    // Decorative on-lays applied to DARUMI PLATO series

    OnLay1: ['Чорна', 'Антрацитна', 'Нікелева'],
    OnLay2: ['Lacobel чорне скло'],
    OnLay3: ['Без накладки'],

    // Versions of door panels (only for Frame doors)

    Panel1: ['Цільна фільонка'],
    Panel2: ['Наборна фільонка'],

    // Versions of ege (only for Panel doors)
    Edge1: ['Звичайна кромка'],
    Edge2: ['Чорна глянцева кромка', 'Алюмінієва кромка']
  },

  // TM DARUMI doors configuration. In order to simplify readability of data, consolidated by 2 groups - 1) Frame doors, and 2) Panel doors
  FrameDoors: {
    DARINA: { Price1: 3498, Price2: 3999, Decor1: 'DecorSet1', Decor2: 'DecorSet2', GlassSet: 'GlassSet1', Panel: false, Modern: true, VLines: false },

    STELLA: { Price1: 3498, Price2: 3999, Decor1: 'DecorSet1', Decor2: 'DecorSet2', GlassSet: 'GlassSet1', Panel: false, Modern: true, VLines: true },

    VERSAL: { Price1: 3498, Price2: 3999, Decor1: 'DecorSet1', Decor2: 'DecorSet2', GlassSet: 'GlassSet2', Panel: false, Modern: true, VLines: false },

    VELA: { Price1: 3498, Price2: 3999, Decor1: 'DecorSet1', Decor2: 'DecorSet2', GlassSet: 'GlassSet2', Panel: false, Modern: true, VLines: false },

    LEONA: { Price1: 3498, Price2: 3999, Decor1: 'DecorSet1', Decor2: 'DecorSet2', GlassSet: 'GlassSet2', Panel: false, Modern: true, VLines: false },

    MARSEL: { Price1: 3498, Price2: 3999, Decor1: 'DecorSet1', Decor2: 'DecorSet2', GlassSet: 'GlassSet3', Panel: false, Modern: true, VLines: false },

    BORDO: { Price1: 3898, Price2: 4298, Decor1: 'DecorSet1', Decor2: 'DecorSet2', GlassSet: 'GlassSet2', Panel: false, Modern: true, VLines: true },

    MADRID: { Price1: 3898, Price2: 4298, Decor1: 'DecorSet1', Decor2: 'DecorSet2', GlassSet: 'GlassSet2', Panel: false, Modern: true, VLines: true },

    AVANT: { Price1: 3299, Price2: 3499, Decor1: 'DecorSet1', Decor2: 'DecorSet2', GlassSet: 'GlassSet3', Panel: false, Modern: true, VLines: false },

    SELESTA: { Price1: 3898, Price2: 4298, Decor1: 'DecorSet1', Decor2: 'DecorSet2', GlassSet: 'GlassSet3', Panel: false, Modern: true, VLines: true },

    SENATOR: { Price1: 3890, Price2: 4370, Decor1: 'DecorSet3', Decor2: 'DecorSet2', GlassSet: 'GlassSet5', Panel: 'Panel1', Modern: true, VLines: false },

    COLUMBIA: { Price1: 3690, Price2: 3999, Decor1: 'DecorSet4', Decor2: 'DecorSet2', GlassSet: 'GlassSet5', Panel: 'Panel2', Modern: true, VLines: false },

    NEXT: { Price1: 3690, Price2: 3999, Decor1: 'DecorSet3', Decor2: 'DecorSet2', GlassSet: 'GlassSet2', Panel: false, Modern: true, VLines: true },

    'GALANT GL-01': { Price1: 3498, Price2: 3999, Decor1: 'DecorSet3', Decor2: 'DecorSet2', GlassSet: 'GlassSet4', Panel: false, Modern: false, VLines: false },

    'GALANT GL-02': { Price1: 3498, Price2: 3999, Decor1: 'DecorSet3', Decor2: 'DecorSet2', GlassSet: 'GlassSet5', Panel: 'Panel1', Modern: false, VLines: false }
  },

  PanelDoors: {
    PLATO: {
      DecorSet5: [
        { 'Звичайна кромка': 3494, 'Чорна глянцева кромка': 3997, 'Алюмінієва кромка': 3997 },
        { OnLay: 'OnLay3' }
      ],
      DecorSet2: [
        { 'Звичайна кромка': 3998, 'Чорна глянцева кромка': 4498, 'Алюмінієва кромка': 4498 },
        { OnLay: 'OnLay3' }
      ]
    },
    'PLATO LINE PTL-03': {
      DecorSet5: [
        { 'Звичайна кромка': 3999, 'Чорна глянцева кромка': 4498, 'Алюмінієва кромка': 4498 },
        { OnLay: 'OnLay1' }
      ],
      DecorSet2: [
        { 'Звичайна кромка': 4498, 'Чорна глянцева кромка': 4997, 'Алюмінієва кромка': 4997 },
        { OnLay: 'OnLay1' }
      ]
    },
    'PLATO LINE PTL-04': {
      DecorSet5: [
        { 'Звичайна кромка': 4498, 'Чорна глянцева кромка': 4997, 'Алюмінієва кромка': 4997 },
        { OnLay: 'OnLay2' }
      ],
      DecorSet2: [
        { 'Звичайна кромка': 4997, 'Чорна глянцева кромка': 5499, 'Алюмінієва кромка': 5499 },
        { OnLay: 'OnLay1' }
      ]
    }
  },
  // Дуб ольс - DO
  // Дуб мембау - DM
  // Дуб боровий - DB
  // Дуб натуральний - DN
  // Дуб честнат - DC
  // Венге панга - VP
  // Білий текстурний - WT
  // Димчастий краст - SC
  // Сірий краст - GC
  // Сірий бетон - GB
  // Горіх бургун - NB
  // Горіх роял - NR
  // Білий матовий - WM

  FrameDoorsTableHeaders: ['ID', 'Тип', 'Артикул', 'Назва', 'Опубліковано', 'Рекомендовано?', 'Видимість в каталозі', 'Короткий опис', 'Опис', 'Початок акції', 'Завершення акції', 'Статус податку', 'Клас податку', 'В наявності?', 'Запаси', 'Низька кількість запасів', 'Дозволити резервування?', 'Продавати окремо?', 'Вага (kg)', 'Довжина (mm)', 'Ширина (mm)', 'Висота (mm)', 'Дозволити відгуки?', 'Нотатка до покупки', 'Ціна зі знижкою', 'Звичайна ціна', 'Категорії', 'Позначки', 'Клас доставки', 'Зображення', 'Ліміт завантажень', 'Число днів до закінчення Завантаження', 'Предок', 'Згруповані товари', 'Пропозиція товарів', 'Супутні товари', 'Зовнішній URL', 'Текст кнопки', 'Позиція', 'Назва 1 атрибуту', '1 значення атрибуту', 'Атрибут 1 видимий', 'Атрибут 1 глобальний', 'Атрибут 1 за замовчуванням', 'Назва 2 атрибуту', '2 значення атрибуту', 'Атрибут 2 видимий', 'Атрибут 2 глобальний', 'Атрибут 2 за замовчуванням', 'Назва 3 атрибуту', '3 значення атрибуту', 'Атрибут 3 видимий', 'Атрибут 3 глобальний', 'Атрибут 3 за замовчуванням', 'Назва 4 атрибуту', '4 значення атрибуту', 'Атрибут 4 видимий', 'Атрибут 4 глобальний', 'Атрибут 4 за замовчуванням', 'Назва 5 атрибуту', '5 значення атрибуту', 'Атрибут 5 видимий', 'Атрибут 5 глобальний', 'Атрибут 5 за замовчуванням', 'Мета: inline_featured_image', 'Мета: _wp_page_template', 'Мета: _yoast_wpseo_title', 'Мета: _yoast_wpseo_metadesc', 'Мета: _yoast_wpseo_content_score', 'Мета: _yoast_wpseo_primary_product_cat', 'Мета: _yoast_wpseo_estimated-reading-time-minutes', 'Мета: _yoast_wpseo_wordproof_timestamp'],

  PanelDoorsTableHeaders: ['ID', 'Тип', 'Артикул', 'Назва', 'Опубліковано', 'Рекомендовано?', 'Видимість в каталозі', 'Короткий опис', 'Опис', 'Початок акції', 'Завершення акції', 'Статус податку', 'Клас податку', 'В наявності?', 'Запаси', 'Низька кількість запасів', 'Дозволити резервування?', 'Продавати окремо?', 'Вага (kg)', 'Довжина (mm)', 'Ширина (mm)', 'Висота (mm)', 'Дозволити відгуки?', 'Нотатка до покупки', 'Ціна зі знижкою', 'Звичайна ціна', 'Категорії', 'Позначки', 'Клас доставки', 'Зображення', 'Ліміт завантажень', 'Число днів до закінчення Завантаження', 'Предок', 'Згруповані товари', 'Пропозиція товарів', 'Супутні товари', 'Зовнішній URL', 'Текст кнопки', 'Позиція', 'Назва 1 атрибуту', '1 значення атрибуту', 'Атрибут 1 видимий', 'Атрибут 1 глобальний', 'Атрибут 1 за замовчуванням', 'Назва 2 атрибуту', '2 значення атрибуту', 'Атрибут 2 видимий', 'Атрибут 2 глобальний', 'Атрибут 2 за замовчуванням', 'Назва 3 атрибуту', '3 значення атрибуту', 'Атрибут 3 видимий', 'Атрибут 3 глобальний', 'Атрибут 3 за замовчуванням', 'Назва 4 атрибуту', '4 значення атрибуту', 'Атрибут 4 видимий', 'Атрибут 4 глобальний', 'Атрибут 4 за замовчуванням', 'Назва 5 атрибуту', '5 значення атрибуту', 'Атрибут 5 видимий', 'Атрибут 5 глобальний', 'Атрибут 5 за замовчуванням', 'Назва 6 атрибуту', '6 значення атрибуту', 'Атрибут 6 видимий', 'Атрибут 6 глобальний', 'Атрибут 6 за замовчуванням', 'Мета: inline_featured_image', 'Мета: _wp_page_template', 'Мета: _yoast_wpseo_title', 'Мета: _yoast_wpseo_metadesc', 'Мета: _yoast_wpseo_content_score', 'Мета: _yoast_wpseo_primary_product_cat', 'Мета: _yoast_wpseo_estimated-reading-time-minutes', 'Мета: _yoast_wpseo_wordproof_timestamp']
}
