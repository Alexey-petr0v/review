<template lang="pug">
  include rate
  +addRate
</template>

<script>
  export default {
    props: {
      lengthRate: {
        type: Number,
        default: 5
      },
      currentRate: {
        type: Number,
        default: 0
      }
    },
    data: function() {
      return {
        stars: new Array()
      }
    },
    methods: {
      addCheck(event){
        for (let i = 0; i < this.lengthRate; i++) {
          this.stars[i].act = ""
        }
        this.currentRate = event.target.getAttribute("data-value");
        this.addActivity(this.currentRate)
      },
      addActivity(currentValue) {
        for (let i = 0; i < currentValue; i++) {
          this.stars[i].act = "rate__title_active"
        }
      }
    },
    mounted: function () {
      for (let i = 0; i < this.$props.lengthRate; i++) {
        this.$data.stars.push({act: ""})
      }
      this.addActivity(this.$props.currentRate)
    }
  }
</script>