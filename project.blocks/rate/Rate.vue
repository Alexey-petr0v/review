<template lang="pug">
  include rate
  +addRate
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
      },
      lengthRate: {
        type: Number,
        default: 5
      },
      currentRate: {
        type: Number
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
          this.stars[i].act = "";
        }
        this.currentRate = event.target.getAttribute("data-value");
        this.addActivity(this.currentRate);
        this.$emit('rate-result', this.currentRate);
      },
      addActivity(currentValue) {
        for (let i = 0; i < currentValue; i++) {
          this.stars[i].act = "rate__title_active";
        }
      }
    },
    mounted: function () {
      for (let i = 1; i <= this.$props.lengthRate; i++) {
        let activeStatus = i <= this.$props.currentRate ? "rate__title_active" : "";
        this.$data.stars.push({act: activeStatus});
      }
    }
  }
</script>