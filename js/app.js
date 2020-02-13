'use strict';
var hourlyTimeArray = ['7AM', '8AM', '9AM', '10AM', '11AM', 'NOON', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM'];
var shopNames = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima']
var cookieTotal= [];

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
            tableBody.appendChild(list);
            list.appendChild(shops);
                for (var i = 0; i < hourlyTimeArray.length; i++){
                var data = document.createElement('td')
                data.textContent = this.hourlyCookieArray[i];
                cookieSales[i] = this.hourlyCookieArray[i];
                list.appendChild(data);
                }
            cookieSales.push(this.totalCookies);
            cookieTotal.push(cookieSales);
            var storeData = document.createElement('td');
            storeData.textContent = this.totalCookies;
            table.appendChild(tableBody);
            tableBody.appendChild(list);
            list.appendChild(storeData);
        }

    var storeTable = document.getElementById('table');

    function sumArray(array) {
        var total;
        for (var i =0; i<array.length; i++) {
            total += [i];
        }
            return total;
    }

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

    function createFooterRow() {

    }

createHeaderRow();
createFooterRow();



function setHourlyCustomers (min, max){
    var answer =  Math.floor((Math.random())*(max-min))+min;
    return answer;
}

 var seattle = new Location('Seattle',23, 65, 6.3);

 seattle.setHourlyCustomerArray(seattle.minHourlyCustomers, seattle.maxHourlyCustomers);
 seattle.setHourlyCookieArray(); 
 seattle.setTotalCookies();
 seattle.render();
 
 var tokyo = new Location('Tokyo', 3, 24, 1.2);

 tokyo.setHourlyCustomerArray(tokyo.minHourlyCustomers, tokyo.maxHourlyCustomers);
 tokyo.setHourlyCookieArray();   
 tokyo.setTotalCookies();
 tokyo.render();

 var dubai = new Location('Dubai', 11, 38, 3.7);
  
 dubai.setHourlyCustomerArray(dubai.minHourlyCustomers, dubai.maxHourlyCustomers);
 dubai.setHourlyCookieArray();   
 dubai.setTotalCookies();
 dubai.render();

 var paris = new Location('Paris', 20, 38, 2.3);

 paris.setHourlyCustomerArray(paris.minHourlyCustomers, paris.maxHourlyCustomers);
 paris.setHourlyCookieArray();   
 paris.setTotalCookies();
 paris.render();

 var lima = new Location('Lima', 2, 16, 4.6);

 lima.setHourlyCustomerArray(lima.minHourlyCustomers, lima.maxHourlyCustomers);
 lima.setHourlyCookieArray();   
 lima.setTotalCookies();
 lima.render();

