<template>
  <div class="vue-spinner" :style="spinnerStyle"></div>
</template>

<script>
  export default {
    data() {
      return{
        size: 30,
        depth: 6,
        speed: 1.0,
        color: '#0da9ef',
        sizeUnits: 'px',
        timeUnits: 's'
      }
    },
    computed: {
      spinnerClockwise() {
        return 'rotateСlockwise';
      },
      spinnerSize() {
        return this.size + this.sizeUnits;
      },
      spinnerDepth() {
        return this.depth + this.sizeUnits;
      },
      spinnerSpeed() {
        return this.speed + this.timeUnits;
      },
      spinnerStyle() {
        return {
          borderTopColor: this.hexToRGB(this.color, 0.15),
          borderRightColor: this.hexToRGB(this.color, 0.15),
          borderBottomColor: this.hexToRGB(this.color, 0.15),
          borderLeftColor: this.color,
          width: this.spinnerSize,
          height: this.spinnerSize,
          borderWidth: this.spinnerDepth,
          animationName: this.spinnerClockwise,
          animationDuration: this.spinnerSpeed
        }
      }
    },
    methods: {
      hexToRGB(hex, alpha) {
        const r = parseInt(hex.slice(1, 3), 16),
          g = parseInt(hex.slice(3, 5), 16),
          b = parseInt(hex.slice(5, 7), 16);

        if (alpha) {
          return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
        } else {
          return 'rgb(' + r + ', ' + g + ', ' + b + ')';
        }

      }
    }
  }
</script>

<style lang="scss">
  .vue-spinner {
    margin: 0 auto;
    border-style: solid;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);

    animation-iteration-count: infinite;
    animation-timing-function: linear;

    border-radius: 50%;
    width: 30px;
    height: 30px;

  }
  @keyframes rotateСlockwise {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

</style>
