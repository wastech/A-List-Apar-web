<template>
  <div class="cointainer">
    <hero/>
    <div class="content">
      <div class="title">
          <h1>Webwaste</h1>
          <h4> by aremu</h4>
          <p> published in.............................</p>
          <div class="paragraph">The Web is obese
In 1994, there were 3,000 websites. In 2019, there were estimated to be 1.7 billion, almost one website for every three people on the planet. Not only has the number of websites exploded, the weight of each page has also skyrocketed. Between 2003 and 2019, the average webpage weight grew from about 100 KB to about 4 MB. The results?

Article Continues Below
Share this:
Click to share on Facebook (Opens in new window)
Click to share on Twitter (Opens in new window)
Become a patron
Wireframe podcast banner
Wireframe is a podcast all about how UX can help technology fit into our lives.

A Book Apart Logo
A Book Apart:
Brief books for people who make websites.

An Event Apart Logo
An Event Apart:
3 days of design, code, and content for web & UX designers & devs.

“In our analysis of 5.2 million pages,” Brian Dean reported for Backlinko in October 2019, “the average time it takes to fully load a webpage is 10.3 seconds on desktop and 27.3 seconds on mobile.” In 2013, Radware calculated that the average load time for a webpage on mobile was 4.3 seconds.</div>
      </div>
    </div>
    <Author/>

  </div>
</template>
<script>
import hero from '@/components/hero.vue'
import Author from '@/views/Author.vue'
export default {
  components: {
    hero,
    Author
    },
    data(){
      return{

      }
    }
  
}
</script>