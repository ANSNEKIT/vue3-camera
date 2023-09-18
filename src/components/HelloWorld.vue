<script setup lang="ts">
import { ref } from 'vue'
import FlvJs from 'flv.js'

defineProps<{ msg: string }>()

const count = ref(0)

if (FlvJs.isSupported()) {
    const videoElement = document.getElementById('videoElement') as HTMLVideoElement | null
    const flvPlayer = FlvJs.createPlayer({
        type: 'flv',
        url: 'http://example.com/flv/video.flv',
    })
    if (videoElement) {
        flvPlayer.attachMediaElement(videoElement)
        flvPlayer.load()
        flvPlayer.play()
    }
}
</script>

<template>
    <h1>{{ msg }}</h1>
    <ul>
        <li>asdfasdf</li>
    </ul>

    <div class="card">
        <button type="button" @click="count++">count is {{ count }}</button>
        <p>Edit <code>components/HelloWorld.vue</code> to test HMR</p>
    </div>

    <p>
        Check out
        <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"> create-vue </a>
        , the official Vue + Vite starter
    </p>
    <p>
        Install
        <a href="https://github.com/vuejs/language-tools" target="_blank" style="color: red" id="one"> Volar </a>

        in your IDE for a better DX
    </p>
    <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
