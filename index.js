var params = (new URL(document.location)).searchParams;
var key = params.get('key');

$(function () {
    // 騾∽ｿ｡
    $('form').submit(function () {

        sendText(`情報登録ありがとうございました`);
        
        var name = $('textarea[name="name"]').val();
        var adress = $('textarea[name="adress"]').val();
        var tel = $('textarea[name="tel"]').val();
        var age = $('textarea[name="age"]').val();
        var shikaku = $('input[name="shikaku"]').val();
        var method = $('input[name="method"]').val();
        
        var date = $('input[name="date"]').val();
       
        var msg = `◆回答ありがとうございます\n職種:${key}\n名前：${name}\n郵便番号：${adress}\n電話番号：${tel}\n年代：${age}\n資格：${shikaku}\n面談希望：${date}\n連絡方法：${method}`;
        sendText(msg);

        return false;
    });
});

