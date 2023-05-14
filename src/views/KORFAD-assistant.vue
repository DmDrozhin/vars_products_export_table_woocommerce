<template>
    <div>
      <h2>{{ Meta.TM }} Assistant</h2>
      <hr>
      <p v-for="str in NameArr" :key="str.id"> {{ str.TM }} {{ str.Model }} {{ str.Decor }} {{ str.Glass }}.jpg</p>
    </div>
</template>

<script>
import DoorData from '../TM_KORFAD/KorfadDoors'
export default {
  mixins: { DoorData },
  data () {
    return {
      idx: 1,
      Meta: DoorData.Meta,
      Decors: DoorData.Decors,
      NameArr: []
    }
  },
  methods: {
    // helping fn to get titles for img files
    getDoorNameString () {
      const res = []
      const DecorsArr = []
      Object.values(this.Decors).slice(0, 4).forEach(set => DecorsArr.push(...set))
      DecorsArr.forEach(dec => {
        const Data1 = {}
        Data1.TM = this.Meta.Name
        Data1.Model = 'PORTO PR-05'
        Data1.Decor = dec
        const GlassesArr = Object.values(this.Decors.Glasses).slice(6, 7)
        const checkVal = GlassesArr[0].join()
        // console.log(checkVal)
        if (checkVal !== 'Без скла - «глухе» полотно') {
          GlassesArr.forEach(glass => {
            glass.forEach(glassName => {
              const Data2 = { ...Data1 }
              Data2.id = this.idx
              this.idx = Data2.id + 1
              Data2.Glass = glassName
              res.push(Data2)
            })
          })
        } else { res.push(Data1) }
      })
      this.NameArr = res
    }
  },
  mounted () {
    this.resetData()
    this.getDoorNameString()
  }
}
</script>
