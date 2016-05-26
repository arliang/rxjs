(function(){
  var matched = location.pathname.match(/([^/]*)\.html$/);
  if (!matched) return;

  var currentName = matched[1];
  var cssClass = '.navigation [data-toc-name="' + currentName + '"]';
  var styleText = cssClass + ' .manual-toc { display: block; }\n';
  styleText += cssClass + ' .manual-toc-title { background-color: #039BE5; }\n';
  styleText += cssClass + ' .manual-toc-title a { color: white; }\n';
  var style = document.createElement('style');
  style.textContent = styleText;
  document.querySelector('head').appendChild(style);
})();

(function(){
  // improve the experience under the width of 750px

  var header, nav, searchBox, input, result;

  var meta = document.createElement('meta');
  var style = document.createElement('style');
  var logo = document.createElement('span');

  meta.name = 'viewport';
  meta.content = 'width=device-width';
  style.innerHTML = [
    '.search-input,',
    '.logo,',
    '.navigation,',
    '.content,',
    '.search-box{',
    '   -webkit-transition:all 0.3s linear;',
    '      -moz-transition:all 0.3s linear;',
    '       -ms-transition:all 0.3s linear;',
    '        -o-transition:all 0.3s linear;',
    '           transition:all 0.3s linear;',
    ' }',
    '.search-input{background: #333;}',
    '.logo {',
    '    width: 150px;',
    '    height: 40px;',
    '    color: #EC0C8E;',
    '    font-size: 20px;',
    '    background-size: auto 25px;',
    '    background-repeat: no-repeat;',
    '    padding-left: 30px;',
    '    padding-right: 5px;',
    '    cursor: pointer;',
    '}',
	'.github-markdown h3 { z-index: -1; }',
    '.layout-container > header:before {',
    '  display:none;',
    '}',
    '',
    '@media (max-width: 750px) {',
    '  .navigation{width:0}',
    '  .navigation.active{width:250px;}',
    '  .content{margin-left:0;padding:10px}',
    '  .search-box{top: 50px;right:10px}',
    '}'].join('\n');

  logo.className = 'logo';
  logo.innerHTML = 'RxJS';

  document.addEventListener('DOMContentLoaded', function(){
    header = document.querySelector('header');
    nav = document.querySelector('.navigation');
    searchBox = document.querySelector('.search-box');
    input = document.querySelector('.search-input');
    result = document.querySelector('.search-result');

    document.head.appendChild(meta);
    document.head.appendChild(style);

    header.insertBefore(logo, header.firstElementChild);
    logo.addEventListener('click', toggleNavigation);
    searchBox.querySelector('img').addEventListener('click', toggleSearchBox);
  });


  function toggleNavigation(){
    if(nav.classList.contains('active')){
      nav.classList.remove('active');
    } else {
      nav.classList.add('active');
    }
  }

  function toggleSearchBox(){
    // TODO: avoid first click issue
    if(toggleSearchBox.firstClick == undefined){
      toggleSearchBox.firstClick = false;
      return false;
    }
    if(searchBox.classList.contains('active')){
      searchBox.classList.remove('active');
      result.style.display = 'none';
    } else {
      searchBox.classList.add('active');
      result.style.display = 'block';
      input.focus()
    }
    return false;
  }

})();
