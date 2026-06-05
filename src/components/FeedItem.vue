<template>
  <div class="feed-item">
    <div class="feed-content">
      <span class="feed-id">{{ feed.id }}</span>
      <p class="feed-text">{{ feed.content }}</p>
    </div>
    
    <span class="delete-btn">X</span>
    <div class="feed-user">{{ feed.user.name }}</div>
  </div>
</template>

<script>
export default {
  name: "FeedItem",
  props: {
    feed: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.feed-item {
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

.feed-content {
  display: flex;
  align-items: flex-start;
  gap: 15px;
}

.feed-id {
  font-size: 18px;
  font-weight: bold;
}

.feed-text {
  margin: 0;
  font-size: 16px;
  word-break: break-all;
}

.delete-btn {
  position: absolute;
  top: 15px;
  right: 20px;
  cursor: pointer;
  font-weight: bold;
}

.feed-user {
  align-self: flex-end;
  font-size: 14px;
  color: #555;
  font-weight: bold;
  margin-top: 10px;
}
</style>