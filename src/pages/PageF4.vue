<template>
<div class="full"></div>
  <div class="MAIN">
    <h1>Мода епохи: стиль одягу 2000-х</h1>
    <p>
      На початку 2000-х мода стала яскравою і сміливою. Після нестачі якісного одягу в 90-х люди хотіли виглядати сучасно, блискуче та «як з телевізора». Поп-культура, зірки MTV та реклама брендів формували стиль пересічних людей.

Особливо популярним був гламур: блискітки, низька талія, короткі топи та масивні аксесуари. Денім став обов’язковим атрибутом — джинси носили майже всі, часто із потертостями чи декором.

Поширився також спортивно-повсякденний стиль: оксамитові костюми, яскраві кросівки, кепки. Одяг із великим логотипом вважався ознакою модності. На тлі розвитку технологій з’явився й футуристичний образ із блискучими тканинами та неоновими елементами. Молодь, натомість, часто обирала емо-стиль: темні кольори, кеди та асиметричний чубчик.
    </p>
    <h3>Для зручності можна виділити основні напрямки цієї моди:</h3>
    <ul>
      <li>гламур та поп-естетика</li>
      <li>спортивний street casual</li>
      <li>футуризм і блискучі матеріали</li>
      <li>емо та альтернативна мода</li>
      <li>культ джинсів</li>
    </ul>
    <p>Образи були гучними та емоційними — модою підкреслювали свою індивідуальність і віру в технологічне майбутнє. Саме цим стиль 2000-х приваблює нас і сьогодні: він асоціюється з максимальною свободою і життєрадісністю.</p>
    <nav>
    <router-link to="/page3">    ←Назад</router-link>
    <router-link to="/page5">    Далі→</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "PageF4",
};
</script>

<style scoped>
.full {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('@/assets/img/4s.jpg') center/cover no-repeat;
  z-index: 0;
  animation: appear 0.7s ease-in-out;
}
.MAIN {
  display: grid;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: #04020e6c;
  height: 100%;
  width: 43%;
  min-width: 300px;
  color: #fff;
  text-align: center;
  padding: 5px;
  margin: 0;
  box-shadow: 0 10px 30px #fff;
  animation: appear 3.5s ease-in-out;
  overflow-y: auto;
}

h1 {
  font-family: Tektur;
  font-size: 33px;
  position: relative;
  z-index: 9999;
  animation: glow1 2.3s ease forwards;
  white-space: nowrap;
}

h2, h3, li, p {
  font-family: Unbounded;
  font-size: 18px;
  animation-delay: 4s;
  animation: glow 4s ease-in-out;
}

nav{
  padding: 30px;
  margin: 30px;
  gap: 10px
}
nav :deep(a) {
  font-size: 20px;
  font-family: Unbounded;
  text-align: center;
  text-decoration: none;
  color: #74b1f7ff;
}


@keyframes appear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes glow {
  0% {
    text-shadow: none;
    opacity: 0;
  }
  50% {
    text-shadow: 0 0 5px #fff, 0 0 0px;
    opacity: 1;
  }
  100%{
    text-shadow: none;
  }
}


@keyframes glow1 {
  0% {
    transform: translateY(200px) scale(2);
    opacity: 0;
  }
  45% {
    transform: translateY(0) scale(1.2);
    opacity: 1;
    text-shadow: 0 0 8px #fff;
  }
  65% {
    transform: translateY(0) scale(1.2);
    opacity: 1;
    text-shadow: 0 0 12px #fff;
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
    text-shadow: none;
  }
}
</style>