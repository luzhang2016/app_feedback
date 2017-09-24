import axios from 'axios'
import qs from 'qs'

const apiUrl = '';
// axios.defaults.headers.post['Content-Type'] = 'application/json';

class apiService {
    constructor(Vue) {
        //  this.Vue = new Vue();
    }

    getHot() {
        return axios.get(apiUrl + '/api/hot');
    }
    getSearch(val) {
        if (!val) return;
        val && (val = val.trim());
        return axios.get(apiUrl + '/api/search?wd=' + (val));
    }
    getCategories() {
        return axios.get(apiUrl + '/api/categories');
    }
    getDirections() {
        return axios.get(apiUrl + '/api/directions');
    }

    getCategory(uuid) {
        return axios.get(apiUrl + '/api/category/' + uuid)
    }
    getQas(uuid) {
        return axios.get(apiUrl + '/api/' + uuid + '/qas')
    }
    getQa(uuid) {
        return axios.get(apiUrl + '/api/qa/' + uuid);
    }
    getRelate(uuid) {
        return axios.get(apiUrl + '/api/relate?uuid=' + uuid);
    }
    submit(opinion, date, name, mobile, images, errortime) {
        return axios.post(apiUrl + '/api/submit', {
            opinion: opinion,
            date: date,
            name: name,
            mobile: mobile,
            images: images,
            errortime: errortime
        });
    }
}



function plugin_api(Vue) {

    let api = new apiService(Vue);
    Vue.plugin_api = api;

    Object.defineProperties(Vue.prototype, {
        $plugin_api: {
            get: function() {
                return api;
            }
        }
    });
}


export default plugin_api;