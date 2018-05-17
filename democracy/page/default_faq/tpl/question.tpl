<div class="panel-faq ${category}">
    <div class="panel-heading">
        <h5 class="panel-title">
            <a data-toggle="collapse" data-parent="#accordion" href="#collapse${n}" class="faq_header">${question}</a>
            <a data-toggle="collapse" data-parent="#accordion" href="#collapse${n}" class="faq_header2"><i class="openarrow fa fa-angle-down" aria-hidden="true" style="${in_css} margin-right: 15px; float: right; color: rgb(199,199,204); font-size: 40px;"></i></a>
        </h5>
    </div>
    <div id="collapse${n}" class="panel-collapse collapse ${in}">
        <div class="panel-body" style="padding: 15px;">${answer}</div>
    </div>
</div>