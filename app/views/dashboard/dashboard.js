/*
 * Dashboard Push Messages
 */

const $send_form_btn = $('.js-ajax-form');

//This will be an AJAX call:
$send_form_btn.on('submit', function (event) {

    event.preventDefault();

    // const url     = $(event.relatedTarget).data('href'); //AJAX URL
    const data    = $(this).serialize();
    const isEmpty = data === "message=";

    const response = {
      type: isEmpty ? "error" : "success",
      msg:  isEmpty ? "Error al enviar el formulario" : "Mensaje enviado con éxito!!",
    };

    $('#modal-push').modal('hide');

    setTimeout(function(){
        flashMessage.init(response.type, response.msg);
    }, 1000);

});

/*
 * Dashboard Block User
 */

const $block_user = $('.js-block-user');
let $user_to_block;

$('#modal-block').on('show.bs.modal', function (e) {
  $user_to_block = $(event.target).closest('.js-item-to-delete');
});

//This will be an AJAX call:
$block_user.on('click', function (event) {

    $('#modal-block').modal('hide');

    $user_to_block.remove();

    setTimeout(function(){
        flashMessage.init('success', 'Usuario bloqueado con éxito');
    }, 1000);

});
