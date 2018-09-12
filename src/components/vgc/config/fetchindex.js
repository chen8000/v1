


// //  配置json请求地址
// const __HOST__ = 'http://localhost:3000/'

// // detail
// export const detailJson = `http://localhost:8000/vgc`

// // select 部门
// export const selectJson = `${__HOST__}/json/select.json`

// // stacked 
// export const stackedJson = `${__HOST__}/json/stacked.json`

// // topposts
// export const topPosts = `${__HOST__}/json/topposts.json`

// // topusers
// export const topUsers = `${__HOST__}/json/topusers.json`

// // OverView
// export const OverViewJson = `${__HOST__}/json/overview.json`






//  配置json请求地址
const __HOST__ = 'Handlers/DashboardService.ashx?Method='

// detail  折线图
export const detailJson = `${__HOST__}getCompanyData`

// select 部门list
export const selectJson = `${__HOST__}getDeptData`

// stacked  柱形图
export const stackedJson = `${__HOST__}getSiteData`

// topposts  posts
export const topPosts = `${__HOST__}getSiteTopPosts`

// topusers  users
export const topUsers = `${__HOST__}getSiteTopUsers`

// OverView  头部文字
export const OverViewJson = `${__HOST__}getSiteOverView`





