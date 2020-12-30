<template >
    <article>
         <div class="container" :class="{'registro-activo' : reg}">
             <div class="overlay-container">
                 <div class="overlay">
                     <div class="overlay-left">
                         <h2> Bienvenido de Vuelta !</h2>
                         <button class="switch" id="enter" @click="reg = !reg"> Entrar </button>
                     </div>
                    <div class="overlay-right">
                        <h2>Registrate !</h2>
                        <p>Ingresa tus datos personales para crear tu cuenta</p>
                        <button class="switch" id="register" @click="reg = !reg"> Registrarse </button>
                    </div>
                 </div>
             </div>
             <form class="registro" action="#">
               <h2> Crea tu Cuenta!</h2>
               <input type="text" placeholder="Nombre">
               <input type="email" placeholder="Correo Electronico">
               <input type="password" placeholder="Contraseña">
               <button>Crear Cuenta</button>
             </form>
             <form class="entrar" action="#">
                <h2>Inicia Sesion</h2>
                <input type="email" placeholder="Correo Electronico">
                <input type="password" placeholder="Contraseña">
                <a href="#"> Olvidaste tu Contraseña? </a>
                <button>Entrar</button>
             </form>
         </div>
    </article>
    
</template>

<script>
export default {
  data: ()=>{
    return{
      reg: false
    }
  }
}
</script>

<style lang="scss" scoped>

  .container {
    position: relative;
    width: 768px;
    height: 480px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 15px 30px rgba(0, 0, 0, .2),
                0 10px 10px rgba(0, 0, 0, .2);
    background: linear-gradient(to bottom, #efefef, #ccc);
    .overlay-container {
      position: absolute;
      top: 0;
      left: 50%;
      width: 50%;
      height: 100%;
      overflow: hidden;
      transition: transform .5s ease-in-out;
      z-index: 100;
    }
    .overlay {
      position: relative;
      left: -100%;
      height: 100%;
      width: 200%;
      background: linear-gradient(to bottom right,  #BE86E7, #901CE5);
      color: #fff;
      transform: translateX(0);
      transition: transform .5s ease-in-out;
    }

    @mixin overlays($property) {
      position: absolute;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;
      padding: 70px 40px;
      width: calc(50% - 80px);
      height: calc(100% - 140px);
      text-align: center;
      transform: translateX($property);
      transition: transform .5s ease-in-out;
    }
    .overlay-left {
      @include overlays(-20%);
    }
    .overlay-right {
      @include overlays(0);
      right: 0;
    }
  }

  h2{
    margin: 0;
  }

  p{
    margin: 20px 0 30px;
  }

  a {
    font-size: 1rem;
    color: black;
  }

  button {
    border-radius: 20px;
    border: 1px solid  #901CE5;
    background-color:  #901CE5;
    color: #ffffff;
    font-size: 1rem;
    font-weight: bold;
    padding: 10px 40px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform .1s ease-in-out;

    &:active{
      transform: scale(.9);
    }

    &:focus{
      outline: none;

    }
  }

  button.switch {
    background-color: transparent;
    border-color: #ffffff;
  }

  form {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 90px 60px;
    width: calc(50% - 120px);
    height: calc(100% - 180px);
    text-align: center;
    background: linear-gradient(to bottom, #efef , #ccc);
    transition: all .5s ease-in-out;

    div {
      font-size: 1rem;
    }

    input{
      background-color: #eee;
      border: none;
      padding: 8px 15px;
      margin: 6px 0;
      width: calc(100% - 30px);
      border-radius: 15px;
      border-bottom: 1px solid #dddddd;
      box-shadow: inset 0 1px 2px rgba(0 , 0 , 0 ,.4), 0 -1px 1px #fff , 0 , 1px , 0 #ffffff;
      overflow: hidden;

      &:focus{
        outline: none;
        background-color: #ffffff;
      }
    }
      
  }

  .entrar{
    left: 0;
    z-index: 2;
  }

  .registro {
    left: 0;
    z-index: 1;
    opacity: 0;
  }

  .registro-activo {
    
    .entrar{
      transform: translateX(100%);
    }

    .registro {
      transform: translateX(100%);
      opacity: 1;
      z-index: 5;
      animation: show .5s;
    } 

    .overlay-container{
      transform: translateX(-100%);
    }
    .overlay {
      transform: translateX(50%);
    }

    .overlay-left {
      transform: translateX(0);
    } 

    .overlay-right {
      transform: translateX(20%);
    } 

  }

  @keyframes show {
    0% {
      opacity: 0;
      z-index: 1;
    }

    49% {
      opacity: 0;
      z-index: 1;

    }

    50% {
      opacity: 1;
      z-index: 10;
    }

  }

</style>