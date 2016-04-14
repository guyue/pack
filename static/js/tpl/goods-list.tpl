{{#getTitle}}
<h3>{{title}}</h3>
{{/getTitle}}
<ul>
    {{#data}}
    <li>
        <div class="title">
            <label {{#isDefault}}class="necessary"{{/isDefault}}>{{name}}</label>
            <span>{{count}}</span>
            <input type="checkbox" data-id="{{id}}" {{#isChecked}}checked{{/isChecked}} {{#isDefine}}class="defined"{{/isDefine}} value="" />
        </div>
        {{#description}}
        <div class="description">
            <p>{{description}}</p>
           <!-- <a href="">选购</a>-->
        </div>
        {{/description}}
    </li>
    {{/data}}
</ul>
