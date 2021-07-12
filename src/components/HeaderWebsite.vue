<template>
  <header class="header" :style="{backgroundColor:backgroundColor}">
    <div class="header__content">
      <div class="header__content-logo" >
        <img src="../images/darkLogo.png" alt="" class="logo__dark" v-if="darkLogo">
        <Logo class="logo" v-else/>
      </div>
      <nav class="header__content-navigation navigation">
        <ul class="navigation__list">
          <li class="navigation__list-item" v-for="(item, index) in links" :key="index">
            <router-link v-bind:to="item.link" class="link" :style="{color:color}">{{item.text}}</router-link>
          </li>
          <!-- <li class="navigation__list-item"><router-link to="/news" class="link">Услуги</router-link></li>
                    <li class="navigation__list-item"><router-link to="/news" class="link">Раскрытие информации</router-link></li>
                    <li class="navigation__list-item"><router-link to="/news" class="link">Абонентам</router-link></li>
                    <li class="navigation__list-item"><router-link to="/news" class="link">Наши объекты</router-link></li>
                    <li class="navigation__list-item"><router-link to="/news" class="link">Новости</router-link></li>
                    <li class="navigation__list-item"><router-link to="/news" class="link">Контакты</router-link></li> -->
        </ul>
      </nav>
      <div class="header__content-contacts">
        <p class="number" :style="{color:color}">+7(123) 456-78-90</p>
        <p class="mail">yourmail@company.com</p>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from "./SvgIcons/LogoHeader.vue";


export default {
  components: {
    Logo,

  },
  props: {
    backgroundColor: {
      type:String,
      default: 'black'
    },
    color: {
      type:String,
      default: 'black'
    },
    darkLogo: {
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      links: [{ text: "О компании", link: "/" },
        { text: "Услуги", link: "/news" },
        { text: "Раскрытие информации", link: "/news" },
        { text: "Абонентам", link: "/news" },
        { text: "Наши объекты", link: "/news" },
        { text: "Новости", link: "/news" },
        { text: "Контакты", link: "/news" },]
    };
  },
};
</script>

<style lang="scss">
.header {
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 30px 10px 30px 10px;
  &__content {
    display: flex;
    align-items: center;
    max-width: 1363.39px;
    width: 100%;
    justify-content: space-between;
    &-navigation {
      max-width: 949.16px;
      width: 100%;
    }
    .navigation {
      &__list {
        display: flex;
        list-style-type: none;
        padding: 0;
        justify-content: space-between;
        &-item {
          .link {
            text-decoration: none;
            text-transform: uppercase;
            font-weight: bold;
            font-size: 12px;
            line-height: 14px;
            letter-spacing: 0.05em;
            cursor: pointer;
            color: #ffffff;
          }
          &:hover {
            a {
              color: #118bdd;
            }
          }
        }
      }
    }
    &-contacts {
      .number {
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #ffffff;
      }
      .mail {
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #8c94a6;
      }
    }
  }
}
</style>
