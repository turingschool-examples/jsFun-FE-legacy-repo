const shows = [

  {
    "showId": 1,
    "showNumber": 1,
    "date": "05/31/19",
    "venue": "Shoreline Ampitheatre",
    "capacity": 22500,
    "showTime": "7:00",
    "city": "Mountain View",
    "state": "California",
    "milesToNextShow": 0,
    "closestAirport": "Mineta San Jose International Airport",
    "showGap": 0
  },
  {
    "showId": 1,
    "showNumber": 2,
    "date": "06/01/19",
    "venue": "Shoreline Ampitheatre",
    "capacity": 22500,
    "showTime": "7:00",
    "city": "Mountain View",
    "state": "California",
    "milesToNextShow": 346,
    "closestAirport": "Mineta San Jose International Airport",
    "showGap": 1
  },
  {
    "showId": 2,
    "showNumber": 3,
    "date": "06/03/19",
    "venue": "Hollywood Bowl",
    "capacity": 17500,
    "showTime": "7:00",
    "city": "Hollywood",
    "state": "California",
    "milesToNextShow": 0,
    "closestAirport": "Los Angeles International Airport (LAX)",
    "showGap": 0
  },
  {
    "showId": 2,
    "showNumber": 4,
    "date": "06/04/19",
    "venue": "Hollywood Bowl",
    "capacity": 17500,
    "showTime": "7:00",
    "city": "Hollywood",
    "state": "California",
    "milesToNextShow": 1101,
    "closestAirport": "Los Angeles International Airport (LAX)",
    "showGap": 2
  },
  {
    "showId": 3,
    "showNumber": 5,
    "date": "06/07/19",
    "venue": "The Gorge Amphitheatre",
    "capacity": 27500,
    "showTime": "7:00",
    "city": "George",
    "state": "Washington",
    "milesToNextShow": 0,
    "closestAirport": "Pangborn Memorial Airport",
    "showGap": 0
  },
  {
    "showId": 3,
    "showNumber": 6,
    "date": "06/08/19",
    "venue": "The Gorge Amphitheatre",
    "capacity": 27500,
    "showTime": "7:00",
    "city": "George",
    "state": "Washington",
    "milesToNextShow": 2117,
    "closestAirport": "Pangborn Memorial Airport ",
    "showGap": 3
  },
  {
    "showId": 4,
    "showNumber": 7,
    "date": "06/12/19",
    "venue": "Ruoff Home Mortgage Music Center",
    "capacity": 24790,
    "showTime": "7:00",
    "city": "Noblesville",
    "state": "Indiana",
    "milesToNextShow": 200,
    "closestAirport": "Indianapolis International Airport",
    "showGap": 1
  },
  {
    "showId": 5,
    "showNumber": 8,
    "date": "06/14/19",
    "venue": "Wrigley Field",
    "capacity": 84218,
    "showTime": "6:30",
    "city": "Chicago",
    "state": "Illinois",
    "milesToNextShow": 0,
    "closestAirport": "Chicago O'Hare International Airport",
    "showGap": 0
  },
  {
    "showId": 5,
    "showNumber": 9,
    "date": "06/15/19",
    "venue": "Wrigley Field",
    "capacity": 84218,
    "showTime": "6:30",
    "city": "Chicago",
    "state": "Illinois",
    "milesToNextShow": 815,
    "closestAirport": "Chicago O'Hare International Airport",
    "showGap": 2
  },
  {
    "showId": 6,
    "showNumber": 10,
    "date": "06/18/19",
    "venue": "Saratoga Performing Arts Center",
    "capacity": 25100,
    "showTime": "7:00",
    "city": "Saratoga Springs",
    "state": "New York",
    "milesToNextShow": 269,
    "closestAirport": "Albany International Airport",
    "showGap": 1
  },
  {
    "showId": 7,
    "showNumber": 11,
    "date": "06/20/19",
    "venue": "BB&T Pavillion",
    "capacity": 25000,
    "showTime": "7:00",
    "city": "Camden",
    "state": "New Jersey",
    "milesToNextShow": 297,
    "closestAirport": "Philadelphia International Airport",
    "showGap": 1
  },
  {
    "showId": 8,
    "showNumber": 12,
    "date": "06/22/19",
    "venue": "Gillete Stadium",
    "capacity": 66829,
    "showTime": "7:00",
    "city": "Foxborough",
    "state": "Massachusetts",
    "milesToNextShow": 196,
    "closestAirport": "Boston Logan International Airport",
    "showGap": 0
  },
  {
    "showId": 9,
    "showNumber": 13,
    "date": "06/23/19",
    "venue": "Citi Field",
    "capacity": 45186,
    "showTime": "7:00",
    "city": "New York",
    "state": "New York",
    "milesToNextShow": 275,
    "closestAirport": "LaGuardia Airport",
    "showGap": 2
  },
  {
    "showId": 10,
    "showNumber": 14,
    "date": "06/26/19",
    "venue": "Jiffy Lube Live",
    "capacity": 25262,
    "showTime": "7:00",
    "city": "Bristow",
    "state": "Virginia",
    "milesToNextShow": 342,
    "closestAirport": "Ronald Reagan Washington National Airport",
    "showGap": 1
  },
  {
    "showId": 11,
    "showNumber": 15,
    "date": "06/28/19",
    "venue": "PNC Music Pavillion",
    "capacity": 19500,
    "showTime": "7:00",
    "city": "Charlotte",
    "state": "North California",
    "milesToNextShow": 259,
    "closestAirport": "Charlotte Douglas International Airport",
    "showGap": 0
  },
  {
    "showId": 12,
    "showNumber": 16,
    "date": "06/29/19",
    "venue": "Cellairis Amphitheatre at Lakewood",
    "capacity": 18920,
    "showTime": "7:00",
    "city": "Atlanta",
    "state": "Georgia",
    "milesToNextShow": 784,
    "closestAirport": "Hartsfield–Jackson Atlanta International Airport",
    "showGap": 2
  },
  {
    "showId": 13,
    "showNumber": 17,
    "date": "07/02/19",
    "venue": "Dos Equis Pavillion",
    "capacity": 20000,
    "showTime": "7:00",
    "city": "Dallas",
    "state": "Texas",
    "milesToNextShow": 824,
    "closestAirport": "Dallas/Fort Worth International Airport",
    "showGap": 2
  },
  {
    "showId": 14,
    "showNumber": 18,
    "date": "07/05/19",
    "venue": "Folsom Field",
    "capacity": 86982,
    "showTime": "6:30",
    "city": "Boulder",
    "state": "Colorado",
    "milesToNextShow": 0,
    "closestAirport": "Denver International Airport",
    "showGap": 0
  },
  {
    "showId": 14,
    "showNumber": 19,
    "date": "07/06/19",
    "venue": "Folsom Field",
    "capacity": 86982,
    "showTime": "6:30",
    "city": "Boulder",
    "state": "Colorado",
    "milesToNextShow": 0,
    "closestAirport": "Denver International Airport",
    "showGap": 0
  }

];


//This dataset is for the Dead & Company 2019 Tour. Each object is an individual show! Some shows have multiple nights at the same venue. 




//Get the total capacity of the Summer Tour.

shows.reduce((sum, currentShow)=> {
sum += currentShow.capacity
return sum
},0)



//What is the average capacity per show?

shows.reduce((sum, currentShow)=> {
sum += currentShow.capacity/shows.length
return sum
},0)


//Give me an array of shows that can hold more than 50k

shows.filter((currentShow)=> {
return currentShow.capacity > 50000
})


//What is the furthest distance between two shows? 

shows.sort((a,b)=> {
return a.milesToNextShow - b.milesToNextShow
}).pop()


//Give me an object where the key is the show number and the value is the state the show is in.

shows.reduce((newObj, currentShow)=> {
newObj[currentShow.showNumber] = currentShow.state
return newObj
},{})





//SCOPE PROBLEM 

exerciseDead(){
  let encore = "Ripple"

  //LOG A: encore //RIPPLE

  function itsSaturday(){
    let day = "Saturay"
    if(day === "Saturay"){
      let encore = "One More Saturday Night"
        //LOG B:encore   // ONE MORE SATURDAY NIGHT 
      }else {
        let encore = "BrokedownPalace"
       }
    //LOG C: encore // ONE MORE SATURDAY NIGHT
      }  
  //LOG D: encore// RIPPLE
    itsSaturday();
    }

    //ORDER 
    A: RIPPLE
    D: Ripple
    B: One More Saturday Night
    C: One More Saturday Night










