import AddBlog from './AddBlog'
import ShowBlogs from './showBlogs'
import singleBlog from './singleBlog'

export default[
    {path:'/',component:ShowBlogs},
    {path:'/add',component:AddBlog},
    {path:'/blog/:id',component:singleBlog}
]