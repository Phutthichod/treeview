
let title;
let descriptor;
let select_type;
let detail;
let color;
let data_json = [];
let id_add;
let id;
$(document).ready(function () {

$(document).on('click','.add',function(){
    id_add=$(this);
    console.log(id_add);
//    $(".form-add-div").prepend(text);
})
    $(":submit").click(function () {
        console.log("submit");
        title = $("#title").val();
        descriptor = $("#descriptor").val();
        select_type = $("#select-type").val();
        detail = $("#detail").text();
        color = $("#input-color").val();
        menu = `menu_${title}`
        text = `   <li style="display: list-item;" class="mjs-nestedSortable-branch mjs-nestedSortable-expanded"
        id="${title}">
        <div class="shadow bottom-shadow">
        <div class="grid-menu">
        <button type="button" class="btn btn-success btn-config open-close"> <i class=" far fa-plus-square"data-id="2"></i></button>
               <button type="button" class="btn btn-info btn-config"><i class="fas fa-caret-down"></i></button>
            <h2>Title</h2>
            <button type="button" class="btn btn-warning btn-config"><i class="fas fa-edit"></i>
             <i  far fa-plus-square"></i></button>
               <button type="button" class="btn btn-danger btn-config"><i  class="far fa-trash-alt"></i>
             <i  far fa-plus-square"></i></button>
             <button type="button" class="btn btn-primary btn-config add"><i  class="far fa-plus-square"></i>
             <i  far fa-plus-square"></i></button>
        </div>
        <div id="menuEdit2" class="menuEdit hidden">
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum accusamus dolorum dicta eaque odio, autem perferendis deserunt excepturi provident odit et unde. Exercitationem veritatis earum expedita minus veniam quas fugit.</p>
        </div>
    </div>
    </div>
    <div id="${menu}" class="menuEdit hidden">
        <p> ${descriptor}</p>
        </div>
    </div>
    </li>`
        console.log(text);
        allText = `{"title":"${title}" , "descriptor" : "${descriptor}" , "select_type" : "${select_type}" , "detail":"${detail}","color":"${color}"}`;


        console.log(allText);
        //   for(i = 0 ; i < data_json.length ; i++){
        //     if(data_json[i].id=="1")
        //     console.log(i);
        // }
        let a = id_add.parent().parent().next();
       
        // a.last().append(text);
        // a.css({"color": "red", "border": "2px solid red"});
         a.prepend(text);
        
         data_json[title] = allText
         console.log(data_json[title]);
    })
    $(document).on('dblclick', 'ul', function (event) {
        event.stopPropagation();
        // alert($(event.target).attr("value"));

        let title = $(event.target).attr("value");
        //     // // $(this).hide();
        //     // ojb = {name:"pnto",id:"1"}
        //     // data_json.push(ojb)
        //     // console.log( data_json)
        //    console.log(data_json[title]);
        let ojb = JSON.parse(data_json[title]);
        //   console.log(ojb.title);
        text = `<h1>${ojb.title}</h1>`
        $(".detail").empty();
        $(".detail").append(text);

    })
    $('.color-input').each(function (i, elem) {
        var hueb = new Huebee(elem, {
            // options
        });
    });
    $("#select-type").change(function (event) {
        let input = $(".create-input")
        // console.log($(".pickr-container").getColor());
        $("label").css("color", $(".pcr-button").css("color"));
        input.empty()
        switch ($(event.target).val()) {
            case "1":
               
                break;
            case "2":
                input.append(` <div class="form-group">
                    <label for="exampleInputPassword1">Desciptor</label>
                    <input type="text" class="form-control" id="detail" placeholder="EnterDescriptor">
                </div>`);
                break;
            case "3":
                input.append(` <div class="form-group">
                    <label for="exampleInputPassword1">Desciptor</label>
                    <input type="number" class="form-control" id="detail" placeholder="EnterDescriptor">
                </div>`);
                break;
            case "4":
                input.append(` <div class="form-group">
                    <label for="exampleInputPassword1">Desciptor</label>
                    <input type="text" class="form-control" id="detail" placeholder="EnterDescriptor">
                </div>`);
                break;
            case "5":
               
                break;
            default:
            // code block
        }


    })

    $(".btn-close").click(function () {
       // console.log("pinto");
       let id = $(this).attr("data-id");
       console.log(id);
        $(`'#menuEdit${id}`).toggle();
        $(".shadow").toggleClass("bottom-shadow").toggleClass("bottom-shadow-close");
        // $("button").fadeToggle();
        // $("#div2").fadeToggle("slow");
        // $("#div3").fadeToggle(3000);
      
    })
    // $("").click(function () {
    //     console.log("555555");
    //     var id = $(this).attr('data-id');
    //     $(this).parent().parent().parent().parent().parent().append(`
    //     <li class="mjs-nestedSortable-leaf" id="menuItem_20">
    //                 <div class="menuDiv">
    //                     <span title="Click to show/hide children" class="disclose ui-icon ui-icon-minusthick">
    //                     </span>
    //                     </span>
    //                     <span title="Click to show/hide item editor" data-id="20"
    //                         class="expandEditor ui-icon ui-icon-triangle-1-n">
    //                     </span>
    //                     </span>
    //                     <span>
    //                         <span data-id="20" class="itemTitle">e</span>
    //                         <span title="Click to delete item." data-id="20"
    //                             class="deleteMenu ui-icon ui-icon-closethick">
    //                         </span>
    //                     </span>
    //                     </span>
    //                     <div id="menuEdit20" class="menuEdit hidden">
    //                         <p>
    //                             Content or form, or nothing here. Whatever you want.
    //                         </p>
    //                     </div>
    //                 </div>
    //             </li>
    //     `);
    // });


})