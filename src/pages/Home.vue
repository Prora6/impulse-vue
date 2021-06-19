<template>
    <div>
        <BannerWebsite />
        <SectionActivity/>
        <SectionPartner />
        <SectionObjects />
        <SectionNews/>
        <SectionCompany/>
    </div>
</template>

<script>
import BannerWebsite from '../components/BannerWebsite.vue'
import SectionActivity from '../components/SectionActivity.vue'
import SectionPartner from '../components/SectionPartner.vue'
import SectionObjects from '../components/SectionObjects.vue'
import SectionNews from '../components/SectionNews.vue'
import SectionCompany from '../components/SectionCompany.vue'

export default {
    components: {
        BannerWebsite,
        SectionActivity,
        SectionCompany,
        SectionObjects,
        SectionNews,
        SectionPartner,
    }
}
</script>

<style lang="scss">

</style>
