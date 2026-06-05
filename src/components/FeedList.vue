<template>
  <div class="feed-list-container">
    <div v-if="initFeedData.length > 0">
      <FeedItem v-for="feed in initFeedData" :key="feed.id" :feed="feed"/>
    </div>
    <div v-else>
      <div>피드가 없습니다.</div>
    </div>
  </div>
</template>

<script>
import FeedItem from "./FeedItem.vue"
import { useFeedStore } from "@/store/feed";
export default {
    name: "FeedList",
    data() {
      return {
        initFeedData: []
      }
    },
    components: { FeedItem },
    created() {
        const feedStore = useFeedStore();
        this.initFeedData = feedStore.feedData;
    }
}
</script>

<style scoped>
.feed-list-container {
    height: 60vh;
    overflow-y: auto;
    margin-top: 20px;
}

</style>