<script >
import { store } from './store';
import AppHeader from "./components/AppHeader.vue";
import AppHero from "./components/AppHero.vue";
import  DescriptionForum from "./components/DescriptionForum.vue";
import LatestNews from './components/LatestNews.vue';
import MoreInfo from './components/MoreInfo.vue';
import ForumSection from './components/ForumSection.vue';
import SubscribeNewsletter from './components/SubscribeNewsletter.vue';
import AppFooterTop from './components/AppFooterTop.vue';
import AppFooterbot from './components/AppFooterbot.vue';




export default {
  data() {
    return{

    }
  },
  components : { AppHeader, AppHero, DescriptionForum, LatestNews, MoreInfo, ForumSection, SubscribeNewsletter, AppFooterTop, AppFooterbot }
}
</script>

<template>
<AppHeader/>
<AppHero/>
<DescriptionForum/>
<LatestNews/>
<MoreInfo/>
<ForumSection/>
<SubscribeNewsletter/>
<AppFooterTop/>
<AppFooterbot/>




</template>

<style  lang="scss">
@use "./style/general.scss";


</style>
