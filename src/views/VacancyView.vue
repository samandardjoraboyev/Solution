<template>

  <main style="background: #F8F9F9; height: 90vh">
    <div class="bg-blue-400 relative blue__height flex items-center justify-between px-28">
      <h1 class="text-white text-4xl">Вакансии</h1>
      <div class="flex">
        <p class="text-white mr-4">Главная</p>
        <img src="../assets/Icons/right-arrow.svg" class="mr-4" alt="">
        <p class="text-white">Вакансии</p>
      </div>
      <input type="text" placeholder="Найти вакансию"
             class="w-4/5 px-4 custom__input absolute  h-10 bg-white border-none rounded-3xl">
    </div>
    <section>
      <div class="flex justify-center mt-12 mr-5 text-4xl font-bold leading-7">
        Разработка
      </div>

      <!--      collapse start-->
      <div v-for="item in 4" class="collapsed-class"  >
        <div class="flex  justify-between mb-3">
          <p>Frontend Developer VueJS </p>
          <p>middle/senior </p>
          <img src="../assets/Icons/right-arrow-collapse.svg" alt="">
        </div>

      </div>
      <!--      collapse end-->

    </section>

    <section>
      <div class="flex justify-center mt-12 mr-5 text-4xl font-bold leading-7">
        Дизайн
      </div>

      <!--      collapse start-->
      <div v-for="item in 4" class="collapsed-class"  >
        <div class="flex  justify-between mb-3">
          <p>Frontend Developer VueJS </p>
          <p>middle/senior </p>
          <img src="../assets/Icons/right-arrow-collapse.svg" alt="">
        </div>

      </div>
      <!--      collapse end-->

    </section>
  </main>


</template>

<script>
export default {
  name: 'UserView.vue'
}
</script>

<style scoped>
  .blue__height {
    height: 176px;
  }
  .text__shadow{
    text-shadow: none;
  }
  .collapse{
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

  .collapsed-class{
    border-bottom: 1px solid gray;
    width: 80%;
    margin: 20px auto;
  }


</style>