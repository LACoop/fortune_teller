//chooses timeframe of week, month, year
const timeframe = () => {
    let time = '';
    const randNum = Math.floor(Math.random() * 3);
    //console.log(randNum)
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

const dayMonth = timeframe();

//chooses particular day or month
const partDayMonth = () => {
    let particular = '';
        if (dayMonth === 'week') {
            const randNumDay = Math.floor(Math.random() * 7)
            switch (randNumDay) {
                case 0:
                    return particular = 'Monday';
                    break;
                case 1:
                    return particular = 'Tuesday';
                    break;
                case 2:
                    return particular = 'Wednesday';
                    break;
                case 3:
                    return particular = 'Thursday';
                    break;
                case 4:
                    return particular = 'Friday';
                    break;
                case 5:
                    return particular = 'Saturday';
                    break;
                case 6:
                    return particular = 'Sunday';
                    break;
                default:
                    console.log('Issue choosing a day')
                    break;
            }
        } else if (partDayMonth === 'month') {
            const randNumMonth = Math.floor(Math.random() * 12)

        }
        return particular;
};

console.log(partDayMonth());