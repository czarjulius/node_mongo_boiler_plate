const express = require('express')

const router = express.Router()

const Posts = require('../../models/Posts')

router.get('/', async(req, res)=>{
    try {
        const post =  await Posts.find();
        if (!post) {
            throw error('No item!')
        }
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({msg: error})
    }
})

router.post('/', async(req, res)=>{
    const newPost = new Posts(req.body);
    try {
        const post = await newPost.save();
        if (!post) {
            throw error('Something went wrong!')
        }
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({msg: error})
    }
})

module.exports = router;