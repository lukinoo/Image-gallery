// global variable
const images = $('.image');
// each images loop
images.each((index,image) => {
    $(image).click(function() {
        const imageData = $(this).attr('data-full');
        const imageTitle = $(this).attr('alt');
        fullImage(imageData,imageTitle)
    })
})
// function for full images
const fullImage = (imagedata, imagetitle) => {
    // full image container added class open for dark bg
    $('.full-image-container').addClass('open');
    // full image src is function fullimage's first parameter
    $('.full-image-container .full-image').attr(`src`,imagedata);
    // full iamge text content is secont parameter 
    $('.full-image-container .image-title').html(imagetitle);
    // event for remove full image container
    $('.full-image-container').click(function() {
        $(this).removeClass('open');
    })
}