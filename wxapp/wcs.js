const axios = require("axios");
class WeChatCodeServer {
    constructor(options) {
        this.serverUrl = options.url;
        this.appid = options.appid;
        this.auth = options.auth;
    }
    getCode(openid) {
        return new Promise((resolve, reject) => {
            axios.post(this.serverUrl + '/wx/code', { appid: this.appid, openid }, {
                headers: {
                    'auth': this.auth
                },
                timeout: 30 * 1000
            }).then(res => {

                resolve(res);
            }).catch(err => {
                reject(err);
            });
        });
    }
    init(openid) {
        return new Promise((resolve, reject) => {
            axios.post(this.serverUrl + '/init', { appid: this.appid, openid }, {
                headers: {
                    'auth': this.auth
                }
            }).then(res => {

                resolve(res);
            }).catch(err => {
                reject(err);
            });
        });
    }
    close(openid) {
        return new Promise((resolve, reject) => {
            axios.post(this.serverUrl + '/close', { appid: this.appid,openid: openid }, {
                headers: {
                    'auth': this.auth
                }
            }).then(res => {

                resolve(res);
            }).catch(err => {
                reject(err);
            });
        });
    }
    cloudInit(openid) {
        return new Promise((resolve, reject) => {
            axios.post(this.serverUrl + '/wx/call/init', { appid: this.appid, openid }, {
                headers: {
                    'auth': this.auth
                },
                timeout: 30 * 1000
            }).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            });
        });
    }
    cloudCall(openid) {
        return new Promise((resolve, reject) => {
            axios.post(this.serverUrl + '/wx/cloud/call', { appid: this.appid, openid }, {
                headers: {
                    'auth': this.auth
                },
                timeout: 30 * 1000
            }).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            });
        });
    }
}
module.exports = WeChatCodeServer;