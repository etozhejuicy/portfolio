window.addEventListener('DOMContentLoaded', () => {

    $('a').on('click', function (event) {
        event.preventDefault();
        const url = $(this).attr('href');
        loadPage(url);
    });

    function loadPage(url) {
        $('body').fadeOut(500, function () {
            $.ajax({
                url: url,
                method: 'GET',
                success: function (html) {
                    console.log(html);
                    $('body').html(html).fadeIn(500);
                },
                error: function (xhr, status, error) {
                    console.error(error);
                }
            });
        });
    }

    function loadPage(url) {
        $('main').fadeOut(500, function () {
            $.ajax({
                url: url,
                method: 'GET',
                success: function (html) {
                    console.log(html);
                    $('main').html(html).fadeIn(500);
                },
                error: function (xhr, status, error) {
                    console.error(error);
                }
            });
        });
    }
});