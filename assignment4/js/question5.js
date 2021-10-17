let str=document.getElementById("vow").value;
let BtnGo =document.getElementById("btnGo")
BtnGo.addEventListener("click", function(){
    function vowel_count(str)
    {
      var vowel_list = 'aeiouAEIOU';
      var vcount = 0;
      
      for(var x = 0; x < str.length ; x++)
      {
        if (vowel_list.indexOf(str[x]) !== -1)
        {
          vcount += 1;
        }
      
      }
      return vcount;
    }
str= document.getElementById("vow").value
alert("The number is vowel in the word is " + vowel_count(str));
})

