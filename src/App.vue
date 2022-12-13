<template>
  <div id="app">
    <div class="wrapper">
      <form action="" class="col-lg-4 col-sm-4">
        <div class="mb-4">
          <label for="login" class="mb-2"><strong>Логин:</strong></label
          ><br />
          <input class="form-control" id="login" type="text" v-model="login"/>
        </div>
        <div class="mb-4">
          <label for="email" class="mb-2"><strong>Почта:</strong></label
          ><br />
          <input class="form-control" id="email" type="text"  v-model="email"/>
        </div>
        <div class="mb-4">
          <label for="password" class="mb-2"><strong>Пароль:</strong></label
          ><br />
          <input id="password" class="form-control" type="text"  v-model="password"/>
        </div>
        <div class="form-group mb-4">
          <label for="country" class="mb-2">Страна:</label>
          <select
            id="country" 
            class="form-control" 
            v-model="country"
          >
            <option 
              v-for="(item, index) in countries"
              :key="index"
              :value="item.value">
              {{ item.label }}
              </option>
          </select>
        </div>
        <div class="mb-4">
          <label for="themes" class="mb-2">Любимые темы:</label>
          <br>
          <select 
            id="themes"
            class="form-control" 
            multiple
            v-model="favoriteThemes"  
          >
            <option 
              v-for="(item, index) in themes"
              :key="index" 
              :value="item.value">{{ item.label }}</option>
          </select>
        </div>
        <div>
          <label for="agree" class="me-3">Согласен с отправкой уведомлений:</label>
          <input type="checkbox" id="agree" v-model="agreeWithSendEmail">
        </div>
        <div class="mt-4">
          <h4>Любимые цвета:</h4>
          <div class="mb-2">
            <input class="me-2" type="checkbox" value="red" v-model="favoriteColors"><label for="">Красный</label>
          </div>
          <div class="mb-2">
            <input class="me-2" type="checkbox" value="green" v-model="favoriteColors"><label for="">Зеленый</label>
          </div>
          <div class="mb-2">
            <input class="me-2" type="checkbox" value="blue" v-model="favoriteColors"><label for="">Синий</label>
          </div>
        </div>
        <div class="mt-4">
          <h4>Укажите пол:</h4>
        <div class="d-flex">
          
          <div class="me-3">
            <label class="me-2" for="male">Мужчина</label>
            <input id="male" type="radio" value="male" v-model="gender">
          </div>
          <div>
            <label class="me-2" for="female">Женщина</label>
            <input id="female" type="radio" value="female" v-model="gender">
          </div>
        </div>
        </div>
        
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: "",
      email: "",
      password: "",
      country: 'Russia',
      agreeWithSendEmail: true,
      favoriteThemes: [ 'Sport' ],
      favoriteColors: [],
      gender: '',
      countries: [
          {
            label: 'Россия',
            value: 'Russia'
          },
          {
            label: 'Китай',
            value: 'China'
          },
          {
            label: 'Турция',
            value: 'Turkey'
          }
        ],
      themes: [
        {
          label: 'Технологии',
          value: 'IT'
        },
        {
          label: 'Языки',
          value: 'Languages'
        },
        {
          label: 'Спорт',
          value: 'Sport'
        },
      ]
    };
  },
};
</script>

<style lang="scss">
.wrapper {
  margin: 50px auto;
  max-width: 900px;
}
</style>
