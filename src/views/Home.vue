<template>
 <div>
 <navbar/>
 <hero/>
  <hero1/>
  <hero2/>
  <hero3/>
  <foooter/>
 </div>

</template>

<script>
import navbar from '../components/navbar.vue'
import hero from '../components/hero.vue'
import hero1 from '../components/hero1.vue'
import  hero2 from '../components/hero2.vue'
import  hero3 from '../components/hero3.vue'
import  foooter from '../components/foooter.vue'
export default {
  name: 'Home',
  components: {
    navbar,
    hero,
      hero1,
        hero2,
           hero3,
          foooter

   
  }
}
</script>
