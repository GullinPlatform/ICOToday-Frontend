<template>
    <div class="animated fadeInRight">
    </div>
</template>
<script>
export default {
    name: 'Home',
    // data() {
    //     // return {
    //     //     event_sources: []
    //     // }
    // },
    components: {
        // 'calendar': Calendar
    },
    methods: {

    },
    computed: {
        user() {
            return this.$store.getters.me
        }
    },

}

</script>
