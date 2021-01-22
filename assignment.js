// https://github.com/ShamantaSristy/basicJavascript



// problem-1 (Converting Kilometer To Meter)

    function kilometerToMeter(kilometer){
        var meter = kilometer * 1000;
        if(kilometer<0){
            return "Distance can not be negative"
        }

        return meter;
    }
    //  calling function

    var distanceInMeter = kilometerToMeter(-13.4);
    console.log(distanceInMeter);



// problem-2 (Calculation of Electronics budget)

    function budgetCalculator(watch,phone,laptop){
        //  Step.1 In case of unexpected input
        if(watchPrice<0 || phonePrice<0 || laptopPrice<0){
            return "Quantity can not be negative"
        }
        function fragmentedNumber(number) {
            return Number (number) === number && number % 1 !== 0; 
        }
        if(fragmentedNumber(watch)==true || fragmentedNumber(phone)==true || fragmentedNumber(laptop)==true ) {
            return " Insert a valid product quantity";
        }
        // Step.2 calculation of price for each product
        var watchPrice = watch*50;
        var phonePrice = phone*100;
        var laptopPrice = laptop*500;

        // Step.3 total cost 
        var totalCost = watchPrice + phonePrice + laptopPrice;

        
        return totalCost;

    }
    var totalCost = budgetCalculator(0.1,100,7);
    console.log(totalCost);



// problem-3 ( cost for styaing in hotel) 

    function hotelCost(spentDays){
        //  Step.1 In case of unexpected input
        if(spentDays<0){
        return "Number of days can not be negative"
    }
    function fragmentedDays(spentDays) {
        return Number (spentDays) === spentDays && spentDays % 1 !== 0; 
    }
    if(fragmentedDays(spentDays)==true) {
        return "Enter a positive number of days";
    }
    // step.2 if spent days are between the first ten days
    if(spentDays <= 10){
        cost = spentDays*100;
    }
    // step.3 if spent days are between first twenty days
    else if(spentDays <= 20){
        var firstTenDays = 10*100;
        var remainingDays = spentDays - 10;
        var otherDays = remainingDays*80;
        cost = firstTenDays + otherDays; 
    }
    // step.4 if spnt days are more than twenty days
    else{
        var firstTenDays = 10*100;
        var secondTenDays = 10*80;
        var remainingDays = spentDays - 20;
        var otherDays = remainingDays*50;
        cost = firstTenDays + secondTenDays + otherDays;
    }
    return cost;
    }
    var cost=hotelCost(6.4);
    console.log(cost);



// problem-4 (finding the longest name)

    function megaFriend(friends){
        var longest = friends[0];
        for(var i= 0; i < friends.length; i++){
            var name = friends[i];
            if(name.length > longest.length){
                longest = name;
            }
        }
        return longest;
    }
    var theLongestName = megaFriend(["jhdefce","cbbc","sherlock","john","mycroft","ihbuj"]);
    console.log(theLongestName);