<form >
    <div class="form-group">
        <label for="exampleInputEmail1">Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter Title">
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Desciptor</label>
        <textarea class="form-control" id="descriptor" rows="3"></textarea>
    </div>
    <div class="form-group">
        <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Preference</label>
        <select class="custom-select my-1 mr-sm-2" id="select-type">
            <option selected>Choose type</option>
            <option value="1">group</option>
            <option value="2">label</option>
            <option value="3">number</option>
            <option value="4">multinumber</option>
            <option value="5">image</option>
            <option value="6">none</option>
        </select>
    </div>
    <fieldset id="checkArray">

    </fieldset><br>
    <div class="create-input">
        <!-- <div class="form-group">
                    <label for="exampleInputPassword1">Desciptor</label>
                    <textarea class="form-control" id="descriptor" rows="3"></textarea>
                </div> -->
    </div>

    <!-- <div class="form-group">
                    <input type="text" class="color-input form-control" id="input-color"
                        data-huebee='{ "notation": "hex", "saturations": 2 }'>
                </div>  -->

    <button type="submit" class="btn btn-primary" style="float: right;">Submit</button>
</form>