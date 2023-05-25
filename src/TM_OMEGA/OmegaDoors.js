export default {
  Meta: {
    TM: 'TM «OMEGA»',
    Name: 'OMEGA',
    DecFilm: false,
    Yoast1: 'Двері OMEGA %%sep%% %%title%% %%sep%% +38 (099) 309-02-22',
    Yoast2: 'Якісні ⭐ фарбовані двері які відмінно підкреслять стиль та витонченість Вашого інтер’єру ⭐ RAL / Kemichal ❽ акційних кольорів RAL ➤ за ціною базових❗',

    Logo: '../TM_OMEGA/OMEGA_logo.png',

    Description1: 'Полотно, пофарбоване в базові або акційні кольори. Ціна залежить від вибраної декоративної накладки.',

    Description2: '<img src="https://www.okdveri.com.ua/wp-content/uploads/2019/03/ral.png" width="50px"> Полотно пофарбоване в не базові кольори за RAL. Ціна залежить від вибраної декоративної накладки.',

    Description3: 'Полотно пофарбоване в базові або акційні кольори.',

    Description4: '<img src="https://www.okdveri.com.ua/wp-content/uploads/2019/03/ral.png" width="50px"> Полотно  пофарбоване в не базові кольори за RAL.'
  },
  Decors: {
    DecorSet1: ['Білий базовий', 'Слонова кістка', 'RAL акційний'],
    // ['RAL1014', 'RAL3015', 'RAL5024', 'RAL6019', 'RAL7037', 'RAL7040', 'RAL9001'],
    DecorSet2: ['RAL не базовий'],

    GlassSet1: ['Двосторонній сатин'],
    GlassSet7: ['Без скла - «глухе» полотно'],

    OnLay1: ['Без декор. накладок'],
    OnLay2: ['Lacobel чорне скло', 'Lacobel біле скло'],
    OnLay3: ['Lacobel бордо', 'Lacobel слонова кістка'],

    Edge1: ['Звичайний торець'],
    Edge2: ['Alum. торець - алюміній'],
    Edge3: ['Alum. торець - чорний'],

    Panel1: ['Суцільна фільонка'],
    Panel2: ['Набірні фільонки'],
    Panel3: ['Без фільонок'],
    Panel4: ['Емітація фільонок']
  },

  PanelDoors: {
    'ART Vision A3': {
      SeriesOf: 'ART Vision',
      // Price: [8154, 9378],
      Price: [8154, 8154 * 1.15],
      OnLays: ['OnLay2', 'OnLay3'],
      Decor: 'DecorSet1',
      GlassSet: 'GlassSet7',
      Panel: 'Panel3',
      Edge: ['Edge1'],
      Modern: true,
      VLines: true,
      RAL: false,
      Descr: 'Description1'
    },
    'ART Vision A3 RAL': {
      SeriesOf: 'ART Vision',
      // Price: [9785, 11008],
      Price: [8154 * 1.2, 8154 * 1.35],
      OnLays: ['OnLay2', 'OnLay3'],
      Decor: 'DecorSet2',
      GlassSet: 'GlassSet7',
      Panel: 'Panel3',
      Edge: ['Edge1'],
      Modern: true,
      VLines: true,
      RAL: true,
      Descr: 'Description2'
    },
    'ART Vision A3 120mm': {
      SeriesOf: 'ART Vision',
      Price: [8154, 8154 * 1.15],
      // Price: [8154, 9378],
      OnLays: ['OnLay2', 'OnLay3'],
      Decor: 'DecorSet1',
      GlassSet: 'GlassSet7',
      Panel: 'Panel3',
      Edge: ['Edge1'],
      Modern: true,
      VLines: true,
      RAL: false,
      Descr: 'Description1'
    },
    'ART Vision A3 120mm RAL': {
      SeriesOf: 'ART Vision',
      Price: [8154 * 1.2, 8154 * 1.35],
      // Price: [9785, 11008],
      OnLays: ['OnLay2', 'OnLay3'],
      Decor: 'DecorSet2',
      GlassSet: 'GlassSet7',
      Panel: 'Panel3',
      Edge: ['Edge1'],
      Modern: true,
      VLines: true,
      RAL: true,
      Descr: 'Description2'
    },
    'ART Vision A1': {
      SeriesOf: 'ART Vision',
      Price: [5527],
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
    'ART Vision A1 RAL': {
      SeriesOf: 'ART Vision',
      Price: [5527 * 1.2],
      OnLays: ['OnLay1'],
      Decor: 'DecorSet2',
      GlassSet: 'GlassSet7',
      Panel: 'Panel3',
      Edge: ['Edge1'],
      Modern: true,
      VLines: false,
      RAL: true,
      Descr: 'Description4'
    },
    'ART Vision A2': {
      SeriesOf: 'ART Vision',
      Price: [7282, 7282 * 1.15],
      OnLays: ['OnLay2', 'OnLay3'],
      Decor: 'DecorSet1',
      GlassSet: 'GlassSet7',
      Panel: 'Panel3',
      Edge: ['Edge1'],
      Modern: true,
      VLines: false,
      RAL: false,
      Descr: 'Description1'
    },
    'ART Vision A2 RAL': {
      SeriesOf: 'ART Vision',
      Price: [7282 * 1.2, 7282 * 1.35],
      OnLays: ['OnLay2', 'OnLay3'],
      Decor: 'DecorSet2',
      GlassSet: 'GlassSet7',
      Panel: 'Panel3',
      Edge: ['Edge1'],
      Modern: true,
      VLines: false,
      RAL: true,
      Descr: 'Description2'
    },
    'ART Vision A4': {
      SeriesOf: 'ART Vision',
      Price: [10487, 10487 * 1.15],
      OnLays: ['OnLay2', 'OnLay3'],
      Decor: 'DecorSet1',
      GlassSet: 'GlassSet7',
      Panel: 'Panel3',
      Edge: ['Edge1'],
      Modern: true,
      VLines: true,
      RAL: false,
      Descr: 'Description1'
    },
    'ART Vision A4 RAL': {
      SeriesOf: 'ART Vision',
      Price: [10487 * 1.2, 10847 * 1.35],
      OnLays: ['OnLay2', 'OnLay3'],
      Decor: 'DecorSet2',
      GlassSet: 'GlassSet7',
      Panel: 'Panel3',
      Edge: ['Edge1'],
      Modern: true,
      VLines: true,
      RAL: true,
      Descr: 'Description2'
    },
    'ART Vision A5': {
      SeriesOf: 'ART Vision',
      Price: [11202, 11202 * 1.15],
      OnLays: ['OnLay2', 'OnLay3'],
      Decor: 'DecorSet1',
      GlassSet: 'GlassSet7',
      Panel: 'Panel3',
      Edge: ['Edge1'],
      Modern: true,
      VLines: false,
      RAL: false,
      Descr: 'Description1'
    },
    'ART Vision A5 RAL': {
      SeriesOf: 'ART Vision',
      Price: [11202 * 1.2, 11202 * 1.35],
      OnLays: ['OnLay2', 'OnLay3'],
      Decor: 'DecorSet2',
      GlassSet: 'GlassSet7',
      Panel: 'Panel3',
      Edge: ['Edge1'],
      Modern: true,
      VLines: false,
      RAL: true,
      Descr: 'Description2'
    },
    'Lines F2': {
      SeriesOf: 'Lines',
      Price: [5876],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet1',
      GlassSet: 'GlassSet7',
      Panel: 'Panel3', // without
      Edge: ['Edge1'],
      Modern: true,
      VLines: false,
      RAL: false,
      Descr: 'Description3'
    },
    'Lines F2 RAL': {
      SeriesOf: 'Lines',
      Price: [5876 * 1.2],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet2',
      GlassSet: 'GlassSet7',
      Panel: 'Panel3', // without
      Edge: ['Edge1'],
      Modern: true,
      VLines: false,
      RAL: true,
      Descr: 'Description4'
    },
    'Lines F5': {
      SeriesOf: 'Lines',
      Price: [5876],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet1',
      GlassSet: 'GlassSet7',
      Panel: 'Panel3', // without
      Edge: ['Edge1'],
      Modern: true,
      VLines: false,
      RAL: false,
      Descr: 'Description3'
    },
    'Lines F5 RAL': {
      SeriesOf: 'Lines',
      Price: [5876 * 1.2],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet2',
      GlassSet: 'GlassSet7',
      Panel: 'Panel3', // without
      Edge: ['Edge1'],
      Modern: true,
      VLines: false,
      RAL: true,
      Descr: 'Description4'
    },
    'Lines F6': {
      SeriesOf: 'Lines',
      Price: [5876],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet1',
      GlassSet: 'GlassSet7',
      Panel: 'Panel3', // without
      Edge: ['Edge1'],
      Modern: true,
      VLines: true,
      RAL: false,
      Descr: 'Description3'
    },
    'Lines F6 RAL': {
      SeriesOf: 'Lines',
      Price: [5876 * 1.2],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet2',
      GlassSet: 'GlassSet7',
      Panel: 'Panel3', // without
      Edge: ['Edge1'],
      Modern: true,
      VLines: true,
      RAL: true,
      Descr: 'Description4'
    },
    'Lines F9': {
      SeriesOf: 'Lines',
      Price: [6442],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet1',
      GlassSet: 'GlassSet7',
      Panel: 'Panel3', // without
      Edge: ['Edge1'],
      Modern: true,
      VLines: false,
      RAL: false,
      Descr: 'Description3'
    },
    'Lines F9 RAL': {
      SeriesOf: 'Lines',
      Price: [6442 * 1.2],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet2',
      GlassSet: 'GlassSet7',
      Panel: 'Panel3', // without
      Edge: ['Edge1'],
      Modern: true,
      VLines: false,
      RAL: true,
      Descr: 'Description4'
    }
  },
  FrameDoors: {
    'Amore Classic Nicca PG': {
      SeriesOf: 'Amore Classic',
      Price: [6816],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet1',
      GlassSet: 'GlassSet7',
      Panel: 'Panel4', // pseudo
      Edge: ['Edge1'],
      Modern: false,
      VLines: false,
      RAL: false,
      Descr: 'Description3'
    },
    'Amore Classic Nicca PG RAL': {
      SeriesOf: 'Amore Classic',
      Price: [6816 * 1.2],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet2',
      GlassSet: 'GlassSet7',
      Panel: 'Panel4', // pseudo
      Edge: ['Edge1'],
      Modern: false,
      VLines: false,
      RAL: true,
      Descr: 'Description4'
    },
    'Amore Classic Nicca POO': {
      SeriesOf: 'Amore Classic',
      Price: [10100],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet1',
      GlassSet: 'GlassSet1',
      Panel: 'Panel3', // without
      Edge: ['Edge1'],
      Modern: false,
      VLines: false,
      RAL: false,
      Descr: 'Description3'
    },
    'Amore Classic Nicca POO RAL': {
      SeriesOf: 'Amore Classic',
      Price: [10100 * 1.2],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet2',
      GlassSet: 'GlassSet1',
      Panel: 'Panel3', // without
      Edge: ['Edge1'],
      Modern: false,
      VLines: false,
      RAL: true,
      Descr: 'Description4'
    },

    'Amore Classic RIM PG': {
      SeriesOf: 'Amore Classic',
      Price: [7180],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet1',
      GlassSet: 'GlassSet7',
      Panel: 'Panel4', // pseudo
      Edge: ['Edge1'],
      Modern: false,
      VLines: false,
      RAL: false,
      Descr: 'Description3'
    },
    'Amore Classic RIM PG RAL': {
      SeriesOf: 'Amore Classic',
      Price: [7180 * 1.2],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet2',
      GlassSet: 'GlassSet7',
      Panel: 'Panel4', // pseudo
      Edge: ['Edge1'],
      Modern: false,
      VLines: false,
      RAL: true,
      Descr: 'Description4'
    },

    'Amore Classic RIM POO': {
      SeriesOf: 'Amore Classic',
      Price: [9323],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet1',
      GlassSet: 'GlassSet1',
      Panel: 'Panel3', // without
      Edge: ['Edge1'],
      Modern: false,
      VLines: false,
      RAL: false,
      Descr: 'Description3'
    },
    'Amore Classic RIM POO RAL': {
      SeriesOf: 'Amore Classic',
      Price: [9323 * 1.2],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet2',
      GlassSet: 'GlassSet1',
      Panel: 'Panel3', // without
      Edge: ['Edge1'],
      Modern: false,
      VLines: false,
      RAL: true,
      Descr: 'Description4'
    },
    'Amore Classic Florence PG': {
      SeriesOf: 'Amore Classic',
      Price: [7180],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet1',
      GlassSet: 'GlassSet7', // without
      Panel: 'Panel4', // pseudo
      Edge: ['Edge1'],
      Modern: false,
      VLines: true,
      RAL: false,
      Descr: 'Description3'
    },
    'Amore Classic Florence PG RAL': {
      SeriesOf: 'Amore Classic',
      Price: [7180 * 1.2],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet2',
      GlassSet: 'GlassSet7', // without
      Panel: 'Panel4', // pseudo
      Edge: ['Edge1'],
      Modern: false,
      VLines: true,
      RAL: true,
      Descr: 'Description4'
    },
    'Amore Classic London PG': {
      SeriesOf: 'Amore Classic',
      Price: [7180],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet1',
      GlassSet: 'GlassSet7', // without
      Panel: 'Panel4', // pseudo
      Edge: ['Edge1'],
      Modern: false,
      VLines: false,
      RAL: false,
      Descr: 'Description3'
    },
    'Amore Classic London PG RAL': {
      SeriesOf: 'Amore Classic',
      Price: [7180 * 1.2],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet2',
      GlassSet: 'GlassSet7', // without
      Panel: 'Panel4', // pseudo
      Edge: ['Edge1'],
      Modern: false,
      VLines: false,
      RAL: true,
      Descr: 'Description4'
    },
    'Amore Classic London PO': {
      SeriesOf: 'Amore Classic',
      Price: [9159],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet1',
      GlassSet: 'GlassSet1',
      Panel: 'Panel4', // pseudo
      Edge: ['Edge1'],
      Modern: false,
      VLines: false,
      RAL: false,
      Descr: 'Description3'
    },
    'Amore Classic London PO RAL': {
      SeriesOf: 'Amore Classic',
      Price: [9159 * 1.2],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet2',
      GlassSet: 'GlassSet1',
      Panel: 'Panel4', // pseudo
      Edge: ['Edge1'],
      Modern: false,
      VLines: false,
      RAL: true,
      Descr: 'Description4'
    },
    'Amore Classic Milan PG': {
      SeriesOf: 'Amore Classic',
      Price: [7180],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet1',
      GlassSet: 'GlassSet7', // without
      Panel: 'Panel4', // pseudo
      Edge: ['Edge1'],
      Modern: false,
      VLines: false,
      RAL: false,
      Descr: 'Description3'
    },
    'Amore Classic Milan PG RAL': {
      SeriesOf: 'Amore Classic',
      Price: [7180 * 1.2],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet2',
      GlassSet: 'GlassSet7', // without
      Panel: 'Panel4', // pseudo
      Edge: ['Edge1'],
      Modern: false,
      VLines: false,
      RAL: true,
      Descr: 'Description4'
    },
    'Amore Classic Milan PO': {
      SeriesOf: 'Amore Classic',
      Price: [9323],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet1',
      GlassSet: 'GlassSet1',
      Panel: 'Panel4', // pseudo
      Edge: ['Edge1'],
      Modern: false,
      VLines: false,
      RAL: false,
      Descr: 'Description3'
    },
    'Amore Classic Milan PO RAL': {
      SeriesOf: 'Amore Classic',
      Price: [9323 * 1.2],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet2',
      GlassSet: 'GlassSet1',
      Panel: 'Panel4', // pseudo
      Edge: ['Edge1'],
      Modern: false,
      VLines: false,
      RAL: true,
      Descr: 'Description4'
    },
    'Amore Classic RIM Veneciano PG': {
      SeriesOf: 'Amore Classic',
      Price: [7979],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet1',
      GlassSet: 'GlassSet7', // without
      Panel: 'Panel4', // pseudo
      Edge: ['Edge1'],
      Modern: false,
      VLines: false,
      RAL: false,
      Descr: 'Description3'
    },
    'Amore Classic RIM Veneciano PG RAL': {
      SeriesOf: 'Amore Classic',
      Price: [7979 * 1.2],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet2',
      GlassSet: 'GlassSet7', // without
      Panel: 'Panel4', // pseudo
      Edge: ['Edge1'],
      Modern: false,
      VLines: false,
      RAL: true,
      Descr: 'Description4'
    },
    'Allure Ніцца': {
      SeriesOf: 'Allure',
      Price: [5975],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet1',
      GlassSet: 'GlassSet7', // without
      Panel: 'Panel4', // pseudo
      Edge: ['Edge1'],
      Modern: false,
      VLines: false,
      RAL: false,
      Descr: 'Description3'
    },
    'Allure Ніцца RAL': {
      SeriesOf: 'Allure',
      Price: [5975 * 1.2],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet2',
      GlassSet: 'GlassSet7', // without
      Panel: 'Panel4', // pseudo
      Edge: ['Edge1'],
      Modern: false,
      VLines: false,
      RAL: true,
      Descr: 'Description4'
    },
    'Allure Лондон': {
      SeriesOf: 'Allure',
      Price: [5975],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet1',
      GlassSet: 'GlassSet7', // without
      Panel: 'Panel4', // pseudo
      Edge: ['Edge1'],
      Modern: false,
      VLines: false,
      RAL: false,
      Descr: 'Description3'
    },
    'Allure Лондон RAL': {
      SeriesOf: 'Allure',
      Price: [5975 * 1.2],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet2',
      GlassSet: 'GlassSet7', // without
      Panel: 'Panel4', // pseudo
      Edge: ['Edge1'],
      Modern: false,
      VLines: false,
      RAL: true,
      Descr: 'Description4'
    },
    'Allure Мілан': {
      SeriesOf: 'Allure',
      Price: [5975],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet1',
      GlassSet: 'GlassSet7', // without
      Panel: 'Panel4', // pseudo
      Edge: ['Edge1'],
      Modern: false,
      VLines: false,
      RAL: false,
      Descr: 'Description3'
    },
    'Allure Мілан RAL': {
      SeriesOf: 'Allure',
      Price: [5975 * 1.2],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet2',
      GlassSet: 'GlassSet7', // without
      Panel: 'Panel4', // pseudo
      Edge: ['Edge1'],
      Modern: false,
      VLines: false,
      RAL: true,
      Descr: 'Description4'
    },
    'Allure Флоренція': {
      SeriesOf: 'Allure',
      Price: [5975],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet1',
      GlassSet: 'GlassSet7', // without
      Panel: 'Panel4', // pseudo
      Edge: ['Edge1'],
      Modern: false,
      VLines: true,
      RAL: false,
      Descr: 'Description3'
    },
    'Allure Флоренція RAL': {
      SeriesOf: 'Allure',
      Price: [5975 * 1.2],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet2',
      GlassSet: 'GlassSet7', // without
      Panel: 'Panel4', // pseudo
      Edge: ['Edge1'],
      Modern: false,
      VLines: true,
      RAL: true,
      Descr: 'Description4'
    },
    'Allure Америка': {
      SeriesOf: 'Allure',
      Price: [6872],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet1',
      GlassSet: 'GlassSet7', // without
      Panel: 'Panel4', // pseudo
      Edge: ['Edge1'],
      Modern: false,
      VLines: false,
      RAL: false,
      Descr: 'Description3'
    },
    'Allure Америка RAL': {
      SeriesOf: 'Allure',
      Price: [6872 * 1.2],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet2',
      GlassSet: 'GlassSet7', // without
      Panel: 'Panel4', // pseudo
      Edge: ['Edge1'],
      Modern: false,
      VLines: false,
      RAL: true,
      Descr: 'Description4'
    },
    'Allure Рим-Венеціано': {
      SeriesOf: 'Allure',
      Price: [6872],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet1',
      GlassSet: 'GlassSet7', // without
      Panel: 'Panel4', // pseudo
      Edge: ['Edge1'],
      Modern: false,
      VLines: false,
      RAL: false,
      Descr: 'Description3'
    },
    'Allure Рим-Венеціано RAL': {
      SeriesOf: 'Allure',
      Price: [6872 * 1.2],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet2',
      GlassSet: 'GlassSet7', // without
      Panel: 'Panel4', // pseudo
      Edge: ['Edge1'],
      Modern: false,
      VLines: false,
      RAL: true,
      Descr: 'Description4'
    },
    'Minimal Milano': {
      SeriesOf: 'Minimal',
      Price: [7706],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet1',
      GlassSet: 'GlassSet7', // without
      Panel: 'Panel4', // pseudo
      Edge: ['Edge1'],
      Modern: false,
      VLines: false,
      RAL: false,
      Descr: 'Description3'
    },
    'Minimal Milano RAL': {
      SeriesOf: 'Minimal',
      Price: [7706 * 1.2],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet2',
      GlassSet: 'GlassSet7', // without
      Panel: 'Panel4', // pseudo
      Edge: ['Edge1'],
      Modern: false,
      VLines: false,
      RAL: true,
      Descr: 'Description4'
    },
    'Minimal London': {
      SeriesOf: 'Minimal',
      Price: [7706],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet1',
      GlassSet: 'GlassSet7', // without
      Panel: 'Panel4', // pseudo
      Edge: ['Edge1'],
      Modern: false,
      VLines: false,
      RAL: false,
      Descr: 'Description3'
    },
    'Minimal London RAL': {
      SeriesOf: 'Minimal',
      Price: [7706 * 1.2],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet2',
      GlassSet: 'GlassSet7', // without
      Panel: 'Panel4', // pseudo
      Edge: ['Edge1'],
      Modern: false,
      VLines: false,
      RAL: true,
      Descr: 'Description4'
    },
    'Minimal Nice': {
      SeriesOf: 'Minimal',
      Price: [7706],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet1',
      GlassSet: 'GlassSet7', // without
      Panel: 'Panel4', // pseudo
      Edge: ['Edge1'],
      Modern: false,
      VLines: false,
      RAL: false,
      Descr: 'Description3'
    },
    'Minimal Nice RAL': {
      SeriesOf: 'Minimal',
      Price: [7706 * 1.2],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet2',
      GlassSet: 'GlassSet7', // without
      Panel: 'Panel4', // pseudo
      Edge: ['Edge1'],
      Modern: false,
      VLines: false,
      RAL: true,
      Descr: 'Description4'
    },
    'Minimal Roma': {
      SeriesOf: 'Minimal',
      Price: [8061],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet1',
      GlassSet: 'GlassSet7', // without
      Panel: 'Panel4', // pseudo
      Edge: ['Edge1'],
      Modern: false,
      VLines: false,
      RAL: false,
      Descr: 'Description3'
    },
    'Minimal Roma RAL': {
      SeriesOf: 'Minimal',
      Price: [8061 * 1.2],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet2',
      GlassSet: 'GlassSet7', // without
      Panel: 'Panel4', // pseudo
      Edge: ['Edge1'],
      Modern: false,
      VLines: false,
      RAL: true,
      Descr: 'Description4'
    },
    'Minimal Florencia': {
      SeriesOf: 'Minimal',
      Price: [8061],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet1',
      GlassSet: 'GlassSet7', // without
      Panel: 'Panel4', // pseudo
      Edge: ['Edge1'],
      Modern: false,
      VLines: true,
      RAL: false,
      Descr: 'Description3'
    },
    'Minimal Florencia RAL': {
      SeriesOf: 'Minimal',
      Price: [8061 * 1.2],
      OnLays: ['OnLay1'], // without
      Decor: 'DecorSet2',
      GlassSet: 'GlassSet7', // without
      Panel: 'Panel4', // pseudo
      Edge: ['Edge1'],
      Modern: false,
      VLines: true,
      RAL: true,
      Descr: 'Description4'
    }
  }
}
