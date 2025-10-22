<template>
<div>
<h1>Що таке Frutiger aero?</h1>
<p>Frutiger Aero — це візуальний стиль дизайну, який був популярним приблизно з 2003 по 2013 роки. Його можна вважати проміжним етапом між «глянцевою» естетикою початку 2000-х і мінімалістичним плоским дизайном, що домінував після 2013 року.

Назва походить від шрифту Frutiger, який часто використовувався у той час у корпоративних інтерфейсах і логотипах, та від слова “Aero” — частини назви операційної системи Windows Aero від Microsoft, яка втілювала основні принципи цього стилю.</p>
<h3>Цей напрям характеризується такими рисами:</h3>
<ul>
<li>Скляні поверхні, блиск і прозорість, що створюють відчуття глибини;</li>
<li>Яскраві, насичені кольори з відтінками синього, зеленого, бірюзового;</li>
<li>Природні мотиви — небо, вода, листя, світло, хмари;</li>
<li>Оптимістичний, футуристичний настрій, який символізував віру у технологічний прогрес та гармонію між людиною і цифровим світом.</li>
</ul>
<p>Frutiger Aero відображав уявлення про «світле майбутнє технологій» і став візуальним обличчям багатьох продуктів епохи — від Windows Vista і старих сайтів Microsoft до реклами Samsung, Sony, LG і навіть екологічних кампаній початку 2010-х.</p>
</div>
</template>

<script>
export default {
  name: "PageF1",
};
</script>
<style scoped>
div{
  display: grid;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: #070211ff;
  height: 100%;
  width: 35%;
  min-width: 200px;
  color: #fff;
  text-align: center;
  padding: 5px;
  margin: 0px;
  box-shadow: 0 10px 30px #fff;
}
h1{
  font-family: Tektur;
  font-size: 35px;
  animation: glow 1.5s ease-in-out;
}
h2, h3, li, p{
  font-family: Unbounded;
  font-size: 20px;
  animation: glow 1.5s ease-in-out;
}
@keyframes glow{
  from{
    text-shadow: 0;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 0px;
  }
}

</style>
