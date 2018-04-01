
<{extends 'layout/layout.tpl'}>

<{block name="template-name"}>
    /photo_album.tpl
<{/block}>

<{block name=title}>
    <{$photo_album.title|htmlspecialchars}>
<{/block}>



<{block name="module"}>
   
<div class="product_details">
    <div class="album-description out-ext-info">
        <{$photo_album.text}>
    </div>
    <{if false}>
        <div class="product_details_photo" id="gallery">
            <div class="slide-container">
                <{foreach $photo_album.photos as $photo}>
                    <div class="slide-item">
                        <div class="slide-img">
                            <img src="<{$photo.photo_file}>" />
                        </div>
                    </div>
                <{/foreach}>      
            </div>
        </div>
    <{else}>
        <div class="product_details_photo photo-list" id="gallery">
            <{foreach $photo_album.photos as $photo}>
                <div class="block_conteiner">
                    <div class="products_blocks">
                        <a href="<{$photo.photo_file}>" img-width="<{$photo.photo_width}>" img-height="<{$photo.photo_height}>" title="<{$photo.photo_title}>" style="background-image: url('<{$photo.photo_file}>')">
                            <img src="<{$photo.photo_file_small}>" img-width="<{$photo.photo_small_width}>" img-height="<{$photo.photo_small_height}>"/>
                        </a>
                    </div>
                </div>
            <{/foreach}>      
        </div> 
    <{/if}>
    <div class="album_description_additional out-ext-info">
         <{$photo_album.extra}>
              
    </div>
</div>
   

<{/block}>
