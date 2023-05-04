<template>
  <tfoot>
    <tr v-for="vrn in VariationsData" :key="vrn.id">
        <td data-id>{{ vrn.ID }}</td>
        <td data-variation>variation</td>
        <td></td>
        <td data-model class="w5 change">{{ vrn.Model }} {{ vrn.Decor }}</td>
        <td data-1>1</td>
        <td data-0>0</td>
        <td data-visible>visible</td>
        <td></td><td></td><td></td><td></td>
        <td data-taxable>taxable</td>
        <td data-parent>parent</td>
        <td data-1>1</td>
        <td data-0></td>
        <td></td>
        <td data-0>0</td>
        <td data-0>0</td>
        <td></td><td></td><td></td><td></td>
        <td data-0>0</td>
        <td></td><td></td>
        <td data-price>{{ vrn.VrPrice }}</td>
        <td></td><td></td><td></td>
        <td data-pic class="w20 change">{{ vrn.Image }}</td>
        <td></td><td></td>
        <td data-parent-id>id:{{ vrn.ParentID }}</td>
        <td></td><td></td><td></td><td></td><td></td>
        <td data-numb>{{ vrn.ID }}</td>
        <td></td><td></td><td></td>
        <td data-1>1</td>
        <td></td>
        <td data-glass>
          <span v-if="currentType === 'FrameDoors'">Скло</span>
        </td>
        <td>
          <span v-if="currentType === 'FrameDoors'">{{ vrn.Glass }}</span>
        </td>
        <td></td>
        <td data-1>1</td>
        <td></td>
        <td data-frame>Коробка</td>
        <td class="w10">{{vrn.DoorFrame }}</td>
        <td></td>
        <td data-1>1</td>
        <td></td>
        <td data-jamb>Лиштва</td>
        <td class="w15">{{ vrn.DoorJamb }}</td>
        <td></td>
        <td data-1>1</td>
        <td></td>
        <td data-ext>Добірна дошка</td>
        <td class="w10">{{ vrn.DoorExtension }}</td>
        <td></td>
        <td data-1>1</td>
        <td></td>
        <td v-if="currentType === 'PanelDoors'">Кромка</td>
        <td v-if="currentType === 'PanelDoors'">{{ vrn.Edge }}</td>
        <td v-if="currentType === 'PanelDoors'"></td>
        <td v-if="currentType === 'PanelDoors'">1</td>
        <td v-if="currentType === 'PanelDoors'"></td>
        <td data-0>0</td>
        <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
      </tr>
      <!-- <span>{{ currentType }}</span> -->
    </tfoot>
</template>

<script>
import MoldedPriceList from '../../TM_DARUMI/DarumiMoldedProducts'
import DoorData from '../../TM_DARUMI/DarumiDoors'
export default {
  data () {
    return {
      // VarCounter: this.counter,
      VariationsData: [],
      moldPList: MoldedPriceList.PriceList,
      Variations: MoldedPriceList.Variations,
      Decors: DoorData.Decors
    }
  },
  props: {
    qArr: { type: Array, requited: true },
    currentType: { type: String, requited: true }
    // counter: { type: Number, required: true }
  },
  computed: {
  },
  watch: {
    qArr () {
      // console.log(this.qArr.length)
      if (this.qArr.length === 0) this.VariationsData = []
      else this.makeVariations(this.qArr)
    }
  },

  methods: {
    // This fn takes array of door Variables (array of parent objs) and creates variations for each variable door. ParentID is an ID to link Variations and Variable products
    makeVariations (arr) {
      const resArr = []
      let varNm = arr.length + 1
      arr.forEach(obj => {
        // removing unused data from qArr objects (destruction)
        // console.log(obj)
        // const { Decor, DoorPrice, GlassSet, ID, Model, Pics, PriceGrp } = obj
        const { Model, Decor, ID, GlassSet, OnLay, DoorPrice, PriceGrp, Pics } = obj
        const Data1 = {}
        Data1.Model = Model
        Data1.Decor = Decor
        Data1.OnLay = OnLay
        Data1.ParentID = ID
        GlassSet.forEach((gls, GlassID) => {
          Data1.Glass = gls
          Data1.Image = Pics[GlassID]
          if (Array.isArray(DoorPrice)) { // if the variation price depends on type of Edge etc.
            DoorPrice.forEach(el => {
              const dt = Object.entries(el)
              const edgesArr = this.Decors[dt[0][0]] // group ['Чорна глянцева кромка', 'Алюмінієва кромка'] or ['Звичайна кромка']
              edgesArr.forEach(edge => { // looping through Edges in this group
                const Data2 = { ...Data1 }
                Data2.DoorPrice = dt[0][1]
                Data2.Edge = edge
                const varArr = this.makeArrVarPrices(PriceGrp, Data2.DoorPrice)
                varArr.forEach(it => {
                  const Data3 = { ...Data2 }
                  const moldedID = Number(Object.keys(it)[0])
                  Data3.ID = varNm
                  varNm = Data3.ID + 1
                  Data3.Marker = Object.keys(it)[0]
                  Data3.VrPrice = Math.round(Object.values(it)[0])
                  Data3.DoorFrame = this.Variations[PriceGrp].Combinations[moldedID][0]
                  Data3.DoorJamb = this.Variations[PriceGrp].Combinations[moldedID][1]
                  Data3.DoorExtension = this.Variations[PriceGrp].Combinations[moldedID][2]
                  // console.log(Data3)
                  resArr.push(Data3)
                })
              // console.log(Data2)
              })
            })
          } else {
            const varArr = this.makeArrVarPrices(PriceGrp, DoorPrice)
            varArr.forEach(it => {
              const Data4 = { ...Data1 }
              const moldedID = Number(Object.keys(it)[0])
              Data4.ID = varNm
              varNm = Data4.ID + 1
              Data4.Marker = Object.keys(it)[0]
              Data4.VrPrice = Math.round(Object.values(it)[0])
              Data4.DoorFrame = this.Variations[PriceGrp].Combinations[moldedID][0]
              Data4.DoorJamb = this.Variations[PriceGrp].Combinations[moldedID][1]
              Data4.DoorExtension = this.Variations[PriceGrp].Combinations[moldedID][2]
              // console.log(Data3)
              resArr.push(Data4)
            })
          }
        //  const glsID = obj.glass.indexOf(gls)
        //  const varArr = this.makeArrVarPrices(PriceGrp, DoorPrice)
        //  // Loop through prices for each variation
        //  varArr.forEach(el => {
        //   const moldedID = Number(Object.keys(el)[0])
        //     const varObj = {}
        //     varObj.ParentID = ID
        //     varObj.ID = varNm
        //     varNm = varObj.ID + 1
        //     varObj.Model = Model
        //     varObj.Decor = Decor
        //     varObj.Glass = GlassSet[GlassID]
        //     varObj.Pic = Pics[GlassID]
        //     varObj.Marker = Object.keys(el)[0]
        //     varObj.Price = Math.round(Object.values(el)[0])
        //     varObj.DoorFrame = this.Variations[PriceGrp].Combinations[moldedID][0]
        //     varObj.DoorJamb = this.Variations[PriceGrp].Combinations[moldedID][1]
        //     varObj.DoorExtension = this.Variations[PriceGrp].Combinations[moldedID][2]
        //     // console.log(varObj)
        //     resArr.push(varObj)
        })
      })
      // console.log(resArr)
      this.VariationsData = resArr
    }
  }
}
</script>
