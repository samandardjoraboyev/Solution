<template>
  <main>
    <div>
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
          <div class="flex bg-blue-400 justify-center">
            <button onclick="btn" class="bg-white flex justify-center rounded-3xl p-3">
              <div class="mr-2">Cвязаться</div>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="14" cy="14" r="14" fill="#6DB8FF" />
                <path
                  d="M15.5914 7.81663C18.128 7.81663 20.184 9.87263 20.184 12.4093M15.5914 10.1766C16.824 10.1766 17.824 11.176 17.824 12.4093M12.404 15.5766C13.004 16.152 13.7074 16.62 14.4847 16.952L14.8307 17.0993L15.894 16.0193C16.158 15.7513 16.54 15.6353 16.9087 15.7126L19.4847 16.252C19.9207 16.3446 20.232 16.7293 20.232 17.1746V19.0293C20.232 19.6926 19.6947 20.23 19.0314 20.23H18.4614C15.8387 20.23 13.2507 19.3613 11.2934 17.616C11.132 17.4726 10.9754 17.324 10.8227 17.172L10.8474 17.1966C10.6947 17.044 10.5467 16.8873 10.4034 16.726C8.65736 14.7693 7.7887 12.1813 7.7887 9.55863V8.98863C7.7887 8.3253 8.32603 7.78796 8.98936 7.78796H10.844C11.2894 7.78796 11.674 8.0993 11.7667 8.5353L12.3067 11.1113C12.3834 11.4793 12.268 11.862 12 12.126L10.92 13.1893L11.0674 13.5353C11.3994 14.312 11.828 14.9766 12.404 15.5766Z"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <img class="absolute main-img" src="../assets/Icons/card.svg" alt="" />
      </div>
    </div>
    <div class="flex flex-col justify-center items-center text-center">
      <h3 class="flex mt-56 justify-center items-center font-bold text-4xl">О нас</h3>

      <p class="mx-4 mt-7 text-sm">
        Компания Solutions Lab зарекомендовала себя как опытный ИТ-интегратор и надежный партнер в
        области финтех и электронной коммерции. <br />
        Предоставляя качественные услуги и решения мы способствуем развитию и укреплению экономики,
        государства в целом. Быть лучше, чем вчера и <br />
        развивать бизнес наших заказчиков — таков наш подход к работе. <br />
        Краеугольный камень в нашей стратегии это достойная оценка кадрового потенциала и постоянное
        совершенствование применяемых технологий.
      </p>
    </div>
    <div>
      <div class="">
        <h1 class="flex mt-28 justify-center items-center font-bold text-4xl">Проекты</h1>

        <!--          card start-->
        <div class="flex m-10">
          <div>
            <img class="flex ml-10" src="../assets/Icons/paymart.png" alt="" />
            <p class="text-2xl font-bold mt-10 mr-9">Cистема рассрочки</p>
            <p class="flex mt-4">
              Онлайн-система, предоставляющая<br />
              своим пользователям возможность<br />
              приобретать товары и услуги на<br />
              условиях рассрочки.
            </p>
          </div>
          <div>
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
    height: 100vh;
  }

  .main-img {
    left: 50%;
    top: 88%;

    transform: translate(-50%, -50%);
  }
</style>