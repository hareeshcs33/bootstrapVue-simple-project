<template>
    <div>
        <h1 v-size="'big'">User component</h1>
        <p v-size="'small'">custom directive contents goes here...</p>
        <p v-size>custom directive contents goes here...</p>
        <h2>{{userId}}</h2>
    </div>
</template>
<script>
import sizeDirective from '../directives/size-directive'

export default {
    name: 'user',
    data(){
        return {
            userId: this.$route.params.id,
        }
    }
}
</script>
