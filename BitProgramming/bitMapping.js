function displaySetItem(num) {
    let current = 1;
    while (num) {
        if (num & 1) {
            console.log(current);
        };
        current += 1;
        num = num >> 1;
    }
}

function addToSet(subset, num) {
    subset = subset ^ (1 << num-1);
    return subset;
}
function removeToSet(subset, num) {
    //if exists
    subset = subset ^ (1 << num-1);
    return subset;
}
displaySetItem(2);
displaySetItem(removeToSet(2,2));
//displaySetItem(15);