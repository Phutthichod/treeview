
    $().ready(function() {
        var ns = $('ol.sortable').nestedSortable({
            forcePlaceholderSize: true,
            handle: 'div',
            helper: 'clone',
            items: 'li',
            opacity: .6,
            placeholder: 'placeholder',
            revert: 250,
            tabSize: 25,
            tolerance: 'pointer',
            toleranceElement: '> div',
            maxLevels: 10,
            isTree: true,
            expandOnHover: 700,
            startCollapsed: false,
            excludeRoot: true,
            rootID: "root"
        });

        $('.expandEditor').attr('title', 'Click to show/hide item editor');
        $('.open-close').attr('title', 'Click to show/hide children');
        $('.deleteMenu').attr('title', 'Click to delete item.');
        // $(document).on('click','.disclose',function() {
        //     $(this).closest('li').toggleClass('mjs-nestedSortable-collapsed').toggleClass(
        //         'mjs-nestedSortable-expanded');
        //     $(this).toggleClass('ui-icon-plusthick').toggleClass('ui-icon-minusthick');
        // });
        $(document).on('click','.btn-success',function() {
            $(this).closest('li').toggleClass('mjs-nestedSortable-collapsed').toggleClass(
                'mjs-nestedSortable-expanded');
            // $(this).toggleClass('ui-icon-triangle-1-n').toggleClass('ui-icon-triangle-1-s');
        });
        
		// $(document).on('click','.itemTitle',function() {
        //     var id = $(this).attr('data-id');
        //     $('#menuEdit' + id).toggle();
        //     $(this).toggleClass('ui-icon-triangle-1-n').toggleClass('ui-icon-triangle-1-s');
        // });
       
        
        // $(document).on('click','.deleteMenu',function() {
		// 	var id = $(this).attr('data-id');
		// 	$(this).parent().parent().after(`<li class="mjs-nestedSortable-leaf" id="menuItem_20">
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
        //             </li>`);
        //     // alert($(this).parent().parent().after());
        //     // $(this).parent().parent().attr('data-id');
        //     // $('#menuItem_'+id).remove();
        // });

        $('#serialize').click(function() {
            serialized = $('ol.sortable').nestedSortable('serialize');
            $('#serializeOutput').text(serialized + '\n\n');
        })

        $('#toHierarchy').click(function(e) {
            hiered = $('ol.sortable').nestedSortable('toHierarchy', {
                startDepthCount: 0
            });
            hiered = dump(hiered);
            (typeof($('#toHierarchyOutput')[0].textContent) != 'undefined') ?
            $('#toHierarchyOutput')[0].textContent = hiered: $('#toHierarchyOutput')[0].innerText =
                hiered;
        })

        $('#toArray').click(function(e) {
            arraied = $('ol.sortable').nestedSortable('toArray', {
                startDepthCount: 0
            });
            arraied = dump(arraied);
            (typeof($('#toArrayOutput')[0].textContent) != 'undefined') ?
            $('#toArrayOutput')[0].textContent = arraied: $('#toArrayOutput')[0].innerText = arraied;
        });
    });

    function dump(arr, level) {
        var dumped_text = "";
        if (!level) level = 0;

        //The padding given at the beginning of the line.
        var level_padding = "";
        for (var j = 0; j < level + 1; j++) level_padding += "    ";

        if (typeof(arr) == 'object') { //Array/Hashes/Objects
            for (var item in arr) {
                var value = arr[item];

                if (typeof(value) == 'object') { //If it is an array,
                    console.log("object", arr[item]);
                    dumped_text += level_padding + "'" + arr[item] + "' ...\n";
                    dumped_text += dump(value, level + 1);
                } else {
                    dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
                }
            }
        } else { //Strings/Chars/Numbers etc.
            dumped_text = "===>" + arr + "<===(" + typeof(arr) + ")";
        }
        return dumped_text;
    }
  