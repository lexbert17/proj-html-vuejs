<script >
import { store } from './store';
import "@fortawesome/fontawesome-free/css/all.min.css"
import AppHeader from "./components/AppHeader.vue";
import AppHero from "./components/AppHero.vue";
import  DescriptionForum from "./components/DescriptionForum.vue";
import LatestNews from './components/LatestNews.vue';
import ReadOurBlog from './components/ReadOurBlog.vue';
import ForumSection from './components/ForumSection.vue';
import SubscribeNewsletter from './components/SubscribeNewsletter.vue';
import AppFooterTop from './components/AppFooterTop.vue';
import AppFooterbot from './components/AppFooterbot.vue';
import SignUp from './components/SignUp.vue';




export default {
  data() {
    return{
      ReadOurBlog:"READ OUR BLOG",
      gotoOurForum:"GO TO OUR FORUM"
    }
  },
  components : { AppHeader, AppHero, DescriptionForum, LatestNews, ReadOurBlog, ForumSection, SubscribeNewsletter, AppFooterTop, AppFooterbot, SignUp, }
}
</script>

<template>
<AppHeader/>
<AppHero/>
<DescriptionForum/>
<LatestNews/>
<ReadOurBlog :title="ReadOurBlog"/>
<ForumSection/>
<ReadOurBlog :title="gotoOurForum"/>
<SignUp/>
<SubscribeNewsletter/>
<AppFooterTop/>
<AppFooterbot/>




</template>

<style  lang="scss">
@use "./style/general.scss";


</style>
