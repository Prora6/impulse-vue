<template>
    <section class="banner">
        <div class="banner__content">
            <h1 class="banner__content-title">ООО "Пром Импульс" Теплоснабжающая компания</h1>
            <p class="banner__content-description">Полный комплекс работ: от проектирования до сдачи объекта в эксплуатацию</p>
            <ul class="banner__content-list list">
                <li class="list__item">
                    <div class="list__item-icon">
                        <Reward/>
                    </div>
                    <div class="list__item-wrap information">
                        <p class="information__title">Профессионализм</p>
                        <p class="information__text">Разнообразный и богатый опыт дальнейшее развитие различных форм деятельности</p>
                    </div>
                </li>
                <li class="list__item">
                    <div class="list__item-icon">
                        <Paper/>
                    </div>
                    <div class="list__item-wrap information">
                        <p class="information__title">Прозрачность</p>
                        <p class="information__text">Разнообразный и богатый опыт дальнейшее развитие</p>
                    </div>
                </li>
                <li class="list__item">
                    <div class="list__item-icon">
                        <Lightbulb class="Lightbulb"/>
                    </div>
                    <div class="list__item-wrap information">
                        <p class="information__title">Инновации</p>
                        <p class="information__text">Разнообразный и богатый опыт дальнейшее развитие</p>
                    </div>
                </li>
                <li class="list__item">
                    <div class="list__item-icon">
                        <GraphBanner/>
                    </div>
                    <div class="list__item-wrap information">
                        <p class="information__title">Стремление быть лучшими</p>
                        <p class="information__text">Разнообразный и богатый опыт дальнейшее развитие</p>
                    </div>
                </li>
            </ul>
            <nav class="banner__content-navigation navigation">
                <ul class="navigation__list">
                    <li class="navigation__list-item">
                        <span class="text">
                            Главная
                        </span>
                        <span class="number">01</span>
                    </li>
                    <li class="navigation__list-item">
                        <span class="text">
                            Деятельность
                        </span>
                        <span class="number">02</span>
                    </li>
                    <li class="navigation__list-item">
                        <span class="text">
                            Партнеры
                        </span>
                        <span class="number">03</span>
                    </li>
                    <li class="navigation__list-item">
                        <span class="text">
                            Объекты
                        </span>
                        <span class="number">04</span>
                    </li>
                    <li class="navigation__list-item">
                        <span class="text">
                            Новости
                        </span>
                        <span class="number">05</span>
                    </li>
                    <li class="navigation__list-item">
                        <span class="text">
                            О компании
                        </span>
                        <span class="number">06</span>
                    </li>
                </ul>
            </nav>
        </div>
    </section>
</template>

<script>
import Reward from './SvgIcons/RewardBanner.vue'
import Paper from './SvgIcons/PaperWebsite.vue'
import Lightbulb from './SvgIcons/Lightbulb.vue'
import GraphBanner from './SvgIcons/GraphBanner.vue'

export default {
  components :{
    Reward,
    Paper,
    Lightbulb,
    GraphBanner
  }
}
</script>

<style lang="scss">
.banner {
    background-image: url('../images/banner.jpg');
    background-size: cover;
    display: flex;
    justify-content: center;
    height: 850px;
    margin-bottom: 120px;
    &__content {
        max-width: 1370px;
        width: 100%;
        padding-top: 272px;
        &-title {
            font-weight: 800;
            font-size: 54px;
            line-height: 81px;
            color: #FFFFFF;
            width: 910px;
        }
        &-description {
            font-weight: normal;
            font-size: 26px;
            line-height: 39px;
            color: #CFCFCF;
            width: 570px;
            padding-bottom: 222px;
        }
        .list {
            padding: 0;
            list-style-type: none;
            display: flex;
            &__item {
                display: flex;
                &:not(:last-child) {
                    margin-right: 20px;
            }
                &:nth-child(3) {
                    .list__item-icon {
                        margin-right: 16px;
                    }
                }
                &-icon{
                    margin-right: 10px;
                }
                .information {
                    width: 292px;
                    &__title {
                        font-weight: bold;
                        font-size: 16px;
                        line-height: 24px;
                        color: #FFFFFF;
                        margin-bottom: 4px;
                    }
                    &__text{
                        font-weight: normal;
                        font-size: 14px;
                        line-height: 21px;
                        color: #C9C9C9;
                    }
                }
            }
        }
        .navigation {
            position: absolute;
            top: 330px;
            right: 58px;
            &__list{
                flex-direction: column;
                padding: 0;
                &-item{
                    display: flex;
                    align-items: center;
                    .text {
                        width: 98px;
                        height: 25px;
                        padding: 3px 24px;
                        background-image: url('../images/arrow.png');
                        background-size: cover;
                        font-weight: 500;
                        font-size: 12px;
                        line-height: 18px;
                        color: #FFFFFF;
                        margin: 0px 6px;
                        opacity: 0;
                    }
                    .number {
                        font-weight: bold;
                        font-size: 18px;
                        line-height: 18px;
                        text-align: center;
                        color: #7B7B7B;
                        margin: 10px 0;
                    }
                    &:nth-child(2){
                        .text{
                            padding: 3px 10px;
                        }
                    }
                    &:nth-child(3){
                        .text{
                            padding: 3px 21px;
                        }
                    }
                    &:nth-child(6){
                        .text{
                            padding: 3px 15px;
                        }
                    }
                }
                li:hover {
                    cursor: pointer;
                    .text{
                        opacity: 1;
                    }
                    .number {
                        color: #118BDD;

                    }
                }
            }
        }
    }
}
</style>


