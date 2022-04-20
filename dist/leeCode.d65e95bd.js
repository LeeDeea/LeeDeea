import{_ as f}from"./index.d8d8fe43.js";import{o as n,b as r,e,F as m,f as d,p as _,j as I,n as y,g as u,i as w}from"./vendor.cc5e9912.js";var L="./dist/1.1e569f5d.png",S="./dist/2.5b236776.png",A="./dist/02.39c76b70.png",R="./dist/3.09184d2d.png",P="./dist/4.c7e85448.png",N="./dist/5.576fdde9.png",k="./dist/6.245c48c6.png",T="./dist/06.096675f7.png",C="./dist/7.b6dd2616.png",M="./dist/8.97a86271.png",H="./dist/9.a3e66e70.png",i={answer1:L,answer2:S,des2:A,answer3:R,answer4:P,answer5:N,answer6:k,des6:T,answer7:C,answer8:M,answer9:H};let v=[{title:"\u4E24\u6570\u4E4B\u548C",level:"\u7B80\u5355",describe:"\u7ED9\u5B9A\u4E00\u4E2A\u6574\u6570\u6570\u7EC4 nums\xA0\u548C\u4E00\u4E2A\u6574\u6570\u76EE\u6807\u503C target\uFF0C\u8BF7\u4F60\u5728\u8BE5\u6570\u7EC4\u4E2D\u627E\u51FA \u548C\u4E3A\u76EE\u6807\u503C target\xA0 \u7684\u90A3\xA0\u4E24\u4E2A\xA0\u6574\u6570\uFF0C\u5E76\u8FD4\u56DE\u5B83\u4EEC\u7684\u6570\u7EC4\u4E0B\u6807\u3002<br/>\u4F60\u53EF\u4EE5\u5047\u8BBE\u6BCF\u79CD\u8F93\u5165\u53EA\u4F1A\u5BF9\u5E94\u4E00\u4E2A\u7B54\u6848\u3002\u4F46\u662F\uFF0C\u6570\u7EC4\u4E2D\u540C\u4E00\u4E2A\u5143\u7D20\u5728\u7B54\u6848\u91CC\u4E0D\u80FD\u91CD\u590D\u51FA\u73B0\u3002\u4F60\u53EF\u4EE5\u6309\u4EFB\u610F\u987A\u5E8F\u8FD4\u56DE\u7B54\u6848\u3002",example:[{input:"\u8F93\u5165\uFF1Anums = [2,7,11,15], target = 9",output:"\u8F93\u51FA\uFF1A[0,1]",ex:"\u89E3\u91CA\uFF1A\u56E0\u4E3A nums[0] + nums[1] == 9 \uFF0C\u8FD4\u56DE [0, 1] \u3002"},{input:"\u8F93\u5165\uFF1Anums = [3,2,4], target = 6",output:"\u8F93\u51FA\uFF1A[1,2]"},{input:"\u8F93\u5165\uFF1Anums = [3,3], target = 6",output:"\u8F93\u51FA\uFF1A[0,1]"}],tip:["2 <= nums.length <= 104","-109 <= nums[i] <= 109","-109 <= target <= 109","\u53EA\u4F1A\u5B58\u5728\u4E00\u4E2A\u6709\u6548\u7B54\u6848"],answer:`// \u7B80\u5355\u7684\u53CC\u5C42\u5FAA\u73AF
/**
* @param { number[] } nums
* @param { number} target
* @return{ number[] }
*/
var twoSum = function (nums, target) {
    for (i = 0; i < nums.length; i++) {
        for (j = 0; j < i; j++) {
            if (nums[i] + nums[j] == target) {
                return (arr = [i, j]);
            }
        }
    }
};  `,answerImgUrl:i.answer1},{title:"\u4E24\u6570\u76F8\u52A0",level:"\u7B80\u5355",describe:"\u7ED9\u4F60\u4E24\u4E2A\xA0\u975E\u7A7A\xA0\u7684\u94FE\u8868\uFF0C\u8868\u793A\u4E24\u4E2A\u975E\u8D1F\u7684\u6574\u6570\u3002\u5B83\u4EEC\u6BCF\u4F4D\u6570\u5B57\u90FD\u662F\u6309\u7167\xA0\u9006\u5E8F\xA0\u7684\u65B9\u5F0F\u5B58\u50A8\u7684\uFF0C\u5E76\u4E14\u6BCF\u4E2A\u8282\u70B9\u53EA\u80FD\u5B58\u50A8\xA0\u4E00\u4F4D\xA0\u6570\u5B57\u3002<br/>\u8BF7\u4F60\u5C06\u4E24\u4E2A\u6570\u76F8\u52A0\uFF0C\u5E76\u4EE5\u76F8\u540C\u5F62\u5F0F\u8FD4\u56DE\u4E00\u4E2A\u8868\u793A\u548C\u7684\u94FE\u8868\u3002 \u4F60\u53EF\u4EE5\u5047\u8BBE\u9664\u4E86\u6570\u5B570 \u4E4B\u5916\uFF0C\u8FD9\u4E24\u4E2A\u6570\u90FD\u4E0D\u4F1A\u4EE5 0\xA0\u5F00\u5934\u3002",desImg:i.des2,example:[{input:"\u8F93\u5165\uFF1Al1 = [2,4,3], l2 = [5,6,4] ",output:"\u8F93\u51FA\uFF1A[7,0,8]",ex:"\u89E3\u91CA\uFF1A342 + 465 = 807"},{input:"\u8F93\u5165\uFF1Al1 = [0], l2 = [0] ",output:"\u8F93\u51FA\uFF1A[0]"},{input:"\u8F93\u5165\uFF1Al1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9] ",output:"\u8F93\u51FA\uFF1A[8,9,9,9,0,0,0,1]"}],tip:[" \u6BCF\u4E2A\u94FE\u8868\u4E2D\u7684\u8282\u70B9\u6570\u5728\u8303\u56F4 [1, 100] \u5185","0 <= Node.val <= 9","\u9898\u76EE\u6570\u636E\u4FDD\u8BC1\u5217\u8868\u8868\u793A\u7684\u6570\u5B57\u4E0D\u542B\u524D\u5BFC\u96F6"],answer:`// \u6CE8\u610F\u94FE\u8868\u7684\u5355\u65B9\u5411\u683C\u5F0F
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param { ListNode } l1
 * @param { ListNode } l2
 * @return{ ListNode }
 */
var addTwoNumbers = function (l1, l2) {
    let addOne = 0; // \u8FDB\u4F4D
    let sum = new ListNode("0"); // \u65B0\u8282\u70B9
    let head = sum; // \u7528\u4E8E\u8F93\u51FA\u7684\u5934\u8282\u70B9
    while (addOne || l1 || l2) {
    // \u8FDB\u4F4D\u4E3A0 \u88681\uFF0C2\u5230\u8FBE\u672B\u5C3E\u7ED3\u70B9null
    let val1 = l1 !== null ? l1.val : 0;
    let val2 = l2 !== null ? l2.val : 0;
    let total = val1 + val2 + addOne; // \u7D2F\u52A0
    addOne = total >= 10 ? 1 : 0; // \u8FDB\u4F4D
    sum.next = new ListNode(total % 10); // \u8D85\u8FC710\u7684\u90E8\u5206\u53D6\u4F59
    sum = sum.next;
    // \u622A\u65AD\u8868\u957F
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
    }
    return head.next;
};`,answerImgUrl:i.answer2},{title:"\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32",level:"\u4E2D\u7B49",describe:"\u7ED9\u5B9A\u4E00\u4E2A\u5B57\u7B26\u4E32 s \uFF0C\u8BF7\u4F60\u627E\u51FA\u5176\u4E2D\u4E0D\u542B\u6709\u91CD\u590D\u5B57\u7B26\u7684 \u6700\u957F\u5B50\u4E32 \u7684\u957F\u5EA6\u3002",example:[{input:"\u8F93\u5165: s = 'abcabcbb'",output:"\u8F93\u51FA: 3 ",ex:"\u89E3\u91CA: \u56E0\u4E3A\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32\u662F 'abc'\uFF0C\u6240\u4EE5\u5176\u957F\u5EA6\u4E3A 3\u3002"},{input:"\u8F93\u5165: s = 'bbbbb'",output:"\u8F93\u51FA: 1",ex:"\u89E3\u91CA: \u56E0\u4E3A\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32\u662F 'b'\uFF0C\u6240\u4EE5\u5176\u957F\u5EA6\u4E3A 1\u3002"},{input:"\u8F93\u5165: s = 'pwwkew'",output:"\u89E3\u91CA: \u56E0\u4E3A\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32\u662F 'wke'\uFF0C\u6240\u4EE5\u5176\u957F\u5EA6\u4E3A 3\u3002",ex:"\u89E3\u91CA: \u56E0\u4E3A\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32\u662F 'wke'\uFF0C\u6240\u4EE5\u5176\u957F\u5EA6\u4E3A 3\u3002\u8BF7\u6CE8\u610F\uFF0C\u4F60\u7684\u7B54\u6848\u5FC5\u987B\u662F \u5B50\u4E32 \u7684\u957F\u5EA6\uFF0C'pwke' \u662F\u4E00\u4E2A\u5B50\u5E8F\u5217\uFF0C\u4E0D\u662F\u5B50\u4E32\u3002"}],tip:["0 <= s.length <= 5 * 104","s \u7531\u82F1\u6587\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u7B26\u53F7\u548C\u7A7A\u683C\u7EC4\u6210"],answer:`// \u4E0D\u65AD\u5207\u7247\u6570\u7EC4\u5BFB\u627E\u6700\u5927\u503C
/**
 * @param { string }
 * @return{ number }
 */
var lengthOfLongestSubstring = function (s) {
    let arr = [];
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        //\u5982\u679C\u4E4B\u524D\u5B58\u5728\uFF0C\u5C31\u5220\u9664\uFF0C\u76F4\u5230\u6CA1\u6709\u4E3A\u6B62
        if (arr.indexOf(s[i]) !== -1) {
        arr.splice(0, arr.indexOf(s[i]) + 1);
        }
        arr.push(s[i]);
        max = Math.max(max, arr.length);
    }
    return max;
};`,answerImgUrl:i.answer3},{title:"\u5BFB\u627E\u4E24\u4E2A\u6B63\u5E8F\u6570\u7EC4\u7684\u4E2D\u4F4D\u6570",level:"\u56F0\u96BE",describe:"\u7ED9\u5B9A\u4E24\u4E2A\u5927\u5C0F\u5206\u522B\u4E3A m \u548C n \u7684\u6B63\u5E8F\uFF08\u4ECE\u5C0F\u5230\u5927\uFF09\u6570\u7EC4\xA0nums1 \u548C\xA0nums2\u3002\u8BF7\u4F60\u627E\u51FA\u5E76\u8FD4\u56DE\u8FD9\u4E24\u4E2A\u6B63\u5E8F\u6570\u7EC4\u7684 \u4E2D\u4F4D\u6570 \u3002<br/>\u7B97\u6CD5\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u5E94\u8BE5\u4E3A O(log (m+n)) \u3002",example:[{input:"\u8F93\u5165\uFF1Anums1 = [1,3], nums2 = [2]",output:"\u8F93\u51FA\uFF1A2.00000",ex:"\u89E3\u91CA\uFF1A\u5408\u5E76\u6570\u7EC4 = [1,2,3] \uFF0C\u4E2D\u4F4D\u6570 2"},{input:"\u8F93\u5165\uFF1Anums1 = [1,2], nums2 = [3,4]",output:"\u8F93\u51FA\uFF1A2.50000",ex:"\u89E3\u91CA\uFF1A\u5408\u5E76\u6570\u7EC4 = [1,2,3,4] \uFF0C\u4E2D\u4F4D\u6570 (2 + 3) / 2 = 2.5"}],tip:["nums1.length == m","nums2.length == n","0 <= m <= 1000","0 <= n <= 1000","1 <= m + n <= 2000","-106 <= nums1[i], nums2[i] <= 106"],answer:` // \u5408\u5E76\uFF0C\u6392\u5E8F\uFF0C\u627E\u4E2D\u4F4D\u6570\uFF0C\u505A\u6570\u7B97
/**
 * @param { number[] } nums1
 * @param { number[] } nums2
 * @return{ number }
 */
var findMedianSortedArrays = function (nums1, nums2) {
    // \u5408\u5E76 \u6392\u5E8F
    let arr = [...nums1, ...nums2];
    arr.sort((a, b) => a - b);
    // \u4E2D\u4F4D\u6570,\u505A\u6570\u7B97
    let length = arr.length;
    if (length % 2) {
    // \u5947\u6570
    return arr[Math.floor(length / 2)];
    } else {
    // \u5076\u6570
    return (
        (arr[Math.floor(length / 2)] + arr[Math.floor(length / 2) - 1]) / 2
    );
    }
};`,answerImgUrl:i.answer4},{title:"\u6700\u957F\u56DE\u6587\u5B50\u4E32",level:"\u4E2D\u7B49",describe:"\u7ED9\u4F60\u4E00\u4E2A\u5B57\u7B26\u4E32 s\uFF0C\u627E\u5230 s \u4E2D\u6700\u957F\u7684\u56DE\u6587\u5B50\u4E32\u3002",example:[{input:"\u8F93\u5165\uFF1As = 'babad'",output:"\u8F93\u51FA\uFF1A'bab'",ex:"\u89E3\u91CA\uFF1A'aba' \u540C\u6837\u662F\u7B26\u5408\u9898\u610F\u7684\u7B54\u6848\u3002"},{input:"\u8F93\u5165\uFF1As = 'cbbd'",output:"\u8F93\u51FA\uFF1A'bb'"}],tip:["1 <= s.length <= 1000","s \u4EC5\u7531\u6570\u5B57\u548C\u82F1\u6587\u5B57\u6BCD\u7EC4\u6210"],answer:`// \u4E2D\u5FC3\u6269\u6563\u6CD5
/**
 * @param { string }
 * @return{ string }
 */
var longestPalindrome = function (s) {
    let res = "";
    for (let i = 0; i < s.length; i++) {
    // \u5BFB\u627E\u957F\u5EA6\u4E3A\u5947\u6570\u7684\u56DE\u6587\u5B50\u4E32(\u4EE5\u5F53\u524D\u5143\u7D20\u5411\u4E24\u8FB9\u6269\u6563)
    const s1 = palindrome(s, i, i);
    // \u5BFB\u627E\u957F\u5EA6\u4E3A\u5076\u6570\u7684\u56DE\u6587\u5B50\u4E32(\u4EE5s[i],s[i + 1])\u5411\u4E24\u8FB9\u6269\u6563
    const s2 = palindrome(s, i, i + 1);
    res = res.length > s1.length ? res : s1;
    res = res.length > s2.length ? res : s2;
    }
    return res;
};
function palindrome(s, l, r) {
    // \u5DE6\u53F3\u6307\u9488\uFF0C\u4ECEs[l]\u548Cs[r]\u5411\u4E24\u8FB9\u6269\u6563\uFF0C\u627E\u5230\u6700\u957F\u56DE\u6587\u4E32
    while (l >= 0 && r < s.length && s[l] == s[r]) {
    l--;
    r++;
    }
    return s.substr(l + 1, r - l - 1);
}`,answerImgUrl:i.answer5},{title:"Z \u5B57\u5F62\u53D8\u6362",level:"\u4E2D\u7B49",describe:"\u5C06\u4E00\u4E2A\u7ED9\u5B9A\u5B57\u7B26\u4E32 s \u6839\u636E\u7ED9\u5B9A\u7684\u884C\u6570 numRows \uFF0C\u4EE5\u4ECE\u4E0A\u5F80\u4E0B\u3001\u4ECE\u5DE6\u5230\u53F3\u8FDB\u884C\xA0Z \u5B57\u5F62\u6392\u5217\u3002\u6BD4\u5982\u8F93\u5165\u5B57\u7B26\u4E32\u4E3A'PAYPALISHIRING'\xA0\u884C\u6570\u4E3A 3 \u65F6\uFF0C\u6392\u5217\u5982\u4E0B\u2193 \u4E4B\u540E\uFF0C\u4F60\u7684\u8F93\u51FA\u9700\u8981\u4ECE\u5DE6\u5F80\u53F3\u9010\u884C\u8BFB\u53D6\uFF0C\u4EA7\u751F\u51FA\u4E00\u4E2A\u65B0\u7684\u5B57\u7B26\u4E32\uFF0C\u6BD4\u5982\uFF1A'PAHNAPLSIIGYIR'\u3002\u8BF7\u4F60\u5B9E\u73B0\u8FD9\u4E2A\u5C06\u5B57\u7B26\u4E32\u8FDB\u884C\u6307\u5B9A\u884C\u6570\u53D8\u6362\u7684\u51FD\u6570\uFF1A",desImg:i.des6,example:[{input:"\u8F93\u5165\uFF1As = 'PAYPALISHIRING', numRows = 3",output:"\u8F93\u51FA\uFF1A'PAHNAPLSIIGYIR'"},{input:"\u8F93\u5165\uFF1As = 'PAYPALISHIRING', numRows = 4",output:"\u8F93\u51FA\uFF1A'PINALSIGYAHRPI'",ex:`\u89E3\u91CA\uFF1A
                    P       I       N
                    A   L  S   I  G
                    Y A   H R
                    P       I`},{input:"\u8F93\u5165\uFF1As = 'A', numRows = 1",output:"\u8F93\u51FA\uFF1A'A'"}],tip:["1 <= s.length <= 1000","s \u7531\u82F1\u6587\u5B57\u6BCD\uFF08\u5C0F\u5199\u548C\u5927\u5199\uFF09\u3001',' \u548C '.' \u7EC4\u6210","1 <= numRows <= 1000]"],answer:`/**
\u601D\u8DEF\uFF1A\u6CBF\u7740Z\u5B57\u578B\u65B9\u5411\uFF0C\u5BF9arr[i]\u8FDB\u884C\u5B57\u7B26\u4E32s\u7684\u9010\u4E2A\u586B\u5145
s = 'abcdefg' numRows = 3 \u65F6
    \u2193 a     e \u2193  arr[0] = ae    
    \u2193 b  d  f \u2193  arr[1] = bdf
    \u2193 c  \u2197 g \u2193  arr[2] = cg 
* @param {string} s
* @param {number} numRows
* @return {string}
*/
let convert = function (s, numRows) {
    // numRows = 1 \u76F4\u63A5\u8FD4\u56DEs\u5373\u53EF
    if (numRows == 1) return s;
    // \u65B0\u5EFAnumRows\u957F\u5EA6\u7684\u6570\u7EC4\uFF0C\u586B\u5145\u7A7A\u5B57\u7B26\u4E32
    let arr = new Array(numRows).fill("");
    //  0 < i\uFF08\u7D22\u5F15\uFF09 < numRows , flag\uFF08\u524D\u8FDB\u7684\u65B9\u5411\uFF09 = true \u65B9\u5411\u2193 \u53CD\u4E4B\u2191 
    let [i, flag] = [0, false];
    // \u904D\u5386\u5B57\u7B26\u4E32
    for (let index = 0; index < s.length; index++) {
    // \u5BF9\u5F53\u524DnumRows\u884C\u8FDB\u884C\u586B\u5145
    arr[i] += s.slice(index, index + 1);
    // \u5F53i\u7D22\u5F15\u5230\u8FBE \u4E0A\u4E0B\u7684\u8FB9\u754C\uFF0C\u5BF9flag\u8FDB\u884C\u53CD\u8F6C\uFF0C
    if (i == 0 || i == numRows - 1) flag = !flag;
    // \u6839\u636Eflag\uFF0C\u4F7F\u5F97arr[i]\u83B7\u53D6\u6B63\u786E\u7684\u5B57\u7B26
    flag ? i++ : i--;
    }
    return arr.join('');
};`,answerImgUrl:i.answer6},{title:"\u6574\u6570\u53CD\u8F6C",level:"\u4E2D\u7B49",describe:"\u7ED9\u4F60\u4E00\u4E2A 32 \u4F4D\u7684\u6709\u7B26\u53F7\u6574\u6570 x \uFF0C\u8FD4\u56DE\u5C06 x \u4E2D\u7684\u6570\u5B57\u90E8\u5206\u53CD\u8F6C\u540E\u7684\u7ED3\u679C\u3002\u5982\u679C\u53CD\u8F6C\u540E\u6574\u6570\u8D85\u8FC7 32 \u4F4D\u7684\u6709\u7B26\u53F7\u6574\u6570\u7684\u8303\u56F4\xA0[\u2212231,\xA0 231\xA0\u2212 1] \uFF0C\u5C31\u8FD4\u56DE 0\u3002\u5047\u8BBE\u73AF\u5883\u4E0D\u5141\u8BB8\u5B58\u50A8 64 \u4F4D\u6574\u6570\uFF08\u6709\u7B26\u53F7\u6216\u65E0\u7B26\u53F7\uFF09\u3002",example:[{input:"\u8F93\u5165\uFF1Ax = 123",output:"\u8F93\u51FA\uFF1A321",ex:""},{input:"\u8F93\u5165\uFF1Ax = -123",output:"\u8F93\u51FA\uFF1A-321"},{input:"\u8F93\u5165\uFF1Ax = 120",output:"\u8F93\u51FA\uFF1A21"},{input:"\u8F93\u5165\uFF1Ax = 0",output:"\u8F93\u51FA\uFF1A0"}],tip:["-231 <= x <= 231 - 1"],answer:`/**
\u601D\u8DEF\uFF1A\u5224\u65AD\u6B63\u8D1F\uFF0C\u53D6\u7EDD\u5BF9\u503C\u8FDB\u884C\u6570\u7EC4\u5316->\u53CD\u8F6C->\u91CD\u7EC4\u4E3A\u5B57\u7B26\u4E32\uFF0C\u6839\u636E\u6B63\u8D1F\u8FD4\u56DE\u503C
* @param {number} x
    * @return {number}
    */
var reverse = function(x) {
    if (x == 0) return 0;
    let sign = x > 0 ? true : false;
    let temp = String(Math.abs(x)).split("").reverse();
    let num = temp.join("");
    if (num < Math.pow(-2, 31) || num > Math.pow(2, 31)) {
        return 0;
    }
    return sign ? Number(num) : Number("-" + num);
};`,answerImgUrl:i.answer7},{title:"\u5B57\u7B26\u4E32\u8F6C\u6362\u6574\u6570 (atoi)",level:"\u4E2D\u7B49",describe:`\u8BF7\u4F60\u6765\u5B9E\u73B0\u4E00\u4E2A\xA0myAtoi(string s)\xA0\u51FD\u6570\uFF0C\u4F7F\u5176\u80FD\u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u6210\u4E00\u4E2A 32 \u4F4D\u6709\u7B26\u53F7\u6574\u6570\uFF08\u7C7B\u4F3C C/C++ \u4E2D\u7684 atoi \u51FD\u6570\uFF09\u3002<br/>
        \u51FD\u6570\xA0myAtoi(string s) \u7684\u7B97\u6CD5\u5982\u4E0B\uFF1A<br/>
        
        \u8BFB\u5165\u5B57\u7B26\u4E32\u5E76\u4E22\u5F03\u65E0\u7528\u7684\u524D\u5BFC\u7A7A\u683C<br/>
        \u68C0\u67E5\u4E0B\u4E00\u4E2A\u5B57\u7B26\uFF08\u5047\u8BBE\u8FD8\u672A\u5230\u5B57\u7B26\u672B\u5C3E\uFF09\u4E3A\u6B63\u8FD8\u662F\u8D1F\u53F7\uFF0C\u8BFB\u53D6\u8BE5\u5B57\u7B26\uFF08\u5982\u679C\u6709\uFF09\u3002 \u786E\u5B9A\u6700\u7EC8\u7ED3\u679C\u662F\u8D1F\u6570\u8FD8\u662F\u6B63\u6570\u3002 \u5982\u679C\u4E24\u8005\u90FD\u4E0D\u5B58\u5728\uFF0C\u5219\u5047\u5B9A\u7ED3\u679C\u4E3A\u6B63\u3002<br/>
        \u8BFB\u5165\u4E0B\u4E00\u4E2A\u5B57\u7B26\uFF0C\u76F4\u5230\u5230\u8FBE\u4E0B\u4E00\u4E2A\u975E\u6570\u5B57\u5B57\u7B26\u6216\u5230\u8FBE\u8F93\u5165\u7684\u7ED3\u5C3E\u3002\u5B57\u7B26\u4E32\u7684\u5176\u4F59\u90E8\u5206\u5C06\u88AB\u5FFD\u7565\u3002<br/>
        \u5C06\u524D\u9762\u6B65\u9AA4\u8BFB\u5165\u7684\u8FD9\u4E9B\u6570\u5B57\u8F6C\u6362\u4E3A\u6574\u6570\uFF08\u5373\uFF0C"123" -> 123\uFF0C "0032" -> 32\uFF09\u3002\u5982\u679C\u6CA1\u6709\u8BFB\u5165\u6570\u5B57\uFF0C\u5219\u6574\u6570\u4E3A 0 \u3002\u5FC5\u8981\u65F6\u66F4\u6539\u7B26\u53F7\uFF08\u4ECE\u6B65\u9AA4 2 \u5F00\u59CB\uFF09\u3002<br/>
        \u5982\u679C\u6574\u6570\u6570\u8D85\u8FC7 32 \u4F4D\u6709\u7B26\u53F7\u6574\u6570\u8303\u56F4 [\u2212231,\xA0 231\xA0\u2212 1] \uFF0C\u9700\u8981\u622A\u65AD\u8FD9\u4E2A\u6574\u6570\uFF0C\u4F7F\u5176\u4FDD\u6301\u5728\u8FD9\u4E2A\u8303\u56F4\u5185\u3002\u5177\u4F53\u6765\u8BF4\uFF0C\u5C0F\u4E8E \u2212231 \u7684\u6574\u6570\u5E94\u8BE5\u88AB\u56FA\u5B9A\u4E3A \u2212231 \uFF0C\u5927\u4E8E 231\xA0\u2212 1 \u7684\u6574\u6570\u5E94\u8BE5\u88AB\u56FA\u5B9A\u4E3A 231\xA0\u2212 1 \u3002<br/>
        \u8FD4\u56DE\u6574\u6570\u4F5C\u4E3A\u6700\u7EC8\u7ED3\u679C\u3002<br/><br/>
        \u6CE8\u610F\uFF1A<br/>
        \u672C\u9898\u4E2D\u7684\u7A7A\u767D\u5B57\u7B26\u53EA\u5305\u62EC\u7A7A\u683C\u5B57\u7B26 ' ' \u3002<br/>
        \u9664\u524D\u5BFC\u7A7A\u683C\u6216\u6570\u5B57\u540E\u7684\u5176\u4F59\u5B57\u7B26\u4E32\u5916\uFF0C\u8BF7\u52FF\u5FFD\u7565 \u4EFB\u4F55\u5176\u4ED6\u5B57\u7B26\u3002`,example:[{input:'\u8F93\u5165\uFF1As = "42"',output:"\u8F93\u51FA\uFF1A42",ex:`\u89E3\u91CA\uFF1A\u52A0\u7C97\u7684\u5B57\u7B26\u4E32\u4E3A\u5DF2\u7ECF\u8BFB\u5165\u7684\u5B57\u7B26\uFF0C\u63D2\u5165\u7B26\u53F7\u662F\u5F53\u524D\u8BFB\u53D6\u7684\u5B57\u7B26\u3002<br>
            \u7B2C 1 \u6B65\uFF1A"42"\uFF08\u5F53\u524D\u6CA1\u6709\u8BFB\u5165\u5B57\u7B26\uFF0C\u56E0\u4E3A\u6CA1\u6709\u524D\u5BFC\u7A7A\u683C\uFF09<br>
            &nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;^<br>
            \u7B2C 2 \u6B65\uFF1A"42"\uFF08\u5F53\u524D\u6CA1\u6709\u8BFB\u5165\u5B57\u7B26\uFF0C\u56E0\u4E3A\u8FD9\u91CC\u4E0D\u5B58\u5728 '-' \u6216\u8005 '+'\uFF09<br>
            &nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;^<br>
            \u7B2C 3 \u6B65\uFF1A"42"\uFF08\u8BFB\u5165 "42"\uFF09<br>
            &nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;^<br>
            \u89E3\u6790\u5F97\u5230\u6574\u6570 42 \u3002<br>
            \u7531\u4E8E "42" \u5728\u8303\u56F4 [-231, 231 - 1] \u5185\uFF0C\u6700\u7EC8\u7ED3\u679C\u4E3A 42 \u3002\u3002`},{input:'\u8F93\u5165\uFF1As = "&nbsp;&nbsp;&nbsp;-42"',output:"\u8F93\u51FA\uFF1A-42",ex:`\u89E3\u91CA\uFF1A<br>
            \u7B2C 1 \u6B65\uFF1A"___-42"\uFF08\u8BFB\u5165\u524D\u5BFC\u7A7A\u683C\uFF0C\u4F46\u5FFD\u89C6\u6389\uFF09<br>
            &emsp;&emsp;&emsp;&emsp;&emsp;^<br>
            \u7B2C 2 \u6B65\uFF1A"   -42"\uFF08\u8BFB\u5165 '-' \u5B57\u7B26\uFF0C\u6240\u4EE5\u7ED3\u679C\u5E94\u8BE5\u662F\u8D1F\u6570\uFF09<br>
            &nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;^<br>
            \u7B2C 3 \u6B65\uFF1A"   -42"\uFF08\u8BFB\u5165 "42"\uFF09<br>
            &nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;^<br>
            \u89E3\u6790\u5F97\u5230\u6574\u6570 -42 \u3002<br>
            \u7531\u4E8E "-42" \u5728\u8303\u56F4 [-231, 231 - 1] \u5185\uFF0C\u6700\u7EC8\u7ED3\u679C\u4E3A -42 \u3002`},{input:'\u8F93\u5165\uFF1As = "4193 with words"',output:"\u8F93\u51FA\uFF1A4193",ex:`
            \u89E3\u91CA\uFF1A<br>
            \u7B2C 1 \u6B65\uFF1A"4193 with words"\uFF08\u5F53\u524D\u6CA1\u6709\u8BFB\u5165\u5B57\u7B26\uFF0C\u56E0\u4E3A\u6CA1\u6709\u524D\u5BFC\u7A7A\u683C\uFF09<br>
            &nbsp;&emsp;&emsp;&emsp;&emsp;^<br>
            \u7B2C 2 \u6B65\uFF1A"4193 with words"\uFF08\u5F53\u524D\u6CA1\u6709\u8BFB\u5165\u5B57\u7B26\uFF0C\u56E0\u4E3A\u8FD9\u91CC\u4E0D\u5B58\u5728 '-' \u6216\u8005 '+'\uFF09<br>
            &nbsp;&emsp;&emsp;&emsp;&emsp;^<br>
            \u7B2C 3 \u6B65\uFF1A"4193 with words"\uFF08\u8BFB\u5165 "4193"\uFF1B\u7531\u4E8E\u4E0B\u4E00\u4E2A\u5B57\u7B26\u4E0D\u662F\u4E00\u4E2A\u6570\u5B57\uFF0C\u6240\u4EE5\u8BFB\u5165\u505C\u6B62\uFF09<br>
            &nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;^<br>
            \u89E3\u6790\u5F97\u5230\u6574\u6570 4193 \u3002<br>
            \u7531\u4E8E "4193" \u5728\u8303\u56F4 [-231, 231 - 1] \u5185\uFF0C\u6700\u7EC8\u7ED3\u679C\u4E3A 4193 \u3002`}],tip:["0 <= s.length <= 200","s \u7531\u82F1\u6587\u5B57\u6BCD\uFF08\u5927\u5199\u548C\u5C0F\u5199\uFF09\u3001\u6570\u5B57\uFF080-9\uFF09\u3001' '\u3001'+'\u3001'-' \u548C '.' \u7EC4\u6210"],answer:`/**
* \u601D\u8DEF1\uFF1A\u4F7F\u7528js\u81EA\u5E26\u7684parseInt(str.trim()),\u5BF9\u53BB\u9664\u5DE6\u53F3\u7A7A\u683C\u7684\u5B57\u7B26\u4E32\u53D6\u6574\u5B57\u7B26\u4E32
* \u601D\u8DEF2\uFF1A\u5982\u4E0B\u793A\u4EE3\u7801\uFF08\u4E0D\u501F\u52A9API\uFF1AparseInt()\uFF09
* @param {string}
* @return {number}
*/
let myAtoi = function (str) {
    let [res, negativeSymbol] = [0, 1];
    // \u53BB\u6389\u5DE6\u53F3\u7684\u7A7A\u683C
    let s = str.trim();
    for (let i = 0; i < s.length; i++) {
    // \u53D6\u6B63\u8D1F
    if (i == 0 && s[i] == "-") {
        negativeSymbol = -1;
        continue;
    } else if (i == 0 && s[i] == "+") continue;
    if (s[i] >= 0 && s[i] <= 9 && s[i] != " ") {
        // \u9010\u4F4D\u6DFB\u52A0
        res = res * 10 + (s[i] - 0);
        // \u8FB9\u754C\u5904\u7406
        if (res * negativeSymbol <= -2147483648) return -2147483648;
        else if (res * negativeSymbol >= 2147483647) return 2147483647;
        // \u4E0D\u4E3A\u6570\u5B57\u6216\u6B63\u8D1F\u53F7\uFF0C\u76F4\u63A5\u8DF3\u51FA\u5FAA\u73AF
    } else break;
    }
    return res * negativeSymbol;
};`,answerImgUrl:i.answer8},{title:"\u56DE\u6587\u6570",level:"\u7B80\u5355",describe:`\u7ED9\u4F60\u4E00\u4E2A\u6574\u6570 x \uFF0C\u5982\u679C x \u662F\u4E00\u4E2A\u56DE\u6587\u6574\u6570\uFF0C\u8FD4\u56DE true \uFF1B\u5426\u5219\uFF0C\u8FD4\u56DE false \u3002<br>
        \u56DE\u6587\u6570\u662F\u6307\u6B63\u5E8F\uFF08\u4ECE\u5DE6\u5411\u53F3\uFF09\u548C\u5012\u5E8F\uFF08\u4ECE\u53F3\u5411\u5DE6\uFF09\u8BFB\u90FD\u662F\u4E00\u6837\u7684\u6574\u6570\u3002<br>
        \xB7 \u4F8B\u5982\uFF0C121 \u662F\u56DE\u6587\uFF0C\u800C 123 \u4E0D\u662F\u3002<br>
        ( \u8FDB\u9636\uFF1A\u4F60\u80FD\u4E0D\u5C06\u6574\u6570\u8F6C\u4E3A\u5B57\u7B26\u4E32\u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u5417\uFF1F )`,example:[{input:"\u8F93\u5165\uFF1Ax = 121",output:"\u8F93\u51FA\uFF1Atrue"},{input:"\u8F93\u5165\uFF1Ax = -121",output:"\u8F93\u51FA\uFF1Afalse",ex:"\u89E3\u91CA\uFF1A<br>\u4ECE\u5DE6\u5411\u53F3\u8BFB, \u4E3A -121 \u3002 \u4ECE\u53F3\u5411\u5DE6\u8BFB, \u4E3A 121- \u3002\u56E0\u6B64\u5B83\u4E0D\u662F\u4E00\u4E2A\u56DE\u6587\u6570\u3002"},{input:"\u8F93\u5165\uFF1Ax = 10",output:"\u8F93\u51FA\uFF1Afalse",ex:"\u89E3\u91CA\uFF1A<br>\u4ECE\u53F3\u5411\u5DE6\u8BFB, \u4E3A 01 \u3002\u56E0\u6B64\u5B83\u4E0D\u662F\u4E00\u4E2A\u56DE\u6587\u6570\u3002"}],tip:["-231 <= x <= 231 - 1"],answer:`/**
* @param {number} x
* @return {boolean}
*/
// var isPalindrome = function (x) {
//   const xToStr = x + '';
//   return xToStr === xToStr.split('').reverse().join('');
// };

/**
* \u4E0D\u9700\u8981\u5C06\u6570\u5B57\u8F6C\u6362\u6210\u5B57\u7B26\u4E32\u7684\u89E3\u6CD5
* @param {number} x
* @return {boolean}
*/
var isPalindrome = function (x) {
    // \u8D1F\u6570\uFF0C0\uFF0C\u88AB10\u53D6\u6574\u4E3A0\u7684\uFF0C\u90FD\u4E0D\u662F\u56DE\u6587\u6570
    if (x < 0 || (x && !(x % 10))) return false;
    if (x < 10) return true;
    let x2 = x;
    let res = 0;
    while (x2) {
    res = res * 10 + (x2 % 10);
    x2 = ~~(x2 / 10);
    }

    return x === res;
};`,answerImgUrl:i.answer9}];const j={data(){return{questionsIndex:[],answer:[]}},created(){this.answer=v,this.questionsIndex=v.map(s=>({level:s.level,title:s.title}))},methods:{init(){let c=function(g){return g}(34165);console.log(c)},copyTo(s){let o=document.getElementById("textareaCopy");o.value=s,o.select(),document.execCommand("Copy",!0,s)||alert("\u597D\u50CF\u5931\u8D25\u4E86\uFF0C\u6362\u4E2A\u6D4F\u89C8\u5668\u8BD5\u8BD5")},scrollTo(s){let o=document.getElementById(s);window.scrollTo({left:0,top:o.offsetTop,behavior:"smooth"})}},mounted(){this.init()}},b=s=>(_("data-v-95758d66"),s=s(),I(),s),U={class:"content"},O={class:"side_Bar"},G=["title"],Y={style:{display:"flex"}},B=["onClick"],q=b(()=>e("header",{class:"header"},[e("div",null,"\u4ECE0\u5F00\u59CB\u7684LeetCode"),e("a",{href:"https://leetcode-cn.com/problemset/all/"},"\u6CE8\uFF1A\u4E00\u5207\u9898\u76EE\u4E3ALeeCode\u9898\u5E93\u8D44\u6E90")],-1)),E={class:"context"},Z=["id"],$={class:"title"},D={class:"describe"},F=["innerHTML"],V=["src"],z={style:{display:"flex","margin-bottom":"15px"}},J={style:{width:"50%"}},K={class:"card"},Q=["innerHTML"],W=["innerHTML"],X=["innerHTML"],ee={class:"tip",style:{width:"50%"}},te={class:"card"},se=b(()=>e("span",null,"\u63D0\u793A\uFF1A",-1)),ne={class:"answer"},re=b(()=>e("span",null,"\u4EE3\u7801\u5B9E\u73B0\uFF1A",-1)),ie=["src"],le=["onClick"],ae=b(()=>e("textarea",{style:{width:"0",height:"0"},id:"textareaCopy",type:"text"},null,-1));function ue(s,o,c,g,x,h){return n(),r("div",U,[e("section",O,[(n(!0),r(m,null,d(x.questionsIndex,(t,a)=>(n(),r("div",{class:"select",key:a,title:t.title},[e("div",Y,[e("div",{class:y(t.level=="\u7B80\u5355"?"ratio_easy":t.level=="\u4E2D\u7B49"?"ratio_mid":"ratio_hard"),style:{width:"15%"}},u(t.level),3),e("div",{style:{width:"85%"},onClick:l=>h.scrollTo(a+1)},u(a+1)+"."+u(t.title),9,B)])],8,G))),128))]),q,e("aside",E,[(n(!0),r(m,null,d(x.answer,(t,a)=>(n(),r("div",{id:`${a+1}`,class:"quisition",key:a},[e("div",$,u(a+1)+" . "+u(t.title),1),e("div",D,[e("div",{innerHTML:t.describe},null,8,F),e("div",null,[t.desImg?(n(),r("img",{key:0,src:t.desImg,alt:""},null,8,V)):w("",!0)])]),e("div",z,[e("div",J,[(n(!0),r(m,null,d(t.example,(l,p)=>(n(),r("div",{class:"example",key:p},[e("span",K,[e("span",null,"\u793A\u4F8B"+u(p+1)+"\uFF1A",1),e("div",null,[e("p",{innerHTML:l.input},null,8,Q),e("p",{innerHTML:l.output},null,8,W),l.ex?(n(),r("p",{key:0,innerHTML:l.ex},null,8,X)):w("",!0)])])]))),128))]),e("div",ee,[e("span",te,[se,(n(!0),r(m,null,d(t.tip,(l,p)=>(n(),r("li",{key:p},u(l),1))),128))])])]),e("div",ne,[re,e("div",null,[e("img",{src:t.answerImgUrl,alt:""},null,8,ie)]),e("button",{onClick:l=>h.copyTo(t.answer)},"\u590D\u5236",8,le)])],8,Z))),128))]),ae])}var me=f(j,[["render",ue],["__scopeId","data-v-95758d66"]]);export{me as default};
