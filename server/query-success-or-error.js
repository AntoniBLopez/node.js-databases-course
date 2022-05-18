exports.success = (req, res, message, statusNumber) => {
    res.status(statusNumber || 200).send({
        'body': message
    })
}

exports.error = (req, res, message, statusNumber, details) => {
    console.error('[response error]', details);

    res.status(statusNumber || 500).send({
        'error': message
    })
}