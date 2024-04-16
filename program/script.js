
// Define a dictionary of categories and their synonyms
const synonymMap = {
    'blowjob': ["suck" , "sucking" , "eating", "eat" , "give", "lick"],
    'hard': ["hard", "rough", "fast", "harder",],
    '69': ["69" , "sixtynine",],
    'blonde': ["blonde" , "blondy",],
    'small': ["small", "tiny", "thin", "short",],
    'look': ["look", "see", "watch", "eyes"],
    'handjob': ["grab", "hold", "handjob",],
    'hand': ["hand", "finger", "fingers",],
    'ON knees': ["front", "knee", "knees", "floor", "crouch",],
    'hold/touch': ["hold", "grab", "touch",],
    'spread': ["spread","cheeks"],
    'cum': ["cum", "finish", "end", "cumm",],
    'tits': ["tits", "boobs",],
    'bed': ["laying", "bed", "couch", "sofa",],
    'floor': ["floor", "ground", "carpet", "tiles",],
    'oil': ["oil", "oily", "shiny",],
    'soft': ["gentle", "soft", "softly", "slow", "nice", "passionate",
  ],
    'moan': ["moan", "scream", "talking",],
    'doggy': ["back", "doggy", "behind",],
    'masturbate': ["play", "masturbate",],
    'alone': ["alone", "self", "yourself",],
    'fingering': ["finger", "fingering",],
    'anal': ["anal","ass","hole","asshole",],
    'outdoor': ["outside", "outdoor", "out", "terrace", "balkon"],
    'cowgirl': ["riding", "ride", "cowgirl"],
    'eat': ["eat", "eating", "lick",],
    'black': ["black", "bbc"],
    'threesome': ["double", "threesome", "two", "friend", "brother", "collegue"],
  
  
    // Add more categories and their synonyms as needed
  };
  
  // Function to add keywords to the input field
  function addKeywords(category) {
    const keywords = synonymMap[category];
    if (keywords) {
      const inputField = document.getElementById('keywordInput');
      const currentKeywords = inputField.value;
      const newKeywords = keywords.join(', ');
      if (currentKeywords.length > 0) {
        inputField.value = currentKeywords + ', ' + newKeywords;
      } else {
        inputField.value = newKeywords;
      }
    } else {
      console.error('Category not found');
    }
  }
  
  // Function to generate buttons for categories
  function generateButtons() {
    const buttonsContainer = document.getElementById('buttonsContainer');
    for (const category in synonymMap) {
      const button = document.createElement('button');
      button.textContent = category.charAt(0).toUpperCase() + category.slice(1); // Capitalize the first letter of the category
      button.addEventListener('click', () => addKeywords(category));
      buttonsContainer.appendChild(button);
    }
  }
  
  
  
  let videos = [];
      let gifObjects = [];
      let currentIndex = 0;
  
      // Function to add a video to the array and display it
      function addVideo() {
        const videoUrl = prompt('Enter video URL:');
        if (videoUrl) {
          videos.unshift(videoUrl); // Add video to the beginning of the array
          displayCurrentVideo();
        }
      }
  
      // Function to display the current video
      function displayCurrentVideo() {
        const videoContainer = document.getElementById('videoContainer');
        videoContainer.innerHTML = '';
        const videoUrl = videos[currentIndex];
        if (videoUrl) {
          const videoDiv = document.createElement('div');
          videoDiv.classList.add('video-container');
          const videoNumber = document.createElement('div');
          videoNumber.classList.add('video-number');
          videoNumber.textContent = `Video ${videos.length - currentIndex}`; // Reverse numbering
          const videoElement = document.createElement('video');
          videoElement.src = videoUrl;
          videoElement.controls = true;
          videoDiv.appendChild(videoNumber);
          videoDiv.appendChild(videoElement);
          videoContainer.appendChild(videoDiv);
        }
      }
  
      // Function to create the GIF object and store it in the array
      function createGifObject() {
    
        const keywordInput = document.getElementById('keywordInput').value;
        document.getElementById('keywordInput').value = ""
        const keywords = keywordInput.split(',').map(keyword => keyword.trim());
        const gifObject = {
          "url": videos[currentIndex],
          "keywords": keywords
        };
        gifObjects.push(gifObject);
        videos.splice(currentIndex, 1); // Remove the current video from the array
        if (currentIndex >= videos.length) {
          currentIndex = 0; // Reset index if it exceeds the array length
        }
        displayCurrentVideo(); // Display the next video
      }
  
      // Function to display the stringified gifObjects
      function finish() {
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = '';
        gifObjects.forEach((gifObject, index) => {
          const stringCode = JSON.stringify(gifObject);
          const codeElement = document.createElement('pre');
          codeElement.textContent = `${stringCode},`;
          outputDiv.appendChild(codeElement);
        });
      }
  // Call the function to generate buttons when the page loads
  window.onload = generateButtons;