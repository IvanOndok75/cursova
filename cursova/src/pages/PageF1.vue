<template>
  <div>
    <h1>Що таке Frutiger aero?</h1>
    <p>
      Frutiger Aero — це візуальний стиль дизайну, який був популярним приблизно з 2003 по 2013 роки. Його можна вважати проміжним етапом між «глянцевою» естетикою початку 2000-х і мінімалістичним плоским дизайном, що домінував після 2013 року.
    </p>
    <h3>Цей напрям характеризується такими рисами:</h3>
    <ul>
      <li>Скляні поверхні, блиск і прозорість, що створюють відчуття глибини;</li>
      <li>Яскраві, насичені кольори з відтінками синього, зеленого, бірюзового;</li>
      <li>Природні мотиви — небо, вода, листя, світло, хмари;</li>
      <li>Оптимістичний, футуристичний настрій, який символізував віру у технологічний прогрес.</li>
    </ul>
    <p>Frutiger Aero відображав уявлення про «світле майбутнє технологій» і став візуальним обличчям багатьох продуктів епохи.</p>
    <nav>
    <router-link to="/page2">Далі-></router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "PageF1",
};
</script>

<style scoped>
div {
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
  font-size: 35px;
  position: relative;
  z-index: 9999;
  animation: glow1 2.3s ease forwards;
  white-space: nowrap;
}

h2, h3, li, p {
  font-family: Unbounded;
  font-size: 20px;
  animation-delay: 4s;
  animation: glow 4s ease-in-out;
}
nav{
  padding: 30px;
  margin: 30px;
}
nav:deep(a){
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
