<template>
  <div class="feed-container">
    <div class="feed-header">
      <div class="feed-content">{{ feed.content }}</div>
      <button class="feed-delete-button" @click="handleClick(feed)">X</button>
    </div>
    <div class="feed-name">{{ feed.user.name }}</div>
  </div>
</template>

<script>
import { useFeedStore } from "@/store/feed";
export default {
  name: "FeedItem",
  data() {
    return {
        feedStore: useFeedStore()
    }
  },
  props: {
    feed: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleClick(feed) {
      this.$confirm({
        message: '정말 삭제하시겠습니까?',
        button: {
          no: '아뇨',
          yes: '네'
        },
        callback: confirm => {
          if (confirm) {
            this.feedStore.removeFeed(feed.id);
          }
        }
      })
    }
  }
}
</script>

<style scoped>
.feed-container {
  position: relative;
  background-color: white;
  color: black;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 15px;
  min-height: 100px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.feed-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 15px;
}

.feed-content {
  font-size: 16px;
  font-weight: bold;
  word-break: break-all;
  text-align: left;
}

.feed-delete-button {
  background: none;
  border: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  color: #555;
  padding: 0 5px;
}

.feed-delete-button:hover {
  color: red;
}

.feed-name {
  align-self: flex-end;
  font-size: 14px;
  color: #555;
  font-weight: bold;
  margin-top: 10px;
}
</style>