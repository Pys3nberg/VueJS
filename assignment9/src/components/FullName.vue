<template>
    <div>
        <div class="form-group">
        <label for="firstName">First Name</label>
        <input
                id="firstName"
                type="text"
                class="form-control"
                @change="updateName"
                v-model.lazy.trim="firstName"
        >
        </div>

        <div class="form-group">
            <label for="lastName">Last Name</label>
            <input
                    id="lastName"
                    type="text"
                    class="form-control"
                    @change="updateName"
                    v-model.lazy.trim="lastName"
            >
        </div>
    </div>

</template>

<script>
    export default {
        name: "FullName",
        props: ['value'],
        data() {
          return {
              firstName:"",
              lastName:""
          }
        },
        methods: {
            updateName(){
                this.$emit('input', this.firstName + " " + this.lastName);
            }
        }
    }
</script>

<style scoped>

</style>