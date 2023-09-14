
import express from "express"
import { aboutus, deleteAbout, getAbout, Updateabout, createFantasy, deletefantasy, getfantasyp, UpdatefantasyP,addReels, createVideos, deleteReels, deletevideos, getallVideos, getReels, updateReels, UpdateVideos,createLatestNews, createNews, deleteLatestNews, deleteNews, getallLatestNews, getallNews, UpdateLatestNews, UpdateNews, createAD, getAD, updatedAD, DeletedAD, createbanner, getbanner, updatedbanner, Deletedbanner, createSport, getSport, updateSport, Deletesport } from "../controllers/adminController.js"
import { authorizadmin, isAuthenticated } from "../middlewares/auth.js"



const router = express.Router()
//AboutUs routes
router.route("/addAboutUs").post(isAuthenticated,authorizadmin,aboutus)
router.route("/aboutUs").get(getAbout)
router.route("/updateAbout").get(isAuthenticated,authorizadmin,Updateabout)
router.route("/deleteAbout").get(isAuthenticated,authorizadmin,deleteAbout)
//News routes
router.route("/createnews").post(isAuthenticated,authorizadmin,createNews)
router.route("/createLatestnews").post(isAuthenticated,authorizadmin,createLatestNews)
router.route("/news").get(getallNews)
router.route("/LatestNews").get(getallLatestNews)
router.route("/news/:id").delete(isAuthenticated,authorizadmin,deleteNews).put(isAuthenticated,authorizadmin,UpdateNews)
router.route("/Latestnews/:id").delete(isAuthenticated,authorizadmin,deleteLatestNews).put(isAuthenticated,authorizadmin,UpdateLatestNews)
//VideoRoutes
router.route("/createVideo").post(isAuthenticated,authorizadmin,createVideos)
router.route("/videoScreen").get(getallVideos)
router.route("/updateVideo/:id").put(isAuthenticated,authorizadmin,UpdateVideos)
router.route("/deleteVideos/:id").delete(isAuthenticated,authorizadmin,deletevideos)

//Fanatsy preview Routes start here

router.route("/addFanatsyP").post(isAuthenticated,authorizadmin,createFantasy)
router.route("/FantasyPreview").get(getfantasyp)
router.route("/updateFantasyPreview/:id").put(isAuthenticated,authorizadmin,UpdatefantasyP)
router.route("/deleteFantasyPreview/:id").delete(isAuthenticated,authorizadmin,deletefantasy)

//Reels Routes

router.route("/addreels").post(isAuthenticated,authorizadmin,addReels)
router.route("/reels").get(getReels)
router.route("/updatereels/:id").put(isAuthenticated,authorizadmin,updateReels)
router.route("/deletereels/:id").delete(isAuthenticated,authorizadmin,deleteReels)

//AD ROutes
router.route("/createAD").post(isAuthenticated,authorizadmin,createAD)
router.route("/AD").get(getAD)
router.route("/AD/:id").put(isAuthenticated,authorizadmin,updatedAD).delete(isAuthenticated,authorizadmin,DeletedAD)
//A Banners
router.route("/createBanner").post(isAuthenticated,authorizadmin,createbanner)
router.route("/banner").get(getbanner)
router.route("/banner/:id").put(isAuthenticated,authorizadmin,updatedbanner).delete(isAuthenticated,authorizadmin,Deletedbanner)


//sports
router.route("/createSport").post(isAuthenticated,authorizadmin,createSport)
router.route("/sport").post(getSport)
router.route("/updateSport").put(isAuthenticated,authorizadmin,updateSport)
router.route("/deleteSport").delete(isAuthenticated,authorizadmin,Deletesport)

export default router