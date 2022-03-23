<template>
    <div>
        <h4>parent child by using props concept</h4>
        <h4>msg:{{ msg }}</h4>
        <h4>name:{{ name }}</h4>
        <h4>number: {{ number }}</h4>
    </div>
    
</template>
<script>
export default {
    name:"pcFile2",
    props: {
    msg: String,
    name:String,
    number:Number,
  }

}
</script>