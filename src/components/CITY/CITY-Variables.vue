<template>
      <table>
        <thead>
          <tr><th v-for="title in headers" :key="title.id">{{ title }}</th></tr>
        </thead>
        <tbody>
          <!-- VARIABLE product data, table template from WooCommerce API -->
        <tr v-for="vrb in VariableProductData" :key="vrb.id">
          <td data-ID>{{ vrb.ID }}</td>
          <td data-variable>variable</td>
          <td></td>
          <td class="w10 change">{{ vrb.Model }}</td>
          <td data-1>1</td><td data-0>0</td>
          <td data-visible>visible</td>
          <td data-price class="w15">
            Полотна каркасно - щитової конструкції. Каркас з цілісно-зрощеного соснового брусу з горизонтальними ребрами жорсткості. Каркас заповнюється спеціальним стільниковим папером. Поверх каркаса, з двох сторін пресуються накладки з МДФ (HDF), товщина їх варіюється в залежності від моделі. Фінішна обробка полотна - ґрунтування та фарбування, проводиться високоякісними європейськими матеріалами. Білий колір - «RAL9003». Товщина полотна - 40 мм. Погонажні вироби - системи «телескоп». {{ vrb.Description }}
            <span v-if="(vrb.DoorPrice).length > 1">\nЦіна за «Стандартне» полотно: від {{ vrb.DoorPrice[0] | priceNumber }} &#8372; до {{ vrb.DoorPrice[1] | priceNumber }} &#8372;. </span>
            <span v-else>\nЦіна за «Стандартне» полотно: {{ vrb.DoorPrice[0] | priceNumber }} &#8372;. </span>\n«Стандартні» полотна: &#8596; 400mm / 600mm / 700mm / 800mm / 900mm &#8597; 2000mm</td>
          <td></td>
          <td data-0>0</td><td data-0>0</td>
          <td data-taxable>taxable</td>
          <td></td>
          <td data-1>1</td>
          <td></td><td></td>
          <td data-0>0</td><td data-0>0</td>
          <td></td><td></td><td></td><td></td>
          <td data-0>0</td>
          <td></td><td></td><td></td>
          <td data-categories class="w30 change">{{ vrb.Categories.join(', ') }}</td>
          <td></td><td></td>
          <td data-pics class="w30 change">{{ vrb.Pics.join(', ') }}</td>
          <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
          <td data-ID>{{ vrb.ID }}</td>
          <td data-size>Розмір</td>
          <td> &#8596;400mm &#8597;2000mm,  &#8596;600mm &#8597;2000mm,  &#8596;700mm &#8597;2000mm,  &#8596;800mm &#8597;2000mm,  &#8596;900mm &#8597;2000mm</td>
          <td data-1>1</td><td data-1>1</td>
          <td data-def-size> &#8596;800mm &#8597;2000mm</td>
          <td data-glass>
            <span v-if="vrb.DoorType==='FrameDoors'">Скло</span>
            <span v-if="vrb.DoorType==='PanelDoors'">Декор. накладка</span>
          </td>
          <td class="w15">
            <span v-if="vrb.DoorType==='FrameDoors'">{{ vrb.GlassSet.join(', ') }}</span>
            <span v-if="vrb.DoorType==='PanelDoors'">{{ vrb.OnLay.join(', ') }}</span>
          </td>
          <td data-1>1</td><td data-1>1</td>
          <td data-def-glass>
            <span v-if="vrb.DoorType==='FrameDoors'">{{ vrb.GlassSet[0] }}</span>
            <span v-if="vrb.DoorType==='PanelDoors'">{{ vrb.OnLay[0] }}</span>
          </td>
          <td data-door-case>Коробка</td>
          <td class="w10">{{vrb.DoorCases.join(', ') }}</td>
          <td data-1>1</td><td data-1>1</td>
          <td data-def-door-case>{{ vrb.DoorCases[1] }}</td>
          <td data-jumb>Лиштва</td>
          <td class="w15">{{ vrb.DoorJambs.join(', ') }}</td>
          <td data-1>1</td><td data-1>1</td>
          <td data-def-jamb>{{ vrb.DoorJambs[1] }}</td>
          <td data-extension>Добірна дошка</td>
          <td class="w10">{{ vrb.DoorExtensions.join(', ') }}</td>
          <td data-1>1</td><td data-1>1</td>
          <td data-def-extension>{{ vrb.DoorExtensions[1] }}</td>
          <td>Кромка</td>
          <td class="w10">{{ vrb.Edge.join(', ') }}</td>
          <td>1</td>
          <td>1</td>
          <td>{{ vrb.Edge[0] }}</td>
          <td>Приховані завіси</td>
          <td class="w10">{{ vrb.Hinges.join(', ') }}</td>
          <td>1</td>
          <td>1</td>
          <td>{{ vrb.Hinges[0] }}</td>
          <td data-0>0</td>
          <td data-def>default</td>
          <td data-yoast1>{{ Meta.Yoast1 }}</td>
          <td data-yoast2 class="w15">{{ Meta.Yoast2 }}</td>
          <td data-60>60</td>
          <td></td><td data-1>1</td><td></td>
        </tr>
    </tbody>
      <DoorVariations :qArr="VariableProductData" :currentType="currentType"></DoorVariations>
    </table>
</template>

<script>
// ***************************************************************************
import DoorData from '../../TM_CITY/CityDoors'
import DoorIMGs from '../../TM_CITY/CityIMGs'
import Molded from '../../TM_CITY/CityMoldedProducts'
import DoorVariations from '../CITY/CITY-Variations.vue'
export default {
  mixins: [DoorData, DoorIMGs, Molded, DoorIMGs],
  components: { DoorVariations },
  data () {
    return {
      VariableProductData: [],

      Meta: DoorData.Meta,
      Decors: DoorData.Decors,
      DoorIMGs,
      FrameDoors: DoorData.FrameDoors,
      PanelDoors: DoorData.PanelDoors,
      MoldPList: Molded.PriceList,
      Variations: Molded.Variations,
      counter: 1
    }
  },
  props: {
    qArgs: { required: true, type: Object },
    run: { required: true, type: Boolean },
    currentType: { required: true, type: String }
  },
  computed: {
    headers () {
      return this.currentType === 'FrameDoors' ? this.OmegaFrameDoorsTableHeaders : this.OmegaPanelDoorsTableHeaders
    }
  },
  watch: {
    run () {
      if (this.run) {
        this.handleRequest()
      }
    },
    currentType () {
      this.resetData()
    }
  },

  methods: {
    handleRequest () {
      this.resetData()
      const resArr = [] // Main Array
      const Data1 = {}
      Data1.DoorType = this.currentType // 'FrameDoors' or 'PanelDoors'
      Data1.TM = this.Meta.TM
      Data1.FilmTM = this.Meta.DecFilm
      const Model = this.qArgs.qModel
      Data1.Model = Model
      const mData = Object.entries(this[this.currentType][this.qArgs.qModel])
      Data1.OnLay = []
      // Data1.SeriesOf = mData[0][1]
      Data1.DoorPrice = mData[0][1]
      mData[1][1].forEach(onlay => { // if there are several sets of on-lays > loop through arr
        Data1.OnLay.push(...this.Decors[onlay])
      })
      Data1.Decors = this.Decors[mData[2][1]]
      Data1.Pics = this.setImages(this.qArgs.qModel)
      Data1.GlassSet = this.Decors[mData[3][1]]
      Data1.Panel = this.Decors[mData[4][1]]
      Data1.Edge = this.setEdge(this.currentType, mData[5][1])
      Data1.Modern = mData[6][1]
      Data1.VLines = mData[7][1]
      Data1.RAL = mData[8][1]
      Data1.Description = this.Meta[mData[9][1]]
      const PriceGrp = this.setPriceGroupe(mData[2][1])
      Data1.PriceGrp = PriceGrp
      Data1.DoorCases = this.Variations[PriceGrp].DoorCase
      Data1.DoorJambs = this.Variations[PriceGrp].Jamb
      Data1.DoorExtensions = this.Variations[PriceGrp].Extension
      Data1.Decor = 'Фарбовані двері'
      Data1.Categories = this.setCategory(Data1)
      Data1.Hinges = this.Variations[PriceGrp].Hinges
      Data1.ID = this.counter
      resArr.push(Data1)
      this.VariableProductData = resArr
      // console.log(resArr)
    },

    setPriceGroupe (DecorSet) {
      if (DecorSet === 'DecorSet1') return 'Decor1'
      else if (DecorSet === 'DecorSet2') return 'Decor2'
      else if (DecorSet === 'DecorSet3') return 'Decor2'
      else return 'Decor3'
    },

    setDecorFilmTM (DecorSet) {
      const res = []
      const arr = Object.entries(this.Meta.DecFilm)
      arr.forEach((el, id) => {
        if (el[1].includes(DecorSet)) {
          res.push(el[0])
        }
      })
      return res
    }
  },

  filters: {
    edgePrice (val) {
      return (Object.values(val)).join(', ')
    },
    priceNumber (val) {
      return val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    }
  }
}
</script>
