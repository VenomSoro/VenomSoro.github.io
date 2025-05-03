const app = Vue.createApp({
    data() {
        return {
            focus: "select"
        };
    },

    computed: {
        graphImage() {
            imgStr = `../images/ByAgeGroup/${this.focus}/graph.png`;

            //console.log(imgStr);

            return imgStr;
        }
    },

    methods: {

    }
})

app.mount("#byAgeGroupApp")