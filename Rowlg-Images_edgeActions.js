/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${Text1}", "click", function(sym, e) {
         
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute)
         window.open("http://3docean.net/user/loghmanmaroofi8/portfolio?ref=loghmanmaroofi8", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text3}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute)
         window.open("http://3docean.net/user/loghmanmaroofi8/portfolio?ref=loghmanmaroofi8", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${buttonNext}", "click", function(sym, e) {
         
         imageCount++;
         
         sym.$("photo").attr("src","images/photo"+imageCount+".jpg");
         
         
         //Image Count Number
         sym.$("countText").html(imageCount + " of 5");
         
         //Finding the end
         if (imageCount >= "5")
         {
            // Hide an element 
            sym.$("buttonNext").hide();
         }
         else{
            sym.$("buttonNext").show();
            sym.$("buttonBack").show();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${buttonBack}", "click", function(sym, e) {
         
         imageCount--;
         
         sym.$("photo").attr("src","images/photo"+imageCount+".jpg");
         
         //Image Count Number
         sym.$("countText").html(imageCount + " of 5");
         
         //Finding the beginning
         if (imageCount <= "1")
         {
            // Hide an element 
            sym.$("buttonBack").hide();
         }
         else{
            sym.$("buttonBack").show();
            sym.$("buttonNext").show();
         }

      });
      //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${Text5}", "click", function(sym, e) {
         

      });
      //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         
         
         //Variadle
         imageCount = 1;

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-98924573");