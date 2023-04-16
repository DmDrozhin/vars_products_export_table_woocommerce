<template>
  <div>
    <h2>{{ msg }}</h2>
    <button @click="createVariableRow('DecorSet1')">DECOR-1 table</button>
    <button @click="setCategory('DARINA', 'Дуб мембау', true)">Do categories</button>
    <button @click="setImages('DARINA', 'Дуб мембау')">Do image</button>
    <table>
      <tr v-for="dr in VariableProductData" :key="dr.id" v-show="showVariablesTable">
        <td>{{ dr.ID }}</td><td>{{ dr.model }}</td><td>{{ dr.price }}</td><td>{{ dr.glass.join(', ') }}</td><td>{{ dr.panel }}</td><td>{{ dr.category }}</td><td>{{ dr.pictures.join(', ') }}</td>
      </tr>
    </table>
    <!-- <div class="fz10">
      {{ DoorIMGs }}
    </div> -->
  </div>
</template>

<script>
import DarumiData from '../DarumiDoors'
import DoorIMGs from '../DarumiIMGs'
import Molded from '../DarumiMoldedProducts'
export default {
  mixins: [DarumiData, DoorIMGs, Molded],
  data () {
    return {
      showVariablesTable: false,
      msg: 'TM Darumi doors compilation section',
      VariableProductData: [],
      Decors: DarumiData.DarumiDecors,
      FrameDoors: DarumiData.FrameDoors,
      PanelDoors: DarumiData.PanelDoors,
      DoorIMGs: DoorIMGs,
      Variations: Molded.Variations
    }
  },
  watch: {
    VariableProductData: function () {
      this.$emit('sendVariableProductData', this.VariableProductData)
    }
  },
  methods: {
    // Creating an object with data that will be rendered in table row that responds for Variable 'root' product.
    // Variations of variable product, along own data, will use partially these data as well
    createVariableRow (set) {
      // let id = 1
      for (const model in this.FrameDoors) {
        const data = this.FrameDoors[model]
        if (set === data.Decor1) {
          this.bundleFrameDoor(set, model, data)
          //   this.Decors[set].forEach(dec => {
          //   const obj = {}
          //   // console.log(`{ model: '${key} ${dec}' }`)
          //   // 1) Adding door ID
          //   obj.ID = id
          //   id = id + 1
          //   // 2) Adding door model
          //   obj.model = `${model}`
          //   // 3) Adding door decor
          //   obj.decor = `${dec}`
          //   // 4) Adding price
          //   obj.price = data.Price1
          //   // 5) Adding glass
          //   if (data.GlassSet === 'GlassSet1') obj.glass = this.Decors.GlassSet1
          //   else if (data.GlassSet === 'GlassSet2') obj.glass = this.Decors.GlassSet2
          //   else if (data.GlassSet === 'GlassSet3') obj.glass = this.Decors.GlassSet3
          //   else obj.glass = this.GlassSet4
          //   // 6) Adding type of MDF panels
          //   if (data.Panel === 'Panel1') obj.panel = this.Panel1
          //   else if (data.Panel === 'Panel2') obj.panel = this.Panel2
          //   else obj.panel = ''
          //   // 7) Adding categories
          //   obj.category = this.setCategory(model, dec, true, data.VLines, data.Modern, data.Panel)
          //   // 8) Adding doors images
          //   obj.pictures = this.setImages(model, dec)
          //   // 9) Adding doors-frames
          //   obj.doorFrame = this.Variations.DecorSet1.DoorCase
          //   // 10) Adding door-jamb
          //   obj.doorJamb = this.Variations.DecorSet1.Jamb
          //   // 11) Adding door extension panels
          //   obj.doorExtension = this.Variations.DecorSet1.Extension

          //   // Push object all these data with 'obj' to array 'DOORs'
          //   this.VariableProductData.push(obj)
          // })
        }
      }
    },
    bundleFrameDoor (set, model, data) {
      let id = 0
      this.Decors[set].forEach(dec => {
        const obj = {}
        // console.log(`{ model: '${key} ${dec}' }`)
        // 1) Adding door ID
        obj.ID = id
        id = id + 1
        // 2) Adding door model
        obj.model = `${model}`
        // 3) Adding door decor
        obj.decor = `${dec}`
        // 4) Adding price
        obj.price = data.Price1
        // 5) Adding glass
        if (data.GlassSet === 'GlassSet1') obj.glass = this.Decors.GlassSet1
        else if (data.GlassSet === 'GlassSet2') obj.glass = this.Decors.GlassSet2
        else if (data.GlassSet === 'GlassSet3') obj.glass = this.Decors.GlassSet3
        else obj.glass = this.GlassSet4
        // 6) Adding type of MDF panels
        if (data.Panel === 'Panel1') obj.panel = this.Panel1
        else if (data.Panel === 'Panel2') obj.panel = this.Panel2
        else obj.panel = ''
        // 7) Adding categories
        obj.category = this.setCategory(model, dec, true, data.VLines, data.Modern, data.Panel)
        // 8) Adding doors images
        obj.pictures = this.setImages(model, dec)
        // 9) Adding doors-frames
        obj.doorFrame = this.Variations.DecorSet1.DoorCase
        // 10) Adding door-jamb
        obj.doorJamb = this.Variations.DecorSet1.Jamb
        // 11) Adding door extension panels
        obj.doorExtension = this.Variations.DecorSet1.Extension

        // Push object all these data with 'obj' to array 'DOORs'
        this.VariableProductData.push(obj)
      })
    },
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

    // get array of URLs for door model images, for each decor
    setImages (model = 'DARINA', decor = 'Дуб ольс') {
      // console.log(model, '**', decor)
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
  },
  filters: {
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
