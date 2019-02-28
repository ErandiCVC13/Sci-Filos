window.data = {

    filterByConside: (data, letterValue) => {
        
        const searConside = data.filter(data => (data.Title.toLowerCase().match(letterValue.toLowerCase())));
        return searConside;
      }



    
// orderData: (dataMovie, sortBy, sortOrder) => {
// dataMovie.map (element => {
//     let element;
// return element.Title;

// });

// if (sortOrder == 'asc') {
//     return data.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : -1 );
// }

// }
    

};
