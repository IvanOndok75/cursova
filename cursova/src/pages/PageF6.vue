<template>
  <div>
    <h1>Кінець епохи: перехід до мінімалізму</h1>
    <p>
      Frutiger Aero домінував у візуальній культурі майже десять років — від початку 2000-х до середини 2010-х. Ця естетика асоціювалася з технологічним оптимізмом: блискучі поверхні, скло, об’ємні кнопки й хвилясті лінії уособлювали «майбутнє, яке вже настало».
      Перші iPhone та інтерфейси iOS 1–6 не завершили цю еру — навпаки, вони стали її кульмінацією. Реалістичні іконки під метал чи шкіру, бічні відблиски, «скляні» кнопки — усе це було частиною того ж стилю, що панував у рекламі, вебдизайні, гаджетах і навіть у побутових інтер’єрах.

Справжній злам стався у 2012–2013 роках, разом із появою iPhone 5 та особливо iOS 7. Саме тоді Apple оголосила кінець ери обʼємності й реалістичних текстур. Світ миттєво підхопив тренд на flat-дизайн: чисті кольори, мінімум деталей, строга геометрія. Усе, що ще вчора вважалось сучасним, тепер виглядало «зайвим» і застарілим.

На це наклались і економічні зміни після кризи 2008 року. Світ відмовився від надмірного глянцю та дорогого вигляду. Прості речі стали символом практичності — і нового стилю життя.

Попри зміну трендів, епоха Frutiger Aero залишила по собі важливу спадщину. Вона навчила людей сприймати технології як щось емоційне, яскраве і дружнє. Сьогодні інтерес до цього стилю повертається, бо він нагадує нам часи віри в красиве і доброзичливе майбутнє.

Frutiger Aero зник з інтерфейсів — але повернувся в наших спогадах.
    </p>
    <nav>
    <router-link to="/page5">    ←Назад</router-link>
    <router-link to="/page6">    Далі→</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "PageF6",
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
  font-size: 30px;
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