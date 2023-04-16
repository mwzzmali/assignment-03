fetch('https://mwzzmali.github.io/assignment-03/data.json')
  .then(response => response.json())
  .then(data => {
   
    const myArray = data;

    
    const yearDropdown = document.getElementById('yearDropdown');
    const languageDropdown = document.getElementById('languageDropdown');
    const ratingsDropdown = document.getElementById('ratingsDropdown');
    const genresDropdown = document.getElementById('genresDropdown');
    const searchBtn = document.getElementById('searchBtn');
    const tableBody = document.getElementById('tableBody');

    
   
    const yearSet = new Set();
  
    const languageSet = new Set();
  
    const vote_averageSet = new Set();
    const genresSet = new Set();

   
    myArray.forEach(obj => {
      const year = (new Date(obj.release_date)).getFullYear();
      yearSet.add(year);
      
      languageSet.add(obj.original_language);
      vote_averageSet.add(obj.vote_average);
      genresSet.add(...obj.genres);

     
    });
  


    const allYearOption = document.createElement('option');
    allYearOption.value = [...yearSet].join(','); // concatenate all languages into a single string
    allYearOption.textContent = 'All';
    allYearOption.value += ',All'
    yearDropdown.appendChild(allYearOption);
    
    yearSet.forEach(year => {
      const yearOption = document.createElement('option');
      yearOption.value = year;
      yearOption.textContent = year;
      yearDropdown.appendChild(yearOption);
    });
    const allLanguagesOption = document.createElement('option');
    allLanguagesOption.value = [...languageSet].join(','); // concatenate all languages into a single string
    allLanguagesOption.textContent = 'All';
    allLanguagesOption.value += ',All'
    languageDropdown.appendChild(allLanguagesOption);

    languageSet.forEach(original_language => {
      const languageOption = document.createElement('option');
      languageOption.value = original_language;
      languageOption.textContent = original_language;
      languageDropdown.appendChild(languageOption);
    });
    const allVoteOption = document.createElement('option');
    allVoteOption.value = [...vote_averageSet].join(','); // concatenate all languages into a single string
    allVoteOption.textContent = 'All';
    allVoteOption.value += ',All'
    ratingsDropdown.appendChild(allVoteOption);
    

    vote_averageSet.forEach(vote_average => {
      const vote_averageOption = document.createElement('option');
      vote_averageOption.value = vote_average;
      vote_averageOption.textContent = vote_average;
      ratingsDropdown.appendChild(vote_averageOption);
    });
    const allGenreOption = document.createElement('option');
    allGenreOption.value = [...genresSet].join(','); // concatenate all languages into a single string
    allGenreOption.textContent = 'All';
    allGenreOption.value += ',All'
    genresDropdown.appendChild(allGenreOption);
   
    genresSet.forEach(genre => {
      const genreOption = document.createElement('option');
      genreOption.value = genre;
      genreOption.textContent = genre;
      genresDropdown.appendChild(genreOption);
    });
   
    


    
    searchBtn.addEventListener('click', () => {
   
      
      const selectedYear = Array.from(yearDropdown.options)
      .filter(option => option.selected)
      .map(option => parseInt(option.value));
      const selectedLanguage = languageDropdown.value;
      const selectedvote_average = parseInt(ratingsDropdown.value);
      const selectedGenre = genresDropdown.value;

      
      const filteredArray = myArray.filter(obj => {
    
        if(languageDropdown.value.includes('All') &&
        yearDropdown.value.includes('All') &&
        genresDropdown.value.includes('All')
        ){
         
          return(allYearOption.value.includes(selectedYear) || isNaN(selectedYear)) &&
          (allLanguagesOption.value.includes(selectedLanguage) || selectedLanguage === '') &&
          (obj.vote_average === selectedvote_average || isNaN(selectedvote_average)) &&
          (allGenreOption.value.includes(selectedGenre) || selectedGenre === '') ;

        }
        else if(languageDropdown.value.includes('All') &&
        yearDropdown.value.includes('All')
        ){
          
          return(allYearOption.value.includes(selectedYear) || isNaN(selectedYear)) &&
          (allLanguagesOption.value.includes(selectedLanguage) || selectedLanguage === '') &&
          (obj.vote_average === selectedvote_average || isNaN(selectedvote_average)) &&
          (obj.genres.includes(selectedGenre) || selectedGenre === '') ;

        }
        else if(languageDropdown.value.includes('All') &&
        genresDropdown.value.includes('All')
        ){
        
          return(obj.release_date.includes(selectedYear) || isNaN(selectedYear)) &&
          (allLanguagesOption.value.includes(selectedLanguage) || selectedLanguage === '') &&
          (obj.vote_average === selectedvote_average || isNaN(selectedvote_average)) &&
          (allGenreOption.value.includes(selectedGenre) || selectedGenre === '') ;

        }
        else if(yearDropdown.value.includes('All') &&
        genresDropdown.value.includes('All')
        ){
          // console.log("hello");
          return(allYearOption.value.includes(selectedYear) || isNaN(selectedYear)) &&
          (obj.original_language.includes(selectedLanguage) || selectedLanguage === '') &&
          (obj.vote_average === selectedvote_average || isNaN(selectedvote_average)) &&
          (allGenreOption.value.includes(selectedGenre) || selectedGenre === '') ;

        }
        else if(languageDropdown.value.includes('All')){
          // console.log("hello");
          return(obj.release_date.includes(selectedYear) || isNaN(selectedYear)) &&
          (allLanguagesOption.value.includes(selectedLanguage) || selectedLanguage === '') &&
          (obj.vote_average === selectedvote_average || isNaN(selectedvote_average)) &&
          (obj.genres.includes(selectedGenre) || selectedGenre === '') ;

        }
        else if(yearDropdown.value.includes('All') ){
          // console.log("hello");
          return(allYearOption.value.includes(selectedYear) || isNaN(selectedYear)) &&
          (obj.original_language.includes(selectedLanguage) || selectedLanguage === '') &&
          (obj.vote_average === selectedvote_average || isNaN(selectedvote_average)) &&
          (obj.genres.includes(selectedGenre) || selectedGenre === '') ;

        }
        else if(genresDropdown.value.includes('All') ){
          // console.log("hello");
          return(obj.release_date.includes(selectedYear) || isNaN(selectedYear)) &&
          (obj.original_language.includes(selectedLanguage) || selectedLanguage === '') &&
          (obj.vote_average === selectedvote_average || isNaN(selectedvote_average)) &&
          (allGenreOption.value.includes(selectedGenre) || selectedGenre === '') ;
          

        }
        else if(ratingsDropdown.value.includes('All') ){
          console.log("hello");
          return(obj.release_date.includes(selectedYear) || isNaN(selectedYear)) &&
          (obj.original_language.includes(selectedLanguage) || selectedLanguage === '') &&
          (allVoteOption.value.includes(selectedvote_average) || selectedvote_average === '') &&
          (obj.genres.includes(selectedGenre) || selectedGenre === '') ;
          

        }
        
        else
        
        
       
        return(obj.release_date.includes(selectedYear) || isNaN(selectedYear)) &&
              (obj.original_language.includes(selectedLanguage) || selectedLanguage === '') &&
              (obj.vote_average === selectedvote_average || isNaN(selectedvote_average)) &&
              (obj.genres.includes(selectedGenre) || selectedGenre === '') ;
              
             
              
      });

    
      tableBody.innerHTML = '';

      
      if (filteredArray.length > 0) {
        let tableHTML = '';
        filteredArray.forEach((obj, index) => {
          const year1 = (new Date(obj.release_date)).getFullYear();
          const imagePath = 'https://image.tmdb.org/t/p/original'+obj.poster_path;
          const hours = Math.floor(obj.runtime / 60); // Get the hours
          const minutes = obj.runtime % 60; // Get the remaining minutes

          const formattedDuration = `${hours} h ${minutes}m`;
         
          tableHTML += `<tr style = "margin-top: 30px;
                          margin-bottom: 30px;
                          display: flex;
                          flex-direction: row;
                          justify-content: space-between;">
                          <td>${index+1}</td>
                      
                         
                          <td  style = "
                          display: flex;
                          flex-direction: row;"> 
                          
                          <img src="${imagePath}" alt="Example Image" style= "width: 100px; height: 100px;">
                          <span style = "
                          display: flex;
                          flex-direction: column;
                          margin-top: auto;">
                          
                          <span style="font-weight: bold; color: blue;">${obj.title}</span>
                          <span style = "
                          display: flex;
                          flex-direction: row;
                          ">
                         
                          <span style=" box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
                          color:rgb(166, 166, 166);
                          
                           margin-right: 2px;">${obj.certification}</span>
                          ${obj.genres}.
                          ${formattedDuration}
                          </span>
                          </span>
                          
                         
                          </td>
                         
                           <td>${year1}</td>
                        </tr>`;
        });
        tableBody.innerHTML = tableHTML;
      } else {
        tableBody.innerHTML = '<tr><td colspan="3">No results found</td></tr>';
      }
    });
    genresDropdown.addEventListener('click', () => {
      searchBtn.click();
    });
    yearDropdown.addEventListener('click', () => {
      searchBtn.click();
    });
    languageDropdown.addEventListener('click', () => {
      searchBtn.click();
    });
    ratingsDropdown.addEventListener('click', () => {
      searchBtn.click();
    });


  
 
  });
