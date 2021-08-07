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

exports.row = (data, start) => {
    let ret = []
    let startAt = parseInt(start);
    if (!startAt) startAt = 0;
    for (let i = startAt; i < (startAt + 200); i++) {
        ret.push(data[i]);
    }
    return ret
}
