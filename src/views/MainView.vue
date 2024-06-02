<template>
  <main>
    <div style="background: #F8F9F9">
      <div class="bg-blue-400 main-height__blue relative">
        <div class="flex relative bg-blue-400 text-white justify-center">
          <p class="flex main-text__shadow text-5xl text-center">
            Инновации, кадры, креатив - <br />основы нашего успеха!
          </p>

          <img class="left-10 absolute" src="../assets/Icons/Line.svg" alt="" />
          <img class="left-80 top-20 absolute" src="../assets/Icons/Line.svg" alt="" />
          <img class="right-40 absolute" src="../assets/Icons/Line.svg" alt="" />
        </div>
        <div>
          <p class="flex bg-blue-400 justify-center text-center text-white m-4">
            Мы постараемся удовлетворить все ваши требования в финтех <br />
            и е-коммерс отраслях
          </p>
          <div class="flex flex-col items-center bg-blue-400 justify-center">
            <button onclick="btn" class="bg-white flex justify-center rounded-3xl p-3">
              <div class="mr-2">Cвязаться</div>
            </button>
            <div class="absolute left-42 top-60">
              <img src="../assets/m.png" alt="">

            </div>

          </div>
        </div>
        <!--        <img class="absolute main-img" src="../assets/Icons/card.svg" alt="" />-->
      </div>
    </div>
    <div style="background: #F8F9F9" class="flex flex-col justify-center items-center text-center">
      <h3 class="flex mt-56 justify-center items-center font-bold text-4xl">О нас</h3>


      <p class="mx-4 mt-7 text-sm " style="background: #F8F9F9">
        Компания Solutions Lab зарекомендовала себя как опытный ИТ-интегратор и надежный партнер в
        области финтех и электронной коммерции. <br />
        Предоставляя качественные услуги и решения мы способствуем развитию и укреплению экономики,
        государства в целом. Быть лучше, чем вчера и <br />
        развивать бизнес наших заказчиков — таков наш подход к работе. <br />
        Краеугольный камень в нашей стратегии это достойная оценка кадрового потенциала и постоянное
        совершенствование применяемых технологий.
      </p>
    </div>
    <div style="background: #F8F9F9" class="pt-28">
      <div >
        <h1 class="flex  justify-center items-center font-bold text-4xl">Проекты</h1>

        <!--          card start-->
        <div class="flex justify-center">
          <div class="flex m-10 items-center">
            <div>
              <img class="ml-10" src="../assets/Icons/paymart.png" alt="" />

              <p class="text-2xl font-bold mt-10 mr-9">Cистема рассрочки</p>
              <p class="flex mt-4">
                Онлайн-система, предоставляющая<br />
                своим пользователям возможность<br />
                приобретать товары и услуги на<br />
                условиях рассрочки.
              </p>

              <div class="rounded-full w-12 p-4 bg-slate-50 flex justify-start items-center">
                <img class="" src="../assets/Icons/arrow.svg" alt="">
              </div>
            </div>
            <img src="../assets/Icons/macbook.png" alt="" />

          </div>

          <div class="flex m-10 items-center">
            <div>
              <img class="ml-10" src="../assets/Icons/paymart.png" alt="" />

              <p class="text-2xl font-bold mt-10 mr-9">Cистема рассрочки</p>
              <p class="flex mt-4">
                Онлайн-система, предоставляющая<br />
                своим пользователям возможность<br />
                приобретать товары и услуги на<br />
                условиях рассрочки.
              </p>

              <div class="rounded-full w-12 p-4 bg-slate-50 flex justify-start items-center">
                <img class="" src="../assets/Icons/arrow.svg" alt="">
              </div>
            </div>
            <img src="../assets/Icons/macbook.png" alt="" />

          </div>
        </div>


      </div>
    </div>
  </main>
</template>
<script setup></script>

<style>
  .main-text__shadow {
    text-shadow: 2px 2px rgba(0, 0, 0, 1);
  }

  .main-height__blue {
    height: 90vh;
  }

  .main-img {
    left: 50%;
    top: 88%;

    transform: translate(-50%, -50%);
  }
</style>