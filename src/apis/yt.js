import axios from 'axios'

const KEY='AIzaSyBVBV1vOf1mxHpTyVPUpvg4dCT148YSji4'

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type:'video',
        maxResults: 5,
        key: KEY
    }
})