import{_}from"./plugin-vue_export-helper.2100c508.js";import{o as s,y as r,E as e,J as c,N as h,I as x,Q as C,X as L,Z as u,b as I}from"./vendor.ef7c6805.js";var M="./dist/1.1e569f5d.png",j="./dist/2.5b236776.png",y="./dist/3.09184d2d.png",X="./dist/4.c7e85448.png",k="./dist/5.576fdde9.png",S="./dist/6.245c48c6.png",A="./dist/7.b6dd2616.png",V="./dist/8.97a86271.png",T="./dist/9.8d63667f.png",R="./dist/10.87b14baf.png",N="./dist/11.36c3226e.png",U="./dist/12.fa9fb874.png",D="./dist/13.c73abac6.png",P="./dist/14.53f27fd8.png",H="./dist/15.78952b03.png",B="./dist/16.8fffc80f.png",E="./dist/17.8c35e179.png",O="./dist/02.39c76b70.png",G="./dist/06.096675f7.png",Y="./dist/11.400006d6.jpg",q="./dist/17.aeaa7d96.png",z="./dist/19.35c75c8b.jpg",Z="./dist/21.90a09194.jpg",$="./dist/24.a577d7e6.jpg";let n={answer1:M,answer2:j,answer3:y,answer4:X,answer5:k,answer6:S,answer7:A,answer8:V,answer9:T,answer10:R,answer11:N,answer12:U,answer13:D,answer14:P,answer15:H,answer16:B,answer17:E},f={des2:O,des6:G,des11:Y,des17:q,des19:z,des21:Z,des24:$},v=[{title:"\u4E24\u6570\u4E4B\u548C",level:"\u7B80\u5355",describe:"\u7ED9\u5B9A\u4E00\u4E2A\u6574\u6570\u6570\u7EC4 nums\xA0\u548C\u4E00\u4E2A\u6574\u6570\u76EE\u6807\u503C target\uFF0C\u8BF7\u4F60\u5728\u8BE5\u6570\u7EC4\u4E2D\u627E\u51FA \u548C\u4E3A\u76EE\u6807\u503C target\xA0 \u7684\u90A3\xA0\u4E24\u4E2A\xA0\u6574\u6570\uFF0C\u5E76\u8FD4\u56DE\u5B83\u4EEC\u7684\u6570\u7EC4\u4E0B\u6807\u3002<br/>\u4F60\u53EF\u4EE5\u5047\u8BBE\u6BCF\u79CD\u8F93\u5165\u53EA\u4F1A\u5BF9\u5E94\u4E00\u4E2A\u7B54\u6848\u3002\u4F46\u662F\uFF0C\u6570\u7EC4\u4E2D\u540C\u4E00\u4E2A\u5143\u7D20\u5728\u7B54\u6848\u91CC\u4E0D\u80FD\u91CD\u590D\u51FA\u73B0\u3002\u4F60\u53EF\u4EE5\u6309\u4EFB\u610F\u987A\u5E8F\u8FD4\u56DE\u7B54\u6848\u3002",example:[{input:"\u8F93\u5165\uFF1Anums = [2,7,11,15], target = 9",output:"\u8F93\u51FA\uFF1A[0,1]",ex:"\u89E3\u91CA\uFF1A\u56E0\u4E3A nums[0] + nums[1] == 9 \uFF0C\u8FD4\u56DE [0, 1] \u3002"},{input:"\u8F93\u5165\uFF1Anums = [3,2,4], target = 6",output:"\u8F93\u51FA\uFF1A[1,2]"},{input:"\u8F93\u5165\uFF1Anums = [3,3], target = 6",output:"\u8F93\u51FA\uFF1A[0,1]"}],tip:["2 <= nums.length <= 104","-109 <= nums[i] <= 109","-109 <= target <= 109","\u53EA\u4F1A\u5B58\u5728\u4E00\u4E2A\u6709\u6548\u7B54\u6848"],answer:`// \u7B80\u5355\u7684\u53CC\u5C42\u5FAA\u73AF
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
};  `,answerImgUrl:n.answer1},{title:"\u4E24\u6570\u76F8\u52A0",level:"\u7B80\u5355",describe:"\u7ED9\u4F60\u4E24\u4E2A\xA0\u975E\u7A7A\xA0\u7684\u94FE\u8868\uFF0C\u8868\u793A\u4E24\u4E2A\u975E\u8D1F\u7684\u6574\u6570\u3002\u5B83\u4EEC\u6BCF\u4F4D\u6570\u5B57\u90FD\u662F\u6309\u7167\xA0\u9006\u5E8F\xA0\u7684\u65B9\u5F0F\u5B58\u50A8\u7684\uFF0C\u5E76\u4E14\u6BCF\u4E2A\u8282\u70B9\u53EA\u80FD\u5B58\u50A8\xA0\u4E00\u4F4D\xA0\u6570\u5B57\u3002<br/>\u8BF7\u4F60\u5C06\u4E24\u4E2A\u6570\u76F8\u52A0\uFF0C\u5E76\u4EE5\u76F8\u540C\u5F62\u5F0F\u8FD4\u56DE\u4E00\u4E2A\u8868\u793A\u548C\u7684\u94FE\u8868\u3002 \u4F60\u53EF\u4EE5\u5047\u8BBE\u9664\u4E86\u6570\u5B570 \u4E4B\u5916\uFF0C\u8FD9\u4E24\u4E2A\u6570\u90FD\u4E0D\u4F1A\u4EE5 0\xA0\u5F00\u5934\u3002",desImg:f.des2,example:[{input:"\u8F93\u5165\uFF1Al1 = [2,4,3], l2 = [5,6,4] ",output:"\u8F93\u51FA\uFF1A[7,0,8]",ex:"\u89E3\u91CA\uFF1A342 + 465 = 807"},{input:"\u8F93\u5165\uFF1Al1 = [0], l2 = [0] ",output:"\u8F93\u51FA\uFF1A[0]"},{input:"\u8F93\u5165\uFF1Al1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9] ",output:"\u8F93\u51FA\uFF1A[8,9,9,9,0,0,0,1]"}],tip:[" \u6BCF\u4E2A\u94FE\u8868\u4E2D\u7684\u8282\u70B9\u6570\u5728\u8303\u56F4 [1, 100] \u5185","0 <= Node.val <= 9","\u9898\u76EE\u6570\u636E\u4FDD\u8BC1\u5217\u8868\u8868\u793A\u7684\u6570\u5B57\u4E0D\u542B\u524D\u5BFC\u96F6"],answer:`// \u6CE8\u610F\u94FE\u8868\u7684\u5355\u65B9\u5411\u683C\u5F0F
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
};`,answerImgUrl:n.answer2},{title:"\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32",level:"\u4E2D\u7B49",describe:"\u7ED9\u5B9A\u4E00\u4E2A\u5B57\u7B26\u4E32 s \uFF0C\u8BF7\u4F60\u627E\u51FA\u5176\u4E2D\u4E0D\u542B\u6709\u91CD\u590D\u5B57\u7B26\u7684 \u6700\u957F\u5B50\u4E32 \u7684\u957F\u5EA6\u3002",example:[{input:"\u8F93\u5165: s = 'abcabcbb'",output:"\u8F93\u51FA: 3 ",ex:"\u89E3\u91CA: \u56E0\u4E3A\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32\u662F 'abc'\uFF0C\u6240\u4EE5\u5176\u957F\u5EA6\u4E3A 3\u3002"},{input:"\u8F93\u5165: s = 'bbbbb'",output:"\u8F93\u51FA: 1",ex:"\u89E3\u91CA: \u56E0\u4E3A\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32\u662F 'b'\uFF0C\u6240\u4EE5\u5176\u957F\u5EA6\u4E3A 1\u3002"},{input:"\u8F93\u5165: s = 'pwwkew'",output:"\u89E3\u91CA: \u56E0\u4E3A\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32\u662F 'wke'\uFF0C\u6240\u4EE5\u5176\u957F\u5EA6\u4E3A 3\u3002",ex:"\u89E3\u91CA: \u56E0\u4E3A\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32\u662F 'wke'\uFF0C\u6240\u4EE5\u5176\u957F\u5EA6\u4E3A 3\u3002\u8BF7\u6CE8\u610F\uFF0C\u4F60\u7684\u7B54\u6848\u5FC5\u987B\u662F \u5B50\u4E32 \u7684\u957F\u5EA6\uFF0C'pwke' \u662F\u4E00\u4E2A\u5B50\u5E8F\u5217\uFF0C\u4E0D\u662F\u5B50\u4E32\u3002"}],tip:["0 <= s.length <= 5 * 104","s \u7531\u82F1\u6587\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u7B26\u53F7\u548C\u7A7A\u683C\u7EC4\u6210"],answer:`// \u4E0D\u65AD\u5207\u7247\u6570\u7EC4\u5BFB\u627E\u6700\u5927\u503C
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
};`,answerImgUrl:n.answer3},{title:"\u5BFB\u627E\u4E24\u4E2A\u6B63\u5E8F\u6570\u7EC4\u7684\u4E2D\u4F4D\u6570",level:"\u56F0\u96BE",describe:"\u7ED9\u5B9A\u4E24\u4E2A\u5927\u5C0F\u5206\u522B\u4E3A m \u548C n \u7684\u6B63\u5E8F\uFF08\u4ECE\u5C0F\u5230\u5927\uFF09\u6570\u7EC4\xA0nums1 \u548C\xA0nums2\u3002\u8BF7\u4F60\u627E\u51FA\u5E76\u8FD4\u56DE\u8FD9\u4E24\u4E2A\u6B63\u5E8F\u6570\u7EC4\u7684 \u4E2D\u4F4D\u6570 \u3002<br/>\u7B97\u6CD5\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u5E94\u8BE5\u4E3A O(log (m+n)) \u3002",example:[{input:"\u8F93\u5165\uFF1Anums1 = [1,3], nums2 = [2]",output:"\u8F93\u51FA\uFF1A2.00000",ex:"\u89E3\u91CA\uFF1A\u5408\u5E76\u6570\u7EC4 = [1,2,3] \uFF0C\u4E2D\u4F4D\u6570 2"},{input:"\u8F93\u5165\uFF1Anums1 = [1,2], nums2 = [3,4]",output:"\u8F93\u51FA\uFF1A2.50000",ex:"\u89E3\u91CA\uFF1A\u5408\u5E76\u6570\u7EC4 = [1,2,3,4] \uFF0C\u4E2D\u4F4D\u6570 (2 + 3) / 2 = 2.5"}],tip:["nums1.length == m","nums2.length == n","0 <= m <= 1000","0 <= n <= 1000","1 <= m + n <= 2000","-106 <= nums1[i], nums2[i] <= 106"],answer:` // \u5408\u5E76\uFF0C\u6392\u5E8F\uFF0C\u627E\u4E2D\u4F4D\u6570\uFF0C\u505A\u6570\u7B97
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
};`,answerImgUrl:n.answer4},{title:"\u6700\u957F\u56DE\u6587\u5B50\u4E32",level:"\u4E2D\u7B49",describe:"\u7ED9\u4F60\u4E00\u4E2A\u5B57\u7B26\u4E32 s\uFF0C\u627E\u5230 s \u4E2D\u6700\u957F\u7684\u56DE\u6587\u5B50\u4E32\u3002",example:[{input:"\u8F93\u5165\uFF1As = 'babad'",output:"\u8F93\u51FA\uFF1A'bab'",ex:"\u89E3\u91CA\uFF1A'aba' \u540C\u6837\u662F\u7B26\u5408\u9898\u610F\u7684\u7B54\u6848\u3002"},{input:"\u8F93\u5165\uFF1As = 'cbbd'",output:"\u8F93\u51FA\uFF1A'bb'"}],tip:["1 <= s.length <= 1000","s \u4EC5\u7531\u6570\u5B57\u548C\u82F1\u6587\u5B57\u6BCD\u7EC4\u6210"],answer:`// \u4E2D\u5FC3\u6269\u6563\u6CD5
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
}`,answerImgUrl:n.answer5},{title:"Z \u5B57\u5F62\u53D8\u6362",level:"\u4E2D\u7B49",describe:"\u5C06\u4E00\u4E2A\u7ED9\u5B9A\u5B57\u7B26\u4E32 s \u6839\u636E\u7ED9\u5B9A\u7684\u884C\u6570 numRows \uFF0C\u4EE5\u4ECE\u4E0A\u5F80\u4E0B\u3001\u4ECE\u5DE6\u5230\u53F3\u8FDB\u884C\xA0Z \u5B57\u5F62\u6392\u5217\u3002\u6BD4\u5982\u8F93\u5165\u5B57\u7B26\u4E32\u4E3A'PAYPALISHIRING'\xA0\u884C\u6570\u4E3A 3 \u65F6\uFF0C\u6392\u5217\u5982\u4E0B\u2193 \u4E4B\u540E\uFF0C\u4F60\u7684\u8F93\u51FA\u9700\u8981\u4ECE\u5DE6\u5F80\u53F3\u9010\u884C\u8BFB\u53D6\uFF0C\u4EA7\u751F\u51FA\u4E00\u4E2A\u65B0\u7684\u5B57\u7B26\u4E32\uFF0C\u6BD4\u5982\uFF1A'PAHNAPLSIIGYIR'\u3002\u8BF7\u4F60\u5B9E\u73B0\u8FD9\u4E2A\u5C06\u5B57\u7B26\u4E32\u8FDB\u884C\u6307\u5B9A\u884C\u6570\u53D8\u6362\u7684\u51FD\u6570\uFF1A",desImg:f.des6,example:[{input:"\u8F93\u5165\uFF1As = 'PAYPALISHIRING', numRows = 3",output:"\u8F93\u51FA\uFF1A'PAHNAPLSIIGYIR'"},{input:"\u8F93\u5165\uFF1As = 'PAYPALISHIRING', numRows = 4",output:"\u8F93\u51FA\uFF1A'PINALSIGYAHRPI'",ex:`\u89E3\u91CA\uFF1A
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
};`,answerImgUrl:n.answer6},{title:"\u6574\u6570\u53CD\u8F6C",level:"\u4E2D\u7B49",describe:"\u7ED9\u4F60\u4E00\u4E2A 32 \u4F4D\u7684\u6709\u7B26\u53F7\u6574\u6570 x \uFF0C\u8FD4\u56DE\u5C06 x \u4E2D\u7684\u6570\u5B57\u90E8\u5206\u53CD\u8F6C\u540E\u7684\u7ED3\u679C\u3002\u5982\u679C\u53CD\u8F6C\u540E\u6574\u6570\u8D85\u8FC7 32 \u4F4D\u7684\u6709\u7B26\u53F7\u6574\u6570\u7684\u8303\u56F4\xA0[\u2212231,\xA0 231\xA0\u2212 1] \uFF0C\u5C31\u8FD4\u56DE 0\u3002\u5047\u8BBE\u73AF\u5883\u4E0D\u5141\u8BB8\u5B58\u50A8 64 \u4F4D\u6574\u6570\uFF08\u6709\u7B26\u53F7\u6216\u65E0\u7B26\u53F7\uFF09\u3002",example:[{input:"\u8F93\u5165\uFF1Ax = 123",output:"\u8F93\u51FA\uFF1A321",ex:""},{input:"\u8F93\u5165\uFF1Ax = -123",output:"\u8F93\u51FA\uFF1A-321"},{input:"\u8F93\u5165\uFF1Ax = 120",output:"\u8F93\u51FA\uFF1A21"},{input:"\u8F93\u5165\uFF1Ax = 0",output:"\u8F93\u51FA\uFF1A0"}],tip:["-231 <= x <= 231 - 1"],answer:`/**
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
};`,answerImgUrl:n.answer7},{title:"\u5B57\u7B26\u4E32\u8F6C\u6362\u6574\u6570 (atoi)",level:"\u4E2D\u7B49",describe:`\u8BF7\u4F60\u6765\u5B9E\u73B0\u4E00\u4E2A\xA0myAtoi(string s)\xA0\u51FD\u6570\uFF0C\u4F7F\u5176\u80FD\u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u6210\u4E00\u4E2A 32 \u4F4D\u6709\u7B26\u53F7\u6574\u6570\uFF08\u7C7B\u4F3C C/C++ \u4E2D\u7684 atoi \u51FD\u6570\uFF09\u3002<br/>
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
};`,answerImgUrl:n.answer8},{title:"\u56DE\u6587\u6570",level:"\u7B80\u5355",describe:`\u7ED9\u4F60\u4E00\u4E2A\u6574\u6570 x \uFF0C\u5982\u679C x \u662F\u4E00\u4E2A\u56DE\u6587\u6574\u6570\uFF0C\u8FD4\u56DE true \uFF1B\u5426\u5219\uFF0C\u8FD4\u56DE false \u3002<br>
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
    // ~~ \u6309\u4F4D\u53D6\u53CD\uFF0C\u53BB\u6389\u5C0F\u6570\u90E8\u5206
    x2 = ~~(x2 / 10);
    }

    return x === res;
};`,answerImgUrl:n.answer9},{title:"\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D",level:"\u56F0\u96BE",describe:`\u7ED9\u4F60\u4E00\u4E2A\u5B57\u7B26\u4E32 s \u548C\u4E00\u4E2A\u5B57\u7B26\u89C4\u5F8B p\uFF0C\u8BF7\u4F60\u6765\u5B9E\u73B0\u4E00\u4E2A\u652F\u6301 '.' \u548C '*' \u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\u3002 <br>
        \xB7 '.' \u5339\u914D\u4EFB\u610F\u5355\u4E2A\u5B57\u7B26<br>
        \xB7 '*' \u5339\u914D\u96F6\u4E2A\u6216\u591A\u4E2A\u524D\u9762\u7684\u90A3\u4E00\u4E2A\u5143\u7D20 <br>`,example:[{input:'\u8F93\u5165\uFF1As = "aa", p = "a"',output:"\u8F93\u51FA\uFF1Afalse",ex:'\u89E3\u91CA\uFF1A"a" \u65E0\u6CD5\u5339\u914D "aa" \u6574\u4E2A\u5B57\u7B26\u4E32\u3002'},{input:'\u8F93\u5165\uFF1As = "aa", p = "a*"',output:"\u8F93\u51FA\uFF1Atrue",ex:`\u89E3\u91CA\uFF1A\u56E0\u4E3A '*' \u4EE3\u8868\u53EF\u4EE5\u5339\u914D\u96F6\u4E2A\u6216\u591A\u4E2A\u524D\u9762\u7684\u90A3\u4E00\u4E2A\u5143\u7D20, \u5728\u8FD9\u91CC\u524D\u9762\u7684\u5143\u7D20\u5C31\u662F 'a'\u3002\u56E0\u6B64\uFF0C\u5B57\u7B26\u4E32 "aa" \u53EF\u88AB\u89C6\u4E3A 'a' \u91CD\u590D\u4E86\u4E00\u6B21\u3002`},{input:'\u8F93\u5165\uFF1As = "ab", p = ".*"',output:"\u8F93\u51FA\uFF1Atrue",ex:`\u89E3\u91CA\uFF1A".*" \u8868\u793A\u53EF\u5339\u914D\u96F6\u4E2A\u6216\u591A\u4E2A\uFF08'*'\uFF09\u4EFB\u610F\u5B57\u7B26\uFF08'.'\uFF09\u3002`}],tip:["1 <= s.length\xA0<= 20","1 <= p.length\xA0<= 30","s\xA0\u53EA\u5305\u542B\u4ECE\xA0a-z\xA0\u7684\u5C0F\u5199\u5B57\u6BCD\u3002","p\xA0\u53EA\u5305\u542B\u4ECE\xA0a-z\xA0\u7684\u5C0F\u5199\u5B57\u6BCD\uFF0C\u4EE5\u53CA\u5B57\u7B26\xA0.\xA0\u548C\xA0*\u3002","\u4FDD\u8BC1\u6BCF\u6B21\u51FA\u73B0\u5B57\u7B26\xA0* \u65F6\uFF0C\u524D\u9762\u90FD\u5339\u914D\u5230\u6709\u6548\u7684\u5B57\u7B26"],answer:`/**
// https://leetcode-cn.com/problems/regular-expression-matching/solution/shou-hui-tu-jie-wo-tai-nan-liao-by-hyj8/
* @param {string} s
* @param {string} p
* @return {boolean}
*/
var isMatch = function (s, p) {
if (s == null || p == null) return false;
const sLen = s.length,
    pLen = p.length;
const dp = new Array(sLen + 1);
for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(pLen + 1).fill(false); // \u5C06\u9879\u9ED8\u8BA4\u4E3Afalse
}
// base case
dp[0][0] = true;
for (let j = 0; j < pLen; j++) {
    if (p[j] == "*") dp[0][j + 1] = dp[0][j - 1];
}
// \u8FED\u4EE3
for (let i = 1; i < sLen + 1; i++) {
    for (let j = 1; j < pLen + 1; j++) {
    if (s[i - 1] == p[j - 1] || p[j - 1] == ".") {
        dp[i][j] = dp[i - 1][j - 1];
    } else if (p[j - 1] == "*") {
        if (s[i - 1] == p[j - 2] || p[j - 2] == ".") {
        dp[i][j] = dp[i][j - 2] || dp[i - 1][j - 2] || dp[i - 1][j];
        } else {
        dp[i][j] = dp[i][j - 2];
        }
    }
    }
}
return dp[sLen][pLen]; // \u957FsLen\u7684s\u4E32 \u662F\u5426\u5339\u914D \u957FpLen\u7684p\u4E32
};`,answerImgUrl:n.answer10},{title:"\u76DB\u6700\u591A\u6C34\u7684\u5BB9\u5668",level:"\u4E2D\u7B49",desImg:f.des11,describe:`\u7ED9\u5B9A\u4E00\u4E2A\u957F\u5EA6\u4E3A n \u7684\u6574\u6570\u6570\u7EC4\xA0height\xA0\u3002\u6709\xA0n\xA0\u6761\u5782\u7EBF\uFF0C\u7B2C i \u6761\u7EBF\u7684\u4E24\u4E2A\u7AEF\u70B9\u662F\xA0(i, 0)\xA0\u548C\xA0(i, height[i])\xA0\u3002<br>
        \u627E\u51FA\u5176\u4E2D\u7684\u4E24\u6761\u7EBF\uFF0C\u4F7F\u5F97\u5B83\u4EEC\u4E0E\xA0x\xA0\u8F74\u5171\u540C\u6784\u6210\u7684\u5BB9\u5668\u53EF\u4EE5\u5BB9\u7EB3\u6700\u591A\u7684\u6C34\u3002<br>
        \u8FD4\u56DE\u5BB9\u5668\u53EF\u4EE5\u50A8\u5B58\u7684\u6700\u5927\u6C34\u91CF\u3002<br><br>
        \u8BF4\u660E\uFF1A\u4F60\u4E0D\u80FD\u503E\u659C\u5BB9\u5668\u3002`,example:[{input:"\u8F93\u5165\uFF1A[1,8,6,2,5,4,8,3,7]",output:"\u8F93\u51FA\uFF1A49 ",ex:"\u89E3\u91CA\uFF1A\u56FE\u4E2D\u5782\u76F4\u7EBF\u4EE3\u8868\u8F93\u5165\u6570\u7EC4 [ 1, 8, 6, 2, 5, 4, 8, 3, 7 ]\u3002\u5728\u6B64\u60C5\u51B5\u4E0B\uFF0C\u5BB9\u5668\u80FD\u591F\u5BB9\u7EB3\u6C34\uFF08\u8868\u793A\u4E3A\u84DD\u8272\u90E8\u5206\uFF09\u7684\u6700\u5927\u503C\u4E3A 49\u3002"},{input:"\u8F93\u5165\uFF1Aheight = [1,1]",output:"\u8F93\u51FA\uFF1A1"}],tip:["n == height.length","2 <= n <= 105","0 <= height[i] <= 104"],answer:`/**
* \u5DE6\u53F3\u6307\u9488\u6CD5\uFF0C\u6BD4\u8F83\u5DE6\u53F3\u6307\u9488\u4F4D\u7F6E\u7684\u503C\u7684\u5927\u5C0F\uFF0C\u4EE5\u5C0F\u7684\u503C\u4F4D\u7F6E\u5411\u5927\u7684\u503C\u4F4D\u7F6E\u79FB\u52A8
* [1, 2, 8, 7, 4]
*  \u2191           \u2191    \u5DE6\u6307\u9488\u5411\u53F3\u79FB\u52A8
* [1, 2, 8, 7, 4]
*     \u2191        \u2191    \u5DE6\u6307\u9488\u5411\u53F3\u79FB\u52A8
* [1, 2, 8, 7, 4]
*        \u2191     \u2191    \u5DE6\u6307\u9488\u5411\u53F3\u79FB\u52A8
* [1, 2, 8, 7, 4]
*        \u2191  \u2191       \u53F3\u6307\u9488\u5411\u5DE6\u79FB\u52A8
* \u6BCF\u6B21\u79FB\u52A8\u8BA1\u7B97\u9762\u79EF\u503C\uFF0C\u53D6\u6700\u5927
* @param {number[]} height
* @return {number}
*/
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;
    let area = 0;
    while (left != right) {
    area = (right - left) * Math.min(height[left], height[right]);
    max = max > area ? max : area;
    height[left] >= height[right] ? right-- : left++;
    }
    return max;
};`,answerImgUrl:n.answer11},{title:"\u6574\u6570\u8F6C\u7F57\u9A6C\u6570\u5B57",level:"\u4E2D\u7B49",describe:`\u7F57\u9A6C\u6570\u5B57\u5305\u542B\u4EE5\u4E0B\u4E03\u79CD\u5B57\u7B26\uFF1A I\uFF0C V\uFF0C X\uFF0C L\uFF0CC\uFF0CD \u548C M\u3002<br>
\u5B57\u7B26&emsp;\u6570\u503C<br>
&nbsp;&nbsp;I     &emsp;&emsp;&nbsp;&nbsp; 1<br>
&nbsp;&nbsp;V     &emsp;&emsp;&nbsp;       5<br>
&nbsp;&nbsp;X     &emsp;&nbsp;&nbsp;&nbsp; 10<br>
&nbsp;&nbsp;L     &emsp;&emsp;             50<br>
&nbsp;&nbsp;C     &emsp;&nbsp;&nbsp;       100<br>
&nbsp;&nbsp;D     &emsp;&nbsp;&nbsp;       500<br>
&nbsp;&nbsp;M     &emsp;&nbsp;             1000<br>
\u4F8B\u5982\uFF0C \u7F57\u9A6C\u6570\u5B57 2 \u5199\u505A\xA0II\xA0\uFF0C\u5373\u4E3A\u4E24\u4E2A\u5E76\u5217\u7684 1\u300212 \u5199\u505A\xA0XII\xA0\uFF0C\u5373\u4E3A\xA0X\xA0+\xA0II\xA0\u3002 27 \u5199\u505A\xA0\xA0XXVII, \u5373\u4E3A\xA0XX\xA0+\xA0V\xA0+\xA0II\xA0\u3002<br>
\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u7F57\u9A6C\u6570\u5B57\u4E2D\u5C0F\u7684\u6570\u5B57\u5728\u5927\u7684\u6570\u5B57\u7684\u53F3\u8FB9\u3002\u4F46\u4E5F\u5B58\u5728\u7279\u4F8B\uFF0C\u4F8B\u5982 4 \u4E0D\u5199\u505A\xA0IIII\uFF0C\u800C\u662F\xA0IV\u3002\u6570\u5B57 1 \u5728\u6570\u5B57 5 \u7684\u5DE6\u8FB9\uFF0C\u6240\u8868\u793A\u7684\u6570\u7B49\u4E8E\u5927\u6570 5 \u51CF\u5C0F\u6570 1 \u5F97\u5230\u7684\u6570\u503C 4 \u3002\u540C\u6837\u5730\uFF0C\u6570\u5B57 9 \u8868\u793A\u4E3A\xA0IX\u3002\u8FD9\u4E2A\u7279\u6B8A\u7684\u89C4\u5219\u53EA\u9002\u7528\u4E8E\u4EE5\u4E0B\u516D\u79CD\u60C5\u51B5\uFF1A<br><br>
\xB7I\xA0\u53EF\u4EE5\u653E\u5728\xA0V\xA0(5) \u548C\xA0X\xA0(10) \u7684\u5DE6\u8FB9\uFF0C\u6765\u8868\u793A 4 \u548C 9\u3002<br>
\xB7X\xA0\u53EF\u4EE5\u653E\u5728\xA0L\xA0(50) \u548C\xA0C\xA0(100) \u7684\u5DE6\u8FB9\uFF0C\u6765\u8868\u793A 40 \u548C\xA090\u3002\xA0<br>
\xB7C\xA0\u53EF\u4EE5\u653E\u5728\xA0D\xA0(500) \u548C\xA0M\xA0(1000) \u7684\u5DE6\u8FB9\uFF0C\u6765\u8868\u793A\xA0400 \u548C\xA0900\u3002<br><br>
\u7ED9\u4F60\u4E00\u4E2A\u6574\u6570\uFF0C\u5C06\u5176\u8F6C\u4E3A\u7F57\u9A6C\u6570\u5B57\u3002`,example:[{input:"\u8F93\u5165: num = 3",output:'\u8F93\u51FA: "III"'},{input:"\u8F93\u5165: num = 4",output:'\u8F93\u51FA: "IV"'},{input:"\u8F93\u5165: num = 9",output:'\u8F93\u51FA: "IX"'},{input:"\u8F93\u5165: num = 58",output:'\u8F93\u51FA: "LVIII"',ex:"\u89E3\u91CA: L = 50, V = 5, III = 3."},{input:"\u8F93\u5165: num = 1994",output:'\u8F93\u51FA: "MCMXCIV"',ex:"\u89E3\u91CA: M = 1000, CM = 900, XC = 90, IV = 4."}],tip:["1 <= num <= 3999"],answer:`/**
* \u7A77\u4E3E\u6CD5\uFF0C\u5BFB\u627E\u6240\u6709\u53EF\u80FD\u8FDB\u884C\u5339\u914D
* @param {number} num
* @return {string}
*/
var intToRoman = function (num) {
    const  thousands = ["", "M", "MM", "MMM"];
    const  hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
    const  tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
    const  ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
    return (
        thousands[Math.floor(num / 1000)] +
        hundreds[Math.floor((num % 1000) / 100)] +
        tens[Math.floor((num % 100) / 10)] +
        ones[Math.floor(num % 10)]
    );
};`,answerImgUrl:n.answer12},{title:"\u7F57\u9A6C\u6570\u5B57\u8F6C\u6574\u6570",level:"\u7B80\u5355",describe:" \u7F57\u9A6C\u6570\u5B57\u5305\u542B\u4EE5\u4E0B\u4E03\u79CD\u5B57\u7B26: I\uFF0C V\uFF0C X\uFF0C L\uFF0CC\uFF0CD \u548C M\u3002(\u540C\u4E0A\u9898)",example:[{input:'\u8F93\u5165: s = "III"',output:"\u8F93\u51FA: 3"},{input:'\u8F93\u5165: s = "IV"',output:"\u8F93\u51FA: 4"},{input:'\u8F93\u5165: s = "IX"',output:"\u8F93\u51FA: 9"},{input:'\u8F93\u5165: s = "LVIII"',output:"\u8F93\u51FA: 58",ex:"\u89E3\u91CA: L = 50, V= 5, III = 3."},{input:'\u8F93\u5165: s = "MCMXCIV"',output:"\u8F93\u51FA: 1994",ex:"\u89E3\u91CA: M = 1000, CM = 900, XC = 90, IV = 4."}],tip:["1 <= s.length <= 15","s \u4EC5\u542B\u5B57\u7B26 ('I', 'V', 'X', 'L', 'C', 'D', 'M')","\u9898\u76EE\u6570\u636E\u4FDD\u8BC1 s \u662F\u4E00\u4E2A\u6709\u6548\u7684\u7F57\u9A6C\u6570\u5B57\uFF0C\u4E14\u8868\u793A\u6574\u6570\u5728\u8303\u56F4 [1, 3999] \u5185","\u9898\u76EE\u6240\u7ED9\u6D4B\u8BD5\u7528\u4F8B\u7686\u7B26\u5408\u7F57\u9A6C\u6570\u5B57\u4E66\u5199\u89C4\u5219\uFF0C\u4E0D\u4F1A\u51FA\u73B0\u8DE8\u4F4D\u7B49\u60C5\u51B5\u3002","IL \u548C IM \u8FD9\u6837\u7684\u4F8B\u5B50\u5E76\u4E0D\u7B26\u5408\u9898\u76EE\u8981\u6C42\uFF0C49 \u5E94\u8BE5\u5199\u4F5C XLIX\uFF0C999 \u5E94\u8BE5\u5199\u4F5C CMXCIX ",'\u5173\u4E8E\u7F57\u9A6C\u6570\u5B57\u7684\u8BE6\u5C3D\u4E66\u5199\u89C4\u5219\uFF0C\u53EF\u4EE5\u53C2\u8003 <a target="_blank" href="https://b2b.partcommunity.com/community/knowledge/zh_CN/detail/10753/%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97#knowledge_article">\u7F57\u9A6C\u6570\u5B57 - Mathematics \u3002</a>'],answer:`/* \u4ECE\u5DE6\u5411\u53F3\u7D2F\u52A0\uFF0C\u9047\u5230\u7279\u6B8A\u89C4\u5219\u8FDB\u884C\u51CF\u6CD5\u5904\u7406
* \u6240\u6709\u7279\u6B8A\u89C4\u5219\uFF1AIV,IX 4,9;
*              XL,XC 40,90;
*              CD,CM 400,900;
* @param {string} s
* @return {number}
*/
var romanToInt = function (s) {
    let num = 0;
    for (let i = 0; i < s.length; i++) {
    if (s[i] == "V") num += 5;
    if (s[i] == "L") num += 50;
    if (s[i] == "D") num += 500;
    if (s[i] == "M") num += 1000;
    if (s[i] == "I") {
        if (s[i + 1] == "V" || s[i + 1] == "X") num -= 1;
        else num += 1;
    }
    if (s[i] == "X") {
        if (s[i + 1] == "L" || s[i + 1] == "C") num -= 10;
        else num += 10;
    }
    if (s[i] == "C") {
        if (s[i + 1] == "D" || s[i + 1] == "M") num -= 100;
        else num += 100;
    }
    }
    return num;
};`,answerImgUrl:n.answer13},{title:"\u6700\u957F\u516C\u5171\u524D\u7F00",level:"\u7B80\u5355",describe:`\u7F16\u5199\u4E00\u4E2A\u51FD\u6570\u6765\u67E5\u627E\u5B57\u7B26\u4E32\u6570\u7EC4\u4E2D\u7684\u6700\u957F\u516C\u5171\u524D\u7F00\u3002<br>
        \u5982\u679C\u4E0D\u5B58\u5728\u516C\u5171\u524D\u7F00\uFF0C\u8FD4\u56DE\u7A7A\u5B57\u7B26\u4E32 " "\u3002`,example:[{input:'\u8F93\u5165\uFF1Astrs = ["flower","flow","flight"]',output:'\u8F93\u51FA\uFF1A"fl"'},{input:'\u8F93\u5165\uFF1Astrs = ["dog","racecar","car"]',output:'\u8F93\u51FA\uFF1A""',ex:"\u89E3\u91CA\uFF1A\u8F93\u5165\u4E0D\u5B58\u5728\u516C\u5171\u524D\u7F00\u3002"}],tip:["1 <= strs.length <= 200","0 <= strs[i].length <= 200","strs[i] \u4EC5\u7531\u5C0F\u5199\u82F1\u6587\u5B57\u6BCD\u7EC4\u6210"],answer:`/**
* \u5BF9\u7ED9\u4E88\u6570\u7EC4\u76F4\u63A5\u8FDB\u884C\u5192\u6CE1\u6BD4\u8F83\uFF0C\u5047\u5982\u7B2C\u4E00\u6B21\u5168\u5339\u914D\uFF08strs\u4E2D\u6240\u6709\u9879\u7684\u7B2C\u4E00\u9879\u90FD\u76F8\u7B49\uFF09\u6210\u529F\u540E
* \u5B58\u50A8\u5F53\u524D\u516C\u7528\u524D\u7F00
* @param {string[]} strs
* @return {string}
*/
let longestCommonPrefix = function (strs) {
    let preStr = "";
    if (!strs.length) return preStr; // \u7A7A\u503C\u76F4\u63A5\u8FD4\u56DE
    let min = strs.map((str) => str.length);
    min = Math.min(...min);
    // \u4EE5strs\u4E2D\u6700\u5C0F\u957F\u5EA6\u7684\u503C\u8FDB\u884C\u6BCF\u4E00\u4F4D\u6BD4\u8F83
    for (let j = 0; j < min; j++) {
    for (let i = 1; i < strs.length; i++) {
        // \u53EA\u6BD4\u8F83\u4E0D\u76F8\u7B49\uFF0C\u4E0D\u76F8\u7B49\u76F4\u63A5\u8FD4\u56DE\u5F53\u524D\u5B58\u50A8\u503C
        if (strs[i][j] != strs[0][j]) return preStr;
    }
    // \u904D\u5386\u76F8\u7B49\u540E\u5C06\u516C\u7528\u524D\u7F00\u5B58\u50A8
    preStr += strs[0][j];
    }
    return preStr;
};`,answerImgUrl:n.answer14},{title:"\u4E09\u6570\u4E4B\u548C",level:"\u4E2D\u7B49",describe:`\u7ED9\u4F60\u4E00\u4E2A\u5305\u542B n \u4E2A\u6574\u6570\u7684\u6570\u7EC4\xA0nums\uFF0C\u5224\u65AD\xA0nums\xA0\u4E2D\u662F\u5426\u5B58\u5728\u4E09\u4E2A\u5143\u7D20 a\uFF0Cb\uFF0Cc \uFF0C\u4F7F\u5F97\xA0a + b + c = 0 \uFF1F\u8BF7\u4F60\u627E\u51FA\u6240\u6709\u548C\u4E3A 0 \u4E14\u4E0D\u91CD\u590D\u7684\u4E09\u5143\u7EC4\u3002<br>
                   \u6CE8\u610F\uFF1A\u7B54\u6848\u4E2D\u4E0D\u53EF\u4EE5\u5305\u542B\u91CD\u590D\u7684\u4E09\u5143\u7EC4\u3002`,example:[{input:"\u8F93\u5165\uFF1Anums = [-1,0,1,2,-1,-4]",output:"\u8F93\u51FA\uFF1A[[-1,-1,2],[-1,0,1]]"},{input:"\u8F93\u5165\uFF1Anums = []",output:"\u8F93\u51FA\uFF1A[]"},{input:"\u8F93\u5165\uFF1Anums = [0]",output:"\u8F93\u51FA\uFF1A[]"}],tip:["0 <= nums.length <= 3000","-105 <= nums[i] <= 105"],answer:`/**
* \u6392\u5E8F + \u53CC\u6307\u9488 => a + b(\u5DE6\u6307\u9488) + c(\u53F3\u6307\u9488)
* @param {number[]} nums
* @return {number[][]}
*/
let threeSums = function (nums) {
    if (nums.length < 3) return [];
    nums = nums.sort((a, b) => a - b); // \u6392\u5E8F
    let res = []; // \u5B9A\u4E49\u7ED3\u679C\u53D8\u91CF
    // \u5916\u5C42\u904D\u5386(\u79FB\u52A8a\u7684\u5F53\u524D\u4F4D\u7F6E)
    for (let i = 0; i < nums.length - 2; i++) {
    // \u5B58\u53D6\u7B2C\u4E00\u4E2A\u503C\u7528\u4F5C\u5224\u65AD\u5F53\u524D\u6570\u7EC4\u662F\u5426\u7B26\u5408\u5BFB\u627Eabc\u7684\u6761\u4EF6\uFF0C\u5E76\u4F5C\u4E3A\u63A5\u4E0B\u6765\u5339\u914D\u7684\u9879
    let n1 = nums[i]; 
    if (n1 > 0) break; // \u5982\u679C\u7B2C\u4E00\u4E2A\u503C\u5927\u4E8E0\uFF0C\u5219\u4E0D\u4F1A\u51FA\u73B0a+b+c=0\uFF0C\u76F4\u63A5break
    if (i >= 1 && n1 == nums[i - 1]) continue; // \u7B2C\u4E8C\u9879\u5F00\u59CB\uFF0Ca\u503C\u5982\u679C\u91CD\u590D\u5219\u8FDB\u884C\u8DF3\u8FC7
    let left = i + 1, // \u5DE6\u6307\u9488(b)
        right = nums.length - 1; // \u53F3\u6307\u9488(c)
    // \u5185\u5C42\u904D\u5386(\u79FB\u52A8\u5DE6\u53F3(b\u4E0Ec)\u6307\u9488 )
    while (left < right) {
        let n2 = nums[left],
        n3 = nums[right];
        if (n1 + n2 + n3 === 0) {
        // \u7B26\u5408a+b+c\u6761\u4EF6\u7684push\u8FDBres\u4E2D
        res.push([n1, n2, n3]);
        // b\u548Cc\u5BFB\u627E\u4E0B\u4E00\u4E2A\u4E0D\u540C\u503C\uFF0C\u8FDB\u884C\u518D\u6B21\u6BD4\u8F83
        while (left < right && nums[left] == n2) left++;
        while (left < right && nums[right] == n3) right--;
        } else {
        // a + b + c < 0 \u65F6:\u503C\u5C0F\uFF0C\u9700\u8981\u589E\u5927left++\uFF0C\u53CD\u4E4Bright--
        // a(\u8D1F\u503C) + b(b\u5411\u53F3\u503C\u589E\u5927\uFF1Aleft++) + c(c\u5411\u5DE6\u503C\u51CF\u5C11\uFF1Aright--);
        n1 + n2 + n3 < 0 ? left++ : right--;
        }
    }
    }
    return res;
};`,answerImgUrl:n.answer15},{title:"\u6700\u63A5\u8FD1\u7684\u4E09\u6570\u4E4B\u548C",level:"\u4E2D\u7B49",describe:`\u7ED9\u4F60\u4E00\u4E2A\u957F\u5EA6\u4E3A n \u7684\u6574\u6570\u6570\u7EC4\xA0nums\xA0\u548C \u4E00\u4E2A\u76EE\u6807\u503C\xA0target\u3002\u8BF7\u4F60\u4ECE nums \u4E2D\u9009\u51FA\u4E09\u4E2A\u6574\u6570\uFF0C\u4F7F\u5B83\u4EEC\u7684\u548C\u4E0E\xA0target\xA0\u6700\u63A5\u8FD1\u3002<br>
                   \u8FD4\u56DE\u8FD9\u4E09\u4E2A\u6570\u7684\u548C\u3002<br>
                   \u5047\u5B9A\u6BCF\u7EC4\u8F93\u5165\u53EA\u5B58\u5728\u6070\u597D\u4E00\u4E2A\u89E3\u3002`,example:[{input:"\u8F93\u5165\uFF1Anums = [-1,2,1,-4], target = 1",output:"\u8F93\u51FA\uFF1A2",ex:"\u89E3\u91CA\uFF1A\u4E0E target \u6700\u63A5\u8FD1\u7684\u548C\u662F 2 (-1 + 2 + 1 = 2) \u3002"},{input:"\u8F93\u5165\uFF1Anums = [0,0,0], target = 1",output:"\u8F93\u51FA\uFF1A0"}],tip:["3 <= nums.length <= 1000","-1000 <= nums[i] <= 1000","-104 <= target <= 104"],answer:`/**
* \u6392\u5E8F+\u53CC\u6307\u9488\u65B9\u6CD5\uFF0C\u540C\u4E0A\u9898
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b); // \u6392\u5E8F
    let min = Infinity; // \u521D\u59CB\u5316\u503C
    // \u7B2C\u4E00\u5C42\u5FAA\u73AF\uFF0C\u786E\u5B9A\u7B2C\u4E00\u4E2A\u503C\u7684\u4F4D\u7F6E
    for (let i = 0; i < nums.length; i++) {
    // \u5FAA\u73AF\u7B2C\u4E8C\uFF08\u5DE6\u6307\u9488\uFF09\uFF0C\u7B2C\u4E09\u4E2A\u503C\uFF08\u53F3\u6307\u9488\uFF09
    let [left, right] = [i + 1, nums.length - 1];
    while (left < right) {
        let sum = nums[i] + nums[left] + nums[right];
        // \u5BFB\u627E\u4E0Etarget\u6700\u63A5\u8FD1\u7684\u4E09\u4E2A\u503C\u4E4B\u548C\uFF0C\u5B58\u50A8\u8D77\u6765
        min = Math.abs(sum - target) < Math.abs(min - target) ? sum : min;
        // \u6839\u636E\u4E09\u6570\u548C\u7684\u5927\u5C0F\uFF0C\u5224\u65AD\u79FB\u52A8\u54EA\u4E00\u4E2A\u6307\u9488
        sum < target ? left++ : right--;
        // \u5BFB\u627E\u5230\u4E09\u6570\u548C\u7B49\u4E8Etarget \u76F4\u63A5\u8FD4\u56DE\u5373\u53EF
        if (sum == target) return min;
    }
    }
    return min;
};`,answerImgUrl:n.answer16},{title:"\u7535\u8BDD\u53F7\u7801\u7684\u5B57\u6BCD\u7EC4\u5408",level:"\u4E2D\u7B49",describe:"\u7ED9\u5B9A\u4E00\u4E2A\u4EC5\u5305\u542B\u6570\u5B57\xA02-9\xA0\u7684\u5B57\u7B26\u4E32\uFF0C\u8FD4\u56DE\u6240\u6709\u5B83\u80FD\u8868\u793A\u7684\u5B57\u6BCD\u7EC4\u5408\u3002\u7B54\u6848\u53EF\u4EE5\u6309 \u4EFB\u610F\u987A\u5E8F \u8FD4\u56DE\u3002<br><br>\u7ED9\u51FA\u6570\u5B57\u5230\u5B57\u6BCD\u7684\u6620\u5C04\u5982\u4E0B\uFF08\u4E0E\u7535\u8BDD\u6309\u952E\u76F8\u540C\uFF09\u3002\u6CE8\u610F 1 \u4E0D\u5BF9\u5E94\u4EFB\u4F55\u5B57\u6BCD\u3002",desImg:f.des17,example:[{input:'\u8F93\u5165\uFF1Adigits = "23"',output:'\u8F93\u51FA\uFF1A["ad","ae","af","bd","be","bf","cd","ce","cf"]'},{input:'\u8F93\u5165\uFF1Adigits = ""',output:"\u8F93\u51FA\uFF1A[]"},{input:'\u8F93\u5165\uFF1Adigits = "2"',output:'\u8F93\u51FA\uFF1A["a","b","c"]'}],tip:["0 <= digits.length <= 4","digits[i] \u662F\u8303\u56F4 ['2', '9'] \u7684\u4E00\u4E2A\u6570\u5B57\u3002"],answer:` /**
* \u9012\u5F52\u6CD5\uFF0C\u5229\u7528\u9012\u5F52\u8FDB\u884C\u7A77\u4E3E\u6240\u6709\u7EC4\u5408 \u63A8\u5165res\u7ED3\u679C\u4E2D
* @param {string} digits
* @return {string[]}
*/
const letterCombinations = (digits) => {
    let len = digits.length;
    if (!len) return [];
    const map = {
                2: "abc", 3: "def",
    4: "ghi", 5: "jkl", 6: "mno",
    7: "pqrs",8: "tuv", 9: "wxyz",
    };
    if (len == 1) return map[digits[0]].split("");
    const res = []; // \u7ED3\u679C\u6570\u7EC4
    // curStr \u5F53\u524D\u9012\u5F52\u7684\u503C      i \u627E\u5230\u5BF9\u5E94digits\u7684\u503C
    const recursion = (curStr, i) => {
    if (i + 1 > len) {
        // \u9012\u5F52\u8FB9\u754C\uFF0C\u7ED3\u679C\u63A8\u5165res\u4E2D
        res.push(curStr);
        return;
    }
    for (const letter of map[digits[i]]) {
        recursion(curStr + letter, i + 1); // \u9012\u5F52\u4E3B\u4F53
    }
    };
    recursion("", 0); // \u9012\u5F52\u7684\u5165\u53E3
    return res;
};
var letterCombinationss = function (digits) {
    // \u56DE\u6EAF\u6CD5\uFF08\u56DE\u6EAF\u8BBE\u8BA1\u601D\u60F3\uFF09\uFF0C\u4E0E\u4E0A\u540C\u7406\uFF0C\u53EA\u6D89\u53CA\u56DE\u6EAF\u53D8\u91CFpath\u7684\u5B58\u5728
    const len = digits.length;
    const map = [
        "",
        "",
        "abc",
        "def",
        "ghi",
        "jkl",
        "mno",
        "pqrs",
        "tuv",
        "wxyz",
    ];
    if (!len) return [];
    if (len === 1) return map[digits].split("");
    const res = [],
        path = [];
    const backTracking = (n, a, len) => {
        if (path.length === len) {
        res.push(path.join(""));
        return;
        }
        for (const Letter of map[n[a]]) {
        path.push(Letter);
        backTracking(n, a + 1, len);
        path.pop();
        }
    };
    backTracking(digits, 0, len);
    return res;
};`,answerImgUrl:n.answer17},{title:"\u56DB\u6570\u4E4B\u548C",level:"\u4E2D\u7B49",describe:`\u7ED9\u4F60\u4E00\u4E2A\u7531 n \u4E2A\u6574\u6570\u7EC4\u6210\u7684\u6570\u7EC4\xA0nums \uFF0C\u548C\u4E00\u4E2A\u76EE\u6807\u503C target \u3002\u8BF7\u4F60\u627E\u51FA\u5E76\u8FD4\u56DE\u6EE1\u8DB3\u4E0B\u8FF0\u5168\u90E8\u6761\u4EF6\u4E14\u4E0D\u91CD\u590D\u7684\u56DB\u5143\u7EC4\xA0[nums[a], nums[b], nums[c], nums[d]]\xA0\uFF08\u82E5\u4E24\u4E2A\u56DB\u5143\u7EC4\u5143\u7D20\u4E00\u4E00\u5BF9\u5E94\uFF0C\u5219\u8BA4\u4E3A\u4E24\u4E2A\u56DB\u5143\u7EC4\u91CD\u590D\uFF09\uFF1A
                   <br><br>\xB7 0 <= a, b, c, d\xA0< n
                   <br>\xB7 a\u3001b\u3001c \u548C d \u4E92\u4E0D\u76F8\u540C
                   <br>\xB7 nums[a] + nums[b] + nums[c] + nums[d] == target
                   <br><br>\u4F60\u53EF\u4EE5\u6309 \u4EFB\u610F\u987A\u5E8F \u8FD4\u56DE\u7B54\u6848 \u3002`,example:[{input:"\u8F93\u5165\uFF1Anums = [1,0,-1,0,-2,2], target = 0",output:"\u8F93\u51FA\uFF1A[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]"},{input:"\u8F93\u5165\uFF1Anums = [2,2,2,2,2], target = 8",output:"\u8F93\u51FA\uFF1A[[2,2,2,2]]"}],tip:["1 <= nums.length <= 200","-109 <= nums[i] <= 109","-109 <= target <= 109"],answer:"",answerImgUrl:""}];const F={data(){return{menuContral:!0,questionsIndex:[],answer:[]}},created(){let i=["\u{1F95D}","\u{1F954}","\u{1F349}"],a=["\u7B80\u5355","\u4E2D\u7B49","\u56F0\u96BE"];this.answer=v.slice(0,99),this.questionsIndex=v.map(o=>({level:o.level,title:i[a.indexOf(o.level)]+o.title}))},methods:{copyTo(i){document.execCommand("Copy",!0,i)||alert("\u597D\u50CF\u5931\u8D25\u4E86\uFF0C\u6362\u4E2A\u6D4F\u89C8\u5668\u8BD5\u8BD5")},scrollTo(i){this.menuContral=!this.menuContral;let a=document.getElementById(i);console.log(a.offsetTop),window.innerWidth<700?(console.log(1),window.scrollTo({left:0,top:a.offsetTop-24})):window.scrollTo({left:0,top:a.offsetTop})},showMenu(){return this.menuContral=!this.menuContral}},mounted(){var i=function(w,b){return w.sort((d,t)=>d-t),w};i([1,0,-1,0,-2,2]);let o=document.getElementsByClassName("context")[0];window.scrollTo({left:0,top:o.lastElementChild.offsetTop})}},m=i=>(C("data-v-5f019507"),i=i(),L(),i),J={id:"content",style:{"font-family":"Consolas"}},Q={class:"menu"},W=m(()=>e("button",null,"\u83DC\u5355",-1)),K=[W],ee=m(()=>e("div",null,"Made By LeeDeea",-1)),te=m(()=>e("div",null,null,-1)),ne=["title"],se={style:{display:"flex"}},re=["onClick"],ie=m(()=>e("header",{class:"header"},[e("div",null,"\u4ECE0\u5F00\u59CB\u7684LeetCode"),e("a",{target:"_blank href",href:"https://leetcode-cn.com/problemset/all/"},"\u6CE8\uFF1A\u4E00\u5207\u9898\u76EE\u4E3ALeeCode\u9898\u5E93\u8D44\u6E90")],-1)),le={class:"context"},ae=["id"],ue={class:"title"},pe={class:"describe"},oe=["innerHTML"],me=["src"],de={class:"example_wrap"},be={class:"example_all"},ge={class:"card"},ce={key:0},he=["src"],fe=["textContent"],we=["textContent"],Ie=["innerHTML"],xe={class:"tip"},ve={class:"card"},_e=m(()=>e("span",null,"\u63D0\u793A\uFF1A",-1)),Ce=["innerHTML"],Le={key:0,class:"answer"},Me=m(()=>e("div",null,"\u4EE3\u7801\u5B9E\u73B0\uFF1A",-1)),je=["src"],ye=["onClick"],Xe={key:1};function ke(i,a,o,w,b,d){return s(),r("div",J,[e("div",Q,[e("div",{onClick:a[0]||(a[0]=t=>d.showMenu())},K),ee,te]),e("section",{class:x(["side_Bar",b.menuContral?"sider_Hidden":""])},[(s(!0),r(c,null,h(b.questionsIndex,(t,p)=>(s(),r("div",{class:"select",key:p,title:t.title},[e("div",se,[e("div",{class:x(t.level=="\u7B80\u5355"?"ratio_easy":t.level=="\u4E2D\u7B49"?"ratio_mid":"ratio_hard"),style:{width:"15%"}},u(t.level),3),e("div",{style:{width:"85%",height:"20px",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap"},onClick:l=>d.scrollTo(p+1)},u(p+1)+"."+u(t.title),9,re)])],8,ne))),128))],2),e("div",null,[ie,e("aside",le,[(s(!0),r(c,null,h(b.answer,(t,p)=>(s(),r("div",{id:`${p+1}`,class:"quisition",key:p},[e("div",ue,u(p+1)+"."+u(t.title),1),e("div",pe,[e("div",{innerHTML:t.describe},null,8,oe),e("div",null,[t.desImg?(s(),r("img",{key:0,src:t.desImg,alt:""},null,8,me)):I("",!0)])]),e("div",de,[e("div",be,[(s(!0),r(c,null,h(t.example,(l,g)=>(s(),r("div",{class:"example",key:g},[e("span",ge,[e("span",null,"\u793A\u4F8B"+u(g+1)+"\uFF1A",1),e("div",null,[l.img?(s(),r("p",ce,[e("img",{src:l.img,alt:""},null,8,he)])):I("",!0),e("p",{textContent:u(l.input)},null,8,fe),e("p",{textContent:u(l.output)},null,8,we),l.ex?(s(),r("p",{key:1,innerHTML:l.ex},null,8,Ie)):I("",!0)])])]))),128))]),e("div",xe,[e("span",ve,[_e,(s(!0),r(c,null,h(t.tip,(l,g)=>(s(),r("li",{key:g},[e("span",{innerHTML:l},null,8,Ce)]))),128))])])]),t.answerImgUrl?(s(),r("div",Le,[Me,e("img",{src:t.answerImgUrl,alt:""},null,8,je),e("button",{onClick:l=>d.copyTo(t.answer)},"\u590D\u5236",8,ye)])):(s(),r("div",Xe,"\u5F85\u89E3\u9898.."))],8,ae))),128))])])])}var Ve=_(F,[["render",ke],["__scopeId","data-v-5f019507"]]);export{Ve as default};
