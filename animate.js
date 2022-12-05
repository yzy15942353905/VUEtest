function animate(obj, target, callback) {

    //先清空之前定时器，防止多个定时器共同运行会使速度加快
    clearInterval(obj.timer)

    //防止定时器重复
    obj.timer = setInterval(() => {

        if (obj.offsetLeft == target) {
            clearInterval(obj.timer)
            //如果存在回调函数，则在定时器结束后调用
            if (callback) {
                callback()
            }
        }
        //匀速移动
        // div.style.left = div.offsetLeft + 1 + 'px'

        //减速移动

        var spe = (target - obj.offsetLeft) / 10

        spe = spe > 0 ? Math.ceil(spe) : Math.floor(spe)
        // console.log(spe);
        obj.style.left = obj.offsetLeft + spe + 'px'
    }, 30);

}