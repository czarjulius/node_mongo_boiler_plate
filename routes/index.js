import express from 'express'
import postRoutes from './postRoutes'

const router = express.Router()

router.use('/api/posts', postRoutes);

module.exports = router;