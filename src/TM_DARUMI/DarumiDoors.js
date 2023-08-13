export default {
  Meta: {
    TM: 'TM «DARUMI»',
    DecFilm: 'TM «ELBEGY» (Japan)»',
    Yoast1: 'Двері DARUMI %%sep%% %%title%% %%sep%% +38 (099) 309-02-22',
    Yoast2: 'Якісні двері вироблені в Україні за італійськими   технологіями. Зносостійке декоративне покриття - ELBEGY (Japan). Співвідношення ціна /   якість ⭐ ⭐ ⭐ ⭐ ⭐',
    Logo: require('../TM_DARUMI/DARUMI_logo.png')
  },
  Decors: {
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
    OnLay3: ['Без декор. накладок'],

    // Versions of door panels (only for Frame doors)

    Panel1: ['Суцільна фільонка'],
    Panel2: ['Набірні фільонки'],
    Panel3: ['Без фільонок'],

    // Versions of ege (only for Panel doors)
    Edge1: ['Звичайна кромка'],
    Edge2: ['Чорна глянцева кромка', 'Алюмінієва кромка'],
    Edge3: ['Без кромки']
  },

  // TM DARUMI doors configuration. In order to simplify readability of data, consolidated by 2 groups - 1) Frame doors, and 2) Panel doors
  FrameDoors: {
    DARINA: { DecorSet1: 3498, DecorSet2: 3999, GlassSet: 'GlassSet1', Panel: 'Panel2', OnLay: 'OnLay3', Modern: true, VLines: false },

    STELLA: { DecorSet1: 3498, DecorSet2: 3999, GlassSet: 'GlassSet1', Panel: 'Panel2', OnLay: 'OnLay3', Modern: true, VLines: true },

    VERSAL: { DecorSet1: 3498, DecorSet2: 3999, GlassSet: 'GlassSet2', Panel: 'Panel2', OnLay: 'OnLay3', Modern: true, VLines: false },

    VELA: { DecorSet1: 3498, DecorSet2: 3999, GlassSet: 'GlassSet2', Panel: 'Panel2', OnLay: 'OnLay3', Modern: true, VLines: false },

    LEONA: { DecorSet1: 3498, DecorSet2: 3999, GlassSet: 'GlassSet2', Panel: 'Panel2', OnLay: 'OnLay3', Modern: true, VLines: false },

    MARSEL: { DecorSet1: 3498, DecorSet2: 3999, GlassSet: 'GlassSet3', Panel: 'Panel2', OnLay: 'OnLay3', Modern: true, VLines: false },

    BORDO: { DecorSet1: 3898, DecorSet2: 4298, GlassSet: 'GlassSet2', Panel: 'Panel2', OnLay: 'OnLay3', Modern: true, VLines: true },

    MADRID: { DecorSet1: 3898, DecorSet2: 4298, GlassSet: 'GlassSet2', Panel: 'Panel2', OnLay: 'OnLay3', Modern: true, VLines: true },

    AVANT: { DecorSet1: 3299, DecorSet2: 3499, GlassSet: 'GlassSet3', Panel: 'Panel3', OnLay: 'OnLay3', Modern: true, VLines: false },

    SELESTA: { DecorSet1: 3898, DecorSet2: 4298, GlassSet: 'GlassSet3', Panel: 'Panel1', OnLay: 'OnLay3', Modern: true, VLines: true },

    SENATOR: { DecorSet3: 3890, DecorSet2: 4370, GlassSet: 'GlassSet5', Panel: 'Panel1', OnLay: 'OnLay3', Modern: true, VLines: false },

    COLUMBIA: { DecorSet4: 3690, DecorSet2: 3999, GlassSet: 'GlassSet5', Panel: 'Panel2', OnLay: 'OnLay3', Modern: true, VLines: false },

    NEXT: { DecorSet3: 3690, DecorSet2: 3999, GlassSet: 'GlassSet2', Panel: 'Panel1', OnLay: 'OnLay3', Modern: true, VLines: true },

    'GALANT GL-01': { DecorSet3: 3498, DecorSet2: 3999, GlassSet: 'GlassSet4', Panel: 'Panel1', OnLay: 'OnLay3', Modern: false, VLines: false },

    'GALANT GL-02': { DecorSet3: 3498, DecorSet2: 3999, GlassSet: 'GlassSet5', Panel: 'Panel1', OnLay: 'OnLay3', Modern: false, VLines: false }
  },

  PanelDoors: {
    PLATO: {
      DecorSet5: [{ Edge1: 3494 }, { Edge2: 3997 }],
      DecorSet2: [{ Edge1: 3998 }, { Edge2: 4498 }],
      GlassSet: 'GlassSet5',
      Panel: 'Panel3',
      OnLay: 'OnLay3',
      Modern: true,
      VLines: false
    },
    'PLATO LINE PTL-03': {
      DecorSet5: [{ Edge1: 3999 }, { Edge2: 4498 }],
      DecorSet2: [{ Edge1: 4498 }, { Edge2: 4997 }],
      GlassSet: 'GlassSet5',
      Panel: 'Panel3',
      OnLay: 'OnLay1',
      Modern: true,
      VLines: false
    },
    'PLATO LINE PTL-04': {
      DecorSet5: [{ Edge1: 4498 }, { Edge2: 4997 }],
      DecorSet2: [{ Edge1: 4997 }, { Edge2: 5499 }],
      GlassSet: 'GlassSet5',
      Panel: 'Panel3',
      OnLay: 'OnLay2',
      Modern: true,
      VLines: true
    }
  }
}
