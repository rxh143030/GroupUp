<template>
  <div id="app">
    <div class="navigation">
      
      <button><i class="fas fa-user-circle"></i></button>
      <router-link to="/">
        <button >
          <i  class="far fa-map"></i>
        </button>
      </router-link> 
      <router-link to="/calendar">
        <button><i class="far fa-calendar-alt"></i></button>
      </router-link>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  data: function(){
    return{
    }
  }
}
</script>


<style lang="scss">
  $font-amatic: 'Amatic SC', cursive;
  $font-open: 'Open Sans', sans-serif;

  $blue-grey: #333333;

  html, body, #app, .content{
    height: 100%;
    width: 100%;
    margin: 0;
  }

  body{
    color:$blue-grey;
  }

  h3{
    color: $blue-grey;
    font-family: $font-amatic;
    font-size: 30px;
  }

  p{
    color: $blue-grey;
    font-family: $font-open;
  }

  .navigation{

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 50px;
    position: absolute;
    height: 100%;
    border-right: 1px solid #D6D9DC;

    z-index: 10;
  
    button{
      padding: 10px 0;
      margin: 3px 0;
      border: none;
      outline:none;
      cursor: pointer;
      
    }

    button:first-of-type{
      margin-top: 24px;
    }

    i{
      display: block;
      color:$blue-grey;
      font-size: 24px;
    }

    a, button{
      width: 100%;
    }
  }

  



</style>
