export default {
    state: { visitedRoutes: [] },
    getters: {
        visitedRoutes: state => state.visitedRoutes
    },
    mutations: {
        addVisitedRoutes(state, route) { // 添加
            if (state.visitedRoutes.some(vroute => vroute.path === route.path)) return
            state.visitedRoutes.push({ ...route })
        },
        delAllVisitedRoutes(state) { // 清空所有
            state.visitedRoutes = state.visitedRoutes.filter(vroute => vroute.meta.isHome)
        },
        delOtherVisitedRoutes(state, route) { // 清空其他
            state.visitedRoutes = state.visitedRoutes.filter(vroute => {
                return vroute.meta.isHome || vroute.path === route.path
            })
        },
        delRightVisitedRoutes(state, route) { // 清空右边
            const activeIndex = state.visitedRoutes.findIndex(vroute => vroute.path === route.path)
            state.visitedRoutes = state.visitedRoutes.filter((vroute, index) => {
                return vroute.meta.isHome || index <= activeIndex
            })
        },
        delLeftVisitedRoutes(state, route) { // 清空左边
            const activeIndex = state.visitedRoutes.findIndex(vroute => vroute.path === route.path)
            state.visitedRoutes = state.visitedRoutes.filter((vroute, index) => {
                return vroute.meta.isHome || index >= activeIndex
            })
        },
        delOwnVisitedRoutes(state, route) { // 删除单选
            state.visitedRoutes = state.visitedRoutes.filter(vroute => vroute.path !== route.path)
        }
    },
    actions: {

    }
}