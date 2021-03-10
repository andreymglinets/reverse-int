module.exports = function reverse (n) {
    if (n<0){
        n*=-1;
        n = Number (n.toString().split('').reverse().join(''));
        return n;
        }else{
        n = Number (n.toString().split('').reverse().join(''));
        return n;
        }
}
