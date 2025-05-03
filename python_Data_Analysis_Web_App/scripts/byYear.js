const app = Vue.createApp({
    data() {
        return {
            graph: "select"
        };
    },

    computed: {
        graphImage() {
            imgStr = `../images/ByYear/${this.graph}.png`;

            //console.log(imgStr);

            return imgStr;
        }
    },

    methods: {

    }
})

app.mount("#byYearApp")