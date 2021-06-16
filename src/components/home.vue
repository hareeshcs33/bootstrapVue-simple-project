<template>
  <b-container class="home">
    <h1>Home</h1>
    <b-button variant="primary">First</b-button>
    <div>
      <b-button>Button</b-button>
      <b-button variant="danger">Button</b-button>
      <b-button variant="success">Button</b-button>
      <b-button variant="outline-primary">Button</b-button>
    </div>
    <div>
      username: {{username}}
    </div>
    <form>
      <input type="text" placeholder="first name" v-model="formData.first_name"/>
      <input type="text" placeholder="last name" v-model="formData.last_name"/>
      <input type="text" placeholder="email" v-model="formData.email"/>
      <input type="password" placeholder="password" v-model="formData.password "/>
      <input type="submit" value="submit" @click.prevent="submitForm" />
    </form>
    <pre>{{userData}}</pre>
    <b-button @click="getTodosList" squared class="mx-2">todos</b-button>
    <pre>{{todosList}}</pre>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      formData: {
        first_name: null,
        last_name: null,
        email: null,
        password: null,
      }
    }
  },
  computed: {
    username(){
      return this.$store.getters.getUserName;
    },
    userData(){
      return this.$store.getters.getUserData;
    },
    todosList(){
      return this.$store.getters.getTodosList;
    }
  },
  methods: {
    submitForm(){
      this.$store.dispatch('userData', this.formData);
    },
    getTodosList(){
      this.$store.dispatch('setTodosList');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
