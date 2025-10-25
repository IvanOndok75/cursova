<template>
<div class="full"></div>
  <div class="MAIN">
    <h1>Як з’явився стиль Frutiger Aero?</h1>
    <p>
      Поява стилю Frutiger Aero нерозривно пов’язана з еволюцією цифрових технологій на початку 2000-х років, коли інтернет, мобільні пристрої та комп’ютери ставали доступними для широкої групи користувачів. Людство вступило в епоху швидкого технологічного прогресу, і дизайнери прагнули візуально підкреслити цю трансформацію.
    </p>
    <h3>Естетика Frutiger Aero виникла як відповідь на потребу зробити інтерфейси:</h3>
    <ul>
      <li>більш сучасними,</li>
      <li>дружніми до користувача,</li>
      <li>емоційно привабливими.</li>
    </ul>
    <p>У цей час технологічні бренди активно просували ідею “цифрового майбутнього”, у якому технології допомагають людям жити легше, чистіше й екологічніше. Звідси з’явилися:</p>
    <ul>
      <li>мотиви води, неба, світла;</li>
      <li>асоціації з екологією і турботою про природу;</li>
      <li>яскраві кольори, глянець і «скляні» поверхні.</li>
    </ul>
    <h2>Впливові джерела та технології</h2>
    <h3>Frutiger Aero сформувався під впливом:</h3>
    <ul>
      <li>розвитку графічних інтерфейсів у Windows XP, Vista та 7;</li>
      <li>гладкого, блискучого вебдизайну ранніх 2000-х;</li>
      <li>стильових трендів з реклами Samsung, Sony, LG;</li>
      <li>появи HD-дисплеїв та 3D-ефектів.</li>
    </ul>
    <p>Поєднання легкого технологічного настрою та природних елементів символізувало гармонію між людиною і цифровим світом — ідеальне бачення майбутнього, яким його уявляли 15–20 років тому.</p>

    <nav>
    <router-link to="/page1">    ←Назад</router-link>
    <router-link to="/page3">    Далі→</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "PageF2",
};
</script>

<style scoped>
.full {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('@/assets/img/2s.jpg') center/cover no-repeat;
  z-index: 0;
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