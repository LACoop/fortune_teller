//chooses timeframe of week, month, year
function timeframe() {
    let time = '';
    const randNum = Math.floor(Math.random() * 2);
    //console.log(randNum)
    switch (randNum) {
        case 0:
            time = 'week';
            break;
        case 1:
            time = 'month';
            break;
        case 2:
            time = 'year';
            break
        default:
            console.log('Issue with timeframe function')
    }
    return time;
};

let timeFrame = timeframe();
//console.log(timeFrame);

//chooses particular day or month
function partDayMonth() {
        if (timeFrame === 'week') {
            const randNumDay = Math.floor(Math.random() * 7)
            let particular = '';
            switch (randNumDay) {
                case 0:
                    particular = 'Monday';
                    break;
                case 1:
                    particular = 'Tuesday';
                    break;
                case 2:
                    particular = 'Wednesday';
                    break;
                case 3:
                    particular = 'Thursday';
                    break;
                case 4:
                    particular = 'Friday';
                    break;
                case 5:
                    particular = 'Saturday';
                    break;
                case 6:
                    particular = 'Sunday';
                    break;
                default:
                    console.log('Issue choosing a day')
                    break;
            };
            return particular
        };
        if (timeFrame === 'month') {
            const randNumMonth = Math.floor(Math.random() * 12);
            let particular = '';
            switch (randNumMonth) {
                case 0:
                    particular = 'January';
                    break;
                case 1:
                    particular = 'February';
                    break;
                case 2:
                    particular = 'March';
                    break;
                case 3:
                    particular = 'April';
                    break;
                case 4:
                    particular = 'May';
                    break;
                case 5:
                    particular = 'June';
                    break;
                case 6:
                    particular = 'July';
                    break;
                case 7:
                    particular = 'August';
                    break;
                case 8:
                    particular = 'September';
                    break;
                case 9:
                    particular = 'October';
                    break;
                case 10:
                    particular = 'November';
                    break;
                case 11:
                    particular = 'December';
                    break;
                default:
                    console.log('Unable to select a particular Month')
                    break;
            };
            return particular
        };
};
//console.log(timeFrame);
//console.log(partDayMonth());
const partDM = partDayMonth()
 
//chooses event
const eventArray = ['you will find love.', 'you will come into money.', 'you will go on holiday.', 'you will meet someone new.', 'you will find your dream pet.']
const event = eventArray[i = Math.floor(Math.random() * eventArray.length)]

//console.log(event);

//sets display message
function displayMessage() {
    if (timeFrame === 'month') {
        return `In ${partDM} ${event}`;
    } else if (timeFrame === 'week') {
        return `On ${partDM} ${event}`;
    };
};

console.log(displayMessage());
