<template>
  <tfoot>
    <tr v-for="vrn in VariationsData" :key="vrn.id">
        <td data-id>{{ vrn.ID }}</td>
        <td data-variation>variation</td>
        <td></td>
        <td data-model class="w5 change">{{ vrn.Model }} </td>
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
          <span v-if="currentType === 'PanelDoors'">Декор. накладка</span>
        </td>
        <td>
          <span v-if="currentType === 'PanelDoors'">{{ vrn.OnLay }}</span>
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
        <td>Кромка</td>
        <td>{{ vrn.Edge }}</td>
        <td></td>
        <td>1</td>
        <td></td>
        <td>Приховані завіси</td>
        <td>{{ vrn.Hinges }}</td>
        <td></td>
        <td>1</td>
        <td></td>
        <td data-0>0</td>
        <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
      </tr>
      <!-- <span>{{ currentType }}</span> -->
    </tfoot>
</template>

<script>
import MoldedPriceList from '../../TM_CITY/CityMoldedProducts'
import DoorData from '../../TM_CITY/CityDoors'
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
        // console.log(obj)
        // removing unused data from qArr objects (destruction)
        const { Model, ID, OnLay, DoorPrice, PriceGrp } = obj
        const Data1 = {}
        Data1.ParentID = ID
        Data1.Model = Model
        if (Array.isArray(OnLay)) {
          OnLay.forEach(onlay => {
            const Data2 = { ...Data1 }
            Data2.OnLay = onlay
            const crntPrice = this.getCrntPrice(DoorPrice, onlay)
            // console.log(DoorPrice, onlay)
            const varArr = this.makeArrVarPricesCITY(PriceGrp, crntPrice)
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
              Data3.Hinges = this.Variations[PriceGrp].Combinations[moldedID][3]
              resArr.push(Data3)
            })
          })
        }
      })
      // console.log(resArr)
      this.VariationsData = resArr
    },
    getCrntPrice (price, onlay) {
      if (this.Decors.OnLay1.includes(onlay)) { return price[0] }
      if (this.Decors.OnLay2.includes(onlay)) { return price[0] }
      if (this.Decors.OnLay3.includes(onlay)) { return price[0] }
    }
  }
}
</script>
