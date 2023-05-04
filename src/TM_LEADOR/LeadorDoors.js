export default {
  Meta: {
    TM: 'TM «LEADOR»',
    DecFilm: 'TM «LAMITEX» (Italy)',
    Yoast1: 'Двері LEADOR %%sep%% %%title%% %%sep%% +38 (099) 309-02-22',
    Yoast2: 'Якісні двері вироблені в Україні за італійськими   технологіями. Зносостійке декоративне покриття - LAMITEX (Italy). Співвідношення ціна /   якість ⭐ ⭐ ⭐ ⭐ ⭐',
    Logo: '../TM_LEADOR/LEADOR_logo.png'
  },
  Decors: {
  // Sets of decors. Can applied to certain door model and specified in price list from factory

    // DecorsSer1 - DecosrSet4 - for FRAME doors
    DecorSet1: ['Дуб мокко', 'Дуб латте', 'Сіре дерево', 'Монблан', 'Кедр білий', 'Кедр сірий'],

    DecorSet2: ['Білий матовий'],

    DecorSet3: ['Дуб мокко', 'Дуб латте', 'Сіре дерево', 'Монблан', 'Кедр білий'],

    DecorSet4: ['Дуб мокко', 'Дуб латте', 'Дуб саксонський', 'Сіре дерево', 'Монблан', 'Браун', 'Бетон білий'], // 'Кедр білий' - removed from the list as there are no pictures for it

    DecorSet5: ['Дуб мокко', 'Дуб латте', 'Дуб саксонський', 'Сіре дерево', 'Монблан', 'Браун', 'Бетон білий'],

    DecorSet6: ['Дуб мокко', 'Дуб латте', 'Сіре дерево', 'Монблан', 'Браун', 'Бетон білий'],

    DecorSet7: ['Дуб мокко', 'Дуб латте', 'Сіре дерево', 'Монблан', 'Браун'],

    // DecorSet8 - only for PANEL doors, ASTI
    DecorSet8: ['Сіре дерево (горизонтальний)', 'Монблан (горизонтальний)', 'Бетон білий'],

    // All decores - for misc reasons
    AllDecors: ['Дуб мокко', 'Дуб латте', 'Дуб саксонський', 'Сіре дерево', 'Монблан', 'Браун', 'Кедр білий', 'Кедр сірий', 'Бетон білий'],

    // Sets of glass color. Can applied to certain door model and specified in price list from factory

    GlassSet1: ['Сатин білий', 'Чорне скло'],
    // GlassSet2: ['Сатин білий', 'Сатин бронза', 'Сірий графіт', 'Чорне скло'],
    GlassSet2: ['Сатин білий', 'Сатин бронза', 'Чорне скло'], // 'Сірий графіт' removed to speed up the product render widget
    GlassSet3: ['Сатин білий', 'Сатин бронза', 'Сірий графіт'],
    GlassSet4: ['Сатин білий', 'Сатин бронза', 'Чорне скло'],
    GlassSet5: ['Сатин білий', 'Сатин бронза'],
    GlassSet6: ['Сатин білий (ромб білий L1)'],
    GlassSet7: ['Без скла - «глухе» полотно'],

    // Decorative on-lays applied to LEADOR ASTI series

    OnLay1: ['Lacobel чорне скло'],
    OnLay2: ['Без декор. накладок'],

    // Versions of door panels (only for Frame doors)

    Panel1: ['Суцільна фільонка'],
    Panel2: ['Набірні фільонки'],
    Panel3: ['Без фільонок'],

    // Versions of ege (only for Panel doors)
    Edge1: ['Звичайна кромка'],
    Edge2: ['Чорна глянцева кромка', 'Алюмінієва кромка'],
    Edge3: ['Без кромки']
  },

  // TM LEADOR doors configuration. In order to simplify readability of data, consolidated by 2 groups - 1) Frame doors, and 2) Panel doors
  FrameDoors: {
    NEAPOL: { DecorSet4: 3690, DecorSet2: 3999, GlassSet: 'GlassSet2', Panel: 'Panel2', OnLay: 'OnLay2', Modern: true, VLines: false },
    VERONA: { DecorSet4: 3690, DecorSet2: 3999, GlassSet: 'GlassSet2', Panel: 'Panel2', OnLay: 'OnLay2', Modern: true, VLines: true },
    SOVANA: { DecorSet4: 3690, DecorSet2: 3999, GlassSet: 'GlassSet2', Panel: 'Panel2', OnLay: 'OnLay2', Modern: true, VLines: false },
    CANNELI: { DecorSet4: 3690, DecorSet2: 3999, GlassSet: 'GlassSet3', Panel: 'Panel2', OnLay: 'OnLay2', Modern: true, VLines: false },
    ARONA: { DecorSet5: 3690, DecorSet2: 3999, GlassSet: 'GlassSet3', Panel: 'Panel2', OnLay: 'OnLay2', Modern: true, VLines: false },
    LORENZA: { DecorSet5: 3890, DecorSet2: 4199, GlassSet: 'GlassSet5', Panel: 'Panel2', OnLay: 'OnLay2', Modern: true, VLines: true },
    SICILIA: { DecorSet4: 3690, DecorSet2: 3999, GlassSet: 'GlassSet4', Panel: 'Panel2', OnLay: 'OnLay2', Modern: true, VLines: false },
    MALTA: { DecorSet5: 3690, DecorSet2: 3999, GlassSet: 'GlassSet4', Panel: 'Panel2', OnLay: 'OnLay2', Modern: true, VLines: false },
    MATERA: { DecorSet4: 3690, DecorSet2: 3999, GlassSet: 'GlassSet7', Panel: 'Panel2', OnLay: 'OnLay2', Modern: true, VLines: false },
    LATINA: { DecorSet4: 3690, DecorSet2: 3999, GlassSet: 'GlassSet1', Panel: 'Panel2', OnLay: 'OnLay2', Modern: true, VLines: false },
    LAZIO: { DecorSet5: 3690, DecorSet2: 3999, GlassSet: 'GlassSet2', Panel: 'Panel2', OnLay: 'OnLay2', Modern: true, VLines: true },
    COMPANIA: { DecorSet5: 3890, DecorSet2: 4199, GlassSet: 'GlassSet2', Panel: 'Panel2', OnLay: 'OnLay2', Modern: true, VLines: true },
    BAVARIA: { DecorSet6: 3890, DecorSet2: 4370, GlassSet: 'GlassSet7', Panel: 'Panel1', OnLay: 'OnLay2', Modern: true, VLines: false },
    'LAURA LR-01': { DecorSet7: 3674, DecorSet2: 3999, GlassSet: 'GlassSet6', Panel: 'Panel1', OnLay: 'OnLay2', Modern: true, VLines: false },
    'LAURA LR-02': { DecorSet7: 3674, DecorSet2: 3999, GlassSet: 'GlassSet7', Panel: 'Panel1', OnLay: 'OnLay2', Modern: true, VLines: false }
  },

  PanelDoors: {
    ASTI: {
      DecorSet8: [{ Edge1: 3497 }, { Edge2: 3997 }],
      DecorSet2: [{ Edge1: 3998 }, { Edge2: 4498 }],
      GlassSet: 'GlassSet7',
      Panel: 'Panel3',
      OnLay: 'OnLay2',
      Modern: true,
      VLines: false
    },

    'ASTI GLASS': {
      DecorSet8: [{ Edge1: 4498 }, { Edge2: 4997 }],
      DecorSet2: [{ Edge1: 4997 }, { Edge2: 5499 }],
      GlassSet: 'GlassSet7',
      Panel: 'Panel3',
      OnLay: 'OnLay1',
      Modern: true,
      VLines: true
    }
  },

  FrameDoorsTableHeaders: ['ID', 'Тип', 'Артикул', 'Назва', 'Опубліковано', 'Рекомендовано?', 'Видимість в каталозі', 'Короткий опис', 'Опис', 'Початок акції', 'Завершення акції', 'Статус податку', 'Клас податку', 'В наявності?', 'Запаси', 'Низька кількість запасів', 'Дозволити резервування?', 'Продавати окремо?', 'Вага (kg)', 'Довжина (mm)', 'Ширина (mm)', 'Висота (mm)', 'Дозволити відгуки?', 'Нотатка до покупки', 'Ціна зі знижкою', 'Звичайна ціна', 'Категорії', 'Позначки', 'Клас доставки', 'Зображення', 'Ліміт завантажень', 'Число днів до закінчення Завантаження', 'Предок', 'Згруповані товари', 'Пропозиція товарів', 'Супутні товари', 'Зовнішній URL', 'Текст кнопки', 'Позиція', 'Назва 1 атрибуту', '1 значення атрибуту', 'Атрибут 1 видимий', 'Атрибут 1 глобальний', 'Атрибут 1 за замовчуванням', 'Назва 2 атрибуту', '2 значення атрибуту', 'Атрибут 2 видимий', 'Атрибут 2 глобальний', 'Атрибут 2 за замовчуванням', 'Назва 3 атрибуту', '3 значення атрибуту', 'Атрибут 3 видимий', 'Атрибут 3 глобальний', 'Атрибут 3 за замовчуванням', 'Назва 4 атрибуту', '4 значення атрибуту', 'Атрибут 4 видимий', 'Атрибут 4 глобальний', 'Атрибут 4 за замовчуванням', 'Назва 5 атрибуту', '5 значення атрибуту', 'Атрибут 5 видимий', 'Атрибут 5 глобальний', 'Атрибут 5 за замовчуванням', 'Мета: inline_featured_image', 'Мета: _wp_page_template', 'Мета: _yoast_wpseo_title', 'Мета: _yoast_wpseo_metadesc', 'Мета: _yoast_wpseo_content_score', 'Мета: _yoast_wpseo_primary_product_cat', 'Мета: _yoast_wpseo_estimated-reading-time-minutes', 'Мета: _yoast_wpseo_wordproof_timestamp'],

  PanelDoorsTableHeaders: ['ID', 'Тип', 'Артикул', 'Назва', 'Опубліковано', 'Рекомендовано?', 'Видимість в каталозі', 'Короткий опис', 'Опис', 'Початок акції', 'Завершення акції', 'Статус податку', 'Клас податку', 'В наявності?', 'Запаси', 'Низька кількість запасів', 'Дозволити резервування?', 'Продавати окремо?', 'Вага (kg)', 'Довжина (mm)', 'Ширина (mm)', 'Висота (mm)', 'Дозволити відгуки?', 'Нотатка до покупки', 'Ціна зі знижкою', 'Звичайна ціна', 'Категорії', 'Позначки', 'Клас доставки', 'Зображення', 'Ліміт завантажень', 'Число днів до закінчення Завантаження', 'Предок', 'Згруповані товари', 'Пропозиція товарів', 'Супутні товари', 'Зовнішній URL', 'Текст кнопки', 'Позиція', 'Назва 1 атрибуту', '1 значення атрибуту', 'Атрибут 1 видимий', 'Атрибут 1 глобальний', 'Атрибут 1 за замовчуванням', 'Назва 2 атрибуту', '2 значення атрибуту', 'Атрибут 2 видимий', 'Атрибут 2 глобальний', 'Атрибут 2 за замовчуванням', 'Назва 3 атрибуту', '3 значення атрибуту', 'Атрибут 3 видимий', 'Атрибут 3 глобальний', 'Атрибут 3 за замовчуванням', 'Назва 4 атрибуту', '4 значення атрибуту', 'Атрибут 4 видимий', 'Атрибут 4 глобальний', 'Атрибут 4 за замовчуванням', 'Назва 5 атрибуту', '5 значення атрибуту', 'Атрибут 5 видимий', 'Атрибут 5 глобальний', 'Атрибут 5 за замовчуванням', 'Назва 6 атрибуту', '6 значення атрибуту', 'Атрибут 6 видимий', 'Атрибут 6 глобальний', 'Атрибут 6 за замовчуванням', 'Мета: inline_featured_image', 'Мета: _wp_page_template', 'Мета: _yoast_wpseo_title', 'Мета: _yoast_wpseo_metadesc', 'Мета: _yoast_wpseo_content_score', 'Мета: _yoast_wpseo_primary_product_cat', 'Мета: _yoast_wpseo_estimated-reading-time-minutes', 'Мета: _yoast_wpseo_wordproof_timestamp']
}
