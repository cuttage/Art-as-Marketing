export default {
  methods: {
    anim(path) {
      document.getElementById(path).animate(
        this.jumplet,
        this.timings
      ).finished
    }
  }
}
