import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 15000;
// axios.defaults.headers["Content-Type"] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://127.0.0.1:5000';//api通用前缀设置
axios.defaults.baseURL = 'http://fizzday.net/api';//api通用前缀设置
// axios.defaults.baseURL = 'https://api.simboss.com';//api通用前缀设置
// axios.defaults.baseURL = 'http://mobile_card.cc';//api通用前缀设置

axios.interceptors.request.use(
    function (config) {
        if (config.method == 'post') {
            config.data = qs.stringify(config.data
                // {
            // ...config.data,
            // timestamp: timestamp,
            // appid: 123
        // }
        )
        }
        return config
    }, function (error) {
        return Promise.reject(error)
    }
);


export default axios