<template>
  <div>
    <h2>{{ msg }}</h2>
    <div class="flex-items">
      <button @click="makeArrVarPrices()">TEST</button>
      <!-- <button @click="createVariableRow2()">DECOR-2</button> -->
      <fieldset class="flex-items">
        <select v-model="queryDecor">
          <option value="0">Каркасні двері. Декори-1</option>
          <option value="1">Каркасні двері. Декори-2 WM</option>
          <option value="2">Каркасні двері. Декори-3</option>
          <option value="3">Каркасні двері. Декори-4</option>
          <option value="4">Щитові двері. Декори-5</option>
          <option value="5">Всі каркасні двері</option>
        </select>
        <button @click="createVariable()">RUN</button>
    </fieldset>
      <fieldset class="flex-items">
        <div>{{ queryModel }}</div>
        <select v-model="queryModel" :value="queryModel">
          <option v-for="model in modelList" :key="model.id" :value="model">{{ model }}</option>
        </select>
        <button @click="createVariable(queryModel)">RUN</button>
    </fieldset>
    </div>
    <!-- <div>{{ VariableProductData }}</div> -->
    <table>
      <tr v-for="dr in VariableProductData" :key="dr.id" v-show="showVariablesTable">
        <td>{{ dr.ID }}</td>
        <td>{{ dr.model }}</td>
        <td>{{ dr.decor }}</td>
        <td>{{ dr.price }}</td>
        <td>{{ dr.glass }}</td>
        <td>{{ dr.panel }}</td>
        <td>{{ dr.category }}</td>
        <td>{{ dr.pictures }}</td>
        <td>{{ dr.doorFrame }}</td>
        <td>{{ dr.doorJamb }}</td>
        <td>{{ dr.doorExtension }}</td>
      </tr>
    </table>
    <!-- <div class="fz10">
      {{ counter }} {{ VariableProductData }}
    </div> -->
  </div>
</template>

<script>
// ***************************************************************************
import DarumiData from '../DarumiDoors'
import DoorIMGs from '../DarumiIMGs'
import Molded from '../DarumiMoldedProducts'
export default {
  mixins: [DarumiData, DoorIMGs, Molded],
  data () {
    return {
      queryDecor: 0,
      showVariablesTable: false,
      msg: 'TM Darumi doors compilation section',
      VariableProductData: [],
      VariationProductData: [],
      Decors: DarumiData.DarumiDecors,
      FrameDoors: DarumiData.FrameDoors,
      PanelDoors: DarumiData.PanelDoors,
      DoorIMGs: DoorIMGs,
      Variations: Molded.Variations,
      moldPList: Molded.PriceList,
      counter: 1,
      queryModel: 'AVANT'
    }
  },
  // ***************************************************************************
  watch: {
    VariableProductData: function () {
      this.$emit('receiveVariableData', this.VariableProductData)
      this.bundleFrameVariation(this.VariableProductData)
    },
    VariationProductData: function () {
      this.$emit('receiveVariationData', this.VariationProductData)
    }
  },
  computed: {
    modelList () {
      return Object.keys(this.FrameDoors)
    }
  },
  methods: {
    // Product has Variables (parent) data and Variations of Variables (child) data. This fn creates object with data for Variable products. The data will be rendered in table at MainTable vue.
    createVariable (DoorModel) {
      if (DoorModel) {
        const DoorData = this.FrameDoors[DoorModel]
        const DoorDecor1 = DoorData.Decor1
        const DoorDecor2 = DoorData.Decor2
        // const DoorDecor1 = this.Decors[DoorData.Decor1]
        // const DoorDecor2 = this.Decors[DoorData.Decor2]
        this.bundleFrameDoor(DoorDecor1, DoorModel, DoorData, 'Decor1')
        this.bundleFrameDoor(DoorDecor2, DoorModel, DoorData, 'Decor2')
        return
      }
      const Decor = ['DecorSet1', 'DecorSet2', 'DecorSet3', 'DecorSet4', 'DecorSet5', 'DecorAll']
      for (const model in this.FrameDoors) {
        const data = this.FrameDoors[model]
        if (data.Decor1 === Decor[this.queryDecor]) {
          this.bundleFrameDoor(Decor[this.queryDecor], model, data, 'Decor1')
        }
        if (data.Decor2 === Decor[this.queryDecor]) {
          this.bundleFrameDoor(Decor[this.queryDecor], model, data, 'Decor2')
        }
      }
    },

    // This fn goes throw all door data and bundle it to 'obj'
    bundleFrameDoor (set, model, data, priceGrp) {
      const arr = []
      this.Decors[set].forEach(dec => {
        const obj = {}
        // 1) Adding door ID
        obj.ID = this.counter
        this.counter = obj.ID + 1
        // 2) Adding door model
        obj.model = model
        // 3) Adding door decor
        obj.decor = dec
        // 4) Adding price
        if (priceGrp === 'Decor2') {
          obj.price = data.Price2
        } else obj.price = data.Price1
        // 5) Adding glass
        const GSet = ['GlassSet1', 'GlassSet2', 'GlassSet3', 'GlassSet4', 'GlassSet5']
        GSet.forEach(glassSet => {
          if (data.GlassSet === glassSet) obj.glass = this.Decors[glassSet]
        })
        // 6) Adding type of MDF panels
        if (data.Panel === 'Panel1') obj.panel = this.Panel1
        else if (data.Panel === 'Panel2') obj.panel = this.Panel2
        else obj.panel = ''
        // 7) Adding categories
        obj.category = this.setCategory(model, dec, true, data.VLines, data.Modern, data.Panel)
        // 8) Adding doors images
        obj.pictures = this.setImages(model, dec)
        // 9) Adding doors-frames
        obj.doorFrame = this.Variations[priceGrp].DoorCase
        // 10) Adding door-jamb
        obj.doorJamb = this.Variations[priceGrp].Jamb
        // 11) Adding door extension panels
        obj.doorExtension = this.Variations[priceGrp].Extension
        // 12) Adding name of price group
        obj.priceGrp = priceGrp
        // Push every door 'obj' to array
        arr.push(obj)
        // console.log(obj)
      })
      this.VariableProductData.push(...arr)
      // console.log(...arr)
    },
    // This fn takes data from Variable door (parent obj) and creates variations for it. ParentID is an ID to link Variations with Variable product
    bundleFrameVariation (arr) {
      const mainVarArr = []
      // Loop through all current Variables
      arr.forEach(obj => {
        // Loop through Door glass versions (the set can be unique for each door model)
        obj.glass.forEach(gls => {
          const glsID = obj.glass.indexOf(gls)
          const varArr = this.makeArrVarPrices(obj.priceGrp, obj.price)
          // Loop through prices for each variation
          varArr.forEach(el => {
            const moldedID = Number(Object.keys(el)[0])
            const varObj = {}
            varObj.ParentID = obj.ID
            varObj.ID = this.counter
            this.counter = varObj.ID + 1
            varObj.model = obj.model
            varObj.decor = obj.decor
            varObj.glass = obj.glass[glsID]
            varObj.img = obj.pictures[glsID]
            varObj.marker = Object.keys(el)[0]
            varObj.price = Math.round(Object.values(el)[0])
            varObj.doorFrame = this.Variations[obj.priceGrp].Combinations[moldedID][0]
            varObj.doorJamb = this.Variations[obj.priceGrp].Combinations[moldedID][1]
            varObj.doorExtension = this.Variations[obj.priceGrp].Combinations[moldedID][2]
            // console.log(varObj)
            mainVarArr.push(varObj)
          })
        })
      })
      // console.log(mainVarArr)
      this.VariationProductData = mainVarArr
    },
    makeArrVarPrices (priceGR = 'Decor1', doorPrice = 3498) {
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
    // This fn creates product categories in order to organize products by different characteristics
    // for further product rendering at product page, filtration by props, etc
    setCategory (model, decor = 'Дуб ольс', frameDr, vlines = false, modern = true, panel) {
      const c1 = 'Міжкімнатні двері'
      const c2 = 'TM «DARUMI»'
      const c3 = `${c1}> ${c2}> ${model}` // main category 1
      const c4 = `${c1}> ${c2}` // category 2
      const c5 = `${c1}> ${c2}> ${decor}` // category 3
      const doorType = () => frameDr === true ? 'Каркасні двері' : 'Щитові двері' // category 4
      const c6 = `${c1}> ${doorType()}` // category 5
      const verticalLines = () => vlines === true ? 'Вертикальні лінії' : 'Горизонтльні лінії'
      const c7 = `${c1}> ${verticalLines()}` // category 6
      const style = () => modern === true ? 'Стиль модерн' : 'Класичний стиль'
      const c8 = `${c1}> ${style()}` // category 7
      const c9 = `${c1}> TM «ELBEGY» (Japan)` // category 8
      const c10 = `${c1}> «телескоп»` // category 9
      const drPanel = () => panel === false ? 'Зі склом' : panel === 'Panel1' ? 'Суцільна фільонка' : 'Набірні фільонки'
      const c11 = `${c1}> ${drPanel()}` // category 10
      return (`${c3}, ${c4}, ${c5}, ${c6}, ${c7}, ${c8}, ${c9}, ${c10}, ${c11}`)
    },

    // This fn creates array of image URLs for each door model
    // preliminarily, images were uploaded to WPress media library
    setImages (model, decor) {
      const URLArray = []
      const res = this.DoorIMGs[model][decor]
      // console.log(res)
      res.forEach(el => {
        const newEl = 'https://www.okdveri.com.ua/wp-content/uploads/2023/' + el
        URLArray.push(newEl)
      })
      // console.log(URLArray)
      return URLArray
    }
  }
  // created () {
  //   console.log(this.Decors.DecorSet1)
  // }
}
</script>

<style scoped>
a {
  text-decoration: none;
  margin: 0;
  padding: 0;
  border: none;
  box-shadow: none;
}
table {
  border-collapse: collapse;
  border: 1px dotted lightgrey;
}
table tr {
  border-bottom: 1px dotted lightgrey;
}
table th, table td {
  border-right: 1px dotted lightgrey;
  padding: 0 .5rem;
}
table th {
  color: rgb(13, 86, 17);
  font-size: 0.8rem;
}
table td {
  color: rgb(65, 65, 65);
  font-size: 0.8rem;
}
.w5 {
  min-width: 5rem;
}
.w10 {
  min-width: 10rem;
}
.w15 {
  min-width: 15rem;
}
.w20 {
  min-width: 20rem;
}
.w30 {
  min-width: 30rem;
}
.change{
  background: rgb(208, 236, 162);
}
.fz10 {
  font-size: 0.8rem;
}
</style>
