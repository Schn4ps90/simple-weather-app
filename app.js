new Vue({
  el: '#weather',
  data: {
    city: '',
    tempCurrent: '',
    condtiton: '',
    localtime: '',
    wind: '',
    isVisible: false,
  },
  watch: {
      wind: function() {
        this.isVisible = true;
      }
  },
  methods: {
    getData: function () {
        var vm = this;
        axios.get('https://api.apixu.com/v1/current.json?key=fd9a7d265b77458dbd7184820171406&q='+this.city)
          .then(function (response) {
            vm.tempCurrent = _(response.data.current.temp_c)
            vm.condtiton = _(response.data.current.condition.text)
            vm.localtime = _(response.data.location.localtime)
            vm.wind = _(response.data.current.wind_kph)
            this.isVisible = true;
          })
          .catch(function (error) {
            alert('No city found, please try again...');
          })
      },
    }
});
