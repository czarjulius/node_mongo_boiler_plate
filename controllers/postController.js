 import Posts from '../models/Posts'
 
 class Post{
     static async getAll (req, res){
        try {
            const post =  await Posts.find();
            if (!post) {
                throw error('No item!')
            }
            res.status(200).json(post)
        } catch (error) {
            res.status(400).json({msg: error})
        }
    }

    static async getById(req, res){
        try {
            const post =  await Posts.findById(req.params.id);
            if (!post) {
                throw error('No item!')
            }
            res.status(200).json(post)
        } catch (error) {
            res.status(400).json({msg: error})
        }
    }

    static async AddPost(req, res){
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
    }

    static async deletePost(req, res){
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
        }

    static async updatePost(req,res){
            try {
                const post = await Posts.findByIdAndUpdate(req.params.id, req.body)
                if(!post) throw Error('Something went wrong!');
                res.status(200).json({
                    msg: 'Update successful'
                })
        
            } catch (error) {
                res.status(400).json({msg: error})
            }
        }
 }
 
export default Post;
