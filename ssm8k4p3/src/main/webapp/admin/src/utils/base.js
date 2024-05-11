const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm8k4p3/",
            name: "ssm8k4p3",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm8k4p3/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "电影院订票选座系统小程序"
        } 
    }
}
export default base
