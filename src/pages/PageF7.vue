<template>
<div class="full"></div>
  <div class="MAIN">
    <h1>Висновок</h1>
    <p>
      Frutiger Aero — це не просто яскравий дизайн початку 2000-х, а ціла естетична епоха, яка відображала віру людей у технологічний прогрес і краще майбутнє. Вона формувала вигляд інтерфейсів, реклами, гаджетів, інтер’єрів та навіть музичної культури свого часу.
Стиль приніс світлу емоцію модерновості: динаміку, оптимізм і мрію про «красиве завтра».
    </p>
    <h3>Ця естетика не є єдиною та цілісною — вона складається із безлічі підстилів, серед яких:</h3>
    <ul>
      <li>Frutiger Eco — акцент на природі, трава, листя, вода, екологічність</li>
      <li>Frutiger Metro — міські ритми, транспорт, бетон + сині неонові відтінки</li>
      <li>Frutiger Aqua — скляні та «вологі» кнопки, глянець, бульбашки</li>
      <li>Dorfik — локальні «домашні», прості, трохи наївні 2000-ні інтерфейси</li>
      <li>Dark Aero — та сама естетика, але в темних футуристичних кольорах</li>
      <li>І багато інших дрібних мікростилів, що з’являлися в різних сферах дизайну</li>
    </ul>
    <p>З падінням популярності глянцевих інтерфейсів після появи iPhone 5 епоха перейшла у мінімалізм. Але сьогодні інтерес до Frutiger Aero повертається — він асоціюється з ностальгією, технологічним оптимізмом і яскравими мріями 2000-х.</p>
    <nav>
    <router-link to="/page6">←Назад</router-link>
    </nav>
    <section>
    <h2>Зв'яжіться з нами</h2>
    <p>Gmail: uwutoxik@gmail.com</p>
    <p>Телефон: +380 123 4567</p>
    <p>Telegram: @uwucat3</p>
    </section>
    <h4>&copy; 2025 Retro fans. Всі права захищено</h4>
  </div>

</template>

<script>
export default {
  name: "PageF7",
};
</script>

<style scoped>
.full {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('@/assets/img/7s.jpg') center/cover no-repeat;
  z-index: 0;
  animation: appear 0.7s ease-in-out;
}

.MAIN{
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
  padding: 0px;
  margin: 0px;
  box-shadow: 0 10px 30px #fff;
  animation: appear 3.5s ease-in-out;
  overflow-y: auto;
}
section{
    background-color: #71f7a417;
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
h4{
    bottom: 0;
    background-color: #7298eb71;
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-family: Unbounded;
    padding: 0px;
    margin: 0px;
    width: 100%;
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