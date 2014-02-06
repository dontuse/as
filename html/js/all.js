var glb = {};





$(function () {
    var $files = $('.js-file');

    if ($files.length === 0) {
        return;
    }

    $files.find('input[type="file"]').on('change', function (e) {
        var val = $(this).val();
        //  console.log('val',$(this).val());
        $('.b-input__f-text').text(val);
    });

    $files.find('input[type="file"]').click(function (e) {
        e.stopPropagation();
    });
    $files.click(function (e) {
        console.log(e);
        e.preventDefault();
        $(this).find("input[type=\"file\"]").click();
    });

});