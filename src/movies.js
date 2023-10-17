
// Iteration 1: All directors? - Get the array of all directors.
    const onlyDirectors = movies.map (function (movie) {
        return movie.director;
    })

    console.log(onlyDirectors)
    
 // _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

  

}

// should be declared
// should return an array
// should return a new array, not update the original one
// should return a new array with the same length as the original one




// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies){

const steveSpierlbergDrama = movies.filter (function (awesomeMovie) {
    
    return awesomeMovie.director == 'Steven Spielberg' && awesomeMovie.genre.includes('Drama') == true;
    }
)
return steveSpierlbergDrama.length;
}

console.log(howManyMovies)

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

    if (movies.length === 0){
        return 0;
    }
    
    else {
        const totalSUM = movies.reduce (function (acumulator, currentValue) {
            if (currentValue.score === undefined){
                return acumulator;
            }
            else {
                return acumulator + currentValue.score;
            }    
    }, 0)

    let average = totalSUM / movies.length;
    return Number (average.toFixed(2));

    }
    
    
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    // NÃO PERCEBO PORQUE É QUE ESTE CÓDIGO ESTÁ A DAR MAL:

//     let dramaMovies = moviesArray.filter (function (movie) {return movie.genre.includes('Drama')});

//     if (dramaMovies.length === 0){
//         return 0;
//     }
//         else {
//         let dramaMoviesSum = dramaMovies.reduce (function (acumulator, currentValue) {
//             if (curentValue.score === undefined ){
//                 return acumulator;
//             }
//             else {
//                 return acumulator + currentValue.score
//             }
            
//         }, 0);
//    }
//     const average = dramaMoviesSum / dramaMovies.length;
//     return Number (average.toFixed(2));

// VOU UTILIZAR UM MAIS SIMPLES QUE O KENETH&BRICE ME DISSE:
        const allDramaMovies = moviesArray.filter (function (movie) {
            return movie.genre.includes('Drama')
        });

        return scoresAverage(allDramaMovies);
 } 
   



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const moviesOrder = [...moviesArray].sort(function (movie1,movie2) {
        if (movie1.year === movie2.year){
            return movie1.title.localeCompare(movie2.title);
        }
        else {
            return movie1.year - movie2.year;
        }  
    // OUUUUUUU:     
    //      if (movie1.year < movie2.year){
    //         return -1;
    //      }
    //      else if (movie1.year > movie2.year){
    //         return 1;
    //      }
    //      else {
    //         return movie1.title.localeCompare(movie2.title);
    //      }
     })
    return moviesOrder;
        
    }

    // function compare(a, b) {
    //     if (a < b) return -1; // a is less than b
    //     if (a > b) return 1; // a is greater than b
    //     if (a === b) return 0; // a equals b
    //   }

    


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const moviesOrder = [...moviesArray].sort(function (movie1,movie2) {
        return movie1.title.localeCompare(movie2.title);   // Porque é que não dá return movie1.title - movie2.title ??
    })

    const listOfmovies = moviesOrder.map (function (movies) {
        return movies.title;
    })


    if (listOfmovies.length > 20) {
        return listOfmovies.slice(0,20);
    }

    else {
        return listOfmovies;
    }

  

}



// should be declared - SIM
// should return an array - SIM
// should return a new array, not mutate the original one - SIM
// should only return the title of the movies, each value should be a string
// should return all of items when the array passed has fewer than 20 items - SIM
// If there are more than 20 elements, return only 20 of them. - SIM
// should order them alphabetically.
// should return the top 20 after ordering them alphabetically.


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
