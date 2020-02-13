'use strict';
var hourlyTimeArray = ['7AM', '8AM', '9AM', '10AM', '11AM', 'NOON', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM'];
var shopNames = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima']
var cookieTotal= 0;

function Location(name, min, max, avg){
    this.shopName = name;
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
    Location.prototype.render = function(){
        
            var tableBody = document.getElementById('tBody');
            var list = document.createElement('tr');
            var shops = document.createElement('td')
            var cookieSales = [];
            shops.textContent = this.shopName;
            list.appendChild(shops);
            tableBody.appendChild(list);
                for (var i = 0; i < hourlyTimeArray.length; i++){
                var data = document.createElement('td')
                data.textContent = this.hourlyCookieArray[i];
                list.appendChild(data);
                tableBody.appendChild(list);
                cookieSales[i] = this.hourlyCookieArray[i];
                }
           
            }
            cookieSales.push(this.totalCookies);
            cookieTotal.push(cookieSales);
            var storeData = document.createElement('td');
            storeData.textContent = this.totalCookies;
        // storeRow.appendChild(storeData);
        // storeBody.appendChild(storeRow);
        // storeTable.appendChild(storeBody);
    

    var storeTable = document.getElementById('table');

    //Syntax borrowed from another student's repository
    function createHeaderRow(){
        var storeTableHead = document.getElementById('tableHead');
        var headRow = document.getElementById('headerRow');
        var hoursData = document.createElement('td');
        headRow.appendChild(hoursData);
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
renderTable(shopNames);


function setHourlyCustomers (min, max){
    var answer =  Math.floor((Math.random())*(max-min))+min;
    return answer;
}

 var seattle = new Location(23, 65, 6.3);

 seattle.setHourlyCustomerArray(seattle.minHourlyCustomers, seattle.maxHourlyCustomers);
 seattle.setHourlyCookieArray(); 
 seattle.setTotalCookies();
 
//  var tokyo = new Location(3, 24, 1.2);

//  tokyo.setHourlyCustomerArray(tokyo.minHourlyCustomers, tokyo.maxHourlyCustomers);
//  tokyo.setHourlyCookieArray();   
//  //document.getElementById("tokyo").appendChild(tokyo.makeUL(tokyo.hourlyCookieArray));
//  tokyo.setTotalCookies();

//  var dubai = new Location(11, 38, 3.7);
  
//  dubai.setHourlyCustomerArray(dubai.minHourlyCustomers, dubai.maxHourlyCustomers);
//  dubai.setHourlyCookieArray();   
//  //document.getElementById("dubai").appendChild(dubai.makeUL(dubai.hourlyCookieArray));
//  dubai.setTotalCookies();

//  var paris = new Location(20, 38, 2.3);

//  paris.setHourlyCustomerArray(paris.minHourlyCustomers, paris.maxHourlyCustomers);
//  paris.setHourlyCookieArray();   
//  //document.getElementById("paris").appendChild(paris.makeUL(paris.hourlyCookieArray));
//  paris.setTotalCookies();

//  var lima = new Location(2, 16, 4.6);

//  lima.setHourlyCustomerArray(lima.minHourlyCustomers, lima.maxHourlyCustomers);
//  lima.setHourlyCookieArray();   
//  //document.getElementById("lima").appendChild(lima.makeUL(lima.hourlyCookieArray));
//  lima.setTotalCookies();

