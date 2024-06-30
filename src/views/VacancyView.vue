<template>
  <div class="flex bg-blue-400 px-28 blue__height relative">
    <div class="flex items-center w-full justify-between">
      <h1 class="text-white text-4xl">Вакансии</h1>
      <div class="flex">
        <p class="text-white mr-4 text-shadow font-serif text__shadow">Главная</p>

        <img src="../assets/Icons/right-arrow.svg" class="mr-4" alt="">
        <p class="text-white mr-4">Вакансии</p>
      </div>

    </div>
    <div class="flex absolute bottom-4  justify-center bg-white rounded-full" style="width: 90%">
      <input type="text" placeholder="Найти вакансию" class="w-4/5 px-4 custom__input absolute  h-10 bg-white border-none rounded-3xl">
      <img class="flex absolute right-20 items-center" src="../assets/Icons/loop.svg" alt="">
    </div>
  </div>




  <div class="flex justify-center items-center mt-16">
    <h1 class="text-4xl font-bold leading-7">Разработка</h1>
  </div>

  <div class="collapse">
    <h1 class="flex p-8 space-x-10">Frontend Developer VueJS</h1>
    <p class="flex justify-center p-8 space-x-10" >middle/senior</p>
    <img src="../assets/Icons/arrov-11.svg" alt="">
  </div>


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




</style>