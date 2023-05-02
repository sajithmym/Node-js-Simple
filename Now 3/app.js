const Pkg = require("express")
const path = require("path")
const Get = require("./Route/get")
const Post = require("./Route/post")

const Dude = Pkg()
Dude.set(Pkg.static(path.join(__dirname,'css')))
Dude.set('view engine','ejs')
Dude.set('views','Page')


Dude.use(Get.r)
Dude.use(Post.r)


Dude.listen(4044,() => console.log("Click http://127.0.0.1:4044"))