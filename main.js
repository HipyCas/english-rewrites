console.log("> Main script started execution");

const RED = "var(--red)";
const GREEN = "var(--green)";
const BLACK = "var(--black)";
const GRAY = "var(--gray)";
const PURPLE = "var(--purple)";

const form = document.getElementById("form");
const phrase = document.getElementById("phrase");
const rewrite = document.getElementById("rewrite");
const help = document.getElementById("help");

let index = 0;
let done = [];
let last = "";

form.onsubmit = function (event) {
  event.preventDefault();

  console.log("Submit");

  if (rewrite.value.charAt(0) == "#" && rewrite.value.charAt(1) == "!")
    newPhrase();

  if (phrases[index].rewrite.toLowerCase() == rewrite.value.toLowerCase()) {
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

  if (done.length == phrases.length) {
    // Reset done phrases list if all done
    done = [];
  }
  console.log(">> Loading phrase");

  do {
    index = Math.floor(Math.random() * phrases.length);
  } while (index in done || (done.length == 0 && last == index));
  console.log(">> Loading phrase " + index);

  phrase.innerText = phrases[index].phrase;
  rewrite.value = phrases[index].starts + " ";
  console.log(">>> Type: " + phrases[index]._type);
  help.innerText =
    typeof phrases[index]._type === "undefined"
      ? ""
      : phrases[index]._type
          .toLowerCase()
          .replace(
            phrases[index]._type.charAt(0),
            phrases[index]._type.charAt(0).toUpperCase()
          );
}

function getWhereError() {
  for (
    let i = 0;
    i < Math.min(rewrite.value.length, phrases[index].rewrite.length);
    i++
  ) {
    if (rewrite.value.charAt(i) != phrases[index].rewrite.charAt(i)) {
      return "First wrong character is letter number " + i;
    }
  }
  return rewrite.value.length < phrases[index].rewrite.length
    ? "The phrase is good so far, keep writing"
    : "Your phrase is longer than the correct one";
}

newPhrase();
