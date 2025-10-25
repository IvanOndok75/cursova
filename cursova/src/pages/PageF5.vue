<template>
<div class="full"></div>
  <div class="MAIN">
    <h1>Музика епохи Frutiger Aero</h1>
    <p>
      Музика 2000-х відображала дух часу: яскравий, емоційний і технологічний. Це був період, коли телебачення й радіо ще визначали смаки, а MTV і музичні журнали формували цілі покоління. Люди шукали нове звучання — щось сучасне, блискуче, як сам дизайн епохи.

Головними напрямами стали поп, R&B, електроніка та альтернативний рок. Поп-зірки створювали гламурні образи, а їх кліпи ставали еталоном стилю. R&B і хіп-хоп додавали музиці ритму, руху й впевненості, тоді як електроніка й техно передавали віру в цифрове майбутнє.

Серед найвідоміших виконавців того часу — Britney Spears, Christina Aguilera, Justin Timberlake, Rihanna, Eminem, 50 Cent, Linkin Park, Green Day, Daft Punk. Їхні пісні звучали звідусіль: на дискотеках, у кліпах, на перших mp3-плеєрах і кнопкових телефонах.

У цей час активно розвивався мейнстрим-поп — яскравий, танцювальний, з елементами гламурного шоу. Поряд із ним зростала популярність рок-та альтернативної сцени: молодь слухала Sum 41, Evanescence, Muse. Музика стала частиною самоідентичності, а плейлисти відображали настрій і стиль життя.

Культурна атмосфера Frutiger Aero в музиці — це поєднання технологічності й романтики. Звучання стало чистішим, більш «глянцевим», з електронними ефектами, автотюном і синтетичними мелодіями. Пісні тих часів і зараз викликають ностальгію, бо нагадують про епоху, коли все здавалося новим і нескінченно можливим.
    </p>
    <nav>
    <router-link to="/page4">    ←Назад</router-link>
    <router-link to="/page6">    Далі→</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "PageF5",
};
</script>

<style scoped>
.full {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('@/assets/img/5ss.jpg') center/cover no-repeat;
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