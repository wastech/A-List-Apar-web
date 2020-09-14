<template>
  <div class="main">
<div>
  <div class="head">
    <h1>FEATURING</h1>
  </div>
  <div class="row">
    <div class="col-6" v-for="item in items" :key="item.id">
     <div class="image">
      <img :src="item.image" alt="">
    </div>
    <div class="title">
  <h2>{{item.title}}</h2>
    </div>

      
    <div class="bio">
      <h5>{{item.bio}}</h5>

    </div>

    </div>
   
  </div>
</div>

  </div>
</template>
<script>
export default {
  data(){
    return{
     items:[ {image:"https://secure.gravatar.com/avatar/20fe19503c38d0aaf98caf97ab62d762?s=100&r=pg&d=mm", title:"hello aremu hope you are ok",
     bio:"Nathan Curtis is a principal at EightShapes, LLC, a UX design agency he cofounded with Dan Brown in 2006 in Washington, DC. With EightShapes, Nathan has consulted on design systems for clients including Cisco, Marriott, Wells Fargo, Discovery, eBay, NetApp, Capital One, and Yahoo. He has practiced design and front-end development since 1996."},
     {image:"https://secure.gravatar.com/avatar/20fe19503c38d0aaf98caf97ab62d762?s=100&r=pg&d=mm", title:"hello aremu hope you are ok",
     bio:"Nathan Curtis is a principal at EightShapes, LLC, a UX design agency he cofounded with Dan Brown in 2006 in Washington, DC. With EightShapes, Nathan has consulted on design systems for clients including Cisco, Marriott, Wells Fargo, Discovery, eBay, NetApp, Capital One, and Yahoo. He has practiced design and front-end development since 1996."},
     {image:"https://secure.gravatar.com/avatar/20fe19503c38d0aaf98caf97ab62d762?s=100&r=pg&d=mm", title:"hello aremu hope you are ok",
     bio:"Nathan Curtis is a principal at EightShapes, LLC, a UX design agency he cofounded with Dan Brown in 2006 in Washington, DC. With EightShapes, Nathan has consulted on design systems for clients including Cisco, Marriott, Wells Fargo, Discovery, eBay, NetApp, Capital One, and Yahoo. He has practiced design and front-end development since 1996."}
     ]
    }
  }
}
</script>
<style scoped>
img {
  max-width: 30%;
  width: 25%;
  object-fit: cover;
  border-radius: 50%;
 
}
.image{
 text-align: center;

  margin-top: 2rem;
  margin-bottom: 1rem;
}
.title{
  text-align: center;
   margin-bottom: 1em;
}
.head h1{
  text-align: center;
 
}
</style>
