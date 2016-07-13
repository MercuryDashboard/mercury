var scenarioData = [{
    name: '(0609)RoundingFactor&CriticalRatio&OrderFrequency',
    author: 'Gilseon',
    lastUpdate: "2016-03-17 16:57:25",
    lastEdit: 'Chuck Liu'
}, {
    name: '2_TEST_(*0904~)_36W_Scenario_TEST',
    author: "CHLOE",
    lastUpdate: "2015-09-07 09:30:31",
    lastEdit: 'CHLOE'
}, {
    name: 'Test Scenario 2',
    author: "anonymous",
    lastUpdate: "2016-03-04 18:13:49",
    lastEdit: 'Yang Liu'
}, {
    name: '(0605)RoundingFactor&CriticalRatio&OrderFrequency',
    author: "Gilseon",
    lastUpdate: "2015-06-05 17:44:17",
    lastEdit: 'Gilseon'
}, {
    name: 'Test_Scenario_DO NOT DELETE_(0605)RoundingFactor&CriticalRatio&OrderFrequency',
    author: "Do no",
    lastUpdate: "2016-03-16 12:31:26",
    lastEdit: 'Shi Jiaqing(Ivan/Ivan)'
}, {
    name: '(0611)RoundingFactor&CriticalRatio&OrderFrequency_25WPromotion(Current)',
    author: "Gilseon",
    lastUpdate: "2015-06-15 19:05:53",
    lastEdit: 'Gilseon'
}, {
    name: '(0611)RoundingFactor&CriticalRatio&OrderFrequency_25WPromotion(0.93)',
    author: "Gilseon",
    lastUpdate: "2015-06-15 19:05:40",
    lastEdit: 'Gilseon'
}, {
    name: '(0611)RoundingFactor&CriticalRatio&OrderFrequency_25WPromotion(0.93)',
    author: "Gilseon",
    lastUpdate: "2015-06-15 19:05:48",
    lastEdit: 'Gilseon'
}, {
    name: '(0616)RoundingFactor&CriticalRatio&OrderFrequency_25WPromotion(0.95)',
    author: "Gilseon",
    lastUpdate: "2015-06-22 19:31:45",
    lastEdit: 'Gilseon'
}, {
    name: 'current_(0616)RoundingFactor&CriticalRatio&OrderFrequency_25WPromotion(0.95)',
    author: "xxxx",
    lastUpdate: "2015-06-22 19:32:09",
    lastEdit: 'Gilseon'
}, {
    name: '(0623)RoundingFactor&CriticalRatio&OrderFrequency_25WPromotion(0.95)',
    author: "Gilseon",
    lastUpdate: "2015-06-25 10:37:10",
    lastEdit: 'Gilseon'
}, {
    name: 'GILSEON_TEST_defaultCR95%_(*0623)_25WPromotion(0.95)',
    author: "Gilseon",
    lastUpdate: "2015-06-25 10:37:50",
    lastEdit: 'Gilseon'
}, {
    name: 'GILSEON_TEST_defaultCR90%_(*0623)_25WPromotion(0.95)',
    author: "Gilseon",
    lastUpdate: "2015-06-25 10:38:04",
    lastEdit: 'Gilseon'
}, {
    name: '(0623)_25WPromotion(0.95)',
    author: "Gilseon",
    lastUpdate: "2015-06-29 18:31:52",
    lastEdit: 'Gilseon'
}, {
    name: 'Gilseon',
    author: "Gilseon",
    lastUpdate: "2015-06-25 09:14:15",
    lastEdit: 'Gilseon'
}, {
    name: 'TEST_Gilseon_PantryTop100_0.93',
    author: "Gilseon",
    lastUpdate: "2015-06-30 15:49:13",
    lastEdit: 'Gilseon'
}];

var employees = [{
    "ID": 1,
    "FirstName": "John",
    "LastName": "Heart",
    "Prefix": "Mr.",
    "Position": "CEO",
    "Picture": "images/employees/01.png",
    "BirthDate": "1964/03/16",
    "HireDate": "1995/01/15",
    "Notes": "John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003.\r\n\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.",
    "Address": "351 S Hill St.",
    "State": "California",
    "City": "Los Angeles",
    "Tasks": [{
        "ID": 5,
        "Subject": "Choose between PPO and HMO Health Plan",
        "StartDate": "2013-02-15T00:00:00",
        "DueDate": "2013-04-15T00:00:00",
        "Status": "In Progress",
        "Priority": "High",
        "Completion": 75
    }, {
        "ID": 6,
        "Subject": "Google AdWords Strategy",
        "StartDate": "2013-02-16T00:00:00",
        "DueDate": "2013-02-28T00:00:00",
        "Status": "Completed",
        "Priority": "High",
        "Completion": 100
    }, {
        "ID": 7,
        "Subject": "New Brochures",
        "StartDate": "2013-02-17T00:00:00",
        "DueDate": "2013-02-24T00:00:00",
        "Status": "Completed",
        "Priority": "Normal",
        "Completion": 100
    }, {
        "ID": 22,
        "Subject": "Update NDA Agreement",
        "StartDate": "2013-03-14T00:00:00",
        "DueDate": "2013-03-16T00:00:00",
        "Status": "Completed",
        "Priority": "High",
        "Completion": 100
    }, {
        "ID": 52,
        "Subject": "Review Product Recall Report by Engineering Team",
        "StartDate": "2013-05-17T00:00:00",
        "DueDate": "2013-05-20T00:00:00",
        "Status": "Completed",
        "Priority": "High",
        "Completion": 100
    }]
}, {
    "ID": 2,
    "FirstName": "Olivia",
    "LastName": "Peyton",
    "Prefix": "Mrs.",
    "Position": "Sales Assistant",
    "Picture": "images/employees/09.png",
    "BirthDate": "1981/06/03",
    "HireDate": "2012/05/14",
    "Notes": "Olivia loves to sell. She has been selling DevAV products since 2012. \r\n\r\nOlivia was homecoming queen in high school. She is expecting her first child in 6 months. Good Luck Olivia.",
    "Address": "807 W Paseo Del Mar",
    "State": "California",
    "City": "Los Angeles",
    "Tasks": [{
        "ID": 3,
        "Subject": "Update Personnel Files",
        "StartDate": "2013-02-03T00:00:00",
        "DueDate": "2013-02-28T00:00:00",
        "Status": "Completed",
        "Priority": "High",
        "Completion": 100
    }, {
        "ID": 4,
        "Subject": "Review Health Insurance Options Under the Affordable Care Act",
        "StartDate": "2013-02-12T00:00:00",
        "DueDate": "2013-04-25T00:00:00",
        "Status": "In Progress",
        "Priority": "High",
        "Completion": 50
    }, {
        "ID": 21,
        "Subject": "Non-Compete Agreements",
        "StartDate": "2013-03-12T00:00:00",
        "DueDate": "2013-03-14T00:00:00",
        "Status": "Completed",
        "Priority": "Low",
        "Completion": 100
    }, {
        "ID": 50,
        "Subject": "Give Final Approval for Refunds",
        "StartDate": "2013-05-05T00:00:00",
        "DueDate": "2013-05-15T00:00:00",
        "Status": "Completed",
        "Priority": "Normal",
        "Completion": 100
    }]
}, {
    "ID": 3,
    "FirstName": "Robert",
    "LastName": "Reagan",
    "Prefix": "Mr.",
    "Position": "CMO",
    "Picture": "images/employees/03.png",
    "BirthDate": "1974/09/07",
    "HireDate": "2002/11/08",
    "Notes": "Robert was recently voted the CMO of the year by CMO Magazine. He is a proud member of the DevAV Management Team.\r\n\r\nRobert is a championship BBQ chef, so when you get the chance ask him for his secret recipe.",
    "Address": "4 Westmoreland Pl.",
    "State": "Arkansas",
    "City": "Bentonville",
    "Tasks": [{
        "ID": 16,
        "Subject": "Deliver R&D Plans for 2013",
        "StartDate": "2013-03-01T00:00:00",
        "DueDate": "2013-03-10T00:00:00",
        "Status": "Completed",
        "Priority": "High",
        "Completion": 100
    }, {
        "ID": 74,
        "Subject": "Decide on Mobile Devices to Use in the Field",
        "StartDate": "2013-07-30T00:00:00",
        "DueDate": "2013-08-02T00:00:00",
        "Status": "Completed",
        "Priority": "High",
        "Completion": 100
    }, {
        "ID": 78,
        "Subject": "Try New Touch-Enabled WinForms Apps",
        "StartDate": "2013-08-11T00:00:00",
        "DueDate": "2013-08-15T00:00:00",
        "Status": "Completed",
        "Priority": "Normal",
        "Completion": 100
    }, {
        "ID": 117,
        "Subject": "Approval on Converting to New HDMI Specification",
        "StartDate": "2014-01-11T00:00:00",
        "DueDate": "2014-01-31T00:00:00",
        "Status": "Deferred",
        "Priority": "Normal",
        "Completion": 75
    }]
}, {
    "ID": 4,
    "FirstName": "Greta",
    "LastName": "Sims",
    "Prefix": "Ms.",
    "Position": "HR Manager",
    "Picture": "images/employees/04.png",
    "BirthDate": "1977/11/22",
    "HireDate": "1998/04/23",
    "Notes": "Greta has been DevAV's HR Manager since 2003. She joined DevAV from Sonee Corp.\r\n\r\nGreta is currently training for the NYC marathon. Her best marathon time is 4 hours. Go Greta.",
    "Address": "1700 S Grandview Dr.",
    "State": "Idaho",
    "City": "Boise",
    "Tasks": [{
        "ID": 20,
        "Subject": "Approve Hiring of John Jeffers",
        "StartDate": "2013-03-02T00:00:00",
        "DueDate": "2013-03-12T00:00:00",
        "Status": "Completed",
        "Priority": "Normal",
        "Completion": 100
    }, {
        "ID": 23,
        "Subject": "Update Employee Files with New NDA",
        "StartDate": "2013-03-16T00:00:00",
        "DueDate": "2013-03-26T00:00:00",
        "Status": "Need Assistance",
        "Priority": "Normal",
        "Completion": 90
    }, {
        "ID": 40,
        "Subject": "Provide New Health Insurance Docs",
        "StartDate": "2013-03-28T00:00:00",
        "DueDate": "2013-04-07T00:00:00",
        "Status": "Completed",
        "Priority": "Normal",
        "Completion": 100
    }]
}, {
    "ID": 5,
    "FirstName": "Brett",
    "LastName": "Wade",
    "Prefix": "Mr.",
    "Position": "IT Manager",
    "Picture": "images/employees/05.png",
    "BirthDate": "1968/12/01",
    "HireDate": "2009/03/06",
    "Notes": "Brett came to DevAv from Microsoft and has led our IT department since 2012.\r\n\r\nWhen he is not working hard for DevAV, he coaches Little League (he was a high school pitcher).",
    "Address": "1120 Old Mill Rd.",
    "State": "Georgia",
    "City": "Atlanta",
    "Tasks": [{
        "ID": 2,
        "Subject": "Prepare 3013 Marketing Plan",
        "StartDate": "2013-01-01T00:00:00",
        "DueDate": "2013-01-31T00:00:00",
        "Status": "Completed",
        "Priority": "High",
        "Completion": 100
    }, {
        "ID": 11,
        "Subject": "Rollout of New Website and Marketing Brochures",
        "StartDate": "2013-02-20T00:00:00",
        "DueDate": "2013-02-28T00:00:00",
        "Status": "Completed",
        "Priority": "High",
        "Completion": 100
    }, {
        "ID": 15,
        "Subject": "Review 2012 Sales Report and Approve 2013 Plans",
        "StartDate": "2013-02-23T00:00:00",
        "DueDate": "2013-02-28T00:00:00",
        "Status": "Completed",
        "Priority": "Normal",
        "Completion": 100
    }, {
        "ID": 81,
        "Subject": "Review Site Up-Time Report",
        "StartDate": "2013-08-24T00:00:00",
        "DueDate": "2013-08-30T00:00:00",
        "Status": "Completed",
        "Priority": "Urgent",
        "Completion": 100
    }]
}, {
    "ID": 6,
    "FirstName": "Sandra",
    "LastName": "Johnson",
    "Prefix": "Mrs.",
    "Position": "Controller",
    "Picture": "images/employees/06.png",
    "BirthDate": "1974/11/15",
    "HireDate": "2005/05/11",
    "Notes": "Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if you've not met her, be certain to say hi.\r\n\r\nSandra has 2 daughters both of whom are accomplished gymnasts.",
    "Address": "4600 N Virginia Rd.",
    "State": "Utah",
    "City": "Beaver",
    "Tasks": [{
        "ID": 20,
        "Subject": "Approve Hiring of John Jeffers",
        "StartDate": "2013-03-02T00:00:00",
        "DueDate": "2013-03-12T00:00:00",
        "Status": "Completed",
        "Priority": "Normal",
        "Completion": 100
    }, {
        "ID": 23,
        "Subject": "Update Employee Files with New NDA",
        "StartDate": "2013-03-16T00:00:00",
        "DueDate": "2013-03-26T00:00:00",
        "Status": "Need Assistance",
        "Priority": "Normal",
        "Completion": 90
    }, {
        "ID": 40,
        "Subject": "Provide New Health Insurance Docs",
        "StartDate": "2013-03-28T00:00:00",
        "DueDate": "2013-04-07T00:00:00",
        "Status": "Completed",
        "Priority": "Normal",
        "Completion": 100
    }, {
        "ID": 138,
        "Subject": "Review HR Budget Company Wide",
        "StartDate": "2014-03-20T00:00:00",
        "DueDate": "2014-03-25T00:00:00",
        "Status": "In Progress",
        "Priority": "Normal",
        "Completion": 40
    }, {
        "ID": 145,
        "Subject": "Final Budget Review",
        "StartDate": "2014-03-26T00:00:00",
        "DueDate": "2014-03-27T00:00:00",
        "Status": "In Progress",
        "Priority": "High",
        "Completion": 25
    }]
}, {
    "ID": 7,
    "FirstName": "Kevin",
    "LastName": "Carter",
    "Prefix": "Mr.",
    "Position": "Shipping Manager",
    "Picture": "images/employees/07.png",
    "BirthDate": "1978/01/09",
    "HireDate": "2009/08/11",
    "Notes": "Kevin is our hard-working shipping manager and has been helping that department work like clockwork for 18 months.\r\n\r\nWhen not in the office, he is usually on the basketball court playing pick-up games.",
    "Address": "424 N Main St.",
    "State": "California",
    "City": "San Diego",
    "Tasks": [{
        "ID": 24,
        "Subject": "Sign Updated NDA",
        "StartDate": "2013-03-20T00:00:00",
        "DueDate": "2013-03-25T00:00:00",
        "Status": "Completed",
        "Priority": "Urgent",
        "Completion": 100
    }, {
        "ID": 55,
        "Subject": "Review Overtime Report",
        "StartDate": "2013-06-10T00:00:00",
        "DueDate": "2013-06-14T00:00:00",
        "Status": "Completed",
        "Priority": "Normal",
        "Completion": 100
    }, {
        "ID": 71,
        "Subject": "Upgrade Server Hardware",
        "StartDate": "2013-07-22T00:00:00",
        "DueDate": "2013-07-31T00:00:00",
        "Status": "Completed",
        "Priority": "Urgent",
        "Completion": 100
    }, {
        "ID": 72,
        "Subject": "Upgrade Personal Computers",
        "StartDate": "2013-07-24T00:00:00",
        "DueDate": "2014-04-30T00:00:00",
        "Status": "In Progress",
        "Priority": "Normal",
        "Completion": 85
    }]
}, {
    "ID": 8,
    "FirstName": "Cynthia",
    "LastName": "Stanwick",
    "Prefix": "Ms.",
    "Position": "HR Assistant",
    "Picture": "images/employees/08.png",
    "BirthDate": "1985/06/05",
    "HireDate": "2008/03/24",
    "Notes": "Cindy joined us in 2008 and has been in the HR department for 2 years. \r\n\r\nShe was recently awarded employee of the month. Way to go Cindy!",
    "Address": "2211 Bonita Dr.",
    "State": "Arkansas",
    "City": "Little Rock",
    "Tasks": [{
        "ID": 1,
        "Subject": "Prepare 2013 Financial",
        "StartDate": "2013-01-15T00:00:00",
        "DueDate": "2013-01-31T00:00:00",
        "Status": "Completed",
        "Priority": "High",
        "Completion": 100
    }, {
        "ID": 25,
        "Subject": "Sign Updated NDA",
        "StartDate": "2013-03-20T00:00:00",
        "DueDate": "2013-03-25T00:00:00",
        "Status": "Completed",
        "Priority": "Urgent",
        "Completion": 100
    }, {
        "ID": 35,
        "Subject": "Update Revenue Projections",
        "StartDate": "2013-03-24T00:00:00",
        "DueDate": "2013-04-07T00:00:00",
        "Status": "Completed",
        "Priority": "Normal",
        "Completion": 100
    }, {
        "ID": 99,
        "Subject": "Submit D&B Number to ISP for Credit Approval",
        "StartDate": "2013-11-04T00:00:00",
        "DueDate": "2013-11-07T00:00:00",
        "Status": "Completed",
        "Priority": "High",
        "Completion": 100
    }]
}, {
    "ID": 9,
    "FirstName": "Kent",
    "LastName": "Samuelson",
    "Prefix": "Dr.",
    "Position": "Ombudsman",
    "Picture": "images/employees/02.png",
    "BirthDate": "1972/09/11",
    "HireDate": "2009/04/22",
    "Notes": "As our ombudsman, Kent is on the front-lines solving customer problems and helping our partners address issues out in the field.    He is a classically trained musician and is a member of the Chamber Orchestra.",
    "Address": "12100 Mora Dr",
    "State": "Missouri",
    "City": "St. Louis",
    "Tasks": [{
        "ID": 12,
        "Subject": "Update Sales Strategy Documents",
        "StartDate": "2013-02-20T00:00:00",
        "DueDate": "2013-02-22T00:00:00",
        "Status": "Completed",
        "Priority": "Normal",
        "Completion": 100
    }, {
        "ID": 26,
        "Subject": "Sign Updated NDA",
        "StartDate": "2013-03-20T00:00:00",
        "DueDate": "2013-03-25T00:00:00",
        "Status": "Need Assistance",
        "Priority": "Urgent",
        "Completion": 25
    }, {
        "ID": 36,
        "Subject": "Review Revenue Projections",
        "StartDate": "2013-03-25T00:00:00",
        "DueDate": "2013-04-06T00:00:00",
        "Status": "Completed",
        "Priority": "High",
        "Completion": 100
    }, {
        "ID": 60,
        "Subject": "Refund Request Template",
        "StartDate": "2013-06-17T00:00:00",
        "DueDate": "2014-04-01T00:00:00",
        "Status": "Deferred",
        "Priority": "Normal",
        "Completion": 0
    }]
}];

var orders = [{
    "ID": 1,
    "OrderNumber": 35703,
    "OrderDate": "2014/02/13",
    "SaleAmount": 11800,
    "ShippingAmount": 375,
    "TotalAmount": 12175,
    "Terms": "15 Days",
    "CustomerStoreState": "California",
    "CustomerStoreCity": "Los Angeles",
    "Employee": "Harv Mudd"
}, {
    "ID": 4,
    "OrderNumber": 35711,
    "OrderDate": "2014/03/21",
    "SaleAmount": 16050,
    "ShippingAmount": 500,
    "TotalAmount": 16550,
    "Terms": "15 Days",
    "CustomerStoreState": "California",
    "CustomerStoreCity": "San Jose",
    "Employee": "Jim Packard"
}, {
    "ID": 5,
    "OrderNumber": 35714,
    "OrderDate": "2014/04/19",
    "SaleAmount": 14750,
    "ShippingAmount": 500,
    "TotalAmount": 15250,
    "Terms": "15 Days",
    "CustomerStoreState": "Nevada",
    "CustomerStoreCity": "Las Vegas",
    "Employee": "Harv Mudd"
}, {
    "ID": 7,
    "OrderNumber": 35983,
    "OrderDate": "2014/01/12",
    "SaleAmount": 3725,
    "ShippingAmount": 125,
    "TotalAmount": 3850,
    "Terms": "15 Days",
    "CustomerStoreState": "Colorado",
    "CustomerStoreCity": "Denver",
    "Employee": "Todd Hoffman"
}, {
    "ID": 9,
    "OrderNumber": 36987,
    "OrderDate": "2014/04/08",
    "SaleAmount": 14200,
    "ShippingAmount": 600,
    "TotalAmount": 14800,
    "Terms": "15 Days",
    "CustomerStoreState": "Utah",
    "CustomerStoreCity": "Salt Lake City",
    "Employee": "Clark Morgan"
}, {
    "ID": 11,
    "OrderNumber": 38466,
    "OrderDate": "2014/02/28",
    "SaleAmount": 7800,
    "ShippingAmount": 400,
    "TotalAmount": 8200,
    "Terms": "15 Days",
    "CustomerStoreState": "California",
    "CustomerStoreCity": "Los Angeles",
    "Employee": "Harv Mudd"
}, {
    "ID": 15,
    "OrderNumber": 39874,
    "OrderDate": "2014/05/28",
    "SaleAmount": 18600,
    "ShippingAmount": 500,
    "TotalAmount": 19100,
    "Terms": "30 Days",
    "CustomerStoreState": "Nevada",
    "CustomerStoreCity": "Las Vegas",
    "Employee": "Harv Mudd"
}, {
    "ID": 18,
    "OrderNumber": 42847,
    "OrderDate": "2014/02/06",
    "SaleAmount": 20400,
    "ShippingAmount": 400,
    "TotalAmount": 20800,
    "Terms": "30 Days",
    "CustomerStoreState": "Wyoming",
    "CustomerStoreCity": "Casper",
    "Employee": "Todd Hoffman"
}, {
    "ID": 19,
    "OrderNumber": 43982,
    "OrderDate": "2014/02/16",
    "SaleAmount": 6050,
    "ShippingAmount": 200,
    "TotalAmount": 6250,
    "Terms": "30 Days",
    "CustomerStoreState": "Utah",
    "CustomerStoreCity": "Salt Lake City",
    "Employee": "Clark Morgan"
}, {
    "ID": 29,
    "OrderNumber": 56272,
    "OrderDate": "2014/01/25",
    "SaleAmount": 15850,
    "ShippingAmount": 500,
    "TotalAmount": 16350,
    "Terms": "30 Days",
    "CustomerStoreState": "Utah",
    "CustomerStoreCity": "Salt Lake City",
    "Employee": "Clark Morgan"
}, {
    "ID": 30,
    "OrderNumber": 57429,
    "OrderDate": "2013/12/31",
    "SaleAmount": 11050,
    "ShippingAmount": 350,
    "TotalAmount": 11400,
    "Terms": "30 Days",
    "CustomerStoreState": "Arizona",
    "CustomerStoreCity": "Phoenix",
    "Employee": "Clark Morgan"
}, {
    "ID": 32,
    "OrderNumber": 58292,
    "OrderDate": "2014/04/29",
    "SaleAmount": 13500,
    "ShippingAmount": 300,
    "TotalAmount": 13800,
    "Terms": "15 Days",
    "CustomerStoreState": "California",
    "CustomerStoreCity": "Los Angeles",
    "Employee": "Harv Mudd"
}, {
    "ID": 36,
    "OrderNumber": 62427,
    "OrderDate": "2014/05/10",
    "SaleAmount": 23500,
    "ShippingAmount": 500,
    "TotalAmount": 24000,
    "Terms": "15 Days",
    "CustomerStoreState": "Nevada",
    "CustomerStoreCity": "Las Vegas",
    "Employee": "Harv Mudd"
}, {
    "ID": 39,
    "OrderNumber": 65977,
    "OrderDate": "2014/02/24",
    "SaleAmount": 2550,
    "ShippingAmount": 75,
    "TotalAmount": 2625,
    "Terms": "15 Days",
    "CustomerStoreState": "Wyoming",
    "CustomerStoreCity": "Casper",
    "Employee": "Todd Hoffman"
}, {
    "ID": 40,
    "OrderNumber": 66947,
    "OrderDate": "2014/01/05",
    "SaleAmount": 3500,
    "ShippingAmount": 100,
    "TotalAmount": 3600,
    "Terms": "15 Days",
    "CustomerStoreState": "Utah",
    "CustomerStoreCity": "Salt Lake City",
    "Employee": "Clark Morgan"
}, {
    "ID": 42,
    "OrderNumber": 68428,
    "OrderDate": "2014/04/18",
    "SaleAmount": 10500,
    "ShippingAmount": 400,
    "TotalAmount": 10900,
    "Terms": "15 Days",
    "CustomerStoreState": "California",
    "CustomerStoreCity": "Los Angeles",
    "Employee": "Harv Mudd"
}, {
    "ID": 43,
    "OrderNumber": 69477,
    "OrderDate": "2014/04/21",
    "SaleAmount": 14200,
    "ShippingAmount": 300,
    "TotalAmount": 14500,
    "Terms": "15 Days",
    "CustomerStoreState": "California",
    "CustomerStoreCity": "Anaheim",
    "Employee": "Harv Mudd"
}, {
    "ID": 46,
    "OrderNumber": 72947,
    "OrderDate": "2014/05/22",
    "SaleAmount": 13350,
    "ShippingAmount": 300,
    "TotalAmount": 13650,
    "Terms": "30 Days",
    "CustomerStoreState": "Nevada",
    "CustomerStoreCity": "Las Vegas",
    "Employee": "Harv Mudd"
}, {
    "ID": 47,
    "OrderNumber": 73088,
    "OrderDate": "2014/01/22",
    "SaleAmount": 8600,
    "ShippingAmount": 250,
    "TotalAmount": 8850,
    "Terms": "30 Days",
    "CustomerStoreState": "Nevada",
    "CustomerStoreCity": "Reno",
    "Employee": "Clark Morgan"
}, {
    "ID": 50,
    "OrderNumber": 76927,
    "OrderDate": "2010-10-17T00:00:00",
    "SaleAmount": 9800,
    "ShippingAmount": 250,
    "TotalAmount": 10050,
    "Terms": "30 Days",
    "CustomerStoreState": "Utah",
    "CustomerStoreCity": "Salt Lake City",
    "Employee": "Clark Morgan"
}, {
    "ID": 51,
    "OrderNumber": 77297,
    "OrderDate": "2014/03/24",
    "OrderDate": "2010-10-19T00:00:00",
    "SaleAmount": 10850,
    "ShippingAmount": 250,
    "TotalAmount": 11100,
    "Terms": "30 Days",
    "CustomerStoreState": "Arizona",
    "CustomerStoreCity": "Phoenix",
    "Employee": "Clark Morgan"
}];

var weekData = [{
    "date": "2013/12/23",
    "open": {
        "value": 3563.19,
        "diff": 92.76
    },
    "high": {
        "value": 3591.31,
        "diff": 50.34
    },
    "low": {
        "value": 3552.3,
        "diff": 129.44
    },
    "close": {
        "value": 3574.02,
        "diff": 42.83
    },
    "volume": 1254340000,
    "adjClose": 3574.02,
    "dayClose": [{
        "close": 3569.4,
        "date": "2013/12/23"
    }, {
        "close": 3572.8,
        "date": "2013/12/24"
    }, {
        "close": 3584.58,
        "date": "2013/12/26"
    }, {
        "close": 3574.02,
        "date": "2013/12/27"
    }]
}, {
    "date": "2013/12/16",
    "open": {
        "value": 3470.43,
        "diff": -45.24
    },
    "high": {
        "value": 3540.97,
        "diff": 16.96
    },
    "low": {
        "value": 3422.86,
        "diff": -26.88
    },
    "close": {
        "value": 3531.19,
        "diff": 74.79
    },
    "volume": 2261352000,
    "adjClose": 3531.19,
    "dayClose": [{
        "close": 3475.79,
        "date": "2013/12/16"
    }, {
        "close": 3469.32,
        "date": "2013/12/17"
    }, {
        "close": 3509.63,
        "date": "2013/12/18"
    }, {
        "close": 3498.63,
        "date": "2013/12/19"
    }, {
        "close": 3531.19,
        "date": "2013/12/20"
    }]
}, {
    "date": "2013/12/09",
    "open": {
        "value": 3515.67,
        "diff": 19.48
    },
    "high": {
        "value": 3524.01,
        "diff": 12.91
    },
    "low": {
        "value": 3449.74,
        "diff": -3.48
    },
    "close": {
        "value": 3456.4,
        "diff": -47.86
    },
    "volume": 1802822000,
    "adjClose": 3456.4,
    "dayClose": [{
        "close": 3516.17,
        "date": "2013/12/09"
    }, {
        "close": 3514.2,
        "date": "2013/12/10"
    }, {
        "close": 3468.99,
        "date": "2013/12/11"
    }, {
        "close": 3460.29,
        "date": "2013/12/12"
    }, {
        "close": 3456.4,
        "date": "2013/12/13"
    }]
}, {
    "date": "2013/12/02",
    "open": {
        "value": 3496.19,
        "diff": 62.27
    },
    "high": {
        "value": 3511.1,
        "diff": 15.13
    },
    "low": {
        "value": 3453.22,
        "diff": 32.86
    },
    "close": {
        "value": 3504.26,
        "diff": 16.44
    },
    "volume": 1810088000,
    "adjClose": 3504.26,
    "dayClose": [{
        "close": 3481.15,
        "date": "2013/12/02"
    }, {
        "close": 3479.34,
        "date": "2013/12/03"
    }, {
        "close": 3483.01,
        "date": "2013/12/04"
    }, {
        "close": 3477.73,
        "date": "2013/12/05"
    }, {
        "close": 3504.26,
        "date": "2013/12/06"
    }]
}, {
    "date": "2013/11/25",
    "open": {
        "value": 3433.92,
        "diff": 10.45
    },
    "high": {
        "value": 3495.97,
        "diff": 66.77
    },
    "low": {
        "value": 3420.36,
        "diff": 61.05
    },
    "close": {
        "value": 3487.82,
        "diff": 65.8
    },
    "volume": 1508490000,
    "adjClose": 3487.82,
    "dayClose": [{
        "close": 3427.49,
        "date": "2013/11/25"
    }, {
        "close": 3445.76,
        "date": "2013/11/26"
    }, {
        "close": 3470.48,
        "date": "2013/11/27"
    }, {
        "close": 3487.82,
        "date": "2013/11/29"
    }]
}, {
    "date": "2013/11/18",
    "open": {
        "value": 3423.47,
        "diff": 63.64
    },
    "high": {
        "value": 3429.2,
        "diff": 6.62
    },
    "low": {
        "value": 3359.31,
        "diff": 12.9
    },
    "close": {
        "value": 3422.02,
        "diff": -0.56
    },
    "volume": 1742680000,
    "adjClose": 3422.02,
    "dayClose": [{
        "close": 3388.87,
        "date": "2013/11/18"
    }, {
        "close": 3378.13,
        "date": "2013/11/19"
    }, {
        "close": 3367.17,
        "date": "2013/11/20"
    }, {
        "close": 3402.74,
        "date": "2013/11/21"
    }, {
        "close": 3422.02,
        "date": "2013/11/22"
    }]
}, {
    "date": "2013/11/11",
    "open": {
        "value": 3359.83,
        "diff": -28.87
    },
    "high": {
        "value": 3422.58,
        "diff": 21.31
    },
    "low": {
        "value": 3346.41,
        "diff": 28.01
    },
    "close": {
        "value": 3422.58,
        "diff": 55.74
    },
    "volume": 1812784000,
    "adjClose": 3422.58,
    "dayClose": [{
        "close": 3362.98,
        "date": "2013/11/11"
    }, {
        "close": 3365.23,
        "date": "2013/11/12"
    }, {
        "close": 3405.56,
        "date": "2013/11/13"
    }, {
        "close": 3415.14,
        "date": "2013/11/14"
    }, {
        "close": 3422.58,
        "date": "2013/11/15"
    }]
}, {
    "date": "2013/11/04",
    "open": {
        "value": 3388.7,
        "diff": 6.52
    },
    "high": {
        "value": 3401.27,
        "diff": -7.01
    },
    "low": {
        "value": 3318.4,
        "diff": -46.25
    },
    "close": {
        "value": 3366.84,
        "diff": -12.92
    },
    "volume": 2011546000,
    "adjClose": 3366.84,
    "dayClose": [{
        "close": 3384.75,
        "date": "2013/11/04"
    }, {
        "close": 3388.82,
        "date": "2013/11/05"
    }, {
        "close": 3385.38,
        "date": "2013/11/06"
    }, {
        "close": 3321.41,
        "date": "2013/11/07"
    }, {
        "close": 3366.84,
        "date": "2013/11/08"
    }]
}, {
    "date": "2013/10/28",
    "open": {
        "value": 3382.18,
        "diff": 20.42
    },
    "high": {
        "value": 3408.28,
        "diff": 8.24
    },
    "low": {
        "value": 3364.65,
        "diff": 34.45
    },
    "close": {
        "value": 3379.76,
        "diff": -4.07
    },
    "volume": 1962860000,
    "adjClose": 3379.76,
    "dayClose": [{
        "close": 3382.68,
        "date": "2013/10/28"
    }, {
        "close": 3391.75,
        "date": "2013/10/29"
    }, {
        "close": 3385.38,
        "date": "2013/10/30"
    }, {
        "close": 3377.73,
        "date": "2013/10/31"
    }, {
        "close": 3379.76,
        "date": "2013/11/01"
    }]
}, {
    "date": "2013/10/21",
    "open": {
        "value": 3361.76,
        "diff": 148.38
    },
    "high": {
        "value": 3400.04,
        "diff": 44.41
    },
    "low": {
        "value": 3330.2,
        "diff": 118.15
    },
    "close": {
        "value": 3383.83,
        "diff": 29.95
    },
    "volume": 1952026000,
    "adjClose": 3383.83,
    "dayClose": [{
        "close": 3361.18,
        "date": "2013/10/21"
    }, {
        "close": 3366.93,
        "date": "2013/10/22"
    }, {
        "close": 3346.05,
        "date": "2013/10/23"
    }, {
        "close": 3362.38,
        "date": "2013/10/24"
    }, {
        "close": 3383.83,
        "date": "2013/10/25"
    }]
}, {
    "date": "2013/10/14",
    "open": {
        "value": 3213.38,
        "diff": -2.39
    },
    "high": {
        "value": 3355.63,
        "diff": 115.52
    },
    "low": {
        "value": 3212.05,
        "diff": 94.36
    },
    "close": {
        "value": 3353.88,
        "diff": 120.05
    },
    "volume": 1772590000,
    "adjClose": 3353.88,
    "dayClose": [{
        "close": 3256.02,
        "date": "2013/10/14"
    }, {
        "close": 3244.66,
        "date": "2013/10/15"
    }, {
        "close": 3281.67,
        "date": "2013/10/16"
    }, {
        "close": 3301.28,
        "date": "2013/10/17"
    }, {
        "close": 3353.88,
        "date": "2013/10/18"
    }]
}, {
    "date": "2013/10/07",
    "open": {
        "value": 3215.77,
        "diff": 25.37
    },
    "high": {
        "value": 3240.11,
        "diff": -16.6
    },
    "low": {
        "value": 3117.69,
        "diff": -69.17
    },
    "close": {
        "value": 3233.83,
        "diff": -8.74
    },
    "volume": 1891806000,
    "adjClose": 3233.83,
    "dayClose": [{
        "close": 3215.69,
        "date": "2013/10/07"
    }, {
        "close": 3153.87,
        "date": "2013/10/08"
    }, {
        "close": 3142.54,
        "date": "2013/10/09"
    }, {
        "close": 3210.84,
        "date": "2013/10/10"
    }, {
        "close": 3233.83,
        "date": "2013/10/11"
    }]
}, {
    "date": "2013/09/30",
    "open": {
        "value": 3190.4,
        "diff": -51.92
    },
    "high": {
        "value": 3256.71,
        "diff": 13.28
    },
    "low": {
        "value": 3186.86,
        "diff": -15.89
    },
    "close": {
        "value": 3242.57,
        "diff": 12.27
    },
    "volume": 1793200000,
    "adjClose": 3242.57,
    "dayClose": [{
        "close": 3218.2,
        "date": "2013/09/30"
    }, {
        "close": 3253.05,
        "date": "2013/10/01"
    }, {
        "close": 3253.26,
        "date": "2013/10/02"
    }, {
        "close": 3213.83,
        "date": "2013/10/03"
    }, {
        "close": 3242.57,
        "date": "2013/10/04"
    }]
}, {
    "date": "2013/09/23",
    "open": {
        "value": 3242.32,
        "diff": 39.13
    },
    "high": {
        "value": 3243.43,
        "diff": -5.09
    },
    "low": {
        "value": 3202.75,
        "diff": 39.62
    },
    "close": {
        "value": 3230.3,
        "diff": 5.57
    },
    "volume": 1775808000,
    "adjClose": 3230.3,
    "dayClose": [{
        "close": 3219.34,
        "date": "2013/09/23"
    }, {
        "close": 3218.66,
        "date": "2013/09/24"
    }, {
        "close": 3208.55,
        "date": "2013/09/25"
    }, {
        "close": 3234.04,
        "date": "2013/09/26"
    }, {
        "close": 3230.3,
        "date": "2013/09/27"
    }]
}, {
    "date": "2013/09/16",
    "open": {
        "value": 3203.19,
        "diff": 57.17
    },
    "high": {
        "value": 3248.52,
        "diff": 59.28
    },
    "low": {
        "value": 3163.13,
        "diff": 17.11
    },
    "close": {
        "value": 3224.73,
        "diff": 46.45
    },
    "volume": 1839474000,
    "adjClose": 3224.73,
    "dayClose": [{
        "close": 3168.69,
        "date": "2013/09/16"
    }, {
        "close": 3190.83,
        "date": "2013/09/17"
    }, {
        "close": 3231.31,
        "date": "2013/09/18"
    }, {
        "close": 3237.61,
        "date": "2013/09/19"
    }, {
        "close": 3224.73,
        "date": "2013/09/20"
    }]
}];



$(function() {

    $(".modal-header-close-icon").click(function(){
        $(this).closest('.udkmenu-grid').toggleClass('udkmenu-closed');
    });

    $(".scenarioManagement").dxDataGrid({
        dataSource: scenarioData,
        headerFilter: {
            visible: true
        },
        filterRow: {
            visible: true,
            applyFilter: "auto"
        },
        columns: [{
            dataField: 'name',
            allowResizing: true
        },{ 
            dataField: 'author',
            allowResizing: true
        },{ 
            dataField: 'lastUpdate', 
            allowResizing: true,
            allowGrouping: false,
            dataType: 'date'
        },{ 
            dataField: 'lastEdit', 
            allowResizing: true
        },{
            dataField: 'Status',
            width: 130,
            allowResizing: true,
            allowFiltering: false,
            allowSorting: false,
            cellTemplate: function(container, options){
                var divWrapper = $('<div>').addClass('checkbox-container');
                    inputWrapper = $('<input>').attr('id', options.data.name).attr('type', 'checkbox'),
                    labelWrapper = $('<label>').attr('for', options.data.name).text('');
                    
                divWrapper.appendTo(container);
                inputWrapper.appendTo(divWrapper);
                labelWrapper.appendTo(divWrapper);
            }
        },{
            dataField: '',
            width: 50,
            allowResizing: true,
            allowFiltering: false,
            AllowSorting: false,
            cellTemplate: function(container, options){
                var eButton = $('<button>', {'class':'btn btn-primary btn-xs waves-effect', 'html': 'Edit'}).click(function(){
                    $('.udkmenu-grid').toggleClass('udkmenu-closed');
                    $('#input_scenario_name').val(options.data.name).closest('.fg-line').addClass('fg-toggled');
                });
                eButton.appendTo(container);
            }
        }],
        columnChooser: { enabled: true },
        //columnAutoWidth: true,
        allowColumnReordering: true,
        sorting: { mode: 'multiple' },
        groupPanel: { visible: true, emptyPanelText: '' },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [5, 10, 20],
            showInfo: true
        },
        showRowLines: true,
        paging: { 
            pageSize: 15
        },
        editing: {
            width: 50,
            //allowUpdating: true,
            mode: 'row',
            allowAdding: true,
            allowDeleting: true
        },
        searchPanel: { visible: true },
        // selection: {
        //     mode: 'multiple',
        //     showCheckBoxesMode: 'always'
        // },
        "export": {
          enabled: true,
          fileName: "Employees",
          allowExportSelectedData: true
        },
        groupPanel: {
          visible: true
        }
    });

    $(".scenarioDetail").dxDataGrid({
        dataSource: {
            store: {
                type: "array",
                key: "ID",
                data: employees
            }
        },
        columns: [{
                dataField: "Prefix",
                caption: "Title",
                width: 70
            },
            "FirstName",
            "LastName", {
                dataField: "Position",
                width: 170
            }, {
                dataField: "State",
                width: 125
            }, {
                dataField: "BirthDate",
                dataType: "date"
            }
        ],
        masterDetail: {
            enabled: true,
            template: function(container, options) { 
                var currentEmployeeData = options.data;
                container.addClass("internal-grid-container");
                $("<div>").text(currentEmployeeData.FirstName + " " + currentEmployeeData.LastName + " Tasks:").appendTo(container);            
                $("<div>")
                    .addClass("internal-grid")
                    .dxDataGrid({
                        columnAutoWidth: true,
                        columns: ["Subject", {
                            dataField: "StartDate",
                            dataType: "date"
                        }, {
                            dataField: "DueDate",
                            dataType: "date"
                        }, "Priority", {
                            caption: "Completed",
                            dataType: "boolean",
                            calculateCellValue: function(rowData) {
                                return rowData.Status == "Completed";
                            }
                        }],
                        dataSource: currentEmployeeData.Tasks
                    }).appendTo(container);
            }
        }
    });

    // $(".scenarioSummary").dxDataGrid({
    //     dataSource: {
    //         store: {
    //             type: "array",
    //             key: "ID",
    //             data: orders
    //         }
    //     },
    //     selection: {
    //         mode: "single"
    //     },
    //     columns: [{
    //             dataField: "OrderNumber",
    //             width: 130,
    //             caption: "Invoice Number"
    //         }, {
    //             dataField: "OrderDate",
    //             dataType: "date",
    //         }, {
    //             dataField: "Employee",
    //             groupIndex: 0
    //         }, {
    //             caption: "City",
    //             dataField: "CustomerStoreCity"
    //         }, {
    //             caption: "State",
    //             dataField: "CustomerStoreState",
    //         }, {
    //             dataField: "SaleAmount",
    //             alignment: "right",
    //             format: "currency"
    //         }, {
    //             dataField: "TotalAmount",
    //             alignment: "right",
    //             format: "currency"
    //         }
    //     ],
    //     sortByGroupSummaryInfo: [{
    //         summaryItem: "count"
    //     }],
    //     summary: {
    //         groupItems: [{
    //             column: "OrderNumber",
    //             summaryType: "count",
    //             displayFormat: "{0} orders",
    //         }, {
    //             column: "SaleAmount",
    //             summaryType: "max",
    //             valueFormat: "currency",
    //             showInGroupFooter: false,
    //             alignByColumn: true
    //         }, {
    //             column: "TotalAmount",
    //             summaryType: "max",
    //             valueFormat: "currency",
    //             showInGroupFooter: false,
    //             alignByColumn: true
    //         }, {
    //             column: "TotalAmount",
    //             summaryType: "sum",
    //             valueFormat: "currency",
    //             displayFormat: "Total: {0}",
    //             showInGroupFooter: true
    //         }]
    //     }
    // });

    $(".scenarioCustomization").dxDataGrid({
        dataSource: weekData,
        showRowLines: true,
        sorting: {
            mode: "none"
        },
        paging: {
            pageSize: 10
        },
        onCellPrepared: function(options) {
            var fieldData = options.value,
                fieldHtml = "";
            if(fieldData && fieldData.value) {
                if(fieldData.diff) {
                    options.cellElement.addClass((fieldData.diff > 0) ? "inc" : "dec");
                    fieldHtml += "<span class='current-value'>" +
                        //fieldData.value + 
                        //Globalize.formatCurrency(fieldData.value, "USD") +
                        "</span> <span class='diff'>" +
                        Math.abs(fieldData.diff).toFixed(2) +
                        "  </span>";
                } else {
                    fieldHtml = fieldData.value;
                }
                options.cellElement.html(fieldHtml);
            }
        },
        columns: [
            {
                dataField: "date",
                dataType: "date",
                width: 90
            },
            "open",
            "close",
            {
                caption: "Dynamics",
                width: 155,
                cellTemplate: function(container, options) {
                    container.addClass("chart-cell");
                    $("<div />").dxSparkline({ 
                        dataSource: options.data.dayClose,
                        argumentField: "date",
                        valueField: "close",
                        type: "line",
                        showMinMax: true,
                        lineColor: "#565077",
                        minColor: "#f00",
                        maxColor: "#2ab71b",
                        pointSize: 6,
                        size: {
                            width: 140,
                            height: 30
                        },
                        tooltip: {
                            enabled: false
                        }
                    }).appendTo(container);
                }
            },
            "high",
            "low"
        ]
    });


});
