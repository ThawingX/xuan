const transformType = {
    all:'type',
    country:'type',
    industry:'type',
    location:'type',
    group:'type',
    national:'type',
    bussiness:'type',
    recommended:'property',
    guid:'property',
    mandatory:'property',
    soon:'state',
    in:'state',
    replaced:'state',
    obsolete:'state'
}
function getListType(requestKey) {
    return transformType[requestKey]
}

module.exports = {
    getListType
}