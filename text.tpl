
<{extends 'layout/layout.tpl'}>

<{block name="template-name"}>
    /text.tpl
<{/block}>

<{block name=title}>
    <{$module.name|htmlspecialchars}>
<{/block}>

<{block name="module"}>

<div class="article_details text">
    <div class="out-ext-info">
        <{$module.text}>
    </div>
</div>
<{/block}>
