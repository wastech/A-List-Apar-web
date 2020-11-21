<template>
  <div class="container">
      <h2 class="title">Author's post</h2>
 <div class="row no-gutters bg-light position-relative"  v-for="item in items" :key="item">
  <div class="col-md-6 mb-md-0 p-md-4">
    <img :src="item.image" class="w-100" alt="...">
  </div>
  <div class="col-md-6 position-static p-4 pl-md-0" >
    <h5 class="mt-0">{{item.title}}</h5>
    <p>{{item.text}}</p>
    <a href="#" class="stretched-link">read more..</a>
  </div>
</div>


  </div>
</template>
<script>
export default {
  data(){
    return{
      items:[
        {image:'https://previews.123rf.com/images/aaronamat/aaronamat1805/aaronamat180500440/104448488-african-american-man-with-beard-thinking-thoughtful-with-smart-face-isolated-over-white-background.jpg', title:'Columns with stretched link', text:'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'},
        {image:'https://previews.123rf.com/images/aaronamat/aaronamat1805/aaronamat180500440/104448488-african-american-man-with-beard-thinking-thoughtful-with-smart-face-isolated-over-white-background.jpg', title:'Columns with stretched link', text:'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'},
        {image:'https://previews.123rf.com/images/aaronamat/aaronamat1805/aaronamat180500440/104448488-african-american-man-with-beard-thinking-thoughtful-with-smart-face-isolated-over-white-background.jpg', title:'Columns with stretched link', text:'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'},

     {image:'https://previews.123rf.com/images/aaronamat/aaronamat1805/aaronamat180500440/104448488-african-american-man-with-beard-thinking-thoughtful-with-smart-face-isolated-over-white-background.jpg', title:'Columns with stretched link', text:'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'}

      ]
    }
  }
}
</script>

<style scoped>
img{
  height: 10em;
}
h5{
  font-size: medium;
}
p{
  font-size: small;
}
.title{
  text-align: center;
  margin-bottom: 1em;
}
</style>