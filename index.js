var params = (new URL(document.location)).searchParams;
var key = params.get('key');

$(function () {
    // 騾∽ｿ｡
    $('form').submit(function () {

        sendText(`情報登録ありがとうございました`);
        
        var name = $('textarea[name="name"]').val();
        var adress = $('textarea[name="adress"]').val();
        var tel = $('textarea[name="tel"]').val();
        var age = $('select[name="age"]').val();
        var kanshin = $('input[name="kanshin"]').val();
        var how = $('input[name="how"]').val();
        var where = $('input[name="where"]').val();
        var date = $('input[name="date"]').val();
       
        var msg = `◆回答ありがとうございます\n職種:${key}\n名前：${name}\n郵便番号：${adress}\n電話番号：${tel}\n年代：${age}\n関心：${kanshin}\n連絡方法：${how}\n面談場所：${where}\n面談希望日：${date}`;
        sendText(msg);

        return false;
    });
});

