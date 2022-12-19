<template>
  <div id="app">
    <div class="wrapper d-flex">
      <div>
        <button class="btn btn-primary" @click="isVisible = true">
          Отправить что-нибудь
        </button>
      </div>

      <modal 
        v-if="isVisible" 
        title="Очень важная информация"
        @close-modal="closeModal"
        @complete="isRead = true"
        class="col-6"
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deleniti, necessitatibus, laborum laboriosam voluptatem labore in laudantium repudiandae amet ducimus fugiat nulla. Animi quod, accusamus vitae impedit atque ullam optio!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deleniti, necessitatibus, laborum laboriosam voluptatem labore in laudantium repudiandae amet ducimus fugiat nulla. Animi quod, accusamus vitae impedit atque ullam optio!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deleniti, necessitatibus, laborum laboriosam voluptatem labore in laudantium repudiandae amet ducimus fugiat nulla. Animi quod, accusamus vitae impedit atque ullam optio!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deleniti, necessitatibus, laborum laboriosam voluptatem labore in laudantium repudiandae amet ducimus fugiat nulla. Animi quod, accusamus vitae impedit atque ullam optio!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deleniti, necessitatibus, laborum laboriosam voluptatem labore in laudantium repudiandae amet ducimus fugiat nulla. Animi quod, accusamus vitae impedit atque ullam optio!</p>
        <template v-slot:footer>
          <div class="footer d-flex">
            <button class="btn btn-secondary me-2">Отмена</button>
            <button 
              class="btn btn-primary"
              :disabled="!isRead"
            >
              Принять
            </button>
          </div>
        </template>
      </modal>
    </div>
  </div>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "youtube-task",

  data() {
    return {
      isVisible: false,
      isRead: false
    };
  },

  components: {
    Modal,
  },

  methods: {
    closeModal() {
      this.isVisible = false
    }
  }
};
</script>

<style lang="scss">
.wrapper {
  width: 900px;
  margin: 3em auto;
  justify-content: space-between;
}

.footer {
  justify-content: flex-end;
}
</style>
