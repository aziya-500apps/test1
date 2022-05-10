<template>
    <div>
        
    <b-table striped hover :items="product" :fields=fields></b-table>
    <form formname="form1">
            new product:<input type="text" id="id1" >
        </form>
    <button @click="add()"></button>
  
</template>

<script>
  export default {
      name:"ExaM",
    data() {
      return {
        fields:["productname","price","productcategory"],
        product: [
          { productname:"computer"},
          { price: "10000"},
          { productcategory:"software" },
          
        ]
      }
    },
    methods:{
        add(){
            

        }

    },
  }
</script>
        
  