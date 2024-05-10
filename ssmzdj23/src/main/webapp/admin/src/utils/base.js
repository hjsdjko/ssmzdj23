const base = {
    get() {
                return {
            url : "http://localhost:8080/ssmzdj23/",
            name: "ssmzdj23",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmzdj23/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "小说阅读器小程序"
        } 
    }
}
export default base
