<template>
  <div class="home">
    <h1>contact</h1>
    <components :is="selectedComponent"></components>
    <div>
      <button @click="selectComp('userOne')">userOne</button>
      <button @click="selectComp('userTwo')">userTwo</button>
    </div>
  </div>
</template>
<script>
import userOne from '../components/user-one.vue';
import userTwo from '../components/user-two.vue';

export default {
  data() {
    return {
      selectedComponent: 'userOne'
    }
  },
  methods: {
    selectComp(comp){
      this.selectedComponent = comp;
    }
  },
  components: {
    userOne,
    userTwo,
  }
}
</script>
