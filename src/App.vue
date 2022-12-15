<template>
  <div id="app">
    <div class="wrapper">
      <form 
        action="" class="col-lg-4 col-sm-4" 
        @submit.prevent="checkForm"
        v-if="!isValidated"
      >
        
        <div class="mb-4">
          <label for="login" class="mb-2"><strong>Логин:</strong></label
          ><br />
          <input 
            class="form-control" 
            :class="$v.form.login.$error ? 'is-invalid' : '' "
            id="login" 
            type="text" 
            v-model="form.login"
          />
          <p
            v-if="$v.form.login.$dirty && !$v.form.login.required"
            class="invalid-feedback"
          >
            Обязательное поле
          </p>
          <p
            v-if="$v.form.login.$dirty && !$v.form.login.minLength"
            class="invalid-feedback"
          >
            Должно быть больше 3-х символов
          </p>
        </div>
        
        <div class="mb-4">
          <label for="email" class="mb-2"><strong>Почта:</strong></label
          ><br />
          <input 
            class="form-control" 
            id="email" 
            type="text"  
            v-model="form.email"
            :class="$v.form.email.$error ? 'is-invalid' : '' "
          />
          <p
            class="invalid-feedback"
            v-if="$v.form.email.$dirty && !$v.form.email.required"
          >
            Обязательное поле
          </p>
          <p
            class="invalid-feedback"
            v-if="$v.form.email.$dirty && !$v.form.email.email"
          >
            Неверный формат email
          </p>
        </div>
        
        <div class="mb-4">
          <label for="password" class="mb-2"><strong>Пароль:</strong></label
          ><br />
          <input 
            id="password" 
            class="form-control" 
            type="password"  
            v-model="form.password"
            :class="$v.form.password.$error ? 'is-invalid' : '' "
          />
          <p
            class="invalid-feedback"
            v-if="$v.form.password.$dirty && !$v.form.password.required"
          >
            Обязательное поле
          </p>
          <p
            class="invalid-feedback"
            v-if="$v.form.password.$dirty && !$v.form.password.minLength"
          >
            Длина пароля должна быть не менее 6 символов
          </p>
        </div>
        
        <div class="form-group mb-4">
          <label for="country" class="mb-2">Страна:</label>
          <select
            id="country" 
            class="form-control" 
            v-model="form.country"
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
            v-model="form.favoriteThemes"  
            :class="$v.form.favoriteThemes.$dirty ? 'is-invalid' : '' "
          >
            <option 
              v-for="(item, index) in themes"
              :key="index" 
              :value="item.value"
              >{{ item.label }}</option>
          </select>
          <p
            class="invalid-feedback"
            v-if="$v.form.favoriteThemes.$dirty && !$v.form.favoriteThemes.maxLength"
          >
            Не больше 3-х вариантов!
          </p>
        </div>

        <div>
          <label for="familiar" class="me-3">Ознакомлен с правилами</label>
          <input 
            type="checkbox" 
            id="familiar" 
            v-model="form.familiarWithRights"
            :class="$v.form.familiarWithRights.$error ? 'is-invalid' : '' "
          >
          <p
            class="invalid-feedback"
            v-if="$v.form.familiarWithRights.$dirty && !$v.form.familiarWithRights.sameAs"
          >
            Вы не ознакомились с правилами!
          </p>

        </div><br>
        
        <div>
          <label for="agree" class="me-3">Согласен с отправкой уведомлений:</label>
          <input type="checkbox" id="agree" v-model="form.agreeWithSendEmail">
        </div>
        
        <div class="mt-4">
          <h4>Любимые цвета:</h4>
          <div class="mb-2">
            <input class="me-2" type="checkbox" value="red" v-model="form.favoriteColors"><label for="">Красный</label>
          </div>
          <div class="mb-2">
            <input class="me-2" type="checkbox" value="green" v-model="form.favoriteColors"><label for="">Зеленый</label>
          </div>
          <div class="mb-2">
            <input class="me-2" type="checkbox" value="blue" v-model="form.favoriteColors"><label for="">Синий</label>
          </div>
        </div>
        
        <div class="mt-4">
          <h4>Укажите пол:</h4>
        <div class="d-flex">
          
          <div class="me-3">
            <label class="me-2" for="male">Мужчина</label>
            <input id="male" type="radio" value="male" v-model="form.gender">
          </div>
          <div>
            <label class="me-2" for="female">Женщина</label>
            <input id="female" type="radio" value="female" v-model="form.gender">
          </div>
        </div>
        </div>
        <button 
          type="submit"
          class="btn btn-primary mt-4"
        >Отправить</button>
      </form>
      <div
        v-else
      >
        Вы прошли валидацию
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, email, maxLength, sameAs } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  data() {
    return {
      form: {
        login: "",
        email: "",
        password: "",
        country: 'Russia',
        agreeWithSendEmail: true,
        favoriteThemes: [ 'Sport' ],
        favoriteColors: [],
        gender: '',
        familiarWithRights: false
      },
      
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
        {
          label: 'Наука',
          value: 'Science'
        },
      ],
      isValidated: false
    };
    
  },

  validations: {
    form: {
      login: { 
        required, 
        minLength: minLength(4), 
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6), 
      },
      familiarWithRights: {
         sameAs: sameAs( () => true ) 
      },
      favoriteThemes: {
        maxLength: maxLength(3)
      }
    }
  },

  methods: {
    checkForm() {
      this.$v.form.$touch()
      if (!this.$v.form.$error) {
        console.log('Валидация прошла успешно!')
        this.isValidated = true
      }
    }
  }
};
</script>

<style lang="scss">
.wrapper {
  margin: 50px auto;
  max-width: 900px;
}
</style>
