export default {
  methods: {
    checkComplete(e) {
      const current = e.target
      if (current.scrollTop + current.clientHeight === current.scrollHeight) {
        console.log("it\'s mixin")
        this.$emit('complete')
      }
    }
  }
}