// Code your solution here
function findMatching(drivers, name){
    const matchingDriver = drivers.filter(driver =>
        driver.toLowerCase() == name.toLowerCase()); // Changes both the driver and name to lower case for case sensitivity
    return matchingDriver;
}

function fuzzyMatch(drivers, name){
    const beginningLetters = drivers.filter(driver =>
        driver.charAt(0) === name.charAt(0));
    return beginningLetters;
}

function matchName(drivers, name){

    const matchData = drivers.filter(data => data.name === name)
    return matchData;

}