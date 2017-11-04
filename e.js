// for(let i = 1, str = ''; i <= n; i++) console.log(str += '*');
// for(let n = 5, str = '*'; str.length <= n; str += '*') console.log(str);

/*

*
**
***
****
*****

    *
   **
  ***
 ****
*****

*/

// https://www.facebook.com/groups/ReactNative0411

const n = 10;

for(let i = 1; i <= n; i++) {
    let s = '';
    for(let j = 1; j <= n; j++) {
        s += (i >= n + 1 - j) ? '*' : ' ';
    }
    console.log(s);
}
