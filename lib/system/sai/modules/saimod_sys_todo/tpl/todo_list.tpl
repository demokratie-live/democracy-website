<div id="table-wrapper">
    <ul class="nav nav-pills" id="error_filter">    
        <li class="${filter_all}"><a href="#!${state};filter.all;search.${search}">${basic_all}</a></li>
        <li class="${filter_mine}"><a href="#!${state};filter.mine;search.${search}">${basic_mine}</a></li>
        <li class="${filter_free}"><a href="#!${state};filter.free;search.${search}">${basic_free}</a></li>
        <li class="${filter_others}"><a href="#!${state};filter.others;search.${search}">${basic_others}</a></li>
        <li class="${filter_gen}"><a href="#!${state};filter.gen;search.${search}">${basic_generated}</a></li>
        <li class="${filter_user}"><a href="#!${state};filter.user;search.${search}">${basic_user}</a></li>
        <li class="${filter_report}"><a href="#!${state};filter.report;search.${search}">${basic_report}</a></li>
        <button class="btn-sm btn btn-success" state="${state};filter.${filter};search." id="btn_search" type="submit" style="float: right; margin-left: 10px;"><span class="glyphicon glyphicon-search" aria-hidden="true"></span> ${basic_search}</button>
        <input class="input-medium search-query action-control" id="input_search" type="text" placeholder="${basic_placeholder_search}" size="20" style="float: right;" value="${search}"/>
    </ul>
    <h6>${basic_rows}: ${count} ${basic_page}: ${page}</h6>
    <table class="table table-hover table-condensed">
        <tr>
            <th>${time_ago}</th>
            <th>${table_message}</th>
            <th>${table_author}</th>
            <th>${table_assignee}</th>
        </tr>
        ${todo_list_elements}
    </table>
    <ul class="pagination">
        <li><a href="#!${state};filter.${filter};search.${search};page.0">&laquo;</a></li>
        ${pagination}
        <li><a href="#!${state};filter.${filter};search.${search};page.${page_last}">&raquo;</a></li>
    </ul>
</div>