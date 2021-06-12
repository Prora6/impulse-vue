<template>
    <footer class="footer">
        <div class="footer__up">
            <div class="footer__up-logo">
                <Logo class="logo"/>
                <span class="discription">ООО "Пром Импульс" 2021</span>
            </div>
            <nav class="footer__up-navigation navigation">
                <ul class="navigation__list">
                    <li class="navigation__list-item"><span class="title">Разделы сайта</span></li>
                    <li class="navigation__list-item"><a href="" class="link">Услуги</a></li>
                    <li class="navigation__list-item"><a href="" class="link">Раскрытие информации</a></li>
                    <li class="navigation__list-item"><a href="" class="link">Абонентам</a></li>
                    <li class="navigation__list-item"><a href="" class="link">Наши объекты</a></li>
                    <li class="navigation__list-item"><a href="" class="link">Новости</a></li>
                    <li class="navigation__list-item"><a href="" class="link">Контакты</a></li>
                </ul>
            </nav>
            <ul class="footer__up-list list">
                <li class="list-item"><span class="title">Реквизиты</span></li>
                <li class="list-item"><span class="text">ООО "Пром Импульс"</span></li>
                <li class="list-item"><span class="text">ОГРН: 1053600591197</span></li>
                <li class="list-item"><span class="text">КПП: xxxxxxxxx</span></li>
                <li class="list-item"><span class="text">ПФР: xxxxxxxxxxxx</span></li>
                <li class="list-item"><span class="text">ОКПО: xxxxxxxx</span></li>
                <li class="list-item"><span class="text">ФСС: xxxxxxxxxxxxxxx</span></li>
                <li class="list-item"><span class="text">ОКАТО: xxxxxxxxxxx</span></li>
                <li class="list-item"><span class="text">ОКТМО: xxxxxxxx</span></li>
                <li class="list-item"><span class="text">ОКОГУ: xxxxxxx</span></li>
                <li class="list-item"><span class="text">ОКФС: xx</span></li>
                <li class="list-item"><span class="text">ОКОПФ: xxxxx</span></li>
            </ul>
            <ul class="footer__up-list list">
                <li class="list-item"><span class="title">Тел./факс:</span></li>
                <li class="list-item"><span class="text__number">+7 (812) 603-73-77</span></li>
                <li class="list-item"><span class="title">Адрес:</span></li>
                <li class="list-item"><span class="text">196084, г. Санкт-Петербург, ул. Рощинская, д. 5, лит. И</span></li>
                <li class="list-item"><span class="title">Email:</span></li>
                <li class="list-item"><span class="text">office@promimpuls.ru</span></li>
                <li class="list-item"><span class="title">График работы:</span></li>
                <li class="list-item"><span class="text">Понедельник-Пятница 08:00 - 19:00</span></li>
            </ul>
        </div>
        <hr class="footer__line">
        <div class="footer__down">
            <ul class="footer__down-list list">
                <li class="list__item">
                    <span class="list__item-text">Карта сайта</span>
                </li>
                <li class="list__item">
                    <span class="list__item-text">Обработка персональных данных</span>
                </li>
                <li class="list__item">
                    <span class="list__item-text">Политика конфиденциальности</span>
                </li>
                <li class="list__item">
                    <span class="list__item-text">Разработка: Design Studio</span>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script>
import Logo from './SvgIcons/LogoHeader.vue'
export default {
  components: {
      Logo
  },
};
</script>


<style lang="scss">
.footer {
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #0C0E16;
    &__up{
        max-width: 1370px;
        width: 100%;
        display: flex;
        padding: 46px 0 24px 0;
        &-logo{
            display: flex;
            flex-direction: column;
            margin-right: 240px;
            .logo{
                width: 110px;
                height: 35px;
                margin-bottom: 4px;
            }
            .discription{
                font-weight: 500;
                font-size: 12px;
                line-height: 18px;
                color: #FFFFFF;
            }
        }
        &-navigation{
            margin-right: 166px;
        }
        .navigation{
            &__list{
                padding: 0;
                list-style-type:none;
                &-item{
                    .title{
                        font-weight: 500;
                        font-size: 14px;
                        line-height: 21px;
                        color: #606269;
                        margin-bottom: 5px;
                    }
                    .link{
                        text-decoration: none;
                        font-weight: normal;
                        font-size: 16px;
                        line-height: 24px;
                        color: #FFFFFF;
                    }
                    &:not(:last-child){
                        margin-bottom: 10px;
                    }
                }
            }
        }
        &-list{
            list-style-type:none;
            padding: 0;
            
        }
        .list{
            &:last-child{
                margin-left: 122px;
                max-width: 228px;
                width: 100%;
                .list-item:last-child{
                    max-width: 168px;
                    width: 100%;

                }
                .list-item:nth-child(even){
                    margin-bottom: 20px;
                }
            }
            &-item{
                .title{
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 21px;
                    color: #606269;
                    margin-bottom: 5px;
                }
                .text{
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 24px;
                    color: #FFFFFF;
                }
                .text__number{
                    font-weight: 500;
                    font-size: 24px;
                    line-height: 36px;
                    color: #FFFFFF;
                }
            }
        }
    }
    &__line{
        border: 1px solid #464958;
        width: 100%;
    }
    &__down{
        padding: 30px 0 50px 0;
        &-list{
            list-style-type:none;
            padding: 0px;
        }
        .list{
            display: flex;
            &__item{
                &:nth-child(1){
                    margin-right: 306px;
                }
                &:nth-child(2){
                    margin-right: 94px;
                }
                &:nth-child(3){
                    margin-right: 108px;
                }
                &-text{
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 24px;
                    color: #606269;
                }
            }
        }
    }
}
</style>
