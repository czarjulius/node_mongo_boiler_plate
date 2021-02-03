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

router.get('/:id', async(req, res)=>{
    try {
        const post =  await Posts.findById(req.params.id);
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

router.delete('/:id', async(req, res)=>{
    const {id} = req.params
    try {
        const post = await Posts.findByIdAndDelete(id);
        if (!post) {
            throw error('Post not found!')
        }
        res.status(200).json({msg: 'Deleted successfully'})
    } catch (error) {
        res.status(400).json({msg: error})
    }
})

router.patch('/:id', async(req,res)=>{
    try {
        const post = await Posts.findByIdAndUpdate(req.params.id, req.body)
        if(!post) throw Error('Something went wrong!');
        res.status(200).json({
            msg: 'Update successful'
        })

    } catch (error) {
        res.status(400).json({msg: error})
    }
})

module.exports = router;