function FloatAdd(t,e){var l,i,n;try{l=t.toString().split(".")[1].length}catch(t){l=0}try{i=e.toString().split(".")[1].length}catch(t){i=0}return(t*(n=Math.pow(10,Math.max(l,i)))+e*n)/n}function FloatMul(t,e){var l=0;try{l+=t.toString().split(".")[1].length}catch(t){console.log(t)}try{l+=e.toString().split(".")[1].length}catch(t){console.log(t)}return Number(t.toString().replace(".",""))*Number(e.toString().replace(".",""))/Math.pow(10,l)}$(function(){var n=$("#width"),a=$("#height"),t=$("#calculate"),e=$("#reset"),r=$("#perimeter"),o=$("#area"),l=$("#width-validation-message"),i=$("#height-validation-message");function c(){if(u("#width")&&u("#height")){var t=Number(n.val()),e=Number(a.val()),l=2*FloatAdd(t,e),i=FloatMul(t,e);r.val(l),o.val(i)}}function u(t){var e=$(t),l=t.substring(1),i=$(t+"-validation-message");if(""!==e.val()){if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(e.val()))return i.html("必须是数值"),void e.select();if(!(Number(e.val())<0))return i.html(""),1;i.html("必须大于0")}else"width"==l?i.html("宽度不能为空"):i.html("高度不能为空")}t.click(c),$(document).keydown(function(t){13==t.keyCode&&c()}),e.click(function(){n.focus(),n.val(""),a.val(""),r.val(""),o.val(""),l.html(""),i.html("")}),n.keypress(function(t){if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+[\]{}|;:'",<>/?\\]/.test(t.key))t.preventDefault();else{var e=t.target.selectionStart,l=t.target.value;if(console.log(e,l),"e"===t.key){if(0===e||-1!==l.indexOf("e")||-1!==l.indexOf("E"))return void t.preventDefault();if(1===e&&"-"===l.substring(0,1))return void t.preventDefault()}}}),a.keypress(function(t){/[abcdf-zABCDF-Z`~!@#$%^&*()\-=_+[\]{}|;:'",<>/?\\]/.test(t.key)&&t.preventDefault()}),n.focusout(function(){u("#width")||n.select()}),a.focusout(function(){u("#height")||a.select()})});