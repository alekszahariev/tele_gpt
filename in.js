
// Define a dictionary of categories and their synonyms
const synonymMap = {
  'blowjob': ['"suck"' , '"sucking"' , '"eating"', '"eat"' , '"give"', '"lick"'],
  'hard': ['"hard"', '"rough"', '"fast"', '"harder"',],
  '69': ['"69" ', '"sixtynine"',],
  'blonde': ['"blonde"' , '"blondy"',],
  'small': ['"small"', '"tiny"', '"thin"', '"short"',],
  'look': ['"look"', '"see"', '"watch"', '"eyes"'],
  'handjob': ['"grab"', '"hold"', '"handjob",'],
  'hand': ['"hand"', '"finger"', '"fingers"',],
  'ON knees': ['"front"', '"knee"', '"knees"', '"floor"', '"crouch"',],
  'hold/touch': ['"hold"', '"grab"', '"touch"',],
  'spread': ['"spread"','"cheeks"'],
  'cum': ['"cum"', '"finish"', '"end"', '"cumm"',],
  'tits': ['"tits"', '"boobs"',],
  'bed': ['"laying"', '"bed"', '"couch"', '"sofa"',],
  'floor': ['"floor"', '"ground"', '"carpet"', '"tiles"',],
  'oil': ['"oil"', '"oily"', '"shiny"',],
  'soft': ['"gentle"', '"soft"', '"softly"', '"slow"', '"nice"', '"passionate"',
],
  'moan': ['"moan"', '"scream"', '"talking"',],
  'doggy': ['"back"', '"doggy"', '"behind"',],

  'masturbate': ['"play"', '"masturbate"',],
  'alone': ['"alone"', '"self"', '"yourself"',],
  'fingering': ['"finger"', '"fingering"',],
  'anal': ['"anal"','"ass"','"hole"','"asshole"',],
  'outdoor': ['"outside"', '"outdoor"', '"out"', '"terrace"', '"balkon"'],
  'cowgirl': ['"riding"', '"ride"', '"cowgirl"'],
  'eat': ['"eat"', '"eating"', '"lick"',],
  'black': ['"black"', '"bbc"'],
  'threesome': ['"double"', '"threesome"', '"two"', '"friend"', '"brother"', '"collegue"'],


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

// Call the function to generate buttons when the page loads
window.onload = generateButtons;