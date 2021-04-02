Vue.createApp({
    // data() {
    //     return {

    //     }
    // }

    data: () => ({
      title: 'I am Grut',
      myHtml: '<h1>Vue 3 App</h1>',
      person: {
          firstName: 'Dima',
          lastName: 'Leveret',
          age: '26',
      },
       items: [1, 2, 3]
    }),

    methods: {
        // stopPropagation(event) {
        //     event.stopPropagation()
        // },
        addItem() {
            this.items.unshift(this.$refs.myInput.value)
            this.$refs.myInput.value = ''
        },

        removeItem(i) {
            this.items.splice(i, 1)
        },
        
        log(item) {
            console.log('Log itme:', item);
        }
    },

    computed: {
        evenItems() {
            return this.items.filter(i => i % 2 === 0)
        }
    }

}).mount('#app')