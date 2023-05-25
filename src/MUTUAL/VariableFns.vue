<script>
export default {
  data () {
    return {
      FrameDoorsTableHeaders: ['ID', 'Тип', 'Артикул', 'Назва', 'Опубліковано', 'Рекомендовано?', 'Видимість в каталозі', 'Короткий опис', 'Опис', 'Початок акції', 'Завершення акції', 'Статус податку', 'Клас податку', 'В наявності?', 'Запаси', 'Низька кількість запасів', 'Дозволити резервування?', 'Продавати окремо?', 'Вага (kg)', 'Довжина (mm)', 'Ширина (mm)', 'Висота (mm)', 'Дозволити відгуки?', 'Нотатка до покупки', 'Ціна зі знижкою', 'Звичайна ціна', 'Категорії', 'Позначки', 'Клас доставки', 'Зображення', 'Ліміт завантажень', 'Число днів до закінчення Завантаження', 'Предок', 'Згруповані товари', 'Пропозиція товарів', 'Супутні товари', 'Зовнішній URL', 'Текст кнопки', 'Позиція', 'Назва 1 атрибуту', '1 значення атрибуту', 'Атрибут 1 видимий', 'Атрибут 1 глобальний', 'Атрибут 1 за замовчуванням', 'Назва 2 атрибуту', '2 значення атрибуту', 'Атрибут 2 видимий', 'Атрибут 2 глобальний', 'Атрибут 2 за замовчуванням', 'Назва 3 атрибуту', '3 значення атрибуту', 'Атрибут 3 видимий', 'Атрибут 3 глобальний', 'Атрибут 3 за замовчуванням', 'Назва 4 атрибуту', '4 значення атрибуту', 'Атрибут 4 видимий', 'Атрибут 4 глобальний', 'Атрибут 4 за замовчуванням', 'Назва 5 атрибуту', '5 значення атрибуту', 'Атрибут 5 видимий', 'Атрибут 5 глобальний', 'Атрибут 5 за замовчуванням', 'Мета: inline_featured_image', 'Мета: _wp_page_template', 'Мета: _yoast_wpseo_title', 'Мета: _yoast_wpseo_metadesc', 'Мета: _yoast_wpseo_content_score', 'Мета: _yoast_wpseo_primary_product_cat', 'Мета: _yoast_wpseo_estimated-reading-time-minutes', 'Мета: _yoast_wpseo_wordproof_timestamp'],

      PanelDoorsTableHeaders: ['ID', 'Тип', 'Артикул', 'Назва', 'Опубліковано', 'Рекомендовано?', 'Видимість в каталозі', 'Короткий опис', 'Опис', 'Початок акції', 'Завершення акції', 'Статус податку', 'Клас податку', 'В наявності?', 'Запаси', 'Низька кількість запасів', 'Дозволити резервування?', 'Продавати окремо?', 'Вага (kg)', 'Довжина (mm)', 'Ширина (mm)', 'Висота (mm)', 'Дозволити відгуки?', 'Нотатка до покупки', 'Ціна зі знижкою', 'Звичайна ціна', 'Категорії', 'Позначки', 'Клас доставки', 'Зображення', 'Ліміт завантажень', 'Число днів до закінчення Завантаження', 'Предок', 'Згруповані товари', 'Пропозиція товарів', 'Супутні товари', 'Зовнішній URL', 'Текст кнопки', 'Позиція', 'Назва 1 атрибуту', '1 значення атрибуту', 'Атрибут 1 видимий', 'Атрибут 1 глобальний', 'Атрибут 1 за замовчуванням', 'Назва 2 атрибуту', '2 значення атрибуту', 'Атрибут 2 видимий', 'Атрибут 2 глобальний', 'Атрибут 2 за замовчуванням', 'Назва 3 атрибуту', '3 значення атрибуту', 'Атрибут 3 видимий', 'Атрибут 3 глобальний', 'Атрибут 3 за замовчуванням', 'Назва 4 атрибуту', '4 значення атрибуту', 'Атрибут 4 видимий', 'Атрибут 4 глобальний', 'Атрибут 4 за замовчуванням', 'Назва 5 атрибуту', '5 значення атрибуту', 'Атрибут 5 видимий', 'Атрибут 5 глобальний', 'Атрибут 5 за замовчуванням', 'Назва 6 атрибуту', '6 значення атрибуту', 'Атрибут 6 видимий', 'Атрибут 6 глобальний', 'Атрибут 6 за замовчуванням', 'Мета: inline_featured_image', 'Мета: _wp_page_template', 'Мета: _yoast_wpseo_title', 'Мета: _yoast_wpseo_metadesc', 'Мета: _yoast_wpseo_content_score', 'Мета: _yoast_wpseo_primary_product_cat', 'Мета: _yoast_wpseo_estimated-reading-time-minutes', 'Мета: _yoast_wpseo_wordproof_timestamp'],

      OmegaPanelDoorsTableHeaders: ['ID', 'Тип', 'Артикул', 'Назва', 'Опубліковано', 'Рекомендовано?', 'Видимість в каталозі', 'Короткий опис', 'Опис', 'Початок акції', 'Завершення акції', 'Статус податку', 'Клас податку', 'В наявності?', 'Запаси', 'Низька кількість запасів', 'Дозволити резервування?', 'Продавати окремо?', 'Вага (kg)', 'Довжина (mm)', 'Ширина (mm)', 'Висота (mm)', 'Дозволити відгуки?', 'Нотатка до покупки', 'Ціна зі знижкою', 'Звичайна ціна', 'Категорії', 'Позначки', 'Клас доставки', 'Зображення', 'Ліміт завантажень', 'Число днів до закінчення Завантаження', 'Предок', 'Згруповані товари', 'Пропозиція товарів', 'Супутні товари', 'Зовнішній URL', 'Текст кнопки', 'Позиція', 'Назва 1 атрибуту', '1 значення атрибуту', 'Атрибут 1 видимий', 'Атрибут 1 глобальний', 'Атрибут 1 за замовчуванням', 'Назва 2 атрибуту', '2 значення атрибуту', 'Атрибут 2 видимий', 'Атрибут 2 глобальний', 'Атрибут 2 за замовчуванням', 'Назва 3 атрибуту', '3 значення атрибуту', 'Атрибут 3 видимий', 'Атрибут 3 глобальний', 'Атрибут 3 за замовчуванням', 'Назва 4 атрибуту', '4 значення атрибуту', 'Атрибут 4 видимий', 'Атрибут 4 глобальний', 'Атрибут 4 за замовчуванням', 'Назва 5 атрибуту', '5 значення атрибуту', 'Атрибут 5 видимий', 'Атрибут 5 глобальний', 'Атрибут 5 за замовчуванням', 'Назва 6 атрибуту', '6 значення атрибуту', 'Атрибут 6 видимий', 'Атрибут 6 глобальний', 'Атрибут 6 за замовчуванням', 'Назва 7 атрибуту', '7 значення атрибуту', 'Атрибут 7 видимий', 'Атрибут 7 глобальний', 'Атрибут 7 за замовчуванням', 'Мета: inline_featured_image', 'Мета: _wp_page_template', 'Мета: _yoast_wpseo_title', 'Мета: _yoast_wpseo_metadesc', 'Мета: _yoast_wpseo_content_score', 'Мета: _yoast_wpseo_primary_product_cat', 'Мета: _yoast_wpseo_estimated-reading-time-minutes', 'Мета: _yoast_wpseo_wordproof_timestamp'],

      OmegaFrameDoorsTableHeaders: ['ID', 'Тип', 'Артикул', 'Назва', 'Опубліковано', 'Рекомендовано?', 'Видимість в каталозі', 'Короткий опис', 'Опис', 'Початок акції', 'Завершення акції', 'Статус податку', 'Клас податку', 'В наявності?', 'Запаси', 'Низька кількість запасів', 'Дозволити резервування?', 'Продавати окремо?', 'Вага (kg)', 'Довжина (mm)', 'Ширина (mm)', 'Висота (mm)', 'Дозволити відгуки?', 'Нотатка до покупки', 'Ціна зі знижкою', 'Звичайна ціна', 'Категорії', 'Позначки', 'Клас доставки', 'Зображення', 'Ліміт завантажень', 'Число днів до закінчення Завантаження', 'Предок', 'Згруповані товари', 'Пропозиція товарів', 'Супутні товари', 'Зовнішній URL', 'Текст кнопки', 'Позиція', 'Назва 1 атрибуту', '1 значення атрибуту', 'Атрибут 1 видимий', 'Атрибут 1 глобальний', 'Атрибут 1 за замовчуванням', 'Назва 2 атрибуту', '2 значення атрибуту', 'Атрибут 2 видимий', 'Атрибут 2 глобальний', 'Атрибут 2 за замовчуванням', 'Назва 3 атрибуту', '3 значення атрибуту', 'Атрибут 3 видимий', 'Атрибут 3 глобальний', 'Атрибут 3 за замовчуванням', 'Назва 4 атрибуту', '4 значення атрибуту', 'Атрибут 4 видимий', 'Атрибут 4 глобальний', 'Атрибут 4 за замовчуванням', 'Назва 5 атрибуту', '5 значення атрибуту', 'Атрибут 5 видимий', 'Атрибут 5 глобальний', 'Атрибут 5 за замовчуванням', 'Назва 6 атрибуту', '6 значення атрибуту', 'Атрибут 6 видимий', 'Атрибут 6 глобальний', 'Атрибут 6 за замовчуванням', 'Назва 7 атрибуту', '7 значення атрибуту', 'Атрибут 7 видимий', 'Атрибут 7 глобальний', 'Атрибут 7 за замовчуванням', 'Мета: inline_featured_image', 'Мета: _wp_page_template', 'Мета: _yoast_wpseo_title', 'Мета: _yoast_wpseo_metadesc', 'Мета: _yoast_wpseo_content_score', 'Мета: _yoast_wpseo_primary_product_cat', 'Мета: _yoast_wpseo_estimated-reading-time-minutes', 'Мета: _yoast_wpseo_wordproof_timestamp']
    }
  },
  methods: {
    // This fn creates product categories in order to organize products by different characteristics
    setCategory (obj) {
      const arr = []
      const Main = 'Міжкімнатні двері'
      const TM = obj.TM
      if (obj.SeriesOf) {
        arr.push(`${Main}> ${TM}> ${obj.SeriesOf}`)
      } else arr.push(`${Main}> ${TM}> ${obj.Model}`) // main category 1

      arr.push(`${Main}> ${TM}`) // 'TM'

      arr.push(`${Main}> ${TM}> ${obj.Decor}`)

      if (obj.DoorType === 'FrameDoors') {
        arr.push(`${Main}> Каркасні двері`)
      } else arr.push(`${Main}> Щитові двері`)

      if (obj.VLines) {
        arr.push(`${Main}> Вертикальні лінії`)
      } else arr.push(`${Main}> Горизонтальні лінії`)

      if (obj.Modern) {
        arr.push(`${Main}> Стиль модерн`)
      } else arr.push(`${Main}> Класичний стиль`)

      if (obj.FilmTM) arr.push(`${Main}> ${obj.FilmTM}`)
      arr.push(`${Main}> «телескоп»`)

      if (obj.GlassSet[0] === 'Без скла - «глухе» полотно') {
        arr.push(`${Main}> Без скла - «глухе» полотно`)
      } else arr.push(`${Main}> Зі склом`)

      if (obj.OnLay[0] === 'Без декор. накладок') {
        arr.push(`${Main}> Без декор. накладок`)
      } else arr.push(`${Main}> З декор. накладками`)

      if (obj.Panel) arr.push(`${Main}> ${obj.Panel}`)

      if (obj.Mirror) arr.push(`${Main}> З елемантами дзеркал`)

      if (obj.Triplex) arr.push(`${Main}> Скло - триплекс 8мм`)

      if (obj.Glass8mm) arr.push(`${Main}> Гартоване скло Сатин 8мм`)

      return arr
    },
    // This fn creates array of image URLs for each door model
    // preliminarily, images were uploaded to WPress media library
    setImages (model, decor) {
      const URLArray = []
      const res = (model && decor) ? this.DoorIMGs[model][decor] : this.DoorIMGs[model]
      // console.log(res)
      res.forEach(el => {
        // const newEl = 'https://www.okdveri.com.ua/wp-content/uploads/2023/05/' + el // Leador, Darumi, Omega
        const newEl = 'https://www.okdveri.com.ua/wp-content/uploads/' + el // Korfad
        URLArray.push(newEl)
      })
      // console.log(URLArray)
      return URLArray
    },

    makeArrVarPrices (priceGR, doorPrice) { // priceGR = Decor1 etc
      const arr = []
      const path = this.moldPList[priceGR]
      // Compiling prices for molded products sets
      const case80 = path.DoorCase.arr[0] * 2.5
      const case100 = path.DoorCase.arr[1] * 2.5
      const jamb30 = path.Jamb.arr[0] * 2.5
      const jamb50 = path.Jamb.arr[1] * 2.5
      const ext100 = path.Extension.arr[0] * 2.5
      const ext200 = path.Extension.arr[1] * 2.5
      // Calculating prices for each variation of molded products combinations
      arr[0] = { 1: doorPrice }
      arr.push({ 2: (doorPrice + case80 + jamb30 * 2) })
      arr.push({ 3: (doorPrice + case80 + jamb30 + jamb50) })
      arr.push({ 4: (doorPrice + case80 + jamb30 * 2 + ext100) })
      arr.push({ 5: (doorPrice + case80 + jamb30 + jamb50 + ext100) })
      arr.push({ 6: (doorPrice + case80 + jamb30 * 2 + ext200) })
      arr.push({ 7: (doorPrice + case80 + jamb30 + jamb50 + ext200) })
      arr.push({ 8: (doorPrice + case100 + jamb30 * 2) })
      arr.push({ 9: (doorPrice + case100 + jamb30 + jamb50) })
      arr.push({ 10: (doorPrice + case100 + jamb30 * 2 + ext100) })
      arr.push({ 11: (doorPrice + case100 + jamb30 + jamb50 + ext100) })
      arr.push({ 12: (doorPrice + case100 + jamb30 * 2 + ext200) })
      arr.push({ 13: (doorPrice + case100 + jamb30 + jamb50 + ext200) })
      return arr
    },

    makeArrVarPricesKORFAD (priceGR, doorPrice) { // priceGR = Decor1 etc
      // console.log(priceGR)
      const arr = []
      const path = this.moldPList[priceGR]
      // Compiling prices for molded products sets
      const case80 = path.DoorCase.arr[0] * 2.5
      const case100 = path.DoorCase.arr[1] * 2.5
      const jamb30 = path.Jamb.arr[0] * 2.5
      const ext100 = path.Extension.arr[0] * 2.5
      const ext200 = path.Extension.arr[1] * 2.5
      // Calculating prices for each variation of molded products combinations
      arr[0] = { 1: doorPrice }
      arr.push({ 2: (doorPrice + case80 + jamb30 * 2) })
      arr.push({ 3: (doorPrice + case80 + jamb30 * 2 + ext100) })
      arr.push({ 4: (doorPrice + case80 + jamb30 * 2 + ext200) })
      arr.push({ 5: (doorPrice + case100 + jamb30 * 2) })
      arr.push({ 6: (doorPrice + case100 + jamb30 * 2 + ext100) })
      arr.push({ 7: (doorPrice + case100 + jamb30 * 2 + ext200) })
      return arr
    },
    makeArrVarPricesOMEGA (priceGR, doorPrice) { // priceGR = Decor1 etc
      // console.log(priceGR)
      const arr = []
      const path = this.moldPList[priceGR]
      // Compiling prices for molded products sets
      const caseStandard = path.DoorCase.arr[0] * 2.5
      const caseLuxe = path.DoorCase.arr[1] * 2.5
      const jambStandard = path.Jamb.arr[0] * 5
      const jambLuxe = path.Jamb.arr[1] * 5
      const jambCanelure = path.Jamb.arr[2] * 5
      const ext90 = path.Extension.arr[0] * 2.5
      const ext180 = path.Extension.arr[1] * 2.5
      const ext300 = path.Extension.arr[2] * 2.5
      const ext400 = path.Extension.arr[3] * 2.5
      const hingeCRM = path.Hinges.arr[0]
      const hingeBL = path.Hinges.arr[1]
      // Calculating prices for each variation of molded products combinations
      arr[0] = { 1: doorPrice }
      arr.push({ 2: (doorPrice + caseStandard + jambStandard) })
      arr.push({ 3: (doorPrice + caseStandard + jambStandard + ext90) })
      arr.push({ 4: (doorPrice + caseStandard + jambStandard + ext180) })
      arr.push({ 5: (doorPrice + caseStandard + jambStandard + ext300) })
      arr.push({ 6: (doorPrice + caseStandard + jambStandard + ext400) })

      arr.push({ 7: (doorPrice + caseStandard + jambCanelure) })
      arr.push({ 8: (doorPrice + caseStandard + jambCanelure + ext90) })
      arr.push({ 9: (doorPrice + caseStandard + jambCanelure + ext180) })
      arr.push({ 10: (doorPrice + caseStandard + jambCanelure + ext300) })
      arr.push({ 11: (doorPrice + caseStandard + jambCanelure + ext400) })

      arr.push({ 12: (doorPrice + caseLuxe + jambLuxe) })
      arr.push({ 13: (doorPrice + caseLuxe + jambLuxe + ext90) })
      arr.push({ 14: (doorPrice + caseLuxe + jambLuxe + ext180) })
      arr.push({ 15: (doorPrice + caseLuxe + jambLuxe + ext300) })
      arr.push({ 16: (doorPrice + caseLuxe + jambLuxe + ext400) })

      arr.push({ 17: (doorPrice + caseLuxe + jambCanelure) })
      arr.push({ 18: (doorPrice + caseLuxe + jambCanelure + ext90) })
      arr.push({ 19: (doorPrice + caseLuxe + jambCanelure + ext180) })
      arr.push({ 20: (doorPrice + caseLuxe + jambCanelure + ext300) })
      arr.push({ 21: (doorPrice + caseLuxe + jambCanelure + ext400) })

      arr.push({ 22: (doorPrice + caseStandard + jambStandard + hingeCRM) })
      arr.push({ 23: (doorPrice + caseStandard + jambStandard + ext90 + hingeCRM) })
      arr.push({ 24: (doorPrice + caseStandard + jambStandard + ext180 + hingeCRM) })
      arr.push({ 25: (doorPrice + caseStandard + jambStandard + ext300 + hingeCRM) })
      arr.push({ 26: (doorPrice + caseStandard + jambStandard + ext400 + hingeCRM) })

      arr.push({ 27: (doorPrice + caseStandard + jambCanelure + hingeCRM) })
      arr.push({ 28: (doorPrice + caseStandard + jambCanelure + ext90 + hingeCRM) })
      arr.push({ 29: (doorPrice + caseStandard + jambCanelure + ext180 + hingeCRM) })
      arr.push({ 30: (doorPrice + caseStandard + jambCanelure + ext300 + hingeCRM) })
      arr.push({ 31: (doorPrice + caseStandard + jambCanelure + ext400 + hingeCRM) })

      arr.push({ 32: (doorPrice + caseLuxe + jambLuxe + hingeCRM) })
      arr.push({ 33: (doorPrice + caseLuxe + jambLuxe + ext90 + hingeCRM) })
      arr.push({ 34: (doorPrice + caseLuxe + jambLuxe + ext180 + hingeCRM) })
      arr.push({ 35: (doorPrice + caseLuxe + jambLuxe + ext300 + hingeCRM) })
      arr.push({ 36: (doorPrice + caseLuxe + jambLuxe + ext400 + hingeCRM) })

      arr.push({ 37: (doorPrice + caseLuxe + jambCanelure + hingeCRM) })
      arr.push({ 38: (doorPrice + caseLuxe + jambCanelure + ext90 + hingeCRM) })
      arr.push({ 39: (doorPrice + caseLuxe + jambCanelure + ext180 + hingeCRM) })
      arr.push({ 40: (doorPrice + caseLuxe + jambCanelure + ext300 + hingeCRM) })
      arr.push({ 41: (doorPrice + caseLuxe + jambCanelure + ext400 + hingeCRM) })

      arr.push({ 42: (doorPrice + caseStandard + jambStandard + hingeBL) })
      arr.push({ 43: (doorPrice + caseStandard + jambStandard + ext90 + hingeBL) })
      arr.push({ 44: (doorPrice + caseStandard + jambStandard + ext180 + hingeBL) })
      arr.push({ 45: (doorPrice + caseStandard + jambStandard + ext300 + hingeBL) })
      arr.push({ 46: (doorPrice + caseStandard + jambStandard + ext400 + hingeBL) })

      arr.push({ 47: (doorPrice + caseStandard + jambCanelure + hingeBL) })
      arr.push({ 48: (doorPrice + caseStandard + jambCanelure + ext90 + hingeBL) })
      arr.push({ 49: (doorPrice + caseStandard + jambCanelure + ext180 + hingeBL) })
      arr.push({ 50: (doorPrice + caseStandard + jambCanelure + ext300 + hingeBL) })
      arr.push({ 51: (doorPrice + caseStandard + jambCanelure + ext400 + hingeBL) })

      arr.push({ 52: (doorPrice + caseLuxe + jambLuxe + hingeBL) })
      arr.push({ 53: (doorPrice + caseLuxe + jambLuxe + ext90 + hingeBL) })
      arr.push({ 54: (doorPrice + caseLuxe + jambLuxe + ext180 + hingeBL) })
      arr.push({ 55: (doorPrice + caseLuxe + jambLuxe + ext300 + hingeBL) })
      arr.push({ 56: (doorPrice + caseLuxe + jambLuxe + ext400 + hingeBL) })

      arr.push({ 57: (doorPrice + caseLuxe + jambCanelure + hingeBL) })
      arr.push({ 58: (doorPrice + caseLuxe + jambCanelure + ext90 + hingeBL) })
      arr.push({ 59: (doorPrice + caseLuxe + jambCanelure + ext180 + hingeBL) })
      arr.push({ 60: (doorPrice + caseLuxe + jambCanelure + ext300 + hingeBL) })
      arr.push({ 61: (doorPrice + caseLuxe + jambCanelure + ext400 + hingeBL) })

      return arr
    },

    setEdge (type, arr) {
      // console.log(type, ' and ', arr)
      if (type === 'FrameDoors') return this.Decors.Edge1
      else if (type === 'PanelDoors') {
        const res = []
        arr.forEach(el => {
          // const nArr = this.Decors[Object.keys(el)]
          const nArr = this.Decors[el]
          nArr.forEach(u => res.push(u))
        })
        // console.log(res)
        return res
      }
    },

    resetData () {
      this.VariableProductData = []
      this.counter = 1
      this.$emit('runReset')
    },

    refreshPage () {
      // this.$forceUpdate()
      this.$router.go(0)
    }
  }
}
</script>
