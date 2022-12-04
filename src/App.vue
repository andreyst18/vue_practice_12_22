<template>
  <div id="app">
<<<<<<< HEAD
    
=======
    <div class="wrapper">
      <div class="main">
        <div class="main__img">
          <img
            src="./assets/img/car.jpg"
            alt="car"
            :class="styles"
            :style="getStyle"
            v-if="isVisible"
                       
          />
          <h3 v-else>
            Здесь должна быть фотография
          </h3>
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
              @click="styles.shadow = !styles.shadow"
              :class="{ 'main__btn-active': styles.shadow }"
            >
              Тень
            </button>
            <button
              class="main__btn"
              @click="styles.border = !styles.border"
              :class="{ 'main__btn-active': styles.border }"
            >
              Рамка
            </button>
            
            <button class="main__btn" @click="isVisible = !isVisible">
              {{ isVisible ? 'Спрятать' : 'Показать' }}
            </button>
            <div class="main__change-size change-size">
              <h3 class="change-size__title">Размер</h3>
              <h4 class="change-size__subtitle">Высота: {{ imgHeight }}</h4>
              <input type="range" min="0" max="333.33" @input="imgHeight = $event.target.value" :value="imgHeight"><br>
              <h4 class="change-size__subtitle">Ширина: {{ imgWidth }}</h4>
              <input type="range" min="0" max="500" @input="imgWidth = $event.target.value" :value="imgWidth">
            </div>
            <div class="main__rotate">
              <h3 class="rotate__title">Поворот</h3>
              <h4 class="rotate__subtitle">Угол: {{ imgAngle }}</h4>
              <input type="range" min="0" max="360" @input="imgAngle = $event.target.value" value="0">
            </div>
          </div>
        </div>
      </div>
    </div>
>>>>>>> daf0ed08044eb26132177889ebfccd2bb074cd15
  </div>
</template>

<script>
export default {
  name: 'youtube-task',
<<<<<<< HEAD
=======

  data() {
    return {
      styles: {
        sepia: false,
        border: false,
        small: false,
        shadow: false
      },

      isVisible: true,
      imgWidth: 500,
      imgHeight: 333.33,
      imgAngle: 0
      
    };
  },

  computed: {
    getStyle() {
      return {
        width: this.imgWidth + 'px',
        height: this.imgHeight + 'px',
        transform: `rotate(${this.imgAngle}deg)`
      }
    }
    
  }
>>>>>>> daf0ed08044eb26132177889ebfccd2bb074cd15
  
};
</script>

<style lang="scss">

<<<<<<< HEAD
=======
$img-width: 500px;
$img-height: 333.33px;

*,
html,
body,
div,
img {
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
    background: #b2b6b2;
    flex-shrink: 0;
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

  &__change-size {
      margin-bottom: 20px;
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

  .shadow {
    box-shadow: 15px 5px 20px gray ;
  }
>>>>>>> daf0ed08044eb26132177889ebfccd2bb074cd15
</style>
