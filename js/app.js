'use strict';
var hourlyTimeArray = ['7AM', '8AM', '9AM', '10AM', '11AM', 'NOON', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM'];
var shopNames = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima']

function Location(min, max, avg){
    this.minHourlyCustomers = min;
    this.maxHourlyCustomers = max;
    this.avgCookiesPerCustomer = avg;
    this.hourlyCustomerArray = [];
    this.hourlyCookieArray = [];
    this.totalCookies = 0;
} 
    Location.prototype.setHourlyCustomerArray = function() {
        for (var i=0; i< hourlyTimeArray.length; i++) {
            this.hourlyCustomerArray.push(setHourlyCustomers(this.minHourlyCustomers, this.maxHourlyCustomers));

         }
    }
    Location.prototype.setHourlyCookieArray = function() {
        for (var i=0; i< hourlyTimeArray.length; i++) {
            this.hourlyCookieArray.push(Math.floor((this.avgCookiesPerCustomer * this.hourlyCustomerArray[i])));
        }
        return this.hourlyCookieArray;

    }
    Location.prototype.setTotalCookies = function() {
        for (var i=0; i< hourlyTimeArray.length; i++)
        this.totalCookies += this.hourlyCookieArray[i];

    }
    // Location.prototype.renderTable = function(array) {
    //     for (var i = 0; i < shopNames.length; i++)
    //     var getTable = document.getElementById(headerRow);
    //     var list = document.createElement('tr');
    //     var shops = document.createElement('td')
    //     shops.textContent = shopNames[i]
    //     //     for (var i = 0; i < hourlyTimeArray.length + 1; i++) {
    //     //     var item = document.createElement('td');
    //     //     item.appendChild(document.createTextNode(this.));
    //     //     list.appendChild(item);
    //     //     };
    //     //  }
        
    function setHourlyCustomers (min, max){
            var answer =  Math.floor((Math.random())*(max-min))+min;
            return answer;
        }

    var storeTable = document.getElementById('table');

    function createHeaderRow(){
        var storeTableHead = document.getElementById('tableHead');
        var headRow = document.getElementById('headerRow');
        var hoursData = document.createElement('td');
        headRow.appendChild(hoursData);
        // Create rows of store data
        for (var i = 0; i < hourlyTimeArray.length; i ++){
            var data = document.createElement('td');
            data.textContent = hourlyTimeArray[i];
            headRow.appendChild(data);
        }
        var empty = document.getElementById('empty');
        empty.appendChild(document.createTextNode("     "));
        hoursData.textContent = 'Daily Location Total';
        headRow.appendChild(hoursData);
        storeTableHead.appendChild(headRow);
        storeTable.appendChild(storeTableHead);
        }

createHeaderRow();

 var seattle = new Location(23, 65, 6.3); 

 seattle.setHourlyCustomerArray(seattle.minHourlyCustomers, seattle.maxHourlyCustomers);
 seattle.setHourlyCookieArray();   
// document.getElementById("seattle").appendChild(seattle.makeUL(seattle.hourlyCookieArray));
 seattle.setTotalCookies();
 
 var tokyo = new Location(3, 24, 1.2);

 tokyo.setHourlyCustomerArray(tokyo.minHourlyCustomers, tokyo.maxHourlyCustomers);
 tokyo.setHourlyCookieArray();   
 //document.getElementById("tokyo").appendChild(tokyo.makeUL(tokyo.hourlyCookieArray));
 tokyo.setTotalCookies();

 var dubai = new Location(11, 38, 3.7);
  
 dubai.setHourlyCustomerArray(dubai.minHourlyCustomers, dubai.maxHourlyCustomers);
 dubai.setHourlyCookieArray();   
 //document.getElementById("dubai").appendChild(dubai.makeUL(dubai.hourlyCookieArray));
 dubai.setTotalCookies();

 var paris = new Location(20, 38, 2.3);

 paris.setHourlyCustomerArray(paris.minHourlyCustomers, paris.maxHourlyCustomers);
 paris.setHourlyCookieArray();   
 //document.getElementById("paris").appendChild(paris.makeUL(paris.hourlyCookieArray));
 paris.setTotalCookies();

 var lima = new Location(2, 16, 4.6);

 lima.setHourlyCustomerArray(lima.minHourlyCustomers, lima.maxHourlyCustomers);
 lima.setHourlyCookieArray();   
 //document.getElementById("lima").appendChild(lima.makeUL(lima.hourlyCookieArray));
 lima.setTotalCookies();

