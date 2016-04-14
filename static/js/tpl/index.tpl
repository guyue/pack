<div class="header-nav">
    <h1>待产包</h1>
    <ul class="nav">
        {{#nav}}
            {{#isCurrent}}
                <li><h2>{{title}}</h2></li>
            {{/isCurrent}}
            {{^isCurrent}}
                <li><a href="#/index/{{category}}"><h2>{{title}}</h2></a></li>
            {{/isCurrent}}
        {{/nav}}
    </ul>
</div>

<div class="container">
    <div class="container-shop">
        <div class="progress">
            <div class="progress-container">
            </div>
        </div>
        <a class="btn-edit" href="#/define/{{category}}">添加</a>
    </div>
</div>
