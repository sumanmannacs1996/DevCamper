// @desc    Get all BootCamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: "Show all bootcamps" })
}


// @desc    Get a single BootCamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Show bootcamp ${req.params.id}` })
}


// @desc    Create new BootCamp
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: "Create new bootcamp" })
}


// @desc    Update a BootCamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Show updated bootcamp ${req.params.id}` });
}


// @desc    Delete a BootCamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Show deleted bootcamp ${req.params.id}` });
}