import { createApp } from 'vue' 
import crypto from 'crypto'

const app = createApp()


const common_util = {
  onInit: (masterCode) => {
    console.log(masterCode)
  },
  lpad: (str, padLength, padString) => {
    while (str.length < padLength) {
      str = padString + str
    }
    return str
  },
  rpad: (str, padLength, padString) => {
    while (str.length < padLength) {
      str += padString
    }
    return str
  },
  isNull: (val) => {
    try {
      if (typeof val === 'number' && val === 0) {
        return false
      }
      if (typeof val === 'object') {
        if (val === null || Object.keys(val).length < 1) {
          return true
        }
      }
      if (val === null || val === '' || val === undefined || val === 'undefined' || val === 'null') {
        return true
      }
      return false
    } catch {
      return true
    }
  },
  getCommonCode: (code) => {
    const codeList = JSON.parse(window.sessionStorage.getItem('Code'))

    if (codeList === null || codeList.length < 1) {
      return null
    }
    var codeData = codeList.filter(v => {
      return v.mainCd === code
    })
    var rtnDs = []
    // rtnDs.push({
    //   value: null,
    //   label: ''
    // })
    for (var i = 0; i < codeData.length; i++) {
      rtnDs.push(codeData[i])
    }
    return rtnDs
  },
  inputScale(scale) {
    if (scale === '1') {
      return 'col-lg-1 col-md-2 col-sm-6 col-xs-12'
    } else if (scale === '2') {
      return 'col-lg-2 col-md-4 col-sm-6 col-xs-12'
    } else if (scale === '3') {
      return 'col-lg-3 col-md-6 col-sm-12 col-xs-12'
    } else if (scale === '4') {
      return 'col-lg-4 col-md-8 col-sm-12 col-xs-12'
    } else if (scale === '5') {
      return 'col-lg-5 col-md-10 col-sm-12 col-xs-12'
    } else if (scale === '6') { // TODO 여기서부터 계산점 필요
      return 'col-lg-6 col-md-7 col-sm-8 col-xs-12'
    } else if (scale === '7') {
      return 'col-lg-7 col-md-8 col-sm-9 col-xs-12'
    } else if (scale === '8') {
      return 'col-lg-8 col-md-9 col-sm-10 col-xs-12'
    } else if (scale === '9') {
      return 'col-lg-9 col-md-10 col-sm-11 col-xs-12'
    } else if (scale === '10') {
      return 'col-lg-10 col-md-11 col-sm-12 col-xs-12'
    } else if (scale === '11') {
      return 'col-lg-11 col-md-12 col-sm-12 col-xs-12'
    } else if (scale === '12') {
      return 'col-lg-12 col-md-12 col-sm-12 col-xs-12'
    } else {
      return 'col-lg-1 col-md-2 col-sm-3 col-xs-12'
    }
  },
  blockEvent(e) {
    e.stopImmediatePropagation()
    e.preventDefault()
  },
  hasOwn(obj, key) {
    var hasOwnProperty = Object.prototype.hasOwnProperty
    return hasOwnProperty.call(obj, key)
  },
  nullConvert(value, str) {
    if ((typeof value === 'number') && value === 0) value = String(value)
    if (value === null || value === '' || value === undefined || value === 'null' || String(value) === 'NaN') {
      return common_util.isNull(str) ? '' : str
    }
    return value
  },
  getHash(value) {
    return crypto.createHash('sha512').update(value, 'utf8').digest('hex')
  },
  toUTF8Array(str) {
    var utf8 = []
    for (var i = 0; i < str.length; i++) {
      var charcode = str.charCodeAt(i)
      if (charcode < 0x80) utf8.push(charcode)
      else if (charcode < 0x800) utf8.push(0xc0 | (charcode >> 6), 0x80 | (charcode & 0x3f))
      else if (charcode < 0xd800 || charcode >= 0xe000) utf8.push(0xe0 | (charcode >> 12), 0x80 | ((charcode >> 6) & 0x3f), 0x80 | (charcode & 0x3f))
      else utf8.push(0xef, 0xbf, 0xbd)
    }
    return utf8
  },
  getMask(phoneNumber) {
    if (!phoneNumber) return phoneNumber
    phoneNumber = phoneNumber.replace(/[^0-9]/g, '')

    let res = ''
    if (phoneNumber.length < 3) {
      res = phoneNumber
    }
    else {
      if (phoneNumber.substr(0, 2) == '02') {

        if (phoneNumber.length <= 5) {//02-123-5678
          res = phoneNumber.substr(0, 2) + '-' + phoneNumber.substr(2, 3)
        } else if (phoneNumber.length > 5 && phoneNumber.length <= 9) {//02-123-5678
          res = phoneNumber.substr(0, 2) + '-' + phoneNumber.substr(2, 3) + '-' + phoneNumber.substr(5)
        } else if (phoneNumber.length > 9) {//02-1234-5678
          res = phoneNumber.substr(0, 2) + '-' + phoneNumber.substr(2, 4) + '-' + phoneNumber.substr(6)
        }

      } else {
        if (phoneNumber.length < 8) {
          res = phoneNumber
        } else if (phoneNumber.length == 8) {
          res = phoneNumber.substr(0, 4) + '-' + phoneNumber.substr(4)
        } else if (phoneNumber.length == 9) {
          res = phoneNumber.substr(0, 3) + '-' + phoneNumber.substr(3, 3) + '-' + phoneNumber.substr(6)
        } else if (phoneNumber.length == 10) {
          res = phoneNumber.substr(0, 3) + '-' + phoneNumber.substr(3, 3) + '-' + phoneNumber.substr(6)
        } else if (phoneNumber.length > 10) { //010-1234-5678
          res = phoneNumber.substr(0, 3) + '-' + phoneNumber.substr(3, 4) + '-' + phoneNumber.substr(7)
        }
      }
    }
    return res
  },
  openWindow(url, title, w, h) {
    // Fixes dual-screen position                            Most browsers       Firefox
    const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left
    const dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top

    const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width
    const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height

    const left = ((width / 2) - (w / 2)) + dualScreenLeft
    const top = ((height / 2) - (h / 2)) + dualScreenTop
    const newWindow = window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left)

    // Puts focus on the newWindow
    if (window.focus) {
      newWindow.focus()
    }
  },
  getDeviceType() {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
      return "mobile";
    }
    return "desktop";
  },
  isMobile(){
    let deviceType = this.getDeviceType()
    // let width = window.innerWidth
    //   || document.documentElement.clientWidth
    //   || document.body.clientWidth;

    return (['tablet','mobile']).includes(deviceType) //  || width < 1280
  },

  getMlt: (mltCode, params) => {
    let pMltCode
    let pParams

    if (!this.isNull(params)) pParams = params

    if (this.isNull(mltCode)) {
      return this.nullConvert(mltCode)
    }

    if (typeof mltCode === 'string') {
      pMltCode = mltCode
    } else if (typeof mltCode === 'object') {
      pMltCode = mltCode[0]
      pParams = mltCode[1]
    }

    const mltList = JSON.parse(window.sessionStorage.getItem('MltList'))

    if (mltList === null || mltList.length < 1) {
      return mltCode
    }

    const textObj = mltList.find(v => v.textCd === pMltCode)

    if (this.isNull(textObj)) {
      return pMltCode// + ' [등록!]'
    }

    let mlangNm = textObj.mlangNm
    mlangNm = mlangNm.replaceAll('\\n', `\n`)

    if (!this.isNull(pParams) && pParams.length > 0) {
      pParams.forEach((item, i) => {
        mlangNm = mlangNm.replace(`{${i + 1}}`, item)
      })
    }

    return mlangNm
  },
}
export default common_util

app.config.globalProperties.$scrollToTop = () => window.scrollTo(0,0)
app.config.globalProperties.$isNull = common_util.isNull
app.config.globalProperties.$onInit = common_util.onInit
app.config.globalProperties.$getCommonCode = common_util.getCommonCode
app.config.globalProperties.$inputScale = common_util.inputScale
app.config.globalProperties.$blockEvent = common_util.blockEvent
app.config.globalProperties.$hasOwn = common_util.hasOwn
app.config.globalProperties.$nullConvert = common_util.nullConvert
app.config.globalProperties.$getHash = common_util.getHash
app.config.globalProperties.$lpad = common_util.lpad
app.config.globalProperties.$rpad = common_util.rpad
app.config.globalProperties.$openWindow = common_util.openWindow
app.config.globalProperties.$getMlt = common_util.getMlt 