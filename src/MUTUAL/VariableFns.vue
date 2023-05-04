<script>
export default {
  methods: {
    // This fn creates product categories in order to organize products by different characteristics
    setCategory (obj) {
      const c1 = 'Міжкімнатні двері'
      const c2 = obj.TM // 'TM'
      const c3 = `${c1}> ${c2}> ${obj.Model}` // main category 1
      const c4 = `${c1}> ${c2}` // category 2
      const c5 = `${c1}> ${c2}> ${obj.Decor}` // category 3
      const doorType = () => obj.DoorType === 'FrameDoors' ? 'Каркасні двері' : 'Щитові двері'
      const c6 = `${c1}> ${doorType()}` // category 4
      const verticalLines = () => obj.VLines === true ? 'Вертикальні лінії' : 'Горизонтальні лінії'
      const c7 = `${c1}> ${verticalLines()}` // category 5
      const style = () => obj.Modern === true ? 'Стиль модерн' : 'Класичний стиль'
      const c8 = `${c1}> ${style()}` // category 6
      const c9 = `${c1}> ${obj.FilmTM}` // category 7
      const c10 = `${c1}> «телескоп»` // category 8
      const hasGlass = () => obj.GlassSet[0] === 'Без скла - «глухе» полотно' ? 'Без скла - «глухе» полотно' : 'Зі склом'
      const c11 = `${c1}> ${hasGlass()}` // category 9
      const decorOnLays = () => obj.OnLay[0] === 'Без декор. накладок' ? 'Без декор. накладок' : 'З декор. накладками'
      const c12 = `${c1}> ${decorOnLays()}` // category 10 'накладки'
      const c13 = `${c1}> ${obj.Panel}` // category 11 'филенки'
      return (`${c3}, ${c4}, ${c5}, ${c6}, ${c7}, ${c8}, ${c9}, ${c10}, ${c11}, ${c12}, ${c13}`)
    },
    // This fn creates array of image URLs for each door model
    // preliminarily, images were uploaded to WPress media library
    setImages (model, decor) {
      const URLArray = []
      const res = this.DoorIMGs[model][decor]
      // console.log(res)
      res.forEach(el => {
        const newEl = 'https://www.okdveri.com.ua/wp-content/uploads/2023/05/' + el
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
      // Compiling prices for each variation of molded products combination
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
    setEdge (type, arr) {
      // console.log(arr)
      if (type === 'FrameDoors') return this.Decors.Edge3
      else if (type === 'PanelDoors') {
        const res = []
        arr.forEach(el => {
          const nArr = this.Decors[Object.keys(el)]
          nArr.forEach(u => res.push(u))
        })
        // console.log(res)
        return res
      }
    }
  }
}
</script>
