<template>
  <section class="objects">
    <div class="wrap__title">
      <div class="wrap__title-text">
        <span class="section__number">04</span>
        <h2 class="section__title">Наши объекты</h2>
      </div>
    </div>
    <div class="objects__content">
      <div class="objects__content-numbers numbers">
        <div class="numbers__up">
          <span class="numbers__up-information">143</span>
          <Checked class="numbers__up-img" />
          <span class="numbers__up-description">Объекта построено</span>
        </div>
        <div class="numbers__down">
          <span class="numbers__down-information">24</span>
          <SandClock class="numbers__down-img" />
          <span class="numbers__down-description">Объекта в разработке</span>
        </div>
      </div>
      <ul class="objects__content-list list">
        <li class="list__item">
          <img src="./images/boilerRoom.jpg" alt="image" class="list__item-img"/>
          <div class="list__item-information information">
            <p class="information__title">Заголовок про кательную</p>
            <div class="information__location">
              <Point class="point" />
              <span class="text">Санкт-Петербург, ул.Уличная 22</span>
            </div>
            <div class="information__description">
              <span class="designation">Напряжение</span>
              <span class="designation">Срок разработки</span>
              <span class="indication">110 кВ</span>
              <span class="indication">25 дней</span>
            </div>
            <a href="#" class="information__link">
              <span class="information__link-left">Подробнее</span>
              <span class="information__link-right"><Arrow class="arrow"/></span>
            </a>
          </div>
        </li>
        <li class="list__item">
          <img src="./images/boilerRoom.jpg" alt="image" class="list__item-img"/>
          <div class="list__item-information information">
            <p class="information__title">Заголовок про кательную</p>
            <div class="information__location">
              <Point class="point" />
              <span class="text">Санкт-Петербург, ул.Уличная 22</span>
            </div>
            <div class="information__description">
              <span class="designation">Напряжение</span>
              <span class="designation">Срок разработки</span>
              <span class="indication">110 кВ</span>
              <span class="indication">25 дней</span>
            </div>
            <a href="#" class="information__link">
              <span class="information__link-left">Подробнее</span>
              <span class="information__link-right"><Arrow class="arrow"/></span>
            </a>
          </div>
        </li>
        <li class="list__item">
          <img src="./images/boilerRoom.jpg" alt="image" class="list__item-img"/>
          <div class="list__item-information information">
            <p class="information__title">Заголовок про кательную</p>
            <div class="information__location">
              <Point class="point" />
              <span class="text">Санкт-Петербург, ул.Уличная 22</span>
            </div>
            <div class="information__description">
              <span class="designation">Напряжение</span>
              <span class="designation">Срок разработки</span>
              <span class="indication">110 кВ</span>
              <span class="indication">25 дней</span>
            </div>
            <a href="#" class="information__link">
              <span class="information__link-left">Подробнее</span>
              <span class="information__link-right"><Arrow class="arrow"/></span>
            </a>
          </div>
        </li>
        <li class="list__item">
          <img src="./images/boilerRoom.jpg" alt="image" class="list__item-img"/>
          <div class="list__item-information information">
            <p class="information__title">Заголовок про кательную</p>
            <div class="information__location">
              <Point class="point" />
              <span class="text">Санкт-Петербург, ул.Уличная 22</span>
            </div>
            <div class="information__description">
              <span class="designation">Напряжение</span>
              <span class="designation">Срок разработки</span>
              <span class="indication">110 кВ</span>
              <span class="indication">25 дней</span>
            </div>
            <a href="#" class="information__link">
              <span class="information__link-left">Подробнее</span>
              <span class="information__link-right"><Arrow class="arrow"/></span>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import Checked from "./SvgIcons/Checked.vue";
import SandClock from "./SvgIcons/SandClock.vue";
import Point from "./SvgIcons/Point.vue";
import Arrow from "./SvgIcons/LeftArrowButton.vue";

export default {
  components: {
    Checked,
    SandClock,
    Point,
    Arrow
  },
};
</script>

<style lang="scss">
.objects {
  background: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  padding-top: 120px;
  .wrap__title {
    &-text {
      display: flex;
      align-items: center;
    }
  }
  &__content {
    display: flex;
    .numbers {
      margin-right: 60px;
      &__up {
        position: relative;
        display: flex;
        flex-direction: column;
        margin-bottom: 100px;
        &-img {
          position: absolute;
          z-index: -1;
          top: 0px;
          left: -8px;
        }
        &-information {
          font-weight: 800;
          font-size: 80px;
          line-height: 94px;
          text-transform: uppercase;
          color: #118bdd;
          z-index: 2;
        }
        &-description {
          font-weight: normal;
          font-size: 18px;
          line-height: 27px;
          color: #8b8b8b;
        }
      }
      &__down {
        position: relative;
        display: flex;
        flex-direction: column;
        &-img {
          position: absolute;
          z-index: -1;
          top: 0px;
          left: -12px;
        }
        &-information {
          font-weight: 800;
          font-size: 80px;
          line-height: 94px;
          text-transform: uppercase;
          color: #118bdd;
          z-index: 2;
        }
        &-description {
          font-weight: normal;
          font-size: 18px;
          line-height: 27px;
          color: #8b8b8b;
        }
      }
    }
    &-list {
      padding: 0px;
      list-style-type: none;
      display: flex;
      max-width: 860px;
      width: 100%;
      flex-wrap: wrap;
    }
    .list {
      &__item {
        &:nth-child(odd){
          margin: 0 20px 20px 0;
        }
        &:nth-child(even){
          margin-bottom: 20px;
        }
        box-shadow: 0px 10px 50px rgba(44, 59, 99, 0.15);
        display: flex;
        flex-direction: column;
        &-information{
          padding: 20px;
        }
        .information{
          &__title{
            font-weight: bold;
            font-size: 24px;
            line-height: 36px;
            color: #000000;
            margin-bottom: 6px;
          }
          &__location{
            display: flex;
            align-items: center;
            margin-bottom: 18px;
            .point{
              margin-right: 12px;
            }
            .text{
              font-weight: normal;
              font-size: 14px;
              line-height: 21px;
              color: #000000;
            }
          }
          &__description{
                display: flex;
                flex-wrap: wrap;
                max-width: 222px;
                margin-bottom: 20px;
            .designation{
              font-weight: normal;
              font-size: 14px;
              line-height: 17px;
              color: #8B8B8B;
              &:nth-child(1){
                margin: 0 30px 12px 0;
              }
            }
            .indication{
              font-weight: bold;
              font-size: 20px;
              line-height: 24px;
              color: #000000;
              &:nth-child(3){
                margin-right: 54px;
              }
            }
          }
          &__link{
            text-decoration: none;
            cursor: pointer;
            display: flex;
            &-left{
              &:hover{
                background: #32A1DF;
              }
              text-transform: uppercase;
              padding: 17px 36px 16px 20px;
              background: #118BDD;
              font-weight: bold;
              font-size: 14px;
              line-height: 21px;
              color: #FFFFFF
            }
            &-right{
              background: #32A1DF;
              padding: 16px 20px;
              svg{
                width: 10px;
                height: 8px;
                fill:#FFFFFF;
              }
            }
          }
        }
      }
    }
  }
}

</style>
