import { AboutUs } from "../models/AboutUs.js";
import { FantasyP } from "../models/fantasyPreviewsModels.js";
import { News } from "../models/NewsModels.js";
import { LatestNews } from "../models/LatestNews.js";
import { Reels } from "../models/RellsModels.js";
import { videoScreen } from "../models/videoScreenmodel.js";

import ErrorHandler from "../utils/errorHandler.js";
import { Banner } from "../models/BannerModel.js";
import { Sport } from "../models/SportsModels.js";

export const aboutus = async (req, res, next) => {
  try {
    const { image, title, description } = req.body;
    if (!title || !description)
      return next(new ErrorHandler("Please Enter all fields"));

    const about = await AboutUs.create({ image, title, description });
    res.status(201).json({
      success: true,
      message: "About us created successfully created successfully",
      about,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAbout = async (req, res, next) => {
  try {
    const about = await AboutUs.find();
    if (!about) return next(new ErrorHandler("Aout us not found", 400));
    res.status(200).json({
      success: true,
      about,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteAbout = async (req, res, next) => {
  try {
    const { id } = req.params;
    const about = await AboutUs.findById(id);
    if (!about) return next(new ErrorHandler("news not found", 404));
    await about.deleteOne();
    res.status(200).json({
      success: true,
      messaage: "about us delete successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

export const Updateabout = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { image, title, description } = req.body;
    const about = await AboutUs.findById(id);
    if (!about) return next(new ErrorHandler("about not found", 404));

    if (image) about.video = video;
    if (title) about.title = title;
    if (description) about.description = description;

    await about.save();
    res.status(200).json({
      success: true,
      message: "aboutus Upatded successfully",
      about,
    });
  } catch (error) {
    console.log(error);
  }
};

//Fanatsy preview Start Here

export const createFantasy = async (req, res, next) => {
  try {
    const { image, title, description, createdBy } = req.body;
    if (!title || !description)
      return next(new ErrorHandler("Please Enter all fields"));

    const fantasyp = await FantasyP.create({
      image,
      title,
      description,
      createdBy,
    });
    res.status(201).json({
      success: true,
      message: " fantasyp created successfully created successfully",
      fantasyp,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getfantasyp = async (req, res, next) => {
  try {
    const fantasyp = await FantasyP.find();
    if (!fantasyp) return next(new ErrorHandler("Aout us not found", 400));
    res.status(200).json({
      success: true,
      about,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deletefantasy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const fantasyp = await FantasyP.findById(id);
    if (!fantasyp) return next(new ErrorHandler("news not found", 404));
    await fantasyp.deleteOne();
    res.status(200).json({
      success: true,
      messaage: "fantasyp us delete successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

export const UpdatefantasyP = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { image, title, description, createdBy } = req.body;
    const fantasyp = await FantasyP.findById(id);
    if (!fantasyp) return next(new ErrorHandler("about not found", 404));

    if (image) fantasyp.video = video;
    if (title) fantasyp.title = title;
    if (description) fantasyp.description = description;
    if (createdBy) fantasyp.createdBy = createdBy;

    await fantasyp.save();
    res.status(200).json({
      success: true,
      message: "fantasyp Upatded successfully",
      about,
    });
  } catch (error) {
    console.log(error);
  }
};

//News Controller Start Here

export const createNews = async (req, res, next) => {
  try {
    const { Image, title, description } = req.body;
    if (!Image || !title || !description)
      return next(new ErrorHandler("Please Enter all fields"));

    const news = await News.create({ Image, title, description });
    res.status(201).json({
      success: true,
      message: "news created successfully",
      news,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createLatestNews = async (req, res, next) => {
  try {
    const { Image, title, description } = req.body;
    if (!Image || !title || !description)
      return next(new ErrorHandler("Please Enter all fields"));
    const Latestnews = await LatestNews.create({
      Image,
      title,
      description,
    });
    res.status(201).json({
      success: true,
      message: "news created successfully",
      Latestnews,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getallNews = async (req, res, next) => {
  try {
    const news = await News.find();
    res.status(200).json({
      success: true,
      news,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getallLatestNews = async (req, res, next) => {
  try {
    const Latestnews = await LatestNews.find();
    res.status(200).json({
      success: true,
      Latestnews,
    });
  } catch (error) {
    console.log(error);
  }
};
export const deleteNews = async (req, res, next) => {
  try {
    const { id } = req.params;
    const news = await News.findById(id);
    if (!news) return next(new ErrorHandler("news not found", 404));
    await news.deleteOne();
    res.status(200).json({
      success: true,
      messaage: "news delete successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

export const UpdateNews = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { Image, title, description } = req.body;
    const news = await News.findById(id);
    if (!news) return next(new ErrorHandler("news not found", 404));

    if (Image) news.Image = Image;
    if (title) news.title = title;
    if (description) news.description = description;

    await news.save();
    res.status(200).json({
      success: true,
      message: "news Upatded successfully",
      news,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteLatestNews = async (req, res, next) => {
  try {
    const { id } = req.params;
    const Latestnews = await LatestNews.findById(id);
    if (!Latestnews) return next(new ErrorHandler("news not found", 404));
    await Latestnews.deleteOne();
    res.status(200).json({
      success: true,
      messaage: "news delete successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

export const UpdateLatestNews = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { Image, title, description } = req.body;
    const Latestnews = await LatestNews.findById(id);
    if (!Latestnews) return next(ErrorHandler("news not found", 404));

    if (Image) Latestnews.Image = Image;
    if (title) Latestnews.title = title;
    if (description) Latestnews.description = description;

    await Latestnews.save();
    res.status(200).json({
      success: true,
      message: "news Upatded successfully",
      Latestnews,
    });
  } catch (error) {
    console.log(error);
  }
};

//Video Controller start here

export const createVideos = async (req, res, next) => {
  try {
    const { video, title, description, videoType } = req.body;
    if (!video || !title || !description || !videoType)
      return next(new ErrorHandler("Please Enter all fields"));

    const videos = await videoScreen.create({
      video,
      title,
      description,
      videoType,
    });
    res.status(201).json({
      success: true,
      message: "video created successfully",
      videos,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getallVideos = async (req, res, next) => {
  try {
    const videos = await videoScreen.find();
    res.status(200).json({
      success: true,
      videos,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deletevideos = async (req, res, next) => {
  try {
    const { id } = req.params;
    const videos = await videoScreen.findById(id);
    if (!videos) return next(new ErrorHandler("videos not found", 404));
    await videos.deleteOne();
    res.status(200).json({
      success: true,
      messaage: "video delete successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

export const UpdateVideos = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { video, title, description, videoType } = req.body;
    const videos = await videoScreen.findById(id);
    if (!videos) return next(new ErrorHandler("video not found", 404));

    if (video) videos.video = video;
    if (title) videos.title = title;
    if (description) videos.description = description;
    if (videoType) videos.videoType = videoType;

    await videos.save();
    res.status(200).json({
      success: true,
      message: "news Upatded successfully",
      videos,
    });
  } catch (error) {
    console.log(error);
  }
};

//Reels controlers start here

export const addReels = async (req, res, next) => {
  try {
    const { Image, video } = req.body;

    if (!Image && !video)
      return next(
        new ErrorHandler("please select atleast one picture or video")
      );

    const reels = await Reels.create({ Image, video });

    res.status(200).json({
      success: true,
      mssage: "Reels created successfuly",
      reels,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getReels = async (req, res, next) => {
  try {
    const reels = await Reels.find();
    if (!reels) return next(new ErrorHandler("data not found", 400));
    res.status(200).json({
      success: true,
      reels,
    });
  } catch (error) {
    console.log("internal serer Error", error);
  }
};

export const updateReels = async (req, res, next) => {
  const { id } = req.params;
  const { Image, video } = req.body;

  if (!Image && !video)
    return next(new ErrorHandler("please select atleast one picture or video"));

  const reel = await Reels.findById(id);
  if (!reel) return next(new ErrorHandler("data not found", 404));
  if (Image) reel.Image = Image;
  if (video) reel.video = video;
  await reel.save();
  res.status(200).json({
    success: true,
    message: "reel updated successfully",
  });
};

export const deleteReels = async (req, res, next) => {
  const { id } = req.params;
  const reels = await Reels.findById(id);
  if (!reels) return next(new ErrorHandler("data not found", 404));
  await reels.deleteOne();
  res.status(200).json({
    success: true,
    message: "reel deleted succefully",
  });
};

//AD controller start here

export const createAD = async (req, res, next) => {
  try {
    const { Image } = req.body;
    if (!Image) return next(new ErrorHandler("Image not Found", 404));
    const AD = await Banner.create({ Image, type: "AD" });
    res.status(201).json({
      success: true,
      message: "Image uploaded successfully",
      AD,
    });
  } catch (error) {
    console.log(`Internal server Error ${error}`);
  }
};

export const getAD = async (req, res, next) => {
  try {
    const AD = await Banner.find({type:"AD"});
    if(!AD) return next(new ErrorHandler("AD not found",404))
    res.status(200).json({
        success:true,
        AD
    })
  } catch (error) {
    console.log(`Internal server Error. ${error}`);
  }
};


export const updatedAD = async(req,res,next)=>{
    try {
        const{id} = req.params
        const { Image } = req.body;
        const AD = await Banner.findById(id)
        if(!AD)return next(new ErrorHandler("AD not found",404))
        if(Image) AD.Image = Image
        await AD.save()
        res.status(200).json({
            success:true,
            message:"AD Updated  successfully"
        })
    } catch (error) {
        console.log(`Internal server Error. ${error}`)
    }
}

export const DeletedAD = async(req,res,next)=>{
    try {
        const{id} = req.params
        if(!id) return next(new ErrorHandler("id not found",404))
        const AD = await Banner.findById(id)
        if(!AD)return next(new ErrorHandler("AD not found",404))
        await AD.deleteOne()
        res.status(200).json({
            success:true,
            message:"AD Deleted successfully"
        })
    } catch (error) {
        console.log(`Internal server Error. ${error}`)
    }
}
//banner controller start here

export const createbanner = async (req, res, next) => {
  try {
    const { Image } = req.body;
    if (!Image) return next(new ErrorHandler("Image not Found", 404));
    const banner = await Banner.create({ Image, type: "BANNER" });
    res.status(201).json({
      success: true,
      message: "Image uploaded successfully",
      banner,
    });
  } catch (error) {
    console.log(`Internal server Error ${error}`);
  }
};

export const getbanner = async (req, res, next) => {
  try {
    const banner = await Banner.find({type:"BANNER"});
    if(!banner) return next(new ErrorHandler("AD not found",404))
    res.status(200).json({
        success:true,
        banner
    })
  } catch (error) {
    console.log(`Internal server Error. ${error}`);
  }
};


export const updatedbanner = async(req,res,next)=>{
    try {
        const{id} = req.params
        const { Image } = req.body;
        const banner = await Banner.findById(id)
        if(!banner)return next(new ErrorHandler("AD not found",404))
        if(Image) banner.Image = Image
        await banner.save()
        res.status(200).json({
            success:true,
            message:"banner Updated  successfully"
        })
    } catch (error) {
        console.log(`Internal server Error. ${error}`)
    }
}

export const Deletedbanner = async(req,res,next)=>{
    try {
        const{id} = req.params
        if(!id) return next(new ErrorHandler("id not found",404))
        const banner = await Banner.findById(id)
        if(!banner)return next(new ErrorHandler("AD not found",404))
        await banner.deleteOne()
        res.status(200).json({
            success:true,
            message:"banner Deleted successfully"
        })
    } catch (error) {
        console.log(`Internal server Error. ${error}`)
    }
}


//Sports controller start here

export const createSport = async (req, res, next) => {
  try {
    const { Image,title,description,type } = req.body;
    if (!Image ||!title ||!description ||!type) return next(new ErrorHandler("please enter all fields", 404));
    const sport = await Sport.create({ Image,title,description, type});
    res.status(201).json({
      success: true,
      message: `${type} create successfully`,
      sport,
    });
  } catch (error) {
    console.log(`Internal server Error ${error}`);
  }
};
export const getSport = async (req, res, next) => {
  try {
  
      const sport = await Sport.find()
    res.status(201).json({
      success: true,
      sport,
    });
  } catch (error) {
    console.log(`Internal server Error ${error}`);
  }
};


export const updateSport = async (req, res, next) => {
  try {
    const{id}= req.params
    const { Image,title,description,type } = req.body;
    const sport = await Sport.findById(id)
    if(!sport)return next(new ErrorHandler("sport that you are selected not found",404))
  
    if (Image) sport.Image = Image;
    if (title) sport.title = title;
    if (description) sport.description = description;
    if(type) sport.type=type

    await sport.save()

    res.status(201).json({
      success: true,
      message: "updated successfullysuccessfully",
      sport,
    });
  } catch (error) {
    console.log(`Internal server Error ${error}`);
  }
};



export const Deletesport = async(req,res,next)=>{
  try {
      const{id} = req.params
      if(!id) return next(new ErrorHandler("id not found",404))
      const sport = await Sport.findById(id)
      if(!sport)return next(new ErrorHandler("AD not found",404))
      await sport.deleteOne()
      res.status(200).json({
          success:true,
          message:"sport Deleted successfully"
      })
  } catch (error) {
      console.log(`Internal server Error. ${error}`)
  }
}
