<template>
  <div class="mod">
    <b-card class="mod__main">
      <h3>{{ title }}</h3>
      <hr />
      <div 
        class="mod__body"
        ref="mod__body"
        @scroll="checkComplete"
      >
          <slot></slot>
      </div>
      <hr />
      <div class="mod__footer">
        <slot
          name="footer"
        >
        исходный футер
        </slot>
      </div>
    </b-card>
    <close
        class="mod__close"
        @close-modal="closeModal"
        
      />
  </div>
</template>

<script>
import Close from '@/components/Close.vue'

export default {
  name: "Modal",
  props: {
    title: String,
  },
  components: {
    Close
  },
  data() {
    return {
      text: "new text 11",
    };
  },
  methods: {
    closeModal() {
      this.$emit('close-modal')
    },

    checkComplete(e) {
      const current = this.$refs.mod__body
      // console.log(this.$refs.mod__body.scrollTop)
      if (current.scrollTop + current.clientHeight === current.scrollHeight) {
        console.log('end')
        this.$emit('complete')
      }
    }
  },

  mounted() {
    const current = this.$refs.mod__body
    current.scrollTop = current.scrollHeight
  }


  
};
</script>

<style lang="scss" scoped>
.mod {
  position: relative;

  &__main {
    padding-right: 20px;
  }

  &__close {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  &__body {
    height: 250px;
    overflow-y: scroll;
  }
}
</style>
