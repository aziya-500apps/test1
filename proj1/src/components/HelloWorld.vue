<template>
  <div class="hello">
   
   <pc1 msg="Hello" ref="ref" name="Aziya" number=123456789></pc1>
   <!-- <pc2 :msg="msg" :name="name" :number="number"></pc2>
   <pc3 ref="msg" >{{msg}}</pc3> -->
   <button @click="display()">submit</button>
    
  </div>
</template>

<script>
import pc1 from "@/components/pc1.vue"
// import pc2 from "@/components/pc2.vue"
// import pc3 from "@/components/pc3.vue"
export default {
  name: 'HelloWorld',
  components:{
    pc1,
    // pc2,
    // pc3,
  },
  data(){
    return {
      msg:"hello",
      name:"Neha",
      number:11111111,
    };
  },
    methods :{
       display(){
         this.$refs.ref.f1();
       }
    }
}
</script>

