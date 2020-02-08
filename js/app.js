var hourlyTimeArray = ['7AM', '8AM', '9AM', '10AM', '11AM', 'NOON', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM']
function setHourlyCustomers(min, max){
    var answer =  Math.floor((Math.random())*(max-min))+min;
    return answer;
}

var seattle = {
    minHourlyCustomers: 23,
    maxHourlyCustomers: 65,
    avgCookiesPerCustomer: 6.3,
    hourlyCustomerArray: [],
    hourlyCookieArray:[] 
}
    seattle.hourlyCustomers = setHourlyCustomers(seattle.minHourlyCustomers, seattle.maxHourlyCustomers);
    seattle.hourlyCustomers = Math.floor(seattle.hourlyCustomers);
    
    for (i=0; i< 15; i++) {
        seattle.hourlyCustomerArray[i] = seattle.hourlyCustomers;
        seattle.hourlyCustomers = setHourlyCustomers(seattle.minHourlyCustomers, seattle.maxHourlyCustomers);
        seattle.hourlyCustomers = Math.floor(seattle.hourlyCustomers);
    }
    for (i=0; i< 15; i++) {
        seattle.hourlyCookieArray[i] = Math.floor((seattle.avgCookiesPerCustomer * seattle.hourlyCustomerArray[i]));
    }
var tokyo = {
    minHourlyCustomers: 3,
    maxHourlyCustomers: 24,
    avgCookiesPerCustomer: 1.2,
    hourlyCustomerArray: [],
    hourlyCookieArray: []
}
    tokyo.hourlyCustomers = setHourlyCustomers(tokyo.minHourlyCustomers, tokyo.maxHourlyCustomers);
    tokyo.hourlyCustomers = Math.floor(tokyo.hourlyCustomers);

    for (i=0; i< 15; i++) {
        tokyo.hourlyCustomerArray[i] = tokyo.hourlyCustomers;
        tokyo.hourlyCustomers = setHourlyCustomers(tokyo.minHourlyCustomers, tokyo.maxHourlyCustomers);
        tokyo.hourlyCustomers = Math.floor(tokyo.hourlyCustomers);
    }
    for (i=0; i< 15; i++) {
        tokyo.hourlyCookieArray[i] = Math.floor((tokyo.avgCookiesPerCustomer * tokyo.hourlyCustomerArray[i]));
    }
    console.log(tokyo.hourlyCookieArray);
    console.log(tokyo.hourlyCustomerArray);
var dubai  = {
    minHourlyCustomers: 11,
    maxHourlyCustomers: 38,
    avgCookiesPerCustomer: 3.7,
    hourlyCustomerArray: [],
    hourlyCookieArray: []
    }
    dubai.hourlyCustomers = setHourlyCustomers(dubai.minHourlyCustomers, dubai.maxHourlyCustomers);
    dubai.hourlyCustomers = Math.floor(dubai.hourlyCustomers);

    for (i=0; i< 15; i++) {
        dubai.hourlyCustomerArray[i] = dubai.hourlyCustomers;
        dubai.hourlyCustomers = setHourlyCustomers(dubai.minHourlyCustomers, dubai.maxHourlyCustomers);
        dubai.hourlyCustomers = Math.floor(dubai.hourlyCustomers);
    }
    for (i=0; i< 15; i++) {
        dubai.hourlyCookieArray[i] = Math.floor((dubai.avgCookiesPerCustomer * dubai.hourlyCustomerArray[i]));
    } 
var paris = {
    minHourlyCustomers: 20,
    maxHourlyCustomers: 38,
    avgCookiesPerCustomer: 2.3,
    hourlyCustomerArray: [],
    hourlyCookieArray: []
    }
    paris.hourlyCustomers = setHourlyCustomers(paris.minHourlyCustomers, paris.maxHourlyCustomers);
    paris.hourlyCustomers = Math.floor(paris.hourlyCustomers);

    for (i=0; i< 15; i++) {
        paris.hourlyCustomerArray[i] = paris.hourlyCustomers;
        paris.hourlyCustomers = setHourlyCustomers(paris.minHourlyCustomers, paris.maxHourlyCustomers);
        paris.hourlyCustomers = Math.floor(paris.hourlyCustomers);
    }
    for (i=0; i< 15; i++) {
        paris.hourlyCookieArray[i] = Math.floor((paris.avgCookiesPerCustomer * paris.hourlyCustomerArray[i]));
    }
    var lima = {
    minHourlyCustomers: 2,
    maxHourlyCustomers: 16,
    avgCookiesPerCustomer: 4.6,
    hourlyCustomerArray: [],
    hourlyCookieArray: []
    }
    lima.hourlyCustomers = setHourlyCustomers(lima.minHourlyCustomers, lima.maxHourlyCustomers);
    lima.hourlyCustomers = Math.floor(lima.hourlyCustomers);

    for (i=0; i< 15; i++) {
        lima.hourlyCustomerArray[i] = lima.hourlyCustomers;
        lima.hourlyCustomers = setHourlyCustomers(lima.minHourlyCustomers, lima.maxHourlyCustomers);
        lima.hourlyCustomers = Math.floor(lima.hourlyCustomers);
    }
    for (i=0; i< 15; i++) {
        lima.hourlyCookieArray[i] = Math.floor((lima.avgCookiesPerCustomer * lima.hourlyCustomerArray[i]));
    }



