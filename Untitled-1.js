<div class="modal-body">
     <!--botão termos de uso-->
     <script>   
         function HabiDsabi(){  
             if(document.getElementById('habi').checked == true){ 
                 document.getElementById('envia').disabled = ""  
             }  
             if(document.getElementById('habi').checked == false){ 
                 document.getElementById('envia').disabled = "disabled"  

            }
         }
     </script>
     <form name="form1">
         <p>
             <input type="checkbox" name="habi" id="habi" onClick="HabiDsabi()"> 
             Eu li e aceito os termos de uso 
             <a target="_blank" href="tos.html">termos de uso<a>.
         </p>
         <input type="button" class="btn btn-terciary"  name="envia" id="envia" value="Assinar" disabled>
     </form>
     <!-- fim do botão -->
</div>