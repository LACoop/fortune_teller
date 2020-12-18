const timeframe = () => {
    let time = '';
    const randNum = Math.floor(Math.random() * 3);
    console.log(randNum)
    switch (randNum) {
        case 0:
            return time = 'week'
            break;
        case 1:
            return time = 'month';
            break;
        case 2:
            return time = 'year';
            break
        default:
            console.log('Issue with timeframe function')
    }
    return time;
};

console.log(timeframe());