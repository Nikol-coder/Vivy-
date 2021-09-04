// page/video/video.js
import request from "../../utils/request";

let videoContext = null;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        navList: [],
        videoList: [],
        navId: '',  
        pid: '',
        videoId: '',
        isTriggered: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getNavList();
    },
    toSearchPage() {
        wx.navigateTo({
            url: '/pages/search/search'
        })
    },
    // 获取导航列表
    async getNavList() {
        let navData = await request("/video/group/list");
        let navList = navData.data.slice(0, 10)
        navList.unshift({
          id: 99999,
          name: "大学",
          relatedVideoType: null,
          selectTab: true,
          url: null
        })
        this.setData({
            navList,
            navId: navList[0].id
        })
 
        this.getVideoList(this.data.navId);
    },
    // 改变Nav
    changeNav(event) {
        this.setData({
            navId: event.currentTarget.id,
            videoList: []
        })
        wx.showLoading({
            title: '正在加载'
        })
        this.getVideoList(this.data.navId)
    },
    /**
     * 播放Video
     * 关闭上一个正在播放的video
     */
    playVideo(event) {
        let pid = event.currentTarget.id;
        pid !== this.data.pid && this.videoContext && this.videoContext.stop();
        this.videoContext = wx.createVideoContext(pid, this)
        this.videoContext.play();
        this.setData({
            pid
        })
    },
    play(event) {
        let videoId = event.currentTarget.id;
        this.setData({
            videoId
        })
    },
    // 下拉刷新
    handlerRefresh() {
        this.setData({
            isTriggered: true
        });
        this.getVideoList(this.data.navId);
    },
    // 滚动到底部
    async handlerScrollLower() {
        // TODO 需要取更新的数据
        let newVideoList = await request("/video/group", {id: this.data.navId})
        // 分页
        let videoList = this.data.videoList;
        videoList.push(...newVideoList);
        this.setData({
            videoList
        })
    },
    // 获取视频列表
    async getVideoList(navId) {
      if(!navId){ // 判断navId为空串的情况
        return;
      }
    //给一些初始页面
      if(navId == 99999){
          let newVideoList = [
            {
              "type": 1,
              "displayed": false,
              "alg": "onlineHotGroup",
              "extAlg": null,
              "data": {
                "alg": "onlineHotGroup",
                "scm": "1.music-video-timeline.video_timeline.video.181017.-295043608",
                "threadId": "R_VI_62_E02A88CF2AE65C449CADD2371C315F18",
                "coverUrl": "https://gulimall-i.oss-cn-beijing.aliyuncs.com/wx/cover/%E6%96%B0%E5%BB%BA%E6%96%87%E4%BB%B6%E5%A4%B9/3.jpg",
                "height": 1080,
                "width": 1920,
                "title": "郑州轻工业大学----晚会",
                "description": "李宇春华晨宇合作好炸《西门少年》，真是神仙合作啊！",
                "commentCount": 186,
                "shareCount": 516,
                "resolutions": [
                  {
                    "resolution": 240,
                    "size": 29450044
                  },
                  {
                    "resolution": 480,
                    "size": 49904667
                  },
                  {
                    "resolution": 720,
                    "size": 72480174
                  },
                  {
                    "resolution": 1080,
                    "size": 137540575
                  }
                ],
                "creator": {
                  "defaultAvatar": false,
                  "province": 440000,
                  "authStatus": 0,
                  "followed": false,
                  "avatarUrl": "https://gulimall-i.oss-cn-beijing.aliyuncs.com/wx/cover/%E6%96%B0%E5%BB%BA%E6%96%87%E4%BB%B6%E5%A4%B9/1.jpg",
                  "accountStatus": 0,
                  "gender": 0,
                  "city": 445200,
                  "birthday": -2209017600000,
                  "userId": 3247598879,
                  "userType": 0,
                  "nickname": "郑州轻工业大学",
                  "signature": "",
                  "description": "",
                  "detailDescription": "",
                  "avatarImgId": 109951164781511120,
                  "backgroundImgId": 109951162868128400,
                  "backgroundUrl": "http://p1.music.126.net/2zSNIqTcpHL2jIvU6hG0EA==/109951162868128395.jpg",
                  "authority": 0,
                  "mutual": false,
                  "expertTags": null,
                  "experts": null,
                  "djStatus": 0,
                  "vipType": 0,
                  "remarkName": null,
                  "avatarImgIdStr": "109951164781511113",
                  "backgroundImgIdStr": "109951162868128395",
                  "avatarImgId_str": "109951164781511113"
                },
                "urlInfo": {
                  "id": "E02A88CF2AE65C449CADD2371C315F18",
                  "url": "https://gulimall-i.oss-cn-beijing.aliyuncs.com/wx/video/1.mp4",
                  "size": 137540575,
                  "validityTime": 1200,
                  "needPay": false,
                  "payInfo": null,
                  "r": 1080
                },
                "videoGroup": [
                  {
                    "id": -8013,
                    "name": "#人气飙升榜#",
                    "alg": "groupTagRank"
                  },
                  {
                    "id": 23118,
                    "name": "华晨宇",
                    "alg": "groupTagRank"
                  },
                  {
                    "id": 59101,
                    "name": "华语现场",
                    "alg": "groupTagRank"
                  },
                  {
                    "id": 59108,
                    "name": "巡演现场",
                    "alg": "groupTagRank"
                  },
                  {
                    "id": 1100,
                    "name": "音乐现场",
                    "alg": "groupTagRank"
                  },
                  {
                    "id": 58100,
                    "name": "现场",
                    "alg": "groupTagRank"
                  },
                  {
                    "id": 5100,
                    "name": "音乐",
                    "alg": "groupTagRank"
                  }
                ],
                "previewUrl": null,
                "previewDurationms": 0,
                "hasRelatedGameAd": false,
                "markTypes": null,
                "relateSong": [
                  {
                    "name": "西门少年 (Live)",
                    "id": 1442842608,
                    "pst": 0,
                    "t": 0,
                    "ar": [
                      {
                        "id": 861777,
                        "name": "华晨宇",
                        "tns": [],
                        "alias": []
                      },
                      {
                        "id": 8327,
                        "name": "李宇春",
                        "tns": [],
                        "alias": []
                      }
                    ],
                    "alia": [
                      "原唱：李宇春"
                    ],
                    "pop": 100,
                    "st": 0,
                    "rt": "",
                    "fee": 8,
                    "v": 4,
                    "crbt": null,
                    "cf": "",
                    "al": {
                      "id": 88421277,
                      "name": "歌手·当打之年 第12期",
                      "picUrl": "http://p3.music.126.net/mOa6Y35QQa2-A5HArd58sQ==/109951164933975773.jpg",
                      "tns": [],
                      "pic_str": "109951164933975773",
                      "pic": 109951164933975780
                    },
                    "dt": 293850,
                    "h": {
                      "br": 320000,
                      "fid": 0,
                      "size": 11756205,
                      "vd": -26779
                    },
                    "m": {
                      "br": 192000,
                      "fid": 0,
                      "size": 7053741,
                      "vd": -24264
                    },
                    "l": {
                      "br": 128000,
                      "fid": 0,
                      "size": 4702509,
                      "vd": -22819
                    },
                    "a": null,
                    "cd": "01",
                    "no": 7,
                    "rtUrl": null,
                    "ftype": 0,
                    "rtUrls": [],
                    "djId": 0,
                    "copyright": 0,
                    "s_id": 0,
                    "rtype": 0,
                    "rurl": null,
                    "mst": 9,
                    "cp": 1416682,
                    "mv": 0,
                    "publishTime": 0,
                    "privilege": {
                      "id": 1442842608,
                      "fee": 8,
                      "payed": 0,
                      "st": 0,
                      "pl": 128000,
                      "dl": 0,
                      "sp": 7,
                      "cp": 1,
                      "subp": 1,
                      "cs": false,
                      "maxbr": 999000,
                      "fl": 128000,
                      "toast": false,
                      "flag": 68,
                      "preSell": false
                    }
                  }
                ],
                "relatedInfo": null,
                "videoUserLiveInfo": null,
                "vid": "E02A88CF2AE65C449CADD2371C315F18",
                "durationms": 302891,
                "playTime": 363031,
                "praisedCount": 5362,
                "praised": false,
                "subscribed": false
              }
            },
            {
              "type": 1,
              "displayed": false,
              "alg": "onlineHotGroup",
              "extAlg": null,
              "data": {
                "alg": "onlineHotGroup",
                "scm": "1.music-video-timeline.video_timeline.video.181017.-295043608",
                "threadId": "R_VI_62_510C8F5A9DA8DC23997E522B85F1FB3A",
                "coverUrl": "https://gulimall-i.oss-cn-beijing.aliyuncs.com/wx/cover/%E6%96%B0%E5%BB%BA%E6%96%87%E4%BB%B6%E5%A4%B9/2.jpg",
                "height": 720,
                "width": 1280,
                "title": "郑州轻工业大学----我们毕业了",
                "description": "Wiz Khalifa和Charlie Puth在中场休息时为科比演唱的《See you again》\n\n“It's been a long day without you my friend”\n\n#Charlie Puth#|#Wiz Khalifa#",
                "commentCount": 139,
                "shareCount": 317,
                "resolutions": [
                  {
                    "resolution": 240,
                    "size": 17757824
                  },
                  {
                    "resolution": 480,
                    "size": 28683079
                  },
                  {
                    "resolution": 720,
                    "size": 36021554
                  }
                ],
                "creator": {
                  "defaultAvatar": false,
                  "province": 1000000,
                  "authStatus": 0,
                  "followed": false,
                  "avatarUrl": "https://gulimall-i.oss-cn-beijing.aliyuncs.com/wx/cover/%E6%96%B0%E5%BB%BA%E6%96%87%E4%BB%B6%E5%A4%B9/1.jpg",
                  "accountStatus": 0,
                  "gender": 0,
                  "city": 1006600,
                  "birthday": 818804058083,
                  "userId": 391194506,
                  "userType": 200,
                  "nickname": "郑州轻工业大学",
                  "signature": "",
                  "description": "",
                  "detailDescription": "",
                  "avatarImgId": 109951165359708720,
                  "backgroundImgId": 109951165311536080,
                  "backgroundUrl": "http://p1.music.126.net/TsZo0EMK_FECf9sHJkx8RQ==/109951165311536074.jpg",
                  "authority": 0,
                  "mutual": false,
                  "expertTags": [
                    "欧美"
                  ],
                  "experts": {
                    "1": "音乐视频达人",
                    "2": "音乐图文达人"
                  },
                  "djStatus": 10,
                  "vipType": 0,
                  "remarkName": null,
                  "avatarImgIdStr": "109951165359708723",
                  "backgroundImgIdStr": "109951165311536074",
                  "avatarImgId_str": "109951165359708723"
                },
                "urlInfo": {
                  "id": "510C8F5A9DA8DC23997E522B85F1FB3A",
                  "url": "https://gulimall-i.oss-cn-beijing.aliyuncs.com/wx/video/2.mp4",
                  "size": 36021554,
                  "validityTime": 1200,
                  "needPay": false,
                  "payInfo": null,
                  "r": 720
                },
                "videoGroup": [
                  {
                    "id": -8003,
                    "name": "#点赞榜#",
                    "alg": "groupTagRank"
                  },
                  {
                    "id": 16194,
                    "name": "Charlie Puth",
                    "alg": "groupTagRank"
                  },
                  {
                    "id": 1100,
                    "name": "音乐现场",
                    "alg": "groupTagRank"
                  },
                  {
                    "id": 58100,
                    "name": "现场",
                    "alg": "groupTagRank"
                  },
                  {
                    "id": 5100,
                    "name": "音乐",
                    "alg": "groupTagRank"
                  }
                ],
                "previewUrl": null,
                "previewDurationms": 0,
                "hasRelatedGameAd": false,
                "markTypes": null,
                "relateSong": [
                  {
                    "name": "See You Again",
                    "id": 401722227,
                    "pst": 0,
                    "t": 0,
                    "ar": [
                      {
                        "id": 90331,
                        "name": "Charlie Puth",
                        "tns": [],
                        "alias": []
                      },
                      {
                        "id": 46006,
                        "name": "Wiz Khalifa",
                        "tns": [],
                        "alias": []
                      }
                    ],
                    "alia": [
                      "电影《速度与激情7》片尾曲"
                    ],
                    "pop": 100,
                    "st": 0,
                    "rt": null,
                    "fee": 1,
                    "v": 16,
                    "crbt": null,
                    "cf": "",
                    "al": {
                      "id": 3270972,
                      "name": "Nine Track Mind",
                      "picUrl": "http://p3.music.126.net/OVHar05vedbWFEWHuArbGA==/3295236348738229.jpg",
                      "tns": [],
                      "pic": 3295236348738229
                    },
                    "dt": 229564,
                    "h": {
                      "br": 320000,
                      "fid": 0,
                      "size": 9184696,
                      "vd": -11799
                    },
                    "m": {
                      "br": 192000,
                      "fid": 0,
                      "size": 5510834,
                      "vd": -9300
                    },
                    "l": {
                      "br": 128000,
                      "fid": 0,
                      "size": 3673904,
                      "vd": -7799
                    },
                    "a": null,
                    "cd": "1",
                    "no": 13,
                    "rtUrl": null,
                    "ftype": 0,
                    "rtUrls": [],
                    "djId": 0,
                    "copyright": 1,
                    "s_id": 0,
                    "rtype": 0,
                    "rurl": null,
                    "mst": 9,
                    "cp": 7002,
                    "mv": 393006,
                    "publishTime": 1454254457074,
                    "privilege": {
                      "id": 401722227,
                      "fee": 1,
                      "payed": 0,
                      "st": 0,
                      "pl": 0,
                      "dl": 0,
                      "sp": 0,
                      "cp": 0,
                      "subp": 0,
                      "cs": false,
                      "maxbr": 320000,
                      "fl": 0,
                      "toast": false,
                      "flag": 1284,
                      "preSell": false
                    }
                  },
                  {
                    "name": "See You Again",
                    "id": 30953009,
                    "pst": 0,
                    "t": 0,
                    "ar": [
                      {
                        "id": 46006,
                        "name": "Wiz Khalifa",
                        "tns": [],
                        "alias": []
                      },
                      {
                        "id": 90331,
                        "name": "Charlie Puth",
                        "tns": [],
                        "alias": []
                      }
                    ],
                    "alia": [
                      "电影《速度与激情7》致敬保罗沃克插曲"
                    ],
                    "pop": 100,
                    "st": 0,
                    "rt": null,
                    "fee": 1,
                    "v": 289,
                    "crbt": null,
                    "cf": "",
                    "al": {
                      "id": 3104138,
                      "name": "Furious 7 (Original Motion Picture Soundtrack)",
                      "picUrl": "http://p3.music.126.net/JIc9X91OSH-7fUZqVfQXAQ==/7731765766799133.jpg",
                      "tns": [],
                      "pic": 7731765766799133
                    },
                    "dt": 230520,
                    "h": {
                      "br": 320000,
                      "fid": 0,
                      "size": 9223358,
                      "vd": -17300
                    },
                    "m": {
                      "br": 192000,
                      "fid": 0,
                      "size": 5534032,
                      "vd": -14800
                    },
                    "l": {
                      "br": 128000,
                      "fid": 0,
                      "size": 3689369,
                      "vd": -13400
                    },
                    "a": null,
                    "cd": "1",
                    "no": 7,
                    "rtUrl": null,
                    "ftype": 0,
                    "rtUrls": [],
                    "djId": 0,
                    "copyright": 2,
                    "s_id": 0,
                    "rtype": 0,
                    "rurl": null,
                    "mst": 9,
                    "cp": 7002,
                    "mv": 393006,
                    "publishTime": 1426521600007,
                    "tns": [
                      "有缘再见"
                    ],
                    "privilege": {
                      "id": 30953009,
                      "fee": 1,
                      "payed": 0,
                      "st": 0,
                      "pl": 0,
                      "dl": 0,
                      "sp": 0,
                      "cp": 0,
                      "subp": 0,
                      "cs": false,
                      "maxbr": 999000,
                      "fl": 0,
                      "toast": false,
                      "flag": 1284,
                      "preSell": false
                    }
                  }
                ],
                "relatedInfo": null,
                "videoUserLiveInfo": null,
                "vid": "510C8F5A9DA8DC23997E522B85F1FB3A",
                "durationms": 228739,
                "playTime": 418612,
                "praisedCount": 3532,
                "praised": false,
                "subscribed": false
              }
            },
            {
              "type": 1,
              "displayed": false,
              "alg": "onlineHotGroup",
              "extAlg": null,
              "data": {
                "alg": "onlineHotGroup",
                "scm": "1.music-video-timeline.video_timeline.video.181017.-295043608",
                "threadId": "R_VI_62_A54AEB1C28CCD7990E7E6EAB56ECA485",
                "coverUrl": "https://gulimall-i.oss-cn-beijing.aliyuncs.com/wx/cover/%E6%96%B0%E5%BB%BA%E6%96%87%E4%BB%B6%E5%A4%B9/1.jpg",
                "height": 486,
                "width": 864,
                "title": "郑州轻工业大学航拍",
                "description": null,
                "commentCount": 21,
                "shareCount": 18,
                "resolutions": [
                  {
                    "resolution": 240,
                    "size": 13805898
                  },
                  {
                    "resolution": 480,
                    "size": 13565707
                  }
                ],
                "creator": {
                  "defaultAvatar": false,
                  "province": 440000,
                  "authStatus": 1,
                  "followed": false,
                  "avatarUrl": "https://gulimall-i.oss-cn-beijing.aliyuncs.com/wx/cover/%E6%96%B0%E5%BB%BA%E6%96%87%E4%BB%B6%E5%A4%B9/1.jpg",
                  "accountStatus": 0,
                  "gender": 1,
                  "city": 440100,
                  "birthday": 953136000000,
                  "userId": 247337423,
                  "userType": 4,
                  "nickname": "郑州轻工业大学",
                  "signature": "来不及.",
                  "description": "",
                  "detailDescription": "",
                  "avatarImgId": 7795537441726101,
                  "backgroundImgId": 18641120139551856,
                  "backgroundUrl": "http://p1.music.126.net/4ZlZ1W4gaf6UwR1wFVA0XQ==/18641120139551855.jpg",
                  "authority": 0,
                  "mutual": false,
                  "expertTags": null,
                  "experts": {
                    "1": "二次元视频达人"
                  },
                  "djStatus": 10,
                  "vipType": 11,
                  "remarkName": null,
                  "avatarImgIdStr": "7795537441726101",
                  "backgroundImgIdStr": "18641120139551855"
                },
                "urlInfo": {
                  "id": "A54AEB1C28CCD7990E7E6EAB56ECA485",
                  "url": "https://gulimall-i.oss-cn-beijing.aliyuncs.com/wx/video/3.mp4",
                  "size": 13565707,
                  "validityTime": 1200,
                  "needPay": false,
                  "payInfo": null,
                  "r": 480
                },
                "videoGroup": [
                  {
                    "id": 60101,
                    "name": "日语现场",
                    "alg": "groupTagRank"
                  },
                  {
                    "id": 59108,
                    "name": "巡演现场",
                    "alg": "groupTagRank"
                  },
                  {
                    "id": 57108,
                    "name": "流行现场",
                    "alg": "groupTagRank"
                  },
                  {
                    "id": 3102,
                    "name": "二次元",
                    "alg": "groupTagRank"
                  },
                  {
                    "id": 1100,
                    "name": "音乐现场",
                    "alg": "groupTagRank"
                  },
                  {
                    "id": 58100,
                    "name": "现场",
                    "alg": "groupTagRank"
                  },
                  {
                    "id": 5100,
                    "name": "音乐",
                    "alg": "groupTagRank"
                  }
                ],
                "previewUrl": null,
                "previewDurationms": 0,
                "hasRelatedGameAd": false,
                "markTypes": null,
                "relateSong": [],
                "relatedInfo": null,
                "videoUserLiveInfo": null,
                "vid": "A54AEB1C28CCD7990E7E6EAB56ECA485",
                "durationms": 360000,
                "playTime": 29579,
                "praisedCount": 392,
                "praised": false,
                "subscribed": false
              }
            }
          ]
          wx.hideLoading();
          let index = 0;
          let videoList = newVideoList.map(item => {
              item.id = index++;
              return item;
          })
          this.setData({
              videoList,
              isTriggered: false
          });
          return;
        }
        let videoData = await request("/video/group", {id: navId})
        wx.hideLoading();
        let index = 0;
        let videoList = videoData.datas.map(item => {
            item.id = index++;
            return item;
        })
        this.setData({
            videoList,
            isTriggered: false
        });
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})
