exports.success = (req, res, mess, statusNumber) => {
    res.status(statusNumber || 200).send({
        'body': mess
    })
}

exports.error = (req, res, mess, statusNumber) => {
    res.status(statusNumber || 500).send({
        'body': '',
        'error': mess
    })
}