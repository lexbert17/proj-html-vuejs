<script >
import { store } from './store';
import "@fortawesome/fontawesome-free/css/all.min.css"
import AppHeader from "./components/AppHeader.vue";
import AppHero from "./components/AppHero.vue";
import  DescriptionForum from "./components/DescriptionForum.vue";
import LatestNews from './components/LatestNews.vue';
import ReadOurBlog from './components/ReadOurBlog.vue';
import ForumSection from './components/ForumSection.vue';
import OurForum from './components/OurForum.vue'
import SubscribeNewsletter from './components/SubscribeNewsletter.vue';
import AppFooterTop from './components/AppFooterTop.vue';
import AppFooterbot from './components/AppFooterbot.vue';
import SignUp from './components/SignUp.vue';




export default {
  data() {
    return{

    }
  },
  components : { AppHeader, AppHero, DescriptionForum, LatestNews, ReadOurBlog, ForumSection, SubscribeNewsletter, AppFooterTop, AppFooterbot, OurForum, SignUp, }
}
</script>

<template>
<AppHeader/>
<AppHero/>
<DescriptionForum/>
<LatestNews/>
<ReadOurBlog />
<ForumSection/>
<OurForum/>
<SignUp/>
<SubscribeNewsletter/>
<AppFooterTop/>
<AppFooterbot/>




</template>

<style  lang="scss">
@use "./style/general.scss";


</style>
