<template>
    <div>
        
    <b-table striped hover :items="product" :fields=fields></b-table>
    <b-form-input v-model="empty" placeholder="enter" required> </b-form-input>
    <b-button @click="add">add</b-button>
     </div>
  
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
          
        ],empty:""
      }
    },
    methods:{
        add(){
          this.product.push(this.productname=this.empty)
            

        }

    },
  }
</script>
        
  