<template>
    <section class="company">
        <div class="company__content">
            <div class="company__content-card card">
                <div class="card__title">
                    <span class="number">06</span>
                    <h2 class="title">О компании</h2>
                </div>
                <div class="card__text">
                    <p>Основными видами деятельности является выработка тепловой энергии на собственных котельных, передача и распределение тепловой энергии.</p>
                    <p>Предприятие создано для наиболее полного удовлетворения потребностей населения, организаций в услугах по получению тепловой энергии и горячего водоснабжения.</p>
                    <p>Компания осуществляет свою деятельность в соответствии с законодательством, действующим на территории Российской Федерации, актами органов местного самоуправления и Уставом общества.</p>
                </div>
                <div class="card__link">
                    <a href="" class="card__link-text">Читать полностью</a>
                    <a href="" class="card__link-arrow"><Arrow/></a>
                </div>
            </div>
            <div class="company__content-button">
                <button class="left__button"><Arrow/></button>
                <button class="right__button"><Arrow/></button>
            </div>
        </div>
    </section>
</template>

<script>
import Arrow from './SvgIcons/LeftArrowButton.vue'

export default {
  components: {
       Arrow
    },
};
</script>
<style lang="scss">
.company{
    background-size:cover;
    background-image: url('../images/building.jpg');
    display: flex;
    justify-content: center;
    padding: 72px 0px;
    &__content{
        position: relative;
        max-width: 1370px;
        width: 100%;
        &-card{
            display: flex;
            flex-direction: column;
            background: white;
            padding: 50px;
            max-width: 798px;
            height: 522px;
        }
        .card{
            &__title{
                padding: 0px 0px 20px 30px;
                display: flex;
                align-items: center;
                .number{
                    font-weight: bold;
                    font-size: 20px;
                    line-height: 30px;
                    color: #118BDD;
                    margin-right: 30px;
                }
                .title{
                    font-weight: bold;
                    font-size: 46px;
                    line-height: 69px;
                    color: #000000;
                }
            }
            &__text{
                margin-bottom: 20px;
                font-weight: normal;
                font-size: 18px;
                line-height: 32px;
                color: #434343;
                p:not(:last-child){
                    margin-bottom: 30px;
                }
            }
            &__link{
                &-text{
                    font-weight: 600;
                    font-size: 15px;
                    line-height: 27px;
                    color: #000000;
                    cursor: pointer;
                    text-decoration: none;
                    margin-right: 22px;
                }
                &-arrow{
                    svg{
                        fill: #000000;
                        width: 10px;
                        height: 10px;
                        transform: rotate(90deg);
                    }
                }
            }
        }
        &-button{
            position: absolute;
            bottom: -72px;
            right: -70px;
            .left__button{
                svg{
                    transform: rotate(180deg);
                }
            }
            button {
                background: #118BDD;
                border: none;
                padding: 11px 29px;
                cursor: pointer;
            }
            svg {
                fill: #FFFFFF;
                width: 14px;
                height: 14px;
            }
            button:hover{
                background: #32A1DF;
            }
        }
    }
}
</style>