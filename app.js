function countdown() {

   const christmas = new Date("December 25 2023 00:00:00")
   const today = new Date()
   const diff = christmas - today

    
   let days = Math.floor( diff/(1000*60*60*24))
   let hours = Math.floor( diff/(1000*60*60) % 24 )
   let minutes = Math.floor( diff/(1000*60) % 60 )
   let seconds = Math.floor (diff/(1000) % 60)


   if(days< 10) {
    days = "0" + days
   }
   if(hours< 10) {
    hours = "0" + hours
   }
   if(minutes< 10) {
    minutes = "0" + minutes
   }
   if(seconds< 10) {
    seconds = "0" + seconds
   }


  document.getElementById("days").innerHTML = days
  document.getElementById("hours").innerHTML = hours
  document.getElementById("minutes").innerHTML = minutes
  document.getElementById("seconds").innerHTML = seconds

  
}

setInterval(countdown , 1000)