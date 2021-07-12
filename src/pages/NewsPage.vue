<template>
    <section class="news__page">
        <div class="news__page-description">
            <p class="text">Главная / <span class="text__blue">Новости</span></p>
            <h2 class="title">Новости</h2>
        </div>
        <ListNews :news="listNews"/>
    </section>
</template>

<script>
import ListNews from '../components/ListNews.vue'

export default {
    components:{
        ListNews 
    },
    data() {
        return {

            listNews : [
                    {   title:"Монтаж котельных и монтаж котлов топления",
                        text:"Монтаж котельных является основным направлением деятельности нашей компании. Как правило, при монтаже котельных установок и монтаже котлов устанавливаются не только сами котлы…",
                        url:"../images/scoreboard.jpg",
                        date:"02.04.2021",
                        link:"/"},
                    {   title:"Монтаж котельных и монтаж котлов топления",
                        text:"Монтаж котельных является основным направлением деятельности нашей компании. Как правило, при монтаже котельных установок и монтаже котлов устанавливаются не только сами котлы…",
                        url:"../images/scoreboard.jpg",
                        date:"02.04.2021",
                        link:"/"},
                    {   title:"Монтаж котельных и монтаж котлов топления",
                        text:"Монтаж котельных является основным направлением деятельности нашей компании. Как правило, при монтаже котельных установок и монтаже котлов устанавливаются не только сами котлы…",
                        url:"../images/scoreboard.jpg",
                        date:"02.04.2021",
                        link:"/"},
                    {   title:"Монтаж котельных и монтаж котлов топления",
                        text:"Монтаж котельных является основным направлением деятельности нашей компании. Как правило, при монтаже котельных установок и монтаже котлов устанавливаются не только сами котлы…",
                        url:"../images/scoreboard.jpg",
                        date:"02.04.2021",
                        link:"/"},
                    
            ]
        };
    }
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