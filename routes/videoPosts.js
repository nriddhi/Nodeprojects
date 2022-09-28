const router = require('express').Router();
const videoPosts = require('../models/posts');

router.get('/kmn', (req, res) => { res.send("kmn")
});

router.post('/create', async function (req, res) {

    try {

        const post = await new videoPosts({
           title: req.body.title,
           author: req.body.author,
           description: req.body.description,
           link: req.body.link,
           thumbnail: req.body.thumbnail,
           date: req.body.date,
           duration: req.body.duration,
           views: req.body.views, 

        })

        const postSave = await post.save();
        res.status(200).send();
    }
    catch (err) {

        const title = await videoPosts.findOne({title: req.body.title}).select("title").lean();
        if (title) {
            res.status(406).json('Title already in used');
        }
        else { res.status(500).send('Video Creation failed');}
        
    }


});

router.get('/videos', async function(req,res){

try {

    const allVideos = await videoPosts.find();

    res.status(200).send(allVideos);

}

catch (err) {
    res.status(500).send('Error Occured');
}

})

router.get('/videos/:id', async function(req, res){ 
  try {
    const video = await videoPosts.findOne({_id: req.params.id});
    res.status(200).send(video);
}
catch (err) {   res.status(500).send('Error Occured');

}

})

router.patch('/editVideo/:title', async function(req, res){ 

    const video = await videoPosts.findOneAndUpdate({title: req.params.title}, req.body, {
        new: true
      });
    res.status(200).send(req.body);


})

router.delete('/deleteVideo/:id', async function(req, res){ 

    const video = await videoPosts.findByIdAndRemove(req.params.id);
    res.status(200).send(video);

})

module.exports = router;