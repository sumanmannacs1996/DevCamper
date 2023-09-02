const express = require('express');
const { getBootcamps, getBootcamp, createBootcamps, updateBootcamps, deleteBootcamps } = require('../controllers/bootcamps');
const router = express.Router();

/*
router.get('/', getBootcamps)
router.get('/:id', getBootcamp)
router.post('/', createBootcamps)
router.put('/:id', updateBootcamps)
router.delete('/:id', deleteBootcamps)
*/

router.route('/').get(getBootcamps).post(createBootcamps)
router.route('/:id').get(getBootcamp).put(updateBootcamps).delete(deleteBootcamps)

module.exports = router