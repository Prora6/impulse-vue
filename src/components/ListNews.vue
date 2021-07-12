<template>
    <ul class="news__page-list list">
        <li class="list__item" v-for="(item, index) in news" :key="index">
            <a class="list__item-description" v-bind:to="item.link">
                <h3 class="title">{{item.title}}</h3>
                <p class="text">{{item.text}}</p>
            </a>
            <span class="data">{{item.date}}</span>
        </li>
        <!-- <li class="list__item">
            <a href="" class="list__item-description">
                <h3 class="title">Проектирование, монтаж и сервисное обслуживание систем отопления и теплоснабжения</h3>
                <p class="text">Наша команда профессионалов эффективно решит задачи по проектированию инженерных систем отопления и теплоснабжения любого вида сложности. Мы занимаемся монтажом систем отопления, а также сервисным обслуживанием…</p>
            </a>
            <span class="data">02.04.2021</span>
        </li>
        <li class="list__item">
            <a href="" class="list__item-description">
                <h3 class="title">Монтаж котельных и монтаж котлов топления</h3>
                <p class="text">Монтаж котельных является основным направлением деятельности нашей компании. Как правило, при монтаже котельных установок и монтаже котлов устанавливаются не только сами котлы…</p>
            </a>
            <span class="data">02.04.2021</span>
        </li>
        <li class="list__item">
            <a href="" class="list__item-description">
                <h3 class="title">Монтаж котельных и монтаж котлов топления</h3>
                <p class="text">Монтаж котельных является основным направлением деятельности нашей компании. Как правило, при монтаже котельных установок и монтаже котлов устанавливаются не только сами котлы…</p>
            </a>
            <span class="data">02.04.2021</span>
        </li>
        <li class="list__item">
            <a href="" class="list__item-description">
                <h3 class="title">Монтаж котельных и монтаж котлов топления</h3>
                <p class="text">Монтаж котельных является основным направлением деятельности нашей компании. Как правило, при монтаже котельных установок и монтаже котлов устанавливаются не только сами котлы…</p>
            </a>
            <span class="data">02.04.2021</span>
        </li> -->
    </ul>
</template>

<script>
export default {
    props: {
        news: {
            type: Array,
            default: null
        } 
    },
}
</script>

<style lang="scss">
.news__page {
    padding-top: 106px;
    background: #FAFAFA;
    display: flex;
    flex-direction: column;
    align-items: center;
    &-description{
        display: flex;
        max-width: 1368px;
        flex-direction: column;
        width: 100%;
        .text{
            font-weight: 500;
            font-size: 12px;
            line-height: 14px;
            color: #BABABA
        }
        .title{
            font-weight: bold;
            font-size: 46px;
            line-height: 69px;
            color: #000000;
        }
        .text__blue{
            font-weight: 500;
            font-size: 12px;
            line-height: 14px;
            color: #118BDD;
        }
    }
    &-list {
        list-style: none;
        padding: 0px;
        max-width: 1368px;
        width: 100%;
    }
    .list {
        &__item{
            display: flex;
            height: 500px;
            align-items: flex-end;
            margin-bottom: 20px;
            &:nth-child(1){
                background-image: url('../images/scoreboard.jpg');
            }
            &:nth-child(2){
                background-image: url('../images/fitting.jpg');
                .list__item-description{
                    padding-bottom: 12px;
                }
            }
            &:nth-child(3){
                background-image: url('../images/pipes.jpg');
            }
            &:nth-child(4){
                background-image: url('../images/bend.jpg');
            }
            &:nth-child(5){
                background-image: url('../images/engine.jpg');
            }
            &-description{
                background: #FFFFFF;
                max-width: 818px;
                width: 100%;
                padding: 30px 30px 45px 30px;
                text-decoration: none;
                h3:hover {
                    color: #118BDD;
                }
                .title{
                    font-weight: bold;
                    font-size: 22px;
                    line-height: 33px;
                    color: #000000;
                }
                .text{
                    font-weight: normal;
                    font-size: 18px;
                    line-height: 32px;
                    color: #434343;
                }
            }
            .data {
                background: #118BDD;
                font-weight: bold;
                font-size: 16px;
                line-height: 24px;
                text-align: center;
                color: #FFFFFF;
                padding: 28px 62px;
            }
        }
    }
}
</style>