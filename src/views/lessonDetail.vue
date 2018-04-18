<template lang="html">
  <div class="detail">
      <lesson-header></lesson-header>
      <p class="site-title">第二生命形态学线上课堂</p>
      <p class="site-cont">《生命之树》第一章第一节</p>
      <div class="liveView">
        <h3>Vue Video.js Live Demo</h3>
        <p>Current Tech:
          <span class="badge badge-info">{{ currentTech }}</span>
        </p>
        <video-player class="vjs-custom-skin" ref="videoPlayer" :options="playerOptions" @ready="onPlayerReadied" @timeupdate="onTimeupdate">
        </video-player>
      </div>
      <h5>Enter your streams link below</h5>
      <div class="inputWrapper">
        <div class="form-group row" >
          <label for="" class="col-sm-4 col-form-label">HLS: </label>
          <div class="col-sm-8">
            <input class="form-control" type="text" placeholder="HLS url here" v-model="streams.hls">
          </div>
        </div>
      </div>
      <div class="buttonWrapper">
        <button class="btn btn-primary" type="button" @click="enterStream">Apply</button>
      </div>
      <common-footer></common-footer>
  </div>
</template>

<script>
import LessonHeader from '../components/LessonHeader'
import CommonFooter from '../components/CommonFooter'

export default {
  data () {
    return {
      initialized: false,
      currentTech: 'HLS',
      streams: {
        hls: ''
      },
      playerOptions: {
        overNative: true,
        autoplay: false,
        controls: true,
        techOrder: ['html5'],
        sourceOrder: true,
        html5: { hls: { withCredentials: false } },
        sources: [
          {
            withCredentials: false,
            type: 'application/x-mpegURL',
            src:
              'http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8'
          }
        ],
        poster: '../../static/images/logo.png'
        // controlBar: {
        //   timeDivider: false, // 时间分割线
        //   durationDisplay: false, // 总时间
        //   progressControl: true, // 进度条
        //   customControlSpacer: true, // 未知
        //   fullscreenToggle: true // 全屏
        // },
      }
    }
  },
  components: {
    LessonHeader,
    CommonFooter
  },
  computed: {
    player () {
      return this.$refs.videoPlayer.player
    }
  },
  methods: {
    onPlayerReadied () {
      if (!this.initialized) {
        this.initialized = true
        this.currentTech = this.player.techName_
      }
    },
    // record current time
    onTimeupdate (e) {
      console.log('currentTime', e.cache_.currentTime)
    },
    enterStream () {
      this.playerOptions.sources[0].src = this.streams.hls
      this.playerOptions.autoplay = true
    }
  }
}
</script>

<style lang="css">
  .detail {
    padding: 2rem;
    font-size: 12px;
  }

  .detail > p {
    font-size: 0.9rem;
    line-height: 1.5rem;
    text-align: left;
    padding-bottom: 0.5rem;
  }
  .detail > p.site-title {
    color: #ff8000;
  }
  .detail > p.site-cont {
    color: #666;
    font-size: 0.8rem;
  }
  .inputWrapper {
    width: 100%;
    margin: 0 auto;

  }
  .form-control {
    width: 100%;
  }
  .buttonWrapper {

  }
</style>
