const App = {
    data() {
        return {
            counter: 0,
            title: 'Counter',
            noteTitle: 'Notes list',
            notePlaceholder: 'Enter your notes here',
            inputValue: '',
            notes: ['Note nr first', 'Note nr second', 'Note nr third'],
        }
    },
    methods: {

        // use v-model to do the same in easer way
        // inputChangeHandler(event) {
        //     this.inputValue = event.target.value
        // },

        addNewNote() {
            if (this.inputValue !== "") {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },

        removeNote(idx) {
           return this.notes.splice(idx, 1)
        },

        toUpperCase(item) {
            return item.toUpperCase()
        },

        // doubledCount() {
        //     return this.notes.length * 2
        // }

        // this method is not required in Vue, there are modificators for that
        // for example v-on:keypress.enter="addNewNote"

        // inputKeyPress(event) {
        //     if (event.key === 'Enter') {
        //         this.addNewNote()
        //     }
        // }

    },

    computed: {
        doubledCountComputed() {
            console.log('doubledCountComputed');
            return this.notes.length * 2
        }
    },

    watch: {
        inputValue(value) {
            if (value.length > 20) {
                this.inputValue = ''
            }
        }
    },
}

 Vue.createApp(App).mount('#app')
