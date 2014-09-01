(function($) {
    function modal(){
        return $('<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
            '<div class="modal-dialog">'+
                '<div class="modal-content">'+
                    '<div class="modal-header">'+
                        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'+
                        '<h4 class="modal-title">Newsletter</h4>'+
                    '</div>'+
                    '<div class="modal-body">'+
                        '<div id="rdForm"></div>'+
                    '</div>'+                     
                '</div>'+
            '</div>'+
        '</div>');
    }
    
    var el = {
        cForm: $("<form>", {
            class: "form-horizontal", 
            role: "form"
        }),
        cDiv: $("<div>", {
            class: "form-group"
        }),
        cLabel: $("<label>", {
            class: "control-label", 
            for: "inputID"
        }),
        cInput: $("<input>", {
            class: "form-control required", 
            id: "inputID", 
            type:"text"
        }),
        cSelect: $("<select>", {
            class: "form-control", 
            id: "inputID"
        }),
        cSubmit: $("<input>", {
            class: "btn btn-default btn-block", 
            disabled: "true", 
            type:"submit"})
    };

    var validate = ['name','email'];

    $.fn.formrd = function(code) {
        var valid = false;
        if(code.token !== undefined && code.secret !== undefined){
            formInput("name","Nome");
            formInput("email","Email");
            
            $.each(code.fields, function(key,val){
                if($.isArray(val)){
                    selectValue(key,val);
                }else{
                    formInput(key,val);
                }
            });

            formInput("token",code.token);
            formInput("secret",code.token);
            
            submitBtn(code.modal);
            
            if(code.modal == true){
                $('.container').append(modal());
                el.cForm.appendTo($('#rdForm'));
            }else{
                el.cForm.appendTo(this);
            }		
            
            formCheck(validate);
            
        }else{
            $('.container').append($('<div class="alert alert-danger">Undefined Token and/or Secret data</div>'));	
        }
        return this;
    };

    function formInput(id,val){    
        var div = el.cDiv.clone();
        var label = el.cLabel.clone();
        var input = el.cInput.clone();
        
        input.attr("id",id);
        
        if(id == "token" || id == "secret"){
            input.removeClass();
            input.attr("type","hidden");
            input.attr("name",id);
            input.val(val);
            input.appendTo(el.cForm);	
        }else{
            input.attr("name","lead["+id+"]");
            label.attr("for",id);
            if(val !== ''){
                label.html(val);
            }else{
                label.html(id);
            }	
            label.appendTo(div);
            input.appendTo(div);
            div.appendTo(el.cForm);
        }
        return input;
    }

    function selectValue(id,code){
        var div = el.cDiv.clone();
        var label = el.cLabel.clone();
        var select = el.cSelect.clone();

        select.attr("id",id);
        select.attr("name","lead["+id+"]");
        label.attr("for",id);
        label.html(id);
        
        $.each(code, function(y,x){
            var option = $(document.createElement("option"));
            option.val(x);
            option.html(x);
            option.appendTo(select);
        });
        
        label.appendTo(div);
        select.appendTo(div);
        div.appendTo(el.cForm);
        
        return select;
    }
    
    function formCheck(fields){
        $.each(fields, function(y,x){
            var field = $("#"+x);
            field.blur(function(){
                if(!field.val()){
                    field.parent().removeClass("has-success");
                    field.parent().addClass("has-error");
                }else{
                    field.parent().removeClass("has-error");
                    field.parent().addClass("has-success");
                }
                
                if(el.cForm.find(".has-error").length == 0){
                    el.cSubmit.removeAttr("disabled");
                }else{
                    el.cSubmit.attr("disabled", true);
                }
            });
        });

    }    

    function submitBtn(modal){  
        var msg = "";
        var type = "info";
        var div = el.cDiv.clone();
        var append = '.container';
        
        if(modal == true) append = '.modal-content';
        
        el.cSubmit.appendTo(div);
        div.appendTo(el.cForm);
        
        el.cForm.submit(function(event) {
            $.ajax({
                url: "insert_url_path",
                type: "POST",
                data: $(this).serializeArray(),
                dataType: "json",
                success: function(data, textStatus, jqXHR){
                    if(data == 200){
                        type = "success";
                        msg = "Success";
                    }else{
                        type = "danger";
                        msg = "Failed to write data";
                    }
                },
                error: function(data, textStatus, jqXHR){
                    type = "warning";
                    msg = "Request error, try again";
                },
                complete: function(){
                    if(msg !== ""){
                        $(append).append($('<div class="alert alert-'+type+'">'+msg+'</div>'));
                        $('input, select').attr('disabled','disabled');
                    }
                }
            });	  
            event.preventDefault();
        });
    }
}(jQuery));