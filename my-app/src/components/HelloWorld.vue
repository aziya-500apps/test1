<template>
  <div class="hello">
    <one></one>
    <secondName></secondName>
    <h1>Hello World</h1>
    <h2>this is string</h2>
   
  <!--    -->
  </div>
</template>

<script>
import one from '../first.vue'
import secondName from './second.vue'
export default {
  name: 'HelloWorld',
   
  components:{
    one,
    secondName,
  },
  props: {
    msg: String
  }
}
</script>

