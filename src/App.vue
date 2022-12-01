<template>
  <div id="app">
    <div class="wrapper">
      <div class="main">
        <div class="main__img">
          <img
            src="./assets/img/car.jpg"
            alt="car"
            :class="styles"
            :style="getSize"
            v-if="isVisible"
                       
          />
          <div v-else>
            <div>Здесь должна быть фотография</div>
          </div>
        </div>
        <div class="main__main">
          <h2 class="main__title">Фильтры</h2>
          <div class="main__btns">
            <button
              class="main__btn"
              @click="styles.sepia = !styles.sepia"
              :class="{ 'main__btn-active': styles.sepia }"
            >
              Сепия
            </button>
            <button
              class="main__btn"
              @click="styles.border = !styles.border"
              :class="{ 'main__btn-active': styles.border }"
            >
              Рамка
            </button>
            <button
              class="main__btn"
              @click="styles.small = !styles.small"
              :class="{ 'main__btn-active': styles.small }"
            >
              Уменьшить
            </button>
            <button class="main__btn" @click="isVisible = !isVisible">
              Скрыть изображение
            </button>
            <div class="main__change-size change-size">
              <h3 class="change-size__title">Размер</h3>
              <h4 class="change-size__subtitle">Высота: {{ imgHeight }}</h4>
              <input type="range" min="0" max="333.33" @input="imgHeight = $event.target.value" :value="imgHeight"><br>
              <h4 class="change-size__subtitle">Ширина: {{ imgWidth }}</h4>
              <input type="range" min="0" max="500" @input="imgWidth = $event.target.value" :value="imgWidth">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'youtube-task',

  data() {
    return {
      styles: {
        sepia: false,
        border: false,
        small: false,
      },

      isVisible: true,
      imgWidth: 500,
      imgHeight: 333.33,
      
    };
  },

  computed: {
    getSize() {
      return {
        width: this.imgWidth + 'px',
        height: this.imgHeight + 'px'
      }
    }
    
  }
  
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Kanit&family=Open+Sans:wght@600&family=Roboto&family=Ubuntu:wght@300;500;700&display=swap");

$img-width: 500px;
$img-height: 333.33px;

*,
body {
  font-family: "Kanit", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.wrapper {
  margin: 10% auto;
  width: 900px;
}

.main {
  display: flex;

  &__img {
    width: $img-width;
    height: $img-height;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__img img {
    width: $img-width;
  }

  &__main {
    margin-left: 50px;
  }

  &__title {
    text-align: center;
    margin-bottom: 20px;
  }

  &__btn {
    border: none;
    padding: 10px 15px;
    background: #b2b6b2;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    margin-right: 20px;
    margin-bottom: 20px;

    &-active {
      background: #2bdd2b;
    }
  }

  .sepia {
    filter: sepia(1);
  }

  .border {
    border: rgb(4, 38, 192) solid 5px;
  }

  .small {
    width: $img-width / 2;
  }
}
</style>
