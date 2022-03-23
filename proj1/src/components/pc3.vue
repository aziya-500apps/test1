<template>
    <div>
        <h4>parent child by using props concept</h4>
        <h4>message:{{ msg }}</h4>
        
    </div>
</template>
<script>
export default {
    name:"pcFile3",
    props: {
    msg:{default:"checking result",type:String},
  }

}
</script>