<template>
  <div>
    <h1>Стиль ремонту епохи: Євроремонт 2000-х</h1>
    <p>
      Після економічної нестачі та «голоду на матеріали» у 1990-х суспільство переживало сильне прагнення до модернізації житла. Люди хотіли не просто ремонт — а символ нового життя, технологій і добробуту. Тому в інтер’єрах початку 2000-х з’являлося максимально багато різних елементів, щоб квартира виглядала сучасно, “європейською” та багатою.

Це стало відображенням тієї самої культури цифрового оптимізму, що й Frutiger Aero:
трохи футуризму + багато блиску + відчуття технологічного майбутнього.
    </p>
    <h2>Основні риси євроремонту 2000-х</h2>
    <h3>1.Багаторівневі стелі та стіни</h3>
    <ul>
      <li>гіпсокартонні конструкції у вигляді хвиль, ніш, арок</li>
      <li>створення складних об’ємних форм</li>
      <li>зонування простору “по-модному”</li>
    </ul>
    <h3>2.Точкове освітлення та підсвітка</h3>
    <ul>
      <li>десятки маленьких LED-лампочок у стелях</li>
      <li>неонові й сині світлодіодні лінії</li>
      <li>ефект «клубу вдома» — технологічність + вау-ефект</li>
    </ul>
    <h3>3.Глянець, пластик і скло</h3>
    <ul>
      <li>меблі з блискучими фасадами</li>
      <li>скляні полиці, столи, вставки у дверях</li>
      <li>хромовані деталі та металеві акценти</li>
    </ul>
    <h3>4.Контрастні та яскраві кольори</h3>
    <ul>
      <li>салатовий, синій, бірюзовий, червоний, помаранчевий</li>
      <li>обов’язково в комбінації з білим або сіро-металічним</li>
      <li>“сміливо і технологічно”</li>
    </ul>
    <h3>5.Максимум предметів і декору</h3>
    <ul>
      <li>телевізори, ніші для техніки, колонки, підсвічені полиці</li>
      <li>багато різних матеріалів в одному просторі</li>
      <li>ідея: все краще — відразу!</li>
    </ul>
    <p>Це був спосіб надолужити те, чого раніше не було</p>

    <nav>
    <router-link to="/page2">    ←Назад</router-link>
    <router-link to="/page4">    Далі→</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "PageF3",
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
  font-size: 25px;
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
  gap: 10px;
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