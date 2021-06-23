<template>
    <section class="news">
        <div class="wrap__title">
            <div class="wrap__title-text">
                <span class="section__number">05</span>
                <h2 class="section__title">Новости</h2>
            </div>
        </div>
        <div class="news__content">
            <a href="" class="news__content-link link">
                <div class="link__wrap">
                    <p class="link__wrap-title">
                         Монтаж котельных и монтаж котлов топления
                        </p>
                    <p class="link__wrap-text">
                        Монтаж котельных является основным направлением деятельности нашей
                        компании. Как правило, при монтаже котельных установок и монтаже
                        котлов устанавливаютсяне только сами котлы...
                    </p>
                </div>
                <span class="link__date">02.04.2021</span>
            </a>
            <a href="" class="news__content-link link">
                <div class="link__wrap">
                    <p class="link__wrap-title">
                        Проектирование, монтаж и сервисное обслуживание систем отопления и теплоснабжения
                    </p>
                    <p class="link__wrap-text">
                        Наша команда профессионалов эффективно решит задачи по проектированию инженерных систем отопления и теплоснабжения любого вида...
                    </p>
                </div>
                <span class="link__date">29.03.2021</span>
            </a>
            <a href="/news" class="news__content-more">
                <span class="text">все новости</span>
                <Arrow class="arrow"/>
            </a>
        </div>
    </section>
</template>

<script>
import Arrow from './SvgIcons/LeftArrowButton.vue'

export default {
  components: {Arrow},
};
</script>

<style lang="scss">
.news {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 120px;
    &__content {
            display: flex;
            height: 500px;
            a:hover {
                .link__wrap-title{
                    color: #118BDD;
                }
            }
        &-link {
            height: 100%;
            max-width: 680px;
            width: 100%;
            display: flex;
            align-items: flex-end;
            text-decoration: none;
            cursor: pointer;
            &:nth-child(1){
                background-image: url('../images/shield.jpg');
                margin-right: 20px;
            }
            &:nth-child(2){
                background-image: url('../images/Boiler.jpg');
            }
        }
        .link {
            &__wrap {
                padding: 30px;
                background: #FAFAFA;
                &-title {
                    font-weight: bold;
                    font-size: 22px;
                    line-height: 33px;
                    color: #000000;
                    margin-bottom: 20px;
                }
                &-text {
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 24px;
                    color: #434343;
                }
            }
            &__date{
                font-weight: bold;
                font-size: 16px;
                line-height: 24px;
                text-align: center;
                color: #FFFFFF;
                padding: 29px 50px 28px 50px;
                background: #118BDD;
            }
        }
        &-more{
            position: absolute;
            display: flex;
            text-decoration: none;
            align-items: center;
            right: 0;
            top: -76px;
            cursor: pointer;
            .text {
                font-weight: bold;
                font-size: 15px;
                line-height: 18px;
                letter-spacing: 0.1em;
                text-transform: uppercase;
                color: #000000;
                margin-right: 16px;
            }
            .arrow {
                fill: #000000;
                width: 12px;
                height: 12px;
            }
        }
    }
}
</style>
