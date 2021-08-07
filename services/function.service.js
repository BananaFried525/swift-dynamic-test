exports.max = (object) => {
    // return Math.max.apply(Math, object.map(e => e.data));
    return object.reduce((pre, cur) => {
        return pre.data > cur.data ? pre : cur;
    })
}

exports.min = (object) => {
    // return Math.min.apply(Math, object.map(e => e.data));
    return object.reduce((pre, cur) => {
        return pre.data < cur.data ? pre : cur;
    })
}

exports.average = (object) => {
    let sum = 0;
    for (const element of object) {
        sum += element.data;
    }
    return sum / object.length;
}

exports.split = (data, page) => {
    let arr = []
    let pageStart = parseInt(page);
    let totalPage = Math.ceil(data.length / 200);
    if (!pageStart) pageStart = 1;
    let startAt = (pageStart - 1) * 200;
    let endAt = (startAt + 200);

    if(page > totalPage){
        throw('out of page')
    }

    if (page > data.length / 200) {
        endAt = startAt + (data.length % 200);
    }

    let amount = endAt - startAt;
    let growthData = 0;
    for (let i = startAt; i < endAt; i++) {
        arr.push(data[i])
        //*calculate growth of data
        if (i != startAt) {
            growthData = growthData + (data[i].data - data[i - 1].data)
        }
    }

    let firstData = data[startAt].data;
    let lastData = data[endAt - 1].data
    let deltaDiif = (lastData - firstData) / amount
    let predictedGrowth1 = lastData + deltaDiif
    let predictedGrowth7 = lastData + deltaDiif * 7

    let ret = {
        amount: amount,
        page: pageStart,
        totalPage: totalPage,
        predict1day: predictedGrowth1,
        predict7day: predictedGrowth7,
        data: arr
    }
    return ret
}
