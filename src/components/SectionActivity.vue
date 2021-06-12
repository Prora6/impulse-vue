<template>
  <section class="activity">
    <div class="wrap__title">
      <span class="section__number">02</span>
      <h2 class="section__title">Направления деятельности</h2>
    </div>
    <div class="activity__content">
      <a href="#" class="card">
        <span class="card__text">Строительно-монтажные работы</span>
        <span class="card__arrow"><WhiteArrow /></span>
      </a>
      <a href="#" class="card">
        <span class="card__text">Проектирование объектов теплоэнергетики</span>
        <span class="card__arrow"><WhiteArrow /></span>
      </a>
      <a href="#" class="card">
        <span class="card__text">Техническое обслуживание объектов теплоэнергетики</span>
        <span class="card__arrow"><WhiteArrow /></span>
      </a>
    </div>
  </section>
</template>

<script>
import WhiteArrow from "./SvgIcons/WhiteArrow.vue";

export default {
  components: {
    WhiteArrow,
  },
};
</script>

<style lang="scss">
.activity {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 120px;
  &__content {
    max-width: 1900px;
    flex-direction: row;
    width: 100%;
    padding: 0px 10px;
    justify-content: center;
    display: flex;
    height: 500px;
    a:hover {
      cursor: pointer;
      .card__text:hover {
        background: #32a1df;
      }
    }
    .card {
      &:not(:last-child) {
        margin-right: 20px;
      }
      &:nth-child(1) {
        background-image: url("./images/factory.png");
      }
      &:nth-child(2) {
        background-image: url("./images/scheme.png");
      }
      &:nth-child(3) {
        background-image: url("./images/engineer.png");
      }
      height: 100%;
      max-width: 620px;
      width: 100%;
      display: flex;
      align-items: flex-end;
      text-decoration: none;
      &__text {
        font-weight: 500;
        font-size: 18px;
        line-height: 150%;
        color: #ffffff;
        width: 100%;
        padding: 27px 0px 26px 30px;
        background: #118bdd;
      }
      &__arrow {
        padding: 30px 34px 28px;
        background: #118bdd;
      }
    }
  }
}
</style>

max-width: 1900px; width: 100%; display: flex; flex-direction: row;
