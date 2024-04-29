
  const synonymMapCategories = {
    'what': {
      'handjob': ["grab", "hold", "handjob",],
      'blowjob': ["suck" , "sucking" , "eating", "eat" , "give", "lick", "blowjob", "blowing", "blow"],
      'Fuck': ["fuck"],
      'anal': ["anal","ass","hole","asshole",],
      'pussy': ["pussy"],
      'Pussy Masturbate': ["play", "masturbate", "alone", "self", "yourself", "squirt", "finger", "fingering",],
      'Lick pussy': ["eat", "eating", "lick", "licking", "licks"],
      
    },

    'pose': {
      'spoon': ["spoon", "behind", "spooning"],
      'doggy': ["back", "doggy", "behind",],
      'ON knees': ["front", "knee", "knees", "floor", "crouch",],
      '69': ["69" , "sixtynine",],
      'cowgirl': ["riding", "ride", "cowgirl"],
      'reverse': ["reverse"],
      'missionary': ["missionary"],
      'Standing': ["standing", "stand", "against", "wall"]
    },

    'where': {
      'floor': ["floor", "ground", "carpet", "tiles",],
      'Public': ["outside", "outdoor", "forest", "out", "public"],
      'balkon': ["balkon", "terrace", "teracce"],
      'bed': ["laying", "bed", "bedroom"],
      'couch': ["couch", "sofa", "lounge"],
      'chair': ["chair", "stool"],
      'bathroom' : ["bathroom", "toilet", "wc",],
      'car' : ["car", "auto",],
      'party': ["party", "disco", "nightclub", "club"],
    },


    'style': {
      'soft': ["gentle", "soft", "softly", "slow", "nice", "passionate",],
      'hard': ["hard", "rough", "fast", "harder",],
      'POV': ["pov"],
      'BDSM': ["bdsm","dominate","dominated"],

      'MFM threesome': ["double", "threesome", "two", "friend", "brother", "collegue", "penetration", "men", "boys"],
      'MFF threesome': ["double", "threesome", "two", "friend", "girls", "women", "ladies"],
    },
    'color': {
          'black': ["black", "bbc"],
          'white': ["white"],
          'tanned':["tanned"]
    },

    'actions': {
     'choke': ["choke", "throat",],
     'smash': ["smash", "hit"],
     'spit': ["spit"],
     'Grab Boobs':["grab", "boobs", "tits"],
     'Grab Ass':["grab", "ass", "cheeks"],
     'Spread Ass': ["spread","cheeks", "ass"],

    },
    'extra': {
    'blonde': ["blonde" , "blondy", "hair"],
    'Redhead': ["redhead", "red", "hair"],
    'Black Hair': ["black", "dark", "hair"],
    'small': ["small", "tiny", "thin", "short",],
    'look': ["look", "see", "watch", "eyes"],
    'big': ["huge", "giant", "big", "long"],
    'cum': ["cum", "finish", "end", "cumm",],
    'mouth':["mouth", "tongue",],
    'pussy':["pussy"],
    'ass':["ass", "anal"],
    'stomach':["stomach"],
    'back':["back"],
    'oil': ["oil", "oily", "shiny",],
    'closeup':["closeup", "zoom", "zoomed"],
    }
  };

   // Function to add keywords to the input field
function addKeywords(category, keyword) {
  const keywords = synonymMapCategories[category][keyword];
  if (keywords) {
    const inputField = document.getElementById('keywordInput');
    const currentKeywords = inputField.value;
    const newKeywords = keywords.join(', ');

    // Split existing keywords by comma and remove leading/trailing whitespace
    const existingKeywords = currentKeywords ? currentKeywords.split(',').map(keyword => keyword.trim()) : [];
    
    // Filter out duplicates
    const uniqueKeywords = [...new Set([...existingKeywords, ...keywords])];
    
    inputField.value = uniqueKeywords.join(', '); // Set the input value to the unique keywords
  } else {
    console.error('Category or keyword not found');
  }
}
  
  // Function to generate buttons for categories
function generateButtonsCategories() {
  for (const category in synonymMapCategories) {
    const columnId = category + 'Buttons';
    const column = document.getElementById(columnId);
    for (const keyword in synonymMapCategories[category]) {
      const button = document.createElement('button');
      button.textContent = keyword.charAt(0).toUpperCase() + keyword.slice(1); // Capitalize the first letter of the keyword
      button.addEventListener('click', () => {
        addKeywords(category, keyword);
        button.style.backgroundColor = 'darkgray'; // Change background color to darkgray when clicked
      });
      column.appendChild(button);
    }
  }
}
// Function to reset button colors to normal
function resetButtonColors() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.style.backgroundColor = ''; // Reset background color to default
  });
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
        resetButtonColors(); 
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
  window.onload = generateButtonsCategories()
