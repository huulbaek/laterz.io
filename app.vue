<template>
  <div class="py-16 overflow-hidden lg:py-24 text-green">
    <Html lang="en-US" prefix="og: http://ogp.me/ns#">
      <Head>
        <Title>Laterz – a procrastination app</Title>
        <Meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=10" />
        <Meta hid="shareimage" property="og:image" content="https://laterz.io/laterz.png" />
        <Meta name="apple-itunes-app" content="app-id=1604514744" />
        <Meta name="author" content="Thomas Titanium" />
        <Meta name="description" property="og:description" content="There is really no reason to do anything today. Do it tomorrow or the next day instead. Laterz postpones stuff to better later times." />
        <Link rel="icon" href="favicon.png" />
      </Head>
    </Html>
    <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">

      <div class="relative">
        <h2 class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">The convenient way to not spend time</h2>
        <p class="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">Laterz postpones stuff to better later times.</p>
      </div>

      <div class="relative mt-12 lg:mt-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div class="relative">
          <h3 class="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">Procrastinate like never before</h3>
          <p class="mt-3 text-lg text-gray-500">There is really no reason to do anything today. Do it tomorrow or the next day instead.</p>

          <dl class="mt-10 space-y-10">
            <div v-for="item in appFeatures" :key="item.id" class="relative">
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{ item.name }}</p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                {{ item.description }}
              </dd>
            </div>
          </dl>

          <div class="mt-5 -mx-4 relative lg:mt-10">
            <a href="https://apps.apple.com/app/laterz/id1604514744"><img class="relative mx-auto" width="200" src="~/assets/images/app_store.svg" alt="Download Laterz from App Store" /></a>
            <br>
            <a href="https://testflight.apple.com/join/ZVZnfhXn"><img class="relative mx-auto" width="200" src="~/assets/images/macos_badge.png" alt="Download Laterz for macOS" /></a>
          </div>
        </div>

        <div class="mt-10 -mx-4 lg:mt-0" aria-hidden="true">
          <figure class="relative cursor-pointer" @click="playPause">
            <div id="video-controls" class="absolute" v-if="!videoIsPlaying">
              <div id="playpause">
                <span class="text-5xl">▶</span>
              </div>
            </div>
            <video
              id="video"
              ref="video"
              preload="metadata"
              loop
              muted
              poster="~/assets/images/screenshot_1.jpg"
              playsinline
              controls="true"
              class="border-green border-2 mx-auto relative"
              width="300"
            >
              <source src="~/assets/images/laterz.mov" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </figure>
        </div>
      </div>

      <div class="relative mt-12 sm:mt-16 lg:mt-24">
        <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div class="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <img class="relative mx-auto border-green border-2" width="300" src="~/assets/images/screenshot_2.jpg" alt="" />
          </div>
          <div class="lg:col-start-2 lg:mt-0 mt-10">
            <h3 class="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">Privacy the only way</h3>
            <p class="mt-3 text-lg text-gray-500">Everything stays on your device and Laterz doesn't share anything with anybody – not even the creator of Laterz.</p>

            <dl class="mt-10 space-y-10">
              <div v-for="item in privacyFeatures" :key="item.id" class="relative">
                <dt>
                  <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{ item.name }}</p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">
                  {{ item.description }}
                </dd>
              </div>
            </dl>
          </div>

        </div>
      </div>
    </div>
    <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl mt-10">
      <div class="text-center">
        <p>© 2023 Thomas Titanium</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import './assets/css/tailwind.css'
import './assets/css/fonts.css'
import { AnnotationIcon, ShareIcon, LightningBoltIcon, MailIcon, ClockIcon } from '@heroicons/vue/outline'
import { ref, onMounted } from 'vue'

const video = ref(null)
var videoIsPlaying = ref(false)

onMounted(() => {
  var supportsVideo = !!document.createElement('video').canPlayType
  if (supportsVideo) {
    var videoControls = document.getElementById('video-controls')
    video.value.controls = false
    videoControls.style.display = 'block'
  }
})

function playPause() {
  if (video.value.paused || video.value.ended) {
    video.value.play()
    videoIsPlaying.value = true
  }
  else {
    video.value.pause()
    videoIsPlaying.value = false
  }
}

const appFeatures = [
  {
    id: 1,
    name: 'Postpone links / text from other apps',
    description:
      'Laterz receives shares from your other apps and lets you schedule it at your discretion.',
    icon: ShareIcon,
  },
  {
    id: 2,
    name: 'Postpone text of your choice',
    description:
      'Tap the screen to quickly type some text so you can remember it later ~ later you can postpone it again.',
    icon: ClockIcon,
  },
  {
    id: 3,
    name: 'Laterz understands you',
    description:
      'Laterz remembers your best times for scheduling and shows them as easy, quick choices.',
    icon: LightningBoltIcon,
  },
]
const privacyFeatures = [
  {
    id: 1,
    name: 'Local notifications',
    description:
      'All notifications data are saved locally and served directly from the phone. There is no communication with the outside world.',
    icon: AnnotationIcon,
  },
  {
    id: 2,
    name: 'Contact us',
    description:
      'If you feel something isn\'t quite right, get in touch and ship an email to huulbaek+laterz@gmail.com.',
    icon: MailIcon,
  },
]
</script>

<style>
  #video-controls {
    left: 50%;
    top: 50%;
    z-index: 2;
    width: 65px;
    height: 65px;
    background-color: black;
    border: #00ff00 2px solid;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
  #video-controls #playpause {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding-left: 5px;
  }
</style>
