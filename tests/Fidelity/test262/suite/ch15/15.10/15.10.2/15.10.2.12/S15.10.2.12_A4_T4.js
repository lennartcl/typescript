// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The production CharacterClassEscape :: W evaluates by returning the set of all characters not
 * included in the set returned by CharacterClassEscape :: w
 *
 * @path ch15/15.10/15.10.2/15.10.2.12/S15.10.2.12_A4_T4.js
 * @description RUSSIAN ALPHABET
 */

var regexp_W = /\W/;

//CHECK#0410-042F
var result = true;  
for (alpha = 0x0410; alpha <= 0x042F; alpha++) {
  str = String.fromCharCode(alpha);
  arr = regexp_W.exec(str); 
  if ((arr === null) || (arr[0] !== str)) {
    result = false;
  }
}

if (result !== true) {
  $ERROR('#1: RUSSIAN CAPITAL ALPHABET');
}

//CHECK#0430-044F
var result = true; 
for (alpha = 0x0430; alpha <= 0x044F; alpha++) {
  str = String.fromCharCode(alpha);
  arr = regexp_W.exec(str); 
  if ((arr === null) || (arr[0] !== str)) {
    result = false;
  }
}

if (result !== true) {
  $ERROR('#2: russian small alphabet');
}

