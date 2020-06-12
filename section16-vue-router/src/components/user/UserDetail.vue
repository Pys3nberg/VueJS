<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded has ID: {{$route.params.id}}</p>
        <router-link
                class="btn btn-primary"
                tag="button"
                :to="{ name: 'userEdit', params: { id: $route.params.id },
                query: { locale: 'en', q: 100 }}">Edit</router-link>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                link: {
                    name: 'userEdit',
                    params: { id: this.$route.params.id },
                    query: { locale: 'en', q: 100 },
                    hash: '#data'
                }
            }
        },
        // new life cycle hook from vue router
        beforeRouteEnter(to, from, next) {
            // cannot acces this because it this component has not bee init at this point
            // but can use the next function to do stuff
            next((vm) => {
                vm.link
            });
        }
    }

</script>