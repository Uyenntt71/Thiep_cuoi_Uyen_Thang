function doGet(e) {
    var sheet = SpreadsheetApp.openById('1CKKOxkXpyGXcYFP--ZiHsGGyRfdrlieb2pctMLgKo2Q').getSheetByName('Data');
    var data = sheet.getDataRange().getValues();
    var blessings = [];
  
    for (var i = 1; i < data.length; i++) {
      blessings.push({
        timestamp: data[i][0],
        name: data[i][1],
        congratulations: data[i][2]
      });
    }
  
    return ContentService.createTextOutput(JSON.stringify({data: blessings}))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader("Access-Control-Allow-Origin", "*");
  }
  
  function doPost(e) {
    var params = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.openById('1CKKOxkXpyGXcYFP--ZiHsGGyRfdrlieb2pctMLgKo2Q').getSheetByName('Data');
  
    sheet.appendRow([new Date(), params.name, params.congratulations]);
  
    return ContentService.createTextOutput(JSON.stringify({message: 'Thêm thành công!'}))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader("Access-Control-Allow-Origin", "*");
  }
  