export default {
  Meta: {
    TM: 'TM «CITY»',
    Name: 'CITY',
    DecFilm: false,
    Yoast1: 'Двері CITY %%sep%% %%title%% %%sep%% +38 (099) 309-02-22',
    Yoast2: '⭐ TM "CITY" ⭐ це нова лінійка фарбованих дверей від виробника з 30-и річним досвідом виробництва ⭐ наявність на складі в Києві⭐ погонажні вироби системи «телескоп»⭐',

    Logo: require('../TM_CITY/CITY_logo.jpg'),

    Description1: 'Гладке щитове полотно без фрезерування',

    Description2: 'Щитове полотно з чотирма рівномірними горизонтальними фрезеруваннями (тонка фреза)',

    Description3: 'Щитове полотно з діагональними фрезеруваннями (тонка фреза)',

    Description4: 'Щитове полотно з двома вертикальними та п\'ятьма горизонтальними фрезеруваннями (тонка фреза)',

    Description5: 'Щитове полотно з горизонтальною алюмінієвою вставкою - чорний молдінг по середині полотна',

    Description6: 'Щитове полотно з вертикальною вставкою з чорного скла ↔ 70 мм зі сторони ручки',

    Description7: 'Щитове полотно з фрезеруваннями двох фільонок фрезою у двох площинах (широка фреза)',

    Description8: 'Щитове полотно з фрезеруваннями трьох фільонок фрезою у двох площинах (широка фреза)',

    Description9: 'Щитове полотно з фрезеруванням однієї фільонки фрезою в одній площині (широка фреза)',

    Description10: 'Щитове полотно з фрезеруванням двох фільонок фрезою в одній площині (широка фреза)',

    Description11: 'Щитове полотно зі склом двосторонній «сатин» (пропускає світло)',

    Description12: 'Щитове полотно з подвійним склом «сатин» (пропускає світло)'

  },
  Decors: {
    DecorSet1: ['Білий RAL9003'],

    GlassSet1: ['Сатин білий'],
    GlassSet7: ['Без скла - «глухе» полотно'],

    OnLay1: ['Без декор. накладок'],
    OnLay2: ['Lacobel чорне скло'],
    OnLay3: ['Чорна'],

    Edge1: ['Звичайний торець'],
    Edge2: ['Alum. торець - алюміній'],
    Edge3: ['Alum. торець - чорний'],

    Panel1: ['Суцільна фільонка'],
    Panel2: ['Набірні фільонки'],
    Panel3: ['Без фільонок'],
    Panel4: ['Емітація фільонок']
  },

  PanelDoors: {
    ЧЕРНІГІВ: {
      Price: [5200],
      OnLays: ['OnLay1'],
      Decor: 'DecorSet1',
      GlassSet: 'GlassSet7',
      Panel: 'Panel3',
      Edge: ['Edge1'],
      Modern: true,
      VLines: false,
      RAL: false,
      Descr: 'Description1'
    },
    ХАРКІВ: {
      Price: [5600],
      OnLays: ['OnLay1'],
      Decor: 'DecorSet1',
      GlassSet: 'GlassSet7',
      Panel: 'Panel3',
      Edge: ['Edge1'],
      Modern: true,
      VLines: false,
      RAL: false,
      Descr: 'Description2'
    },
    ХЕРСОН: {
      Price: [5600],
      OnLays: ['OnLay1'],
      Decor: 'DecorSet1',
      GlassSet: 'GlassSet7',
      Panel: 'Panel3',
      Edge: ['Edge1'],
      Modern: true,
      VLines: false,
      RAL: false,
      Descr: 'Description3'
    },
    ПОЛТАВА: {
      Price: [5600],
      OnLays: ['OnLay1'],
      Decor: 'DecorSet1',
      GlassSet: 'GlassSet7',
      Panel: 'Panel4',
      Edge: ['Edge1'],
      Modern: true,
      VLines: false,
      RAL: false,
      Descr: 'Description4'
    },
    ЛУГАНСЬК: {
      Price: [6400],
      OnLays: ['OnLay3'],
      Decor: 'DecorSet1',
      GlassSet: 'GlassSet7',
      Panel: 'Panel3',
      Edge: ['Edge1'],
      Modern: true,
      VLines: false,
      RAL: false,
      Descr: 'Description5'
    },
    ДОНЕЦЬК: {
      Price: [7650],
      OnLays: ['OnLay2'],
      Decor: 'DecorSet1',
      GlassSet: 'GlassSet7',
      Panel: 'Panel3',
      Edge: ['Edge1'],
      Modern: true,
      VLines: true,
      RAL: false,
      Descr: 'Description6'
    }

    // Decors: {
    //   DecorSet1: ['Білий RAL9003'],

    //   GlassSet1: ['Сатин білий'],
    //   GlassSet7: ['Без скла - «глухе» полотно'],

    //   OnLay1: ['Без декор. накладок'],
    //   OnLay2: ['Lacobel чорне скло'],
    //   OnLay3: ['Чорна'],

    //   Edge1: ['Звичайний торець'],
    //   Edge2: ['Alum. торець - алюміній'],
    //   Edge3: ['Alum. торець - чорний'],

    //   Panel1: ['Суцільна фільонка'],
    //   Panel2: ['Набірні фільонки'],
    //   Panel3: ['Без фільонок'],
    //   Panel4: ['Емітація фільонок']
    // },
  },
  FrameDoors: {
    ОДЕСА: {
      Price: [6800],
      OnLays: ['OnLay1'],
      Decor: 'DecorSet1',
      GlassSet: 'GlassSet7',
      Panel: 'Panel4',
      Edge: ['Edge1'],
      Modern: false,
      VLines: false,
      RAL: false,
      Descr: 'Description7'
    },
    УЖГОРОД: {
      Price: [6800],
      OnLays: ['OnLay1'],
      Decor: 'DecorSet1',
      GlassSet: 'GlassSet7',
      Panel: 'Panel4',
      Edge: ['Edge1'],
      Modern: false,
      VLines: false,
      RAL: false,
      Descr: 'Description8'
    },
    ТЕРНОПІЛЬ: {
      Price: [6250],
      OnLays: ['OnLay1'],
      Decor: 'DecorSet1',
      GlassSet: 'GlassSet7',
      Panel: 'Panel4',
      Edge: ['Edge1'],
      Modern: false,
      VLines: false,
      RAL: false,
      Descr: 'Description9'
    },
    ВІННИЦЯ: {
      Price: [6250],
      OnLays: ['OnLay1'],
      Decor: 'DecorSet1',
      GlassSet: 'GlassSet7',
      Panel: 'Panel4',
      Edge: ['Edge1'],
      Modern: false,
      VLines: false,
      RAL: false,
      Descr: 'Description10'
    },
    СІМФЕРОПОЛЬ: {
      Price: [10600],
      OnLays: ['OnLay1'],
      Decor: 'DecorSet1',
      GlassSet: 'GlassSet1',
      Panel: 'Panel4',
      Edge: ['Edge1'],
      Modern: true,
      VLines: true,
      RAL: false,
      Descr: 'Description11'
    },
    ЧЕРКАСИ: {
      Price: [8700],
      OnLays: ['OnLay1'],
      Decor: 'DecorSet1',
      GlassSet: 'GlassSet1',
      Panel: 'Panel3',
      Edge: ['Edge1'],
      Modern: true,
      VLines: true,
      RAL: false,
      Descr: 'Description12'
    }
    // Decors: {
    //   DecorSet1: ['Білий RAL9003'],

    //   GlassSet1: ['Сатин білий'],
    //   GlassSet7: ['Без скла - «глухе» полотно'],

    //   OnLay1: ['Без декор. накладок'],
    //   OnLay2: ['Lacobel чорне скло'],
    //   OnLay3: ['Чорна'],

    //   Edge1: ['Звичайний торець'],
    //   Edge2: ['Alum. торець - алюміній'],
    //   Edge3: ['Alum. торець - чорний'],

    //   Panel1: ['Суцільна фільонка'],
    //   Panel2: ['Набірні фільонки'],
    //   Panel3: ['Без фільонок'],
    //   Panel4: ['Емітація фільонок']
    // },
  }
}
