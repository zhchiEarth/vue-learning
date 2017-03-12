window.Event = new Vue();

Vue.component('coupon', {
    template: '<input placeholder="Enter your coupon code" @blur="onCouponApplied" >',

    methods: {
      onCouponApplied() {
        // this.$emit('applied');
        Event.$emit('applied');

      }
  }
});

new Vue({
  el: '#root',

  data: {
    couponApplied: false
  },
  methods: {
      onCouponApplied() {
        this.couponApplied = true;
      }
  }
});