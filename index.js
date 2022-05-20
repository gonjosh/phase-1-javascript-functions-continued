// code your solution here
function saturdayFun(activity = "roller-skate") {
    return(`This Saturday, I want to ${activity}!`);
}
saturdayFun('play sports');

function mondayWork (activity = "go to the office") {
    return(`This Monday, I will ${activity}.`);
}
mondayWork("go to a meeting");

function wrapAdjective(action) {
    const part1 = 'You are';
    const part2 = 'a hard worker';
    const part3 = 'a dedicated programmer'
    if (action === "*"){
        return () => `${part1} *${part2}*!`;
    }
    if (action === "||"){
        return () => `${part1} ||${part3}||!`;
    }
}


