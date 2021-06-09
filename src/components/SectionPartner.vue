<template>
  <section class="partner">
    <div class="wrap__title">
      <div class="wrap__title-text">
        <span class="section__number">03</span>
        <h2 class="section__title">Партнеры</h2>
      </div>
      <div class="button__wrap">
        <button class="left__button"><Arrow /></button>
        <button class="right__button"><Arrow /></button>
      </div>
    </div>
    <ul class="partner__list">
        <li class="partner__list-item">
            <img src="./images/skolkovo.png" alt="picture">
        </li>
        <li class="partner__list-item">
            <img src="./images/yandex.png" alt="picture">
        </li>
        <li class="partner__list-item">
            <img src="./images/rosneft.png" alt="picture">
        </li>
        <li class="partner__list-item">
            <img src="./images/gazprom.png" alt="picture">
        </li>
        <li class="partner__list-item">
            <img src="./images/lukoil.png" alt="picture">
        </li>
    </ul>
  </section>
</template>

<script>
import Arrow from "./SvgIcons/LeftArrowButton.vue";


export default {
    components: {
        Arrow
    }
}
</script>

<style lang="scss">
.partner {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 120px;
  .wrap__title {
    justify-content: space-between;
    &-text {
      display: flex;
      align-items: center;
    }
    .button__wrap {
      .left__button {
        svg {
          transform: rotate(180deg);
        }
      }
      .right__button {
      }
      button {
        &:hover {
          background: #118bdd;
          svg {
            fill: white;
          }
        }
        svg {
          fill: #dbdbdb;
          width: 14px;
          height: 14px;
        }
        background: transparent;
        border: 1px solid #dbdbdb;
        padding: 11px 29px;
      }
    }
  }

  &__list{
      display: flex;
      padding: 0;
      list-style-type: none;
      &-item{
        background: #FAFAFA;
        justify-content: center;
        align-items: center;
        display: flex;
        width: 218px;
        height: 120px;

      }
  }
}
</style>
