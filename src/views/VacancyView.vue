<template>

  <main style="background: #F8F9F9;">
    <div class="bg-blue-400 relative blue__height flex items-center justify-between px-28">
      <h1 class="text-white text-4xl">Вакансии</h1>
      <div class="flex">
        <p class="text-white mr-4">Главная</p>
        <img alt="" class="mr-4" src="../assets/Icons/right-arrow.svg">
        <p class="text-white">Вакансии</p>
      </div>
      <input class="w-4/5 px-4 custom__input absolute  h-10 bg-white border-none rounded-3xl"
             placeholder="Найти вакансию"
             type="text">
    </div>
    <section>
      <div class="flex justify-center mt-12 mr-5 text-4xl font-bold leading-7">
        Разработка
      </div>

      <!--      collapse start-->
      <div class="collapsed-class" v-for="item in developersData">
        <div class="flex  justify-between mb-3">
          <p>{{item.job}}</p>
          <p>{{item.level}}</p>
          <img alt="" src="../assets/Icons/right-arrow-collapse.svg">
        </div>

        <div>

          <div></div>
          <div></div>
          <div></div>
        </div>

      </div>
      <!--      collapse end-->

    </section>
    <section>
      <div class="flex justify-center mt-12 mr-5 text-4xl font-bold leading-7">
        Дизайн
      </div>

      <!--      collapse start-->
      <div class="collapsed-class" v-for="item in 2">
        <div class="flex  justify-between mb-3">
          <p>UX/UI designer</p>
          <p>middle/senior </p>
          <img alt="" src="../assets/Icons/right-arrow-collapse.svg">
        </div>
      </div>

      <!--      collapse end-->


    </section>
  </main>


</template>

<script setup>

import { ref } from 'vue'

const developersData = ref(
  [
    {
      job: "UX/UI designer",
      level: "middle/senior"
    },
    {
      job: "UX/UI designer",
      level: "middle/senior"
    },
    {
      job: "UX/UI designer",
      level: "middle/senior"
    },
    {
      job: "UX/UI designer",
      level: "middle/senior"
    },
  ]
)

</script>

<style scoped>


  .text__shadow {
    text-shadow: none;
  }

  .collapse {
    display: flex;
    justify-content: space-between;

  }


  .blue__height {
    height: 176px;
  }

  .custom__input {
    -webkit-appearance: none;
    outline: none;
    bottom: -20px;

  }

  .collapsed-class {
    border-bottom: 1px solid gray;
    width: 80%;
    margin: 20px auto;
  }


</style>