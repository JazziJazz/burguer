<template>
  <!-- Component -->
  <div v-if="$auth.loggedIn" class="navbar-component">
    <!-- Class `area` is a container -->
    <div class="navbar area">
      <!-- Logo -->
      <NuxtLink to="/" class="brand">
        <img src="@/assets/images/logo.png" alt="" srcset="">
      </NuxtLink>

      <!-- List of links -->
      <nav role="navigation" id="navigation" class="list">
        <NuxtLink to="/" class="item -link">Home</NuxtLink>
        <NuxtLink to="/products" class="item -link">Cardápio</NuxtLink>
        <NuxtLink to="/" class="item -link">Carrinho</NuxtLink>
        <NuxtLink to="/" class="item -link">Sobre</NuxtLink>
        <NuxtLink to="/" class="item -link" v-on:click="$auth.logout()">Logout</NuxtLink>
        <span class="item"><i class="fa fa-search"></i></span>
      </nav>
      <!-- Button to toggle the display menu  -->
      <button data-collapse data-target="#navigation" class="toggle">
        <!-- Hamburger icon -->
        <span class="icon"></span>
      </button>
    </div>
  </div>

  <div v-else class="navbar-component">
    <div class="navbar area">
      <NuxtLink to="/" class="brand">
        <img src="@/assets/images/logo.png" alt="" srcset="">
      </NuxtLink>

      <nav role="navigation" id="navigation" class="list">
        <NuxtLink to="/" class="item -link">Home</NuxtLink>
        <NuxtLink to="/products" class="item -link">Cardápio</NuxtLink>
        <NuxtLink to="/" class="item -link">Sobre</NuxtLink>
        <NuxtLink to="register" class="item -link">Registre-se</NuxtLink>
        <NuxtLink to="login" class="item -link">Login</NuxtLink>
        <span class="item"><i class="fa fa-search"></i></span>
      </nav>

      <button data-collapse data-target="#navigation" class="toggle">
        <span class="icon"></span>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// Importações
@use "sass:math";

// Escalonando
*,
*:before,
*:after {
  box-sizing: border-box;
}
body {
  background-color: #f5f5f5;
  color: #333;
  font-size: 14px;
  font-family: Verdana, Arial, sans-serif;
  line-height: 20px;
}
a {
  text-decoration: none;
  transition: all 0.3s linear 0s;
}

.area {
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 0;
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1140px;
  }
}

// Componente de navegação
// ----------

// Variaveis
$navbar-height: 64px;
$navbar-background: #fff;
$navbar-border: #ddd;

$navbar-collapse-breakpoint: 768px;

$navbar-item-font-size: 14px;
$navbar-item-border-width: 4px;
$navbar-item-color: #555;
$navbar-item-active-color: #333;
$navbar-item-border: transparent;
$navbar-item-active-border: #673ab7;

// Esqueleto do componente.
.navbar-component {
  background-color: $navbar-background;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 10px rgba(0, 0, 0, 0.12);

  & > .navbar {
    justify-content: space-between;
  }
}
// Componente.
.navbar {
  & > .brand {
    display: block;
    font-size: 16px;
    color: #777;
    margin: math.div($navbar-height - 20, 2);
  }

  & > .brand > img {
    position: absolute;
    width: auto;
    height: 60px;
    transform: translate(-50%, -40%);
  }

  & > .toggle {
    border: 0;
    background-color: transparent;
    outline: none;
    border: 0;
    display: inline-block;
    background-color: transparent;
    background-image: none;
    vertical-align: middle;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    touch-action: manipulation;
    user-select: none;
    padding: math.div($navbar-height - 20, 2);

    @media (min-width: $navbar-collapse-breakpoint) {
      display: none;
    }
  }

  & > .toggle > .icon {
    position: relative;
    margin-top: 8px;
    margin-bottom: 8px;

    &,
    &:before,
    &:after {
      display: block;
      width: 24px;
      height: 3px;
      transition: background-color 0.3s linear, transform 0.3s linear;
      background-color: #555555;
    }

    &:before,
    &:after {
      position: absolute;
      content: "";
    }
    &:before {
      top: -8px;
    }
    &:after {
      top: 8px;
    }
  }

  & > .toggle.-active > .icon {
    background-color: transparent;

    &:before {
      transform: translateY(8px) rotate(45deg);
    }
    &:after {
      transform: translateY(-8px) rotate(-45deg);
    }
  }

  // Lista dos items
  & > .list {
    display: none;
    flex-flow: row nowrap;
    align-items: center;
    white-space: nowrap;

    @media (min-width: $navbar-collapse-breakpoint) {
      display: flex;
    }

    @media (max-width: $navbar-collapse-breakpoint) {
      position: fixed;
      top: $navbar-height;
      left: 0;
      width: 100%;
      overflow-y: hidden;
      overflow-x: auto;
      border-top: 1px solid $navbar-border;
      background-color: $navbar-background;
    }

    &.-on {
      display: flex;
    }
  }

  & > .list > .item {
    display: block;
    flex-shrink: 0;
    height: $navbar-height;
    line-height: $navbar-height;
    padding-left: math.div($navbar-height - 20, 2);
    padding-right: math.div($navbar-height - 20, 2);
    padding-bottom: 0;
    text-transform: uppercase;
    color: $navbar-item-color;
    font-size: $navbar-item-font-size;
  }

  & > .list > .item.-link {
    line-height: $navbar-height + $navbar-item-border-width;
    color: $navbar-item-color;
    border-bottom: $navbar-item-border-width solid $navbar-item-border;

    &.-active,
    &:hover,
    &:focus {
      color: $navbar-item-active-color;
      border-bottom-color: $navbar-item-active-border;
    }
  }
}
</style>
