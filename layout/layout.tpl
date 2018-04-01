
<{extends 'layout/html.tpl'}>

<{block name=title}>

<{/block}>

<{block name=favicon}>
    <link rel="shortcut icon" href="<{file 'assets/favicon.ico'}>" />
<{/block}>

<{block name="head"}>
    <{custom_code "head_open"}>

    <{strip}>
        <script type="text/javascript">
            var t = {
                _codes: <{t cat="js" json}>,
                _get_suffix: function (count) {
                    if (count == 1) {
                        return "-1";
                    } else if (count % 10 == 1 && count > 20 && count % 100 != 11) {
                        return "-mod1n11";
                    } else if (count % 10 > 1 && count % 10 < 5 && count % 100 > 20 || count % 100 < 5 && count % 100 > 1) {
                        return "-mod234n1x";
                    } else {
                        return "-many";
                    }
                },
                text: function (key, count) {
                    var suffix = typeof count === "undefined" ? "" : this._get_suffix(count);
                    var t = "";

                    if (suffix === "" || typeof (t = this._codes[key + suffix]) === "undefined") {
                        if (typeof (t = this._codes[key]) === "undefined") {
                            t = "[js_text." + key + suffix + "]";
                        }
                    }

                    return t;
                }
            };

            var URL = "<{$site.url_part|escape}>";
        </script>
    <{/strip}>

    <link href="<{file 'assets/plugins/bootstrap4/css/bootstrap.min.css'}>" rel="stylesheet" type="text/css" />
    <link href="<{file 'assets/css/style.css'}>" rel="stylesheet" type="text/css" />

    <script type="text/javascript" src="<{file 'assets/plugins/jquery-3.2.1.min.js'}>"></script>
     <script type="text/javascript" src="/design_company/js/jquery.mousewheel.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script type="text/javascript" src="<{file 'assets/plugins/bootstrap4/js/bootstrap.min.js'}>"></script>
    <link href="/design/js/admin/Article2/css/bootstrap.grid.css" rel="stylesheet" />
     <link href="/design/js/admin/Article2/css/custom-article.css" rel="stylesheet" />
     <script type="text/javascript" src="/design/js/admin/Article2/js/custom-article.js"></script>  
     <link href="/design_company/js/photoswipe/css/photoswipe.css" rel="stylesheet">
     <link href="/design_company/js/photoswipe/css/photoswipe-default-skin.css" rel="stylesheet">
     <link href="/design_company/js/photoswipe/css/photoswipe-style.css" rel="stylesheet">
     <script src="/design_company/js/photoswipe/js/photoswipe.min.js"></script>
     <script src="/design_company/js/photoswipe/js/photoswipe-ui-default.min.js"></script>
     <script src="/design_company/js/photoswipe/js/photoswipe-index.js"></script>
    <script type="text/javascript" src="<{file 'assets/js/script.js'}>"></script>
    <script type="text/javascript" src="<{file 'assets/plugins/jquery.link-submit.js'}>"></script>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.0/js/swiper.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.0/css/swiper.min.css">

    <{if $is_web_admin}>
        <script type="text/javascript" src="<{file 'assets/js/web-admin.js'}>"></script>
    <{/if}>

    <{custom_code "head_close"}>
<{/block}>

<{block name="body"}>
    <{custom_code "body_open"}>

    <{get_contacts "layout_contacts"}>
    
    <nav id="mob_nav" class="layout_vert layout_desk_horiz">
        <div class="mob_nav_content">
                            
        </div>           
    </nav> 
    
    <div id="container">
        <div class="alert alert-dark" role="alert" style="position:fixed; top:0; left:0">
            <{t "Template:" escape}>
            <strong>
                <{block name="template-name"}>
                    /layout.tpl
                <{/block}>

                <{if $__tf}>
                    <a href="?__tf=">
                        <b><{$__tf}></b>
                        - Вернуться к стандартному шаблону
                    </a>
                <{/if}>
            </strong>

            <{if $smarty.get.template_debug === '1'}>
                <a href="?" class="btn btn-sm btn-info float-right">
                    <{t "close_debug" escape}>
                </a>

                <{debug}>
            <{else}>
                <a href="?template_debug=1" class="btn btn-sm btn-info float-right">
                    <{t "open_debug" escape}>
                </a>
            <{/if}>
        </div>
        
        <header class="top">
            <div class="site_title_block">
                <a class="logo" href="<{$site.home_url}>">
                    <{if $site.logo.type === 'image'}>
                        <img src="<{$site.logo.image}>" />
                    <{else}>
                    <span class="text-logo">
                            <{$site.logo.text|htmlspecialchars}>
                        </span>
                        <style>
                            .text-logo{
                                <{if $site.logo.text_color}>color:<{$site.logo.text_color}>;<{/if}>
                                <{if $site.logo.text_size}>font-size:<{$site.logo.text_size}>pt;<{/if}>
                                <{if $site.logo.text_font}>font-family:'<{$site.logo.text_font|escape}>';<{/if}>  
                            }               
                        </style>
                    <{/if}>
                </a>
            </div>
            <nav id="main">
                <{get_menu "top" "top_menu"}>
                <{if $top_menu.0|count}>
                    <ul class="header_menu_top">
                        <{foreach $top_menu.0 as $page}>
                            <li class="<{if '0'}>active<{/if}>">
                                <a href="<{$page.href}>">
                                    <{$page.page_name|htmlspecialchars}>
                                </a>
                            </li>
                        <{/foreach}>
                    </ul>
                <{/if}>
            </nav>
        <{custom_code "site_header"}>    
        </header>
   
        <{block name="module"}>
        <{/block}>
    </div>
    
        <div class="custom-footer">
            <{custom_code "footer"}>
        </div>

        <div class="footer">
            <div class="footer_container">
                <div class="copyright">
                    <p class="copyright_link">
                        <{$site.name|htmlspecialchars}>                   
                    </p>   
                    <p class="copyright_year">
                        © 
                        <span class="year">
                             <{$site.date_founded}> - <{0|as_date:"Y"}>
                        </span>
                    </p>
                </div>
                <div class="who_make">
                    <a class="artweb" href="http://artweb.red/" title="создание сайтов портфолио для фотографов, художников, моделей, дизайнеров и всех творческих людей">
                         Создано на платформе
                     </a>             
                </div>
            </div>
    </div>

    <{custom_code "body_close"}>
<{/block}>
