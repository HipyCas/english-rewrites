//* CONSTANTS
//* CSS Colors
const RED = 'var(--red)';
const GREEN = 'var(--green)';
const BLACK = 'var(--black)';
const GRAY = 'var(--gray)';
const PURPLE = 'var(--purple)';

//* Icons
const ARROW_DOWN = ' \\25BC';
const ARROW_UP = ' \\25B2';

//* CSS toggle styles
const OPENED_DROP_TOGGLE = '#drop-toggle::after{content:"' + ARROW_UP + '";}';
const CLOSED_DROP_TOGGLE = '#drop-toggle::after{content:"' + ARROW_DOWN + '";}';

//* HTML Elements
const form = document.getElementById('form');
const phrase = document.getElementById('phrase');
const rewrite = document.getElementById('rewrite');
const help = document.getElementById('help');
const dropdown_toggle = document.getElementById('drop-toggle');
const dropdown = document.getElementById('dropdown');
const dropdown_items = document.getElementsByClassName('drop-item');

//* Root selector
const root = document.querySelector(':root');

//* GLOBAL VARIABLES
let filtered_phrases = phrases; // A clone of the phrases data array that can be filtered an played with
let type = 'all'; // Type of phrase selected

let index = 0; // Index of phrase in use
let done = []; // Record of done phrases via their index
let last = ''; // Index of the last phrase done
// TODO Change last to undefined or null and perform a check?

//* Form/Phrase submission handler
form.onsubmit = function (event) {
  event.preventDefault(); // Prevent page reload

  if (rewrite.value.charAt(0) == '#') {
    // Skip phrase if starts by `#!`
    if (rewrite.value.charAt(1) == '!')
      rewrite.value = filtered_phrases[index].rewrite;
    // Show correct rewrite by prefixing input with `#?`
    else if (rewrite.value.charAt(1) == '?') {
      rewrite.value = filtered_phrases[index].rewrite;
      return;
    }
    // Go back to last phrase
    else if (rewrite.value.charAt(1) == '<') {
      index = last; // Set index to last, effectively reloading
      done.pop(); // Remove last phrase in done, as it was not completed
      // Copied from the `newPhrase` function
      phrase.innerText = filtered_phrases[index].phrase;
      rewrite.value =
        typeof filtered_phrases[index].starts === 'undefined'
          ? ''
          : filtered_phrases[index].starts + ' ';
      help.innerText =
        typeof filtered_phrases[index]._type === 'undefined'
          ? '(Phrase ' + done.length + '/' + filtered_phrases.length + ')'
          : '(Phrase ' +
            done.length +
            '/' +
            filtered_phrases.length +
            ') ' +
            filtered_phrases[index]._type
              .toLowerCase()
              .replace(
                filtered_phrases[index]._type.charAt(0),
                filtered_phrases[index]._type.charAt(0).toUpperCase()
              );
      return;
    }
  }

  // Case phrase (in lowercase) matches
  if (
    filtered_phrases[index].rewrite.replace(/,/g, '').toLowerCase() ==
    rewrite.value.replace(/,/g, '').toLowerCase()
  ) {
    // Set to success styles
    rewrite.style.color = GREEN;
    help.style.color = GREEN;
    help.innerText = 'Correct!';

    // Reset styles to default
    rewrite.style.color = GRAY;
    help.style.color = PURPLE;
    newPhrase(); // ? What is going on here? How can this be working? Like, shouldn't it be setting the color to void/undefined???
  }
  // Case phrase does not match: Get where the error happened and turn to red
  else {
    rewrite.style.color = RED;

    help.innerText = getWhereError();
  }

  return false; // No form reload
};

//* Generate and assign a new phrase
function newPhrase() {
  last = index; // store the index inside last

  if (done.length == filtered_phrases.length) {
    // Reset done filtered_phrases list if all done
    done = [];
  }

  // Get a new random index that is not yet done
  do {
    index = Math.floor(Math.random() * filtered_phrases.length);
  } while (done.includes(index) || last == index);
  done.push(index);

  // Set the phrase text to the database phrase
  phrase.innerText = filtered_phrases[index].phrase;
  // Check if there is a phrase starting piece (`starts` field) and se the input to it plus a space if there is
  rewrite.value =
    typeof filtered_phrases[index].starts === 'undefined'
      ? ''
      : filtered_phrases[index].starts + ' ';
  // Set help to phrase count over total and type if defined: `(<done>/<total>) <type_if_has>`
  // TODO The phrase counts is repeated, can add the ternary operator just after the (n/N)
  help.innerText =
    typeof filtered_phrases[index]._type === 'undefined'
      ? '(Phrase ' + done.length + '/' + filtered_phrases.length + ')'
      : '(Phrase ' +
        done.length +
        '/' +
        filtered_phrases.length +
        ') ' +
        filtered_phrases[index]._type
          .toLowerCase()
          .replace(
            filtered_phrases[index]._type.charAt(0),
            filtered_phrases[index]._type.charAt(0).toUpperCase()
          );
  if (filtered_phrases[index].source !== undefined)
    help.innerText += ' [source: ' + filtered_phrases[index].source + ']';
}

//* Get a text indicating where the error is
/**
 * Get a text indicating where the error is
 * @returns {string} The string explaining the error
 */
function getWhereError() {
  // Loop over the smaller of the rewrites (correct or input) to ensure that there is no index out of bounds exception
  /*for (
    let i = 0;
    i < Math.min(rewrite.value.length, filtered_phrases[index].rewrite.length);
    i++
  ) {
    // Check if the current character does not match, and return that then
    // TODO Add .toLowerCase() for each character, to ensure that it is not checking for capitalization
    if (
      rewrite.value.charAt(i).toLowerCase() !=
      filtered_phrases[index].rewrite.charAt(i).toLowerCase()
    ) {
      return 'First wrong character is letter number ' + i;
    }
  }*/
  for (
    let i = 0;
    i <
    Math.min(
      rewrite.value.replace(/,/g, '').split(' ').length,
      filtered_phrases[index].rewrite.replace(/,/g, '').split(' ').length
    );
    i++
  ) {
    if (
      rewrite.value.replace(/,/g, '').split(' ')[i].toLowerCase() !==
      filtered_phrases[index].rewrite
        .replace(/,/g, '')
        .split(' ')
        [i].toLowerCase()
    )
      return 'First wrong word is number ' + (i + 1);
  }
  // If there is no error, this was definitely called because phrases don't match, so check length as last option
  return rewrite.value.length < filtered_phrases[index].rewrite.length
    ? 'The phrase is good so far, keep writing'
    : 'Your phrase is longer than the correct one';
}

//* Toggle the type selection dropdown
function toggleDropdown() {
  // Case dropdown is collapsed
  if (dropdown.style.display === 'none' || dropdown.style.display === '') {
    dropdown.style.display = 'inherit'; // Update dropdown display property to parent's/default
    root.style.setProperty('--drop-icon', ARROW_UP); // Set dropdown icon CSS variable
    //! I believe the above property setting was not actually changing anything, so maybe I could simply delete it

    // TODO Change this querySelector to a global property
    // TODO Change query to a more specific one, not just a general style tag
    let styleElem = document.querySelector('style');
    styleElem.innerHTML = OPENED_DROP_TOGGLE; // Set the
  }
  // Case dropdown is open
  else {
    dropdown.style.display = 'none';
    //root.style.setProperty("--drop-icon", ARROW_DOWN);
    // TODO See, it is not useful

    // TODO Same as above
    let styleElem = document.querySelector('style');
    styleElem.innerHTML = CLOSED_DROP_TOGGLE;
  }
}

// Set the dropdown toggle onclick event to the toggle function
// TODO Instead of this, set the function as an anonymous one directly here, like for the form submit
// ? Maybe keep it this way? Maybe you will need it to programatically open some day
dropdown_toggle.onclick = toggleDropdown;

//* Return the phrases filtered by the type
/**
 * Return the phrases filtered by the type
 * @param {string} _type
 * @+returns {any[]}
 */
function filterPhrasesByType(_type) {
  toReturn = []; // Empty array where the phrases will be
  if (_type == 'all') return phrases;
  for (let i = 0; i < phrases.length; i++) {
    // TODO Change this (and all other) undefined type check to `phrases[i]._type === undefined`, as Mozilla says it is better
    if (typeof phrases[i]._type === 'undefined') continue; // Skip phrase if it doesn't have a type defined
    if (_type.includes('/')) {
      // If the type is multiple, like As/Unless:
      let types = _type.split('/'); // Split to check for both
      for (let j = 0; j < types.length; j++) {
        // Loop over the different types specified
        if (
          types[j] === 'as' &&
          phrases[i]._type.toLowerCase().includes('passive')
        )
          // This ensures that `passive` is not actually registered when setting type to `as`, because `passive` includes an `as` inside its name
          continue;
        if (phrases[i]._type.toLowerCase().includes(types[j]))
          // Check if the phrase type includes the type and if it does push it to the return array
          toReturn.push(phrases[i]);
      }
    }
    if (
      phrases[i]._type?.toLowerCase().includes(_type) ||
      phrases[i].source?.toLowerCase().includes(_type)
    )
      // You may wonder why include and not ===, well, `formal relative` should be included when selecting `relative`
      // The source.includes() is used for choosing the source of the phrases, like 'exam'
      // TODO Better implementation of source selection, like 'Source: exam' in the popup, instead of just 'exam'
      toReturn.push(phrases[i]);
  }
  return toReturn; // Return the new composed array
}

function selectType() {
  // Deselect all options (in CSS means) before setting others
  for (let i = 0; i < dropdown_items.length; i++)
    dropdown_items[i].setAttribute('selected', 'false');
  this.setAttribute('selected', 'true');

  type = this.innerText.toLowerCase(); // Get the selected name, which is the same as their inner text
  filtered_phrases = filterPhrasesByType(type); // Update phrases
  done = []; // Reset the phrases done as we are changing the type, we could already have done all of this type and neither we care about the other ones done
  newPhrase(); // Generate a new phrase according to the type
}

// Set the select type action for all dropdown items
for (let i = 0; i < dropdown_items.length; i++) {
  dropdown_items[i].onclick = selectType;
}

// Select the first type, which is `all`
dropdown_items[0].setAttribute('selected', 'true');

newPhrase(); //* Generate a first phrase
