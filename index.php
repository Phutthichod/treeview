<!DOCTYPE html>
<html lang="en">

<head>
    <?php include('main/head.php'); ?>
    <meta content="Demo page of the nestedSortable jQuery Plugin" name="description">
    <meta content="Manuele J Sarfatti" name="author">
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css" />
    <script src="http://code.jquery.com/ui/1.10.4/jquery-ui.min.js"></script>
    <link rel="stylesheet" href="style.css">
    
   
    <script src="charactor/script.js"></script>
    <script src="charactor/drag-drop.js"></script>
    <!-- <link rel="stylesheet" href="style-charactor.css"> -->
</head>

<body class="sidebar-icon-only">
    <div class="container-scroller">
        <?php include('main/navbar.php'); ?>
        <div class="container-fluid page-body-wrapper">
            <?php include('main/sidebar.php'); ?>
            <div class="main-panel">
                <div class="content-wrapper">
                    <div class="row">
                        <div class="col-lg-12 grid-margin">
                            <div class="card" margin-top="50px;">
                                <div class="card-body">
                                    <!-- หน้าเว็บ -->
                                    <button class="btn btn-success mb-2" id="btn-create">Create</button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header"></div>
                        <div class="card-body">
                            <div class="grid-main">
                                
    <section id="demo">
        <ol class="sortable ui-sortable mjs-nestedSortable-branch mjs-nestedSortable-expanded">
            <li style="display: list-item;" class="mjs-nestedSortable-branch mjs-nestedSortable-expanded"
                id="menuItem_2">
                <div class="menuDiv">
                    <span title="Click to show/hide children" class="disclose ui-icon ui-icon-minusthick">
                        <span></span>
                    </span>
                    <span title="Click to show/hide item editor" data-id="2"
                        class="expandEditor ui-icon ui-icon-triangle-1-n">
                        <span></span>
                    </span>
                    <span>
                        <span data-id="2" class="itemTitle">a</span>
                        <span title="Click to delete item." data-id="2" class="deleteMenu ui-icon ui-icon-closethick">
                            <span></span>
                        </span>
                    </span>
                    <div id="menuEdit2" class="menuEdit hidden">
                        <p>
                            Content or form, or nothing here. Whatever you want.
                        </p>
                    </div>
                </div>
                <ol>
                    <li style="display: list-item;" class="mjs-nestedSortable-branch mjs-nestedSortable-expanded"
                        id="menuItem_4">
                        <div class="menuDiv">
                            <span title="Click to show/hide children" class="disclose ui-icon ui-icon-minusthick">
                                <span></span>
                            </span>
                            <span title="Click to show/hide item editor" data-id="4"
                                class="expandEditor ui-icon ui-icon-triangle-1-n">
                                <span></span>
                            </span>
                            <span>
                                <span data-id="4" class="itemTitle">c</span>
                                <span title="Click to delete item." data-id="4"
                                    class="deleteMenu ui-icon ui-icon-closethick">
                                    <span></span>
                                </span>
                            </span>
                            <div id="menuEdit4" class="menuEdit hidden">
                                <p>
                                    Content or form, or nothing here. Whatever you want.
                                </p>
                            </div>
                        </div>

                    <li class="mjs-nestedSortable-leaf" id="menuItem_6">
                        <div class="menuDiv">
                            <span title="Click to show/hide children" class="disclose ui-icon ui-icon-minusthick">
                            </span>
                            </span>
                            <span title="Click to show/hide item editor" data-id="6"
                                class="expandEditor ui-icon ui-icon-triangle-1-n">
                            </span>
                            </span>
                            <span>
                                <span data-id="6" class="itemTitle">e</span>
                                <span title="Click to delete item." data-id="6"
                                    class="deleteMenu ui-icon ui-icon-closethick">
                                </span>
                            </span>
                            </span>
                            <div id="menuEdit6" class="menuEdit hidden">
                                <p>
                                    Content or form, or nothing here. Whatever you want.
                                </p>
                            </div>
                        </div>
                    </li>

            </li>
            <li style="display: list-item;" class="mjs-nestedSortable-leaf" id="menuItem_5">
                <div class="menuDiv">
                    <span title="Click to show/hide children" class="disclose ui-icon ui-icon-minusthick">
                        <span></span>
                    </span>
                    <span title="Click to show/hide item editor" data-id="5"
                        class="expandEditor ui-icon ui-icon-triangle-1-n">
                        <span></span>
                    </span>
                    <span>
                        <span data-id="5" class="itemTitle">d</span>
                        <span title="Click to delete item." data-id="5" class="deleteMenu ui-icon ui-icon-closethick">
                            <span></span>
                        </span>
                    </span>
                    <div id="menuEdit5" class="menuEdit hidden">
                        <p>
                            Content or form, or nothing here. Whatever you want.
                        </p>
                    </div>
                </div>
            </li>
        </ol>
        </li>

        <li style="display: list-item;" class="mjs-nestedSortable-leaf" id="menuItem_7">
            <div class="menuDiv">
                <span title="Click to show/hide children" class="disclose ui-icon ui-icon-minusthick">
                    <span></span>
                </span>
                <span title="Click to show/hide item editor" data-id="7"
                    class="expandEditor ui-icon ui-icon-triangle-1-n">
                    <span></span>
                </span>
                <span>
                    <span data-id="7" class="itemTitle">f</span>
                    <span title="Click to delete item." data-id="7" class="deleteMenu ui-icon ui-icon-closethick">
                        <span></span>
                    </span>
                </span>
                <div id="menuEdit7" class="menuEdit hidden">
                    <p>
                        Content or form, or nothing here. Whatever you want.
                    </p>
                </div>
            </div>
        </li>
        <li class="mjs-nestedSortable-leaf" id="menuItem_3">
            <div class="menuDiv">
                <span title="Click to show/hide children" class="disclose ui-icon ui-icon-minusthick">
                    <span></span>
                </span>
                <span title="Click to show/hide item editor" data-id="3"
                    class="expandEditor ui-icon ui-icon-triangle-1-n">
                    <span></span>
                </span>
                <span>
                    <span data-id="3" class="itemTitle">b</span>
                    <span title="Click to delete item." data-id="3" class="deleteMenu ui-icon ui-icon-closethick">
                        <span></span>
                    </span>
                </span>
                <div id="menuEdit3" class="menuEdit hidden">
                    <p>
                        Content or form, or nothing here. Whatever you want.
                    </p>

                </div>
            </div>
            <ol>
                <li class="mjs-nestedSortable-leaf" id="menuItem_3">
                    <div class="menuDiv">
                        <span title="Click to show/hide children" class="disclose ui-icon ui-icon-minusthick">
                            <span></span>
                        </span>
                        <span title="Click to show/hide item editor" data-id="3"
                            class="expandEditor ui-icon ui-icon-triangle-1-n">
                            <span></span>
                        </span>
                        <span>
                            <span data-id="3" class="itemTitle">b</span>
                            <span title="Click to delete item." data-id="3"
                                class="deleteMenu ui-icon ui-icon-closethick">
                                <span></span>
                            </span>
                        </span>
                        <div id="menuEdit3" class="menuEdit hidden">
                            <p>
                                Content or form, or nothing here. Whatever you want.
                            </p>

                        </div>
                    </div>

                </li>
            </ol>
        </li>
        </ol>
        <h3>Try the custom methods:</h3>

<p><br>
    <input id="serialize" name="serialize" type="submit" value="Serialize"></p>
<pre id="serializeOutput">
</pre>

<p><input id="toArray" name="toArray" type="submit" value="To array"></p>
<pre id="toArrayOutput">
</pre>

<p><input id="toHierarchy" name="toHierarchy" type="submit" value="To hierarchy"></p>
<pre id="toHierarchyOutput">
</pre>

<p><em>Note: This demo has the <code>maxLevels</code> option set to '4'.</em></p>
</section><!-- END #demo -->

<section id="license">
<h4>License</h4>

<p>This work is licensed under the MIT License.<br>
    Which means you can do pretty much whatever you want with it.</p>

<p>&copy; 2010&dash;2014 Manuele J Sarfatti</p>
</section>
    
</body>

</html>