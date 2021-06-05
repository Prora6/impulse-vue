<template>
    <header class="header">
        <div class="header__content">
            <div class="header__content-logo">
                <Logo class="logo"/>
            </div>
            <nav class="header__content-navigation">

            </nav>
            <div class="header__content-contacts">

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
    background: burlywood;
}
</style>
