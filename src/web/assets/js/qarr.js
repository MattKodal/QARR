Garnish.$doc.ready(function(){var e=document.querySelectorAll(".custom-field");[].forEach.call(e,function(e){new QarrInputField(e)}),$(".custom-select label").on("click",function(e){$(this).parent().find("select").select2("open")}),$(".custom-select select").select2({minimumResultsForSearch:1/0,width:"100%",placeholder:""}),Craft.elementIndex&&(Craft.elementIndex.on("selectionChange",function(e){if("owldesign\\qarr\\elements\\Review"===e.target.elementType||"owldesign\\qarr\\elements\\Question"===e.target.elementType){var t=Craft.elementIndex.view.elementSelect.$selectedItems.length,n=$('<div class="elements-selected-count">'),l=$("<span>"+t+" "+Craft.t("qarr","items selected")+"</span>");$(".toolbar .flex").find(".elements-selected-count").length>0?$(".toolbar .flex").find(".elements-selected-count").html(l):($(".toolbar .flex").append(n),n.html(l)),0===t&&$(".elements-selected-count").remove()}}),Craft.elementIndex.on("updateElements",function(e){"owldesign\\qarr\\elements\\Review"!==e.target.elementType&&"owldesign\\qarr\\elements\\Question"!==e.target.elementType||Craft.elementIndex.view.elementSelect&&0===Craft.elementIndex.view.elementSelect.$selectedItems.length&&$(".elements-selected-count").remove()}))});
