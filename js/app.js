'use strict';
var hourlyTimeArray = ['7AM:', '8AM:', '9AM:', '10AM:', '11AM:', 'NOON:', '1PM:', '2PM:', '3PM:', '4PM:', '5PM:', '6PM:', '7PM:', '8PM:', '9PM:'];

function Location(min, max, avg){
    this.minHourlyCustomers = min;
    this.maxHourlyCustomers = max;
    this.avgCookiesPerCustomer = avg;
    this.hourlyCustomerArray = this.setHourlyCustomerArray;
    this.hourlyCookieArray = this.setHourlyCookieArray;

}

    Location.prototype.makeUL = function(array) {
        var list = document.createElement('ul');
        for (var i = 0; i < hourlyTimeArray.length; i++) {
            var item = document.createElement('li');
            item.appendChild(document.createTextNode(hourlyTimeArray[i] + ' ' + array[i] + ' cookies'));
            list.appendChild(item);
            }
            return list;
        }

    Location.prototype.setHourlyCustomers = function(min, max){
        var answer =  Math.floor((Math.random())*(max-min))+min;
        return answer;
    }

    Location.prototype.setHourlyCustomerArray = function() {
   
        var hourlyCustomers = Math.floor(setHourlyCustomers(this.minHourlyCustomers, this.maxHourlyCustomers));
    
        for (i=0; i< 15; i++) {
             this.hourlyCustomerArray[i] = hourlyCustomers;
             hourlyCustomers = Math.floor(setHourlyCustomers(this.minHourlyCustomers, this.maxHourlyCustomers));
         }
    }
    Location.prototype.setHourlyCookieArray = function() {
        for (i=0; i< 15; i++) {
            this.hourlyCookieArray[i] = Math.floor((this.avgCookiesPerCustomer * this.hourlyCustomerArray[i]));
        }

    }
        



 seattle.setHourlyCustomerArray();
 document.getElementById("seattle").appendChild(makeUL(seattle.hourlyCookieArray));



var tokyo = {
    minHourlyCustomers: 3,
    maxHourlyCustomers: 24,
    avgCookiesPerCustomer: 1.2,
    hourlyCustomerArray: [],
    hourlyCookieArray: [],
    setHourlyCustomerArray: function () {
        var hourlyCustomers = Math.floor(setHourlyCustomers(this.minHourlyCustomers, this.maxHourlyCustomers));
    
        for (i=0; i< 15; i++) {
            this.hourlyCustomerArray[i] = hourlyCustomers;
            hourlyCustomers = Math.floor(setHourlyCustomers(this.minHourlyCustomers, this.maxHourlyCustomers));
        }
        for (i=0; i< 15; i++) {
            this.hourlyCookieArray[i] = Math.floor((this.avgCookiesPerCustomer * this.hourlyCustomerArray[i]));
        }
    }
}
tokyo.setHourlyCustomerArray();
document.getElementById("tokyo").appendChild(makeUL(tokyo.hourlyCookieArray));
  
var dubai  = {
    minHourlyCustomers: 11,
    maxHourlyCustomers: 38,
    avgCookiesPerCustomer: 3.7,
    hourlyCustomerArray: [],
    hourlyCookieArray: [],
    setHourlyCustomerArray: function () {
        var hourlyCustomers = Math.floor(setHourlyCustomers(this.minHourlyCustomers, this.maxHourlyCustomers));
    
        for (i=0; i< 15; i++) {
            this.hourlyCustomerArray[i] = hourlyCustomers;
            hourlyCustomers = Math.floor(setHourlyCustomers(this.minHourlyCustomers, this.maxHourlyCustomers));
        }
        for (i=0; i< 15; i++) {
            this.hourlyCookieArray[i] = Math.floor((this.avgCookiesPerCustomer * this.hourlyCustomerArray[i]));
        }
    }
}
dubai.setHourlyCustomerArray();
document.getElementById("dubai").appendChild(makeUL(dubai.hourlyCookieArray));

var paris = {
    minHourlyCustomers: 20,
    maxHourlyCustomers: 38,
    avgCookiesPerCustomer: 2.3,
    hourlyCustomerArray: [],
    hourlyCookieArray: [],
    setHourlyCustomerArray: function () {
        var hourlyCustomers = Math.floor(setHourlyCustomers(this.minHourlyCustomers, this.maxHourlyCustomers));
    
        for (i=0; i< 15; i++) {
            this.hourlyCustomerArray[i] = hourlyCustomers;
            hourlyCustomers = Math.floor(setHourlyCustomers(this.minHourlyCustomers, this.maxHourlyCustomers));
        }
        for (i=0; i< 15; i++) {
            this.hourlyCookieArray[i] = Math.floor((this.avgCookiesPerCustomer * this.hourlyCustomerArray[i]));
        }
    }
}
paris.setHourlyCustomerArray();
document.getElementById("paris").appendChild(makeUL(paris.hourlyCookieArray));

    var lima = {
    minHourlyCustomers: 2,
    maxHourlyCustomers: 16,
    avgCookiesPerCustomer: 4.6,
    hourlyCustomerArray: [],
    hourlyCookieArray: [],
    setHourlyCustomerArray: function () {
        var hourlyCustomers = Math.floor(setHourlyCustomers(this.minHourlyCustomers, this.maxHourlyCustomers));
    
        for (i=0; i< 15; i++) {
            this.hourlyCustomerArray[i] = hourlyCustomers;
            hourlyCustomers = Math.floor(setHourlyCustomers(this.minHourlyCustomers, this.maxHourlyCustomers));
        }
        for (i=0; i< 15; i++) {
            this.hourlyCookieArray[i] = Math.floor((this.avgCookiesPerCustomer * this.hourlyCustomerArray[i]));
        }
    }
}
lima.setHourlyCustomerArray();
document.getElementById("lima").appendChild(makeUL(lima.hourlyCookieArray));


