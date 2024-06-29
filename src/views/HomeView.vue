<template>
  <main class="">
    <nav class="container bg-blue-400 px-28 py-6 flex justify-between">
      <div class=" text-white ">
        SOLUTIONS LAB:
      </div>
      <div class="text-white">
        <ul class="flex flex-row ">
          <li v-for="item in items" class="mr-3">
            <router-link :to="item.path">{{item.name}}</router-link>
          </li>

          <li>

            <label class="text-black">
              <select v-model="selectLanguage">
                <option value="0">
                  ru
                </option>
                <option value="1">en</option>
                <option value="2">uz</option>
              </select>
            </label>

            <span>Выбрано: {{selectLanguage}}</span>
          </li>
        </ul>

      </div>

    </nav>
    <router-view />
  </main>


</template>

<script setup>

import { ref } from 'vue'

const selectLanguage = ref(0)

const items = ref(
  [
    {
      name: 'О нас',
      path: 'home'

    },
    {
      name: 'Sertificats',
      path: 'Sertificats'

    },
    {
      name: 'Partner',
      path: 'Partner'

    },
    {
      name: 'Vacancy',
      path: 'Vacancy'

    }

  ]
)
</script>

<style>


</style>