function handleDate() {
    var result = '';
    var date = new Date();
    var month = date.getMonth() + 1 > 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
    result = `${date.getFullYear()}-${month}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    return result;
}

module.exports = {
    handleDate,
};
