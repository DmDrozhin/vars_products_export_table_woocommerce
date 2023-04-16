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
    PLATO: [
      { Price: 3497, DecorSet5: true, DecorSet2: false, Edge1: true, Edge2: false, OnLay1: false, OnLay2: false },
      { Price: 3997, DecorSet5: false, DecorSet2: true, Edge1: false, Edge2: true, OnLay1: false, OnLay2: false },
      { Price: 3998, DecorSet5: true, DecorSet2: false, Edge1: true, Edge2: false, OnLay1: false, OnLay2: false },
      { Price: 4498, DecorSet5: false, DecorSet2: true, Edge1: false, Edge2: true, OnLay1: false, OnLay2: false }
    ],

    'PLATO LINE PLT-03': [
      { Price: 3999, DecorSet5: true, DecorSet2: false, Edge1: true, Edge2: false, OnLay1: true, OnLay2: false },
      { Price: 4498, DecorSet5: false, DecorSet2: true, Edge1: false, Edge2: true, OnLay1: true, OnLay2: false },
      { Price: 4498, DecorSet5: true, DecorSet2: false, Edge1: true, Edge2: false, OnLay1: true, OnLay2: false },
      { Price: 4997, DecorSet5: false, DecorSet2: true, Edge1: false, Edge2: true, OnLay1: true, OnLay2: false }
    ],

    'PLATO LINE PLT-04': [
      { Price: 4498, DecorSet5: true, DecorSet2: false, Edge1: true, Edge2: false, OnLay1: false, OnLay2: true },
      { Price: 4997, DecorSet5: false, DecorSet2: true, Edge1: false, Edge2: true, OnLay1: false, OnLay2: true },
      { Price: 4997, DecorSet5: true, DecorSet2: false, Edge1: true, Edge2: false, OnLay1: false, OnLay2: true },
      { Price: 5499, DecorSet5: false, DecorSet2: true, Edge1: false, Edge2: true, OnLay1: false, OnLay2: true }
    ]

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

  }
}
