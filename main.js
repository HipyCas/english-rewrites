console.log("> Main script started execution");

const RED = "var(--red)";
const GREEN = "var(--green)";
const BLACK = "var(--black)";
const GRAY = "var(--gray)";
const PURPLE = "var(--purple)";

const ARROW_DOWN = " \\25BC";
const ARROW_UP = " \\25B2";

const OPENED_DROP_TOGGLE = '#drop-toggle::after{content:"' + ARROW_UP + '";}';
const CLOSED_DROP_TOGGLE = '#drop-toggle::after{content:"' + ARROW_DOWN + '";}';

const form = document.getElementById("form");
const phrase = document.getElementById("phrase");
const rewrite = document.getElementById("rewrite");
const help = document.getElementById("help");
const dropdown_toggle = document.getElementById("drop-toggle");
const dropdown = document.getElementById("dropdown");
const dropdown_items = document.getElementsByClassName("drop-item");

const root = document.querySelector(":root");

let filtered_phrases = phrases;
let type = "all";

let index = 0;
let done = [];
let last = "";

form.onsubmit = function (event) {
  event.preventDefault();

  if (rewrite.value.charAt(0) == "#" && rewrite.value.charAt(1) == "!")
    newPhrase();

  if (
    filtered_phrases[index].rewrite.toLowerCase() == rewrite.value.toLowerCase()
  ) {
    rewrite.style.color = GREEN;
    help.style.color = GREEN;
    help.innerText = "Correct!";

    rewrite.style.color = GRAY;
    help.style.color = PURPLE;
    help.style.color = newPhrase();
  } else {
    rewrite.style.color = RED;

    help.innerText = getWhereError();
  }

  return false; // No form reload
};

function newPhrase() {
  last = index;

  if (done.length == filtered_phrases.length) {
    // Reset done filtered_phrases list if all done
    done = [];
  }

  do {
    index = Math.floor(Math.random() * filtered_phrases.length);
  } while (index in done || last == index);
  done.push(index);

  phrase.innerText = filtered_phrases[index].phrase;
  rewrite.value =
    typeof filtered_phrases[index].starts === "undefined"
      ? ""
      : filtered_phrases[index].starts + " ";
  console.log(">>> Type: " + filtered_phrases[index]._type);
  help.innerText =
    typeof filtered_phrases[index]._type === "undefined"
      ? "(Phrase " + done.length + "/" + filtered_phrases.length + ")"
      : "(Phrase " +
        done.length +
        "/" +
        filtered_phrases.length +
        ") " +
        filtered_phrases[index]._type
          .toLowerCase()
          .replace(
            filtered_phrases[index]._type.charAt(0),
            filtered_phrases[index]._type.charAt(0).toUpperCase()
          );
}

function getWhereError() {
  for (
    let i = 0;
    i < Math.min(rewrite.value.length, filtered_phrases[index].rewrite.length);
    i++
  ) {
    if (rewrite.value.charAt(i) != filtered_phrases[index].rewrite.charAt(i)) {
      return "First wrong character is letter number " + i;
    }
  }
  return rewrite.value.length < filtered_phrases[index].rewrite.length
    ? "The phrase is good so far, keep writing"
    : "Your phrase is longer than the correct one";
}

function toggleDropdown() {
  console.log("Thats not working : " + dropdown.style.display);
  //if (dropdown.style.display === "") dropdown.style.display = "none";
  if (dropdown.style.display === "none" || dropdown.style.display === "") {
    console.log("Changing size");
    dropdown.style.display = "inherit";
    console.log(
      "Property is " +
        dropdown.style.getPropertyValue("--drop-icon") +
        ", to be changed to " +
        ARROW_UP
    );
    root.style.setProperty("--drop-icon", ARROW_UP);

    let styleElem = document.querySelector("style");
    styleElem.innerHTML = OPENED_DROP_TOGGLE;
  } else {
    dropdown.style.display = "none";
    console.log(
      "Property is " + dropdown.style.getPropertyValue("--drop-icon")
    );
    //root.style.setProperty("--drop-icon", ARROW_DOWN);

    let styleElem = document.querySelector("style");
    styleElem.innerHTML = CLOSED_DROP_TOGGLE;
  }
}

dropdown_toggle.onclick = toggleDropdown;

/**
 *
 * @param {string} _type
 * @returns {any[]}
 */
function filterPhrasesByType(_type) {
  toReturn = [];
  if (_type == "all") return phrases;
  for (let i = 0; i < phrases.length; i++) {
    if (typeof phrases[i]._type === "undefined") continue;
    if (_type.includes("/")) {
      let types = _type.split("/");
      for (let j = 0; j < types.length; j++) {
        if (
          types[j] === "as" &&
          phrases[i]._type.toLowerCase().includes("passive")
        )
          continue;
        if (phrases[i]._type.toLowerCase().includes(types[j]))
          toReturn.push(phrases[i]);
      }
    }
    if (phrases[i]._type.toLowerCase().includes(_type))
      toReturn.push(phrases[i]);
  }
  return toReturn;
}

function selectType() {
  for (let i = 0; i < dropdown_items.length; i++)
    dropdown_items[i].setAttribute("selected", "false");
  this.setAttribute("selected", "true");

  type = this.innerHTML.toLowerCase();
  filtered_phrases = filterPhrasesByType(type);
  done = [];
  newPhrase();
}

for (let i = 0; i < dropdown_items.length; i++) {
  dropdown_items[i].onclick = selectType;
}

dropdown_items[0].setAttribute("selected", "true");

newPhrase();
