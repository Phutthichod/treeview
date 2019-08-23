
let title;
let descriptor;
let select_type;
let detail = [];
let color;
let data_json = [];
let id_add;
let id;
var arrayofCheckbox = ["min", "max", "average", "standard deviation"];
$(document).ready(function () {
    $(document).on('click', '.form-check-input', function () {
        input = $('.create-input');
        if ($(this).is(':checked')) {
            input.append(` <div class="form-group" id=${$(this).next().text()}>
                    <label for="exampleInputPassword1">${$(this).next().text()}</label>
                    <input type="number" class="form-control" id="detail" placeholder="EnterDescriptor" >
                </div>`);
        }
        else {
            console.log("uncheck");
            $(`.create-input #${$(this).next().text()}`).remove();
        }

    })
    if ($('input[name="chk[]"]:checked').length > 0) {
        alert($('input[name="chk[]"]:checked'))
    }
    // $(document).on('click','.add',function(){
    //     id_add=$(this);
    //     console.log(id_add);
    // //    $(".form-add-div").prepend(text);
    // })
    $(":submit").click(function (event) {
        event.preventDefault();
        console.log("submit");
        title = $("#title").val();
        descriptor = $("#descriptor").val();
        select_type = $("#select-type").val();
        detail = $("#detail").text();
        color = $("#input-color").val();
        menu = `menu_${title}`
        id_add.append(`  <li style="display: list-item;" class="mjs-nestedSortable-branch mjs-nestedSortable-expanded"
        id="menu_${title}">
            <div class="shadow bottom-shadow card">
        <div class="grid-menu">
        <button type="button" class="btn btn-success btn-config open-close"data-id="${title}" > <i class=" far fa-plus-square"></i></button>
               <button type="button" data-id="${title}"  class="btn btn-info btn-config"><i class="fas fa-caret-down"></i></button>
            <h2>Title</h2>
            <button type="button" data-id="${title}"  class="btn btn-warning btn-config"><i class="fas fa-edit"></i>
             <i  far fa-plus-square"></i></button>
               <button type="button" data-id="${title}"  class="btn btn-danger btn-config"><i  class="far fa-trash-alt"></i>
             <i  far fa-plus-square"></i></button>
             <button type="button" data-id="${title}"  class="btn btn-primary btn-config add"><i  class="far fa-plus-square"></i>
             <i  far fa-plus-square"></i></button>
        </div>
        <div id="menuEdit${title}" class="menuEdit hidden">
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum accusamus dolorum dicta eaque odio, autem perferendis deserunt </p>
        </div>
    </div><ol></ol>`);
        console.log($("[name^='label']").map(function () { return $(this).val(); }).get());
        
        //     console.log(text);
        allText = `{"title":"${title}" , "descriptor" : "${descriptor}" , "select_type" : "${select_type}" , "detail":"${detail}"}`;


        //     console.log(allText);
        //     //   for(i = 0 ; i < data_json.length ; i++){
        //     //     if(data_json[i].id=="1")
        //     //     console.log(i);
        //     // }
        //     let a = id_add.parent().parent().next();

        //     // a.last().append(text);
        //     // a.css({"color": "red", "border": "2px solid red"});
        //      a.prepend(text);

        //      data_json[title] = allText
        //      console.log(data_json[title]);
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
    $(document).on('click','.dellete-label',function(){
        $(this).parent().remove();
    })
        $(document).on('click', '#add-label', function () {

        $('.create-input').append(`<div class="form-group grid-form">
        <input type="text" name="label[]" class="form-control add-label" id="detail" placeholder="EnterDetail"> <button class="btn btn-danger dellete-label">delete</button> </div>`);
    })
    $(document).on('click', '#add-number', function () {

        $('.create-input').append(`<div class="form-group grid-form">
        <input type="number" name="multinumber[]" class="form-control add-number" id="multinumber" placeholder="EnterNumber"> <button class="btn btn-danger dellete-label">delete</button> </div>`);
    })
    $("#select-type").change(function (event) {
        let input = $(".create-input")
        // console.log($(".pickr-container").getColor());
        $("label").css("color", $(".pcr-button").css("color"));
        input.empty()
        $('fieldset').empty();
        switch ($(event.target).val()) {
            case "1":

                break;
            case "2":
                input.append(` <label for="exampleInputPassword1">detail</label> <div class="form-group grid-form">
                    
                    <input type="text" name="label[]" class="form-control add-label" id="detail" placeholder="EnterDetail">
                    <button type="button" id="add-label" class="btn btn-primary" >add</button></div>`);
                break;
            case "3":
                input.append(` <div class="grid-number"><label for="exampleInputPassword1">number</label> <label for="exampleInputPassword1">unit</label></div>
                <div class="grid-number"><div class="form-group ">
                    <input type="number" class="form-control" id="detail" placeholder="EnterNumberr">
                </div><div class="form-group" >
                <input type="number" class="form-control" id="detail" placeholder="Enterunit"</div>
            </div>`);
                break;
            case "4":
                    input.append(` <div class="grid-multinumber"><label for="exampleInputPassword1">multinumber</label> 
                    <label for="exampleInputPassword1">unit</label><br></div>
                    <div class="form-group grid-multinumber">
                    
                    <input type="number" name="multinumber[]" class="form-control add-label" id="multinumber" placeholder="EnterNumber">
                    <input type="number" class="form-control" id="detail" placeholder="Enterunit">
                    <button type="button" id="add-number" class="btn btn-primary" >add</button></div>`);
            //     let text = "";
            //     for (index in arrayofCheckbox) {
            //         console.log(index);
            //         if (arrayofCheckbox[index] != 'undefined') {
            //             text += `<div class="form-check form-check-inline">
            //         <input class="form-check-input" type="checkbox" name="chk[]" value="option${index}">
            //         <label class="form-check-label" for="inlineCheckbox${index}">${arrayofCheckbox[index]}</label>
            //       </div> 
            //      `
            //         }

            //     }
            //     text += ` <br><div class="form-group" >
            //     <label for="exampleInputPassword1">unit</label>
            //     <input type="number" class="form-control" id="detail" placeholder="EnterDescriptor">
            // </div>`
            //     let input1 = $("#checkArray")
            //     input1.append(`${text}`)
                break;
            case "5":
                input.append(`<form action="fileToupload.php" method="post" enctype="multipart/form-data">
                    Select an Image To Upload:-
                    <input type="file" name="fileToUpload" id="fileToUpload">
                    <input type="submit" value="Upload Image" name="submit">
                    </form>`);
                break;
            default:
            // code block
        }


    })

    $(document).on('click', '.btn-danger', function () {
        let id = $(this).attr("data-id");
        console.log(id);
        // $(this).parent().parent().remove();
        $(`#menu_${id}`).remove();
        // $(this).toggleClass('ui-icon-triangle-1-n').toggleClass('ui-icon-triangle-1-s');
    });
    $(document).on('click', '.btn-primary', function () {
        console.log($(this).attr("data-id"));
        let id = $(this).attr("data-id");
        console.log(id);
        // $(this).parent().parent().remove();

        id_add = $(`#menu_${id} ol:first`)
        // $(this).toggleClass('ui-icon-triangle-1-n').toggleClass('ui-icon-triangle-1-s');
    });
    $(document).on('click', '.btn-info', function () {
        // console.log("pinto");
        let id = $(this).attr("data-id");
        console.log(id);
        $(`#menuEdit${id}`).toggle();
        $(this).parent().parent().toggleClass("bottom-shadow").toggleClass("bottom-shadow-close");
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