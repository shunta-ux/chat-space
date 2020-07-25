$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="message_box">
          <div class="message_info">
            <div class="message_username">
              ${message.user_name}
            </div>
            <div class="message_date">
              ${message.created_at}
            </div>
          </div>
          <div class="message">
            <p class="message_content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="message_box">
        <div class="message_info">
          <div class="message_username">
            ${message.user_name}
          </div>
          <div class="message_date">
            ${message.created_at}
          </div>
        </div>
        <div class="message">
          <p class="message_content">
            ${message.content}
          </p>
        </div>
      </div>`

      return html;
    };
  }

  $('.form_box').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })

    .done(function(data) {
      let html = buildHTML(data);
      $('.main_chat__message_list').append(html);      
      $('form')[0].reset();
      $('.main_chat__message_list').animate({ scrollTop: $('.main_chat__message_list')[0].scrollHeight});
      $('input').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました!!!");
      $('input').prop('disabled', false);
  });
  });
});