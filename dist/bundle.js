(()=>{"use strict";var e={407:(e,t,r)=>{r.r(t)}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,r),i.exports}r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{r(407);const e=document.querySelector("#number1"),t=document.querySelector("#number2"),o=document.querySelector("#sum"),n=document.querySelector("#subtraction"),i=document.querySelector("#multiplication"),u=document.querySelector("#division"),c=document.querySelector("#message");function a(e){c.textContent=e}function s(){e.value="",t.value=""}function d(r){const o=parseFloat(e.value),n=parseFloat(t.value);if(c.textContent="",isNaN(o)||isNaN(n))return a("Os valores inseridos não são válidos."),void s();let i;switch(r){case"+":i=o+n;break;case"-":i=o-n;break;case"*":i=o*n;break;case"/":if(0===n)return a("Não é possível dividir por zero."),void s();i=o/n;break;default:return a("Operação inválida."),void s()}c.textContent=`O resultado é: ${i}.`,s()}o.addEventListener("click",(()=>d("+"))),n.addEventListener("click",(()=>d("-"))),i.addEventListener("click",(()=>d("*"))),u.addEventListener("click",(()=>d("/")))})()})();