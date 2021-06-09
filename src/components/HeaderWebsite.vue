<template>
    <header class="header">
        <div class="header__content">
            <div class="header__content-logo">
                <Logo class="logo"/>
            </div>
            <nav class="header__content-navigation navigation">
                <ul class="navigation__list">
                    <li class="navigation__list-item"><a href="#" class="link">О компании</a></li>
                    <li class="navigation__list-item"><a href="#" class="link">Услуги</a></li>
                    <li class="navigation__list-item"><a href="#" class="link">Раскрытие информации</a></li>
                    <li class="navigation__list-item"><a href="#" class="link">Абонентам</a></li>
                    <li class="navigation__list-item"><a href="#" class="link">Наши объекты</a></li>
                    <li class="navigation__list-item"><a href="#" class="link">Новости</a></li>
                    <li class="navigation__list-item"><a href="#" class="link">Контакты</a></li>
                </ul>
            </nav>
            <div class="header__content-contacts">
                <p class="number">+7(123) 456-78-90</p>
                <p class="mail">yourmail@company.com</p>
            </div>
        </div>
    </header>
</template>

<script>
import Logo from './SvgIcons/LogoHeader.vue'

export default {
  components :{
      Logo,
  }
}
</script>

<style lang="scss">
.header {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 30px 10px 0px 10px;
    &__content {
        display: flex;
        align-items: center;
        max-width: 1363.39px;
        width: 100%;
        justify-content: space-between;
        &-navigation{
            max-width: 949.16px;
            width: 100%;
        }
        .navigation {
            &__list {
                display: flex;
                list-style-type: none;
                padding: 0;
                justify-content: space-between;
                &-item{
                    .link{
                        text-decoration: none;
                        text-transform: uppercase;
                        font-weight: bold;
                        font-size: 12px;
                        line-height: 14px;
                        letter-spacing: 0.05em;
                        cursor: pointer;
                        color: #FFFFFF;
                    }
                    &:hover {
                        a {
                            color: #118BDD;
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
                color: #FFFFFF;
            }
            .mail {
                font-weight: 500;
                font-size: 14px;
                line-height: 17px;
                color: #8C94A6;
            }
        }
    }
}
</style>


