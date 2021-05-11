# Rewrite rules

Programming a working syntax and phrase structure checker is not easy. Due to that, the program is **extremely picky** about what is right and what is not. Here are collected those rules, which try to be as flexible as possible, read them before using the page:

- Use _have_ for causative phrases instead of _get_

- Always use _may_ as modal verb, never _might_

- Extra spaces will make the phrase go wrong, ensure that you don't add more than one between word and none at the end or the beginning. **Remember that a space is already put after the starting piece of the sentence**

- For _have been \<verb>ing_ type of phrases, use _\<time> ago_ constructions, instead of _since \<point_in_time>_.

## Flexibilities

My objective is to make the checker as flexible as possible, and those flexibilities will be slowly added into the checker. Below are listed a couple of rules that the checker ignores:

- All capital letters are ignored, the checker is case-insensitive

- Capital _I_ is ignored too.

- Commas are ignored, including in causative phrases.
