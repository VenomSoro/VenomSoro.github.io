const app = Vue.createApp({
    data() {
        return {
            focusOverall: "select",
            focusAgeGroups: "select",
            race: "select",
        };
    },

    computed: {
        overallGraphImage() {
            imgStr = `../images/ByRaceOrEthnicity/${this.focusOverall}/graph.png`;

            //console.log(imgStr);

            return imgStr;
        },

        ageGroupGraphImage() {
            imgStr = `../images/ByRaceOrEthnicity/ageGroups/${this.focusAgeGroups}/${this.race}.png`;

            return imgStr;
        }
    },

    methods: {

    }
})

app.mount("#byRaceOrEthnicityApp")