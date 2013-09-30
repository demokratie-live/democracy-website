<h3>${entry}</h3>               
<table class="table table-hover table-condensed" style="overflow: auto;">
    <tr>${langhead}</tr>
    <tr>${content}</tr>
</table>
<br>
<input type="submit" class="btn localeMain" value="back">
<script>tinymce.init({  selector: "textarea",
                        force_p_newlines : false,
                        forced_root_block : false,    
                        theme_advanced_buttons2 : "cut,copy,paste,pastetext,pasteword,|,search,replace,|,bullist,numlist,|,outdent,indent,blockquote,|,undo,redo,|,link,unlink,anchor,image,cleanup,help,code,|,insertdate,inserttime,preview,|,forecolor,backcolor",
                        plugins: [
                            "advlist autolink lists link image charmap print preview anchor",
                            "searchreplace visualblocks code fullscreen",
                            "insertdatetime media table contextmenu paste moxiemanager",
                            "textcolor"
                        ],
                        toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image"
        });
</script>