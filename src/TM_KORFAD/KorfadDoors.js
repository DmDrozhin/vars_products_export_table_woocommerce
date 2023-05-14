export default {
  Meta: {
    TM: 'TM «KORFAD»',
    Name: 'KORFAD',
    DecFilm: {
      'TM «LAMITEX» (Italy)': ['DecorSet1', 'DecorSet2', 'DecorSet3'],
      'TM «Super PET» (Japan)': ['DecorSet4']
    },
    Yoast1: 'Двері KORFAD %%sep%% %%title%% %%sep%% +38 (099) 309-02-22',
    Yoast2: 'Якісні двері вироблені в Ураїні за італійськими технологіями. Переміум покриття - ⭐ ⭐ ⭐ ⭐ ⭐  LAMITEX (Italy) або Super PET (Japan)',
    Logo: '../TM_KORFAD/KORFAD_logo.png'
  },
  Decors: {
    DecorSet1: ['Дуб білений', 'Венге', 'Горіх', 'Дуб грей', 'Дуб марсала'], // PND-01
    DecorSet2: ['Ясен білий', 'Дуб браш', 'Еш-вайт', 'Дуб тобакко', 'Дуб нордік'],
    DecorSet3: ['Сталь кортен', 'Арт бетон', 'Лофт бетон', 'Лайт бетон'],
    DecorSet4: ['Super PET аляска', 'Super PET магнолія', 'Super PET сірий', 'Super PET антрацит', 'Super PET чорний', 'Білий перламутр'], // SR-01, SV-01, PND-01, PR-01
    DecorSet5: ['Super PET аляска', 'Super PET магнолія', 'Super PET сірий', 'Super PET антрацит', 'Super PET чорний'], // AL-01

    Glasses: {
      GlassSet1: ['Загартоване біле скло 8мм', 'Триплекс чорний 8мм'],
      GlassSet2: ['Двостороннє срібне триплекс дзеркало 8мм', 'Двостороннє графіт триплекс дзеркало 8мм', 'Двостороннє бронзове триплекс дзеркало 8мм'],
      GlassSet3: ['Сатин білий 8мм', 'Сатин графіт 8мм', 'Сатин бронза 8мм'],
      GlassSet4: ['Сатин білий 8мм', 'Двостороннє чорне скло', 'Двостороннє графіт дзеркало', 'Двостороннє бронзове дзеркало'], // AL-01, AL-02, AL-06, AL-07
      GlassSet5: ['Сатин білий', 'Сатин бронза', 'Чорне скло'], // PND-01
      GlassSet6: ['Сатин білий'], // PR-01
      GlassSet7: ['Без скла - «глухе» полотно'] // PR-05
    },

    OnLay1: ['Без декор. накладок'],
    OnLay2: ['Lacobel чорне скло'],

    Panel1: ['Суцільна фільонка'],
    Panel2: ['Набірні фільонки'],
    Panel3: ['Без фільонок'],

    Edge1: ['Звичайна кромка'],
    Edge2: ['Чорна глянцева кромка', 'Алюмінієва кромка'],
    Edge3: ['Без кромки']
  },

  FrameDoors: {
    'SANREMO SR-01 Glass': { Decors: [{ DecorSet1: 10727 }, { DecorSet2: 10727 }, { DecorSet3: 10727 }, { DecorSet4: 11139 }], GlassSet: 'GlassSet1', Panel: 'Panel3', OnLay: 'OnLay1', Modern: true, VLines: true },
    'SANREMO SR-01 Mirror': { Decors: [{ DecorSet1: 12309 }, { DecorSet2: 12309 }, { DecorSet3: 12309 }, { DecorSet4: 12718 }], GlassSet: 'GlassSet2', Panel: 'Panel3', OnLay: 'OnLay1', Modern: true, VLines: true },

    'SANVITO SV-01 Glass': { Decors: [{ DecorSet1: [6490, 6990] }, { DecorSet2: [6490, 6990] }, { DecorSet3: [6490, 6990] }, { DecorSet4: [7490, 7991] }], GlassSet: 'GlassSet3', Panel: 'Panel3', OnLay: 'OnLay1', Modern: true, VLines: false },

    'SANVITO SV-01 Mirror': { Decors: [{ DecorSet1: 7999 }, { DecorSet2: 7999 }, { DecorSet3: 7999 }, { DecorSet4: 8999 }], GlassSet: 'GlassSet2', Panel: 'Panel3', OnLay: 'OnLay1', Modern: true, VLines: false },

    'ALIANO AL-01': { Decors: [{ DecorSet5: [6601, 7332] }], GlassSet: 'GlassSet2', Panel: 'Panel3', OnLay: 'OnLay1', Modern: true, VLines: false },

    'PIANO DELUXE PND-01': { Decors: [{ DecorSet1: 3999 }, { DecorSet2: 3999 }, { DecorSet3: 3999 }, { DecorSet4: 4997 }], GlassSet: 'GlassSet5', Panel: 'Panel2', OnLay: 'OnLay1', Modern: true, VLines: false },

    'PORTO PR-01': { Decors: [{ DecorSet1: 3999 }, { DecorSet2: 3999 }, { DecorSet3: 3999 }, { DecorSet4: 4997 }], GlassSet: 'GlassSet6', Panel: 'Panel2', OnLay: 'OnLay1', Modern: true, VLines: false },

    'PORTO PR-05': { Decors: [{ DecorSet1: 3999 }, { DecorSet2: 3999 }, { DecorSet3: 3999 }, { DecorSet4: 4997 }], GlassSet: 'GlassSet7', Panel: 'Panel2', OnLay: 'OnLay1', Modern: true, VLines: false }
  }
}
