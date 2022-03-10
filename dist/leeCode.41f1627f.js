import{_ as v}from"./index.48ad47e4.js";import{o as n,b as l,e,F as d,f as m,p as b,j as x,n as f,g as r,h as w,i as g}from"./vendor.674df8de.js";const _=[{title:"\u4E24\u6570\u4E4B\u548C",level:"\u7B80\u5355",describe:"\u7ED9\u5B9A\u4E00\u4E2A\u6574\u6570\u6570\u7EC4 nums\xA0\u548C\u4E00\u4E2A\u6574\u6570\u76EE\u6807\u503C target\uFF0C\u8BF7\u4F60\u5728\u8BE5\u6570\u7EC4\u4E2D\u627E\u51FA \u548C\u4E3A\u76EE\u6807\u503C target\xA0 \u7684\u90A3\xA0\u4E24\u4E2A\xA0\u6574\u6570\uFF0C\u5E76\u8FD4\u56DE\u5B83\u4EEC\u7684\u6570\u7EC4\u4E0B\u6807\u3002\u4F60\u53EF\u4EE5\u5047\u8BBE\u6BCF\u79CD\u8F93\u5165\u53EA\u4F1A\u5BF9\u5E94\u4E00\u4E2A\u7B54\u6848\u3002\u4F46\u662F\uFF0C\u6570\u7EC4\u4E2D\u540C\u4E00\u4E2A\u5143\u7D20\u5728\u7B54\u6848\u91CC\u4E0D\u80FD\u91CD\u590D\u51FA\u73B0\u3002\u4F60\u53EF\u4EE5\u6309\u4EFB\u610F\u987A\u5E8F\u8FD4\u56DE\u7B54\u6848\u3002",example:[{input:"\u8F93\u5165\uFF1Anums = [2,7,11,15], target = 9",output:"\u8F93\u51FA\uFF1A[0,1]",ex:"\u89E3\u91CA\uFF1A\u56E0\u4E3A nums[0] + nums[1] == 9 \uFF0C\u8FD4\u56DE [0, 1] \u3002"},{input:"\u8F93\u5165\uFF1Anums = [3,2,4], target = 6",output:"\u8F93\u51FA\uFF1A[1,2]"},{input:"\u8F93\u5165\uFF1Anums = [3,3], target = 6",output:"\u8F93\u51FA\uFF1A[0,1]"}],tip:["2 <= nums.length <= 104","-109 <= nums[i] <= 109","-109 <= target <= 109","\u53EA\u4F1A\u5B58\u5728\u4E00\u4E2A\u6709\u6548\u7B54\u6848"],answer:`// \u7B80\u5355\u7684\u53CC\u5C42\u5FAA\u73AF
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
        };  `,answerImgUrl:"../src/assets/image/leeCode/1.png"},{title:"\u4E24\u6570\u76F8\u52A0",level:"\u7B80\u5355",describe:"\u7ED9\u4F60\u4E24\u4E2A\xA0\u975E\u7A7A\xA0\u7684\u94FE\u8868\uFF0C\u8868\u793A\u4E24\u4E2A\u975E\u8D1F\u7684\u6574\u6570\u3002\u5B83\u4EEC\u6BCF\u4F4D\u6570\u5B57\u90FD\u662F\u6309\u7167\xA0\u9006\u5E8F\xA0\u7684\u65B9\u5F0F\u5B58\u50A8\u7684\uFF0C\u5E76\u4E14\u6BCF\u4E2A\u8282\u70B9\u53EA\u80FD\u5B58\u50A8\xA0\u4E00\u4F4D\xA0\u6570\u5B57\u3002\u8BF7\u4F60\u5C06\u4E24\u4E2A\u6570\u76F8\u52A0\uFF0C\u5E76\u4EE5\u76F8\u540C\u5F62\u5F0F\u8FD4\u56DE\u4E00\u4E2A\u8868\u793A\u548C\u7684\u94FE\u8868\u3002 \u4F60\u53EF\u4EE5\u5047\u8BBE\u9664\u4E86\u6570\u5B570 \u4E4B\u5916\uFF0C\u8FD9\u4E24\u4E2A\u6570\u90FD\u4E0D\u4F1A\u4EE5 0\xA0\u5F00\u5934\u3002",desImg:"../src/view/article/Leecode/imgs/02.png",example:[{input:"\u8F93\u5165\uFF1Al1 = [2,4,3], l2 = [5,6,4] ",output:"\u8F93\u51FA\uFF1A[7,0,8]",ex:"\u89E3\u91CA\uFF1A342 + 465 = 807"},{input:"\u8F93\u5165\uFF1Al1 = [0], l2 = [0] ",output:"\u8F93\u51FA\uFF1A[0]"},{input:"\u8F93\u5165\uFF1Al1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9] ",output:"\u8F93\u51FA\uFF1A[8,9,9,9,0,0,0,1]"}],tip:[" \u6BCF\u4E2A\u94FE\u8868\u4E2D\u7684\u8282\u70B9\u6570\u5728\u8303\u56F4 [1, 100] \u5185","0 <= Node.val <= 9","\u9898\u76EE\u6570\u636E\u4FDD\u8BC1\u5217\u8868\u8868\u793A\u7684\u6570\u5B57\u4E0D\u542B\u524D\u5BFC\u96F6"],answer:`// \u6CE8\u610F\u94FE\u8868\u7684\u5355\u65B9\u5411\u683C\u5F0F
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
        };`,answerImgUrl:"../src/assets/image/leeCode/2.png"},{title:"\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32",level:"\u4E2D\u7B49",describe:"\u7ED9\u5B9A\u4E00\u4E2A\u5B57\u7B26\u4E32 s \uFF0C\u8BF7\u4F60\u627E\u51FA\u5176\u4E2D\u4E0D\u542B\u6709\u91CD\u590D\u5B57\u7B26\u7684 \u6700\u957F\u5B50\u4E32 \u7684\u957F\u5EA6\u3002",example:[{input:"\u8F93\u5165: s = 'abcabcbb'",output:"\u8F93\u51FA: 3 ",ex:"\u89E3\u91CA: \u56E0\u4E3A\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32\u662F 'abc'\uFF0C\u6240\u4EE5\u5176\u957F\u5EA6\u4E3A 3\u3002"},{input:"\u8F93\u5165: s = 'bbbbb'",output:"\u8F93\u51FA: 1",ex:"\u89E3\u91CA: \u56E0\u4E3A\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32\u662F 'b'\uFF0C\u6240\u4EE5\u5176\u957F\u5EA6\u4E3A 1\u3002"},{input:"\u8F93\u5165: s = 'pwwkew'",output:"\u89E3\u91CA: \u56E0\u4E3A\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32\u662F 'wke'\uFF0C\u6240\u4EE5\u5176\u957F\u5EA6\u4E3A 3\u3002",ex:"\u89E3\u91CA: \u56E0\u4E3A\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32\u662F 'wke'\uFF0C\u6240\u4EE5\u5176\u957F\u5EA6\u4E3A 3\u3002\u8BF7\u6CE8\u610F\uFF0C\u4F60\u7684\u7B54\u6848\u5FC5\u987B\u662F \u5B50\u4E32 \u7684\u957F\u5EA6\uFF0C'pwke' \u662F\u4E00\u4E2A\u5B50\u5E8F\u5217\uFF0C\u4E0D\u662F\u5B50\u4E32\u3002"}],tip:["0 <= s.length <= 5 * 104","s \u7531\u82F1\u6587\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u7B26\u53F7\u548C\u7A7A\u683C\u7EC4\u6210"],answer:`// \u4E0D\u65AD\u5207\u7247\u6570\u7EC4\u5BFB\u627E\u6700\u5927\u503C
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
        };`,answerImgUrl:"../src/assets/image/leeCode/3.png"},{title:"\u5BFB\u627E\u4E24\u4E2A\u6B63\u5E8F\u6570\u7EC4\u7684\u4E2D\u4F4D\u6570",level:"\u56F0\u96BE",describe:"\u7ED9\u5B9A\u4E24\u4E2A\u5927\u5C0F\u5206\u522B\u4E3A m \u548C n \u7684\u6B63\u5E8F\uFF08\u4ECE\u5C0F\u5230\u5927\uFF09\u6570\u7EC4\xA0nums1 \u548C\xA0nums2\u3002\u8BF7\u4F60\u627E\u51FA\u5E76\u8FD4\u56DE\u8FD9\u4E24\u4E2A\u6B63\u5E8F\u6570\u7EC4\u7684 \u4E2D\u4F4D\u6570 \u3002\u7B97\u6CD5\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u5E94\u8BE5\u4E3A O(log (m+n)) \u3002",example:[{input:"\u8F93\u5165\uFF1Anums1 = [1,3], nums2 = [2]",output:"\u8F93\u51FA\uFF1A2.00000",ex:"\u89E3\u91CA\uFF1A\u5408\u5E76\u6570\u7EC4 = [1,2,3] \uFF0C\u4E2D\u4F4D\u6570 2"},{input:"\u8F93\u5165\uFF1Anums1 = [1,2], nums2 = [3,4]",output:"\u8F93\u51FA\uFF1A2.50000",ex:"\u89E3\u91CA\uFF1A\u5408\u5E76\u6570\u7EC4 = [1,2,3,4] \uFF0C\u4E2D\u4F4D\u6570 (2 + 3) / 2 = 2.5"}],tip:["nums1.length == m","nums2.length == n","0 <= m <= 1000","0 <= n <= 1000","1 <= m + n <= 2000","-106 <= nums1[i], nums2[i] <= 106"],answer:` // \u5408\u5E76\uFF0C\u6392\u5E8F\uFF0C\u627E\u4E2D\u4F4D\u6570\uFF0C\u505A\u6570\u7B97
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
        };`,answerImgUrl:"../src/assets/image/leeCode/4.png"},{title:"\u6700\u957F\u56DE\u6587\u5B50\u4E32",level:"\u4E2D\u7B49",describe:"\u7ED9\u4F60\u4E00\u4E2A\u5B57\u7B26\u4E32 s\uFF0C\u627E\u5230 s \u4E2D\u6700\u957F\u7684\u56DE\u6587\u5B50\u4E32\u3002",example:[{input:"\u8F93\u5165\uFF1As = 'babad'",output:"\u8F93\u51FA\uFF1A'bab'",ex:"\u89E3\u91CA\uFF1A'aba' \u540C\u6837\u662F\u7B26\u5408\u9898\u610F\u7684\u7B54\u6848\u3002"},{input:"\u8F93\u5165\uFF1As = 'cbbd'",output:"\u8F93\u51FA\uFF1A'bb'"}],tip:["1 <= s.length <= 1000","s \u4EC5\u7531\u6570\u5B57\u548C\u82F1\u6587\u5B57\u6BCD\u7EC4\u6210"],answer:`// \u4E2D\u5FC3\u6269\u6563\u6CD5
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
        }`,answerImgUrl:"../src/assets/image/leeCode/5.png"}];const y={data(){return{questionsIndex:[],answer:[]}},created(){this.answer=_,this.questionsIndex=_.map(s=>({level:s.level,title:s.title}))},methods:{copyTo(s){let o=document.getElementById("textareaCopy");o.value=s,o.select(),document.execCommand("Copy",!0,s)||alert("\u597D\u50CF\u5931\u8D25\u4E86\uFF0C\u6362\u4E2A\u6D4F\u89C8\u5668\u8BD5\u8BD5")},init(){},scrollTo(s){let o=document.getElementById(s);window.scrollTo({left:0,top:o.offsetTop,behavior:"smooth"})}},mounted(){this.init()}},c=s=>(b("data-v-04e59728"),s=s(),x(),s),C={class:"content"},I={class:"side_Bar"},k=["onClick","title"],L={style:{display:"flex"}},N={style:{width:"85%"}},O=c(()=>e("header",{class:"header"},[e("div",null,"\u4ECE0\u5F00\u59CB\u7684LeetCode"),e("a",{href:"https://leetcode-cn.com/problemset/all/"},"\u6CE8\uFF1A\u4E00\u5207\u9898\u76EE\u4E3ALeeCode\u9898\u5E93\u8D44\u6E90")],-1)),T={class:"context"},S=["id"],j={class:"title"},B={class:"describe"},U=["src"],M={style:{display:"flex","margin-bottom":"15px"}},q={style:{width:"50%"}},E={key:0},V={class:"tip",style:{width:"50%"}},$=c(()=>e("span",null,"\u63D0\u793A\uFF1A",-1)),D=c(()=>e("span",null,"\u4EE3\u7801\u5B9E\u73B0\uFF1A",-1)),F={class:"answer"},z=["src"],A=["onClick"],P=c(()=>e("textarea",{style:{width:"0",height:"0"},id:"textareaCopy",type:"text"},null,-1));function G(s,o,H,J,p,h){return n(),l("div",C,[e("section",I,[(n(!0),l(d,null,m(p.questionsIndex,(t,a)=>(n(),l("span",{onClick:i=>h.scrollTo(a+1),key:a,title:t.title},[e("div",L,[e("div",{class:f(t.level=="\u7B80\u5355"?"ratio_easy":t.level=="\u4E2D\u7B49"?"ratio_mid":"ratio_hard"),style:{width:"15%"}},r(t.level),3),e("div",N,r(a+1)+"."+r(t.title),1)])],8,k))),128))]),O,e("aside",T,[(n(!0),l(d,null,m(p.answer,(t,a)=>(n(),l("div",{id:`${a+1}`,class:"quisition",key:a},[e("div",j,r(a+1)+" . "+r(t.title),1),e("div",B,[w(r(t.describe)+" ",1),e("div",null,[t.desImg?(n(),l("img",{key:0,src:t.desImg,alt:""},null,8,U)):g("",!0)])]),e("div",M,[e("div",q,[(n(!0),l(d,null,m(t.example,(i,u)=>(n(),l("div",{class:"example",key:u},[e("span",null,"\u793A\u4F8B"+r(u+1)+"\uFF1A",1),e("div",null,[e("p",null,r(i.input),1),e("p",null,r(i.output),1),i.ex?(n(),l("p",E,r(i.ex),1)):g("",!0)])]))),128))]),e("div",V,[$,(n(!0),l(d,null,m(t.tip,(i,u)=>(n(),l("li",{key:u},r(i),1))),128))])]),D,e("div",F,[e("img",{style:{margin:"0 auto",flex:"1",width:"100%"},src:t.answerImgUrl,alt:""},null,8,z),e("button",{onClick:i=>h.copyTo(t.answer)},"\u590D\u5236",8,A)])],8,S))),128))]),P])}var R=v(y,[["render",G],["__scopeId","data-v-04e59728"]]);export{R as default};
