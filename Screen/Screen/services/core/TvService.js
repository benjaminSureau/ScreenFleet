function updateTv(tv, body){
    return new Promise(((resolve) => {
        if(typeof body.compositionId != 'undefined')
            tv.compositionId = body.compositionId;
        resolve({status: 'UPDATED', tv: tv});
    }));
}

module.exports = {
    updateTv
};