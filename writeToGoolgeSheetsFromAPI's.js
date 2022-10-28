function onOpen() {

  
  var ui=SpreadsheetApp.getUi();
  ui.createMenu("StarWars") .addItem('StarWars', 'starWars').addToUi();
   

 }

function loadBookList(){
       var currSheet=SpreadsheetApp.getActiveSheet();
  
  // ui.alert(currSheet.getDataRange());
  // ui.alert(currSheet.getDataRange().getValues());
  // ui.alert(currSheet.getDataRange().getHeight());
  // ui.alert(currSheet.getDataRange().getWidth());

  // currSheet.appendRow([4,'shashi','shashi','kanth']);
  // currSheet.appendRow([5]);

  var url='http://numbersapi.com/random/math';
  var data= UrlFetchApp.fetch(url);
  Logger.log(data.getContentText());
  // // currSheet.appendRow([5]);
   var fdata=data.getContentText();
  // SpreadsheetApp.getActiveSheet().clear();
  var next=currSheet.getDataRange().getHeight()+1
  SpreadsheetApp.getActiveSheet()
  .getRange(next,1)
  .setValue([fdata]);


}

function starWars(){
        
        SpreadsheetApp.getActiveSheet().clear();
        var url='http://swapi.dev/api/planets';
        var fdata=UrlFetchApp.fetch(url);
        var res=JSON.parse(fdata);
       
       
       
        var Data= res["results"];


        SpreadsheetApp.getActiveSheet().
        appendRow(Object.keys(res["results"]));

        SpreadsheetApp.getActiveSheet().
        appendRow(Object.keys(res["results"][0]));

        Logger.log(res["results"][0]);
       
        Data.forEach(function(data,i){
          var values=Object.values(data);
        
          SpreadsheetApp.getActiveSheet().
          appendRow(values);
        
          })
        const conn= Jdbc.getCloudSqlConnection("jdbc:gcp:postgresql://34.93.48.244:5432/oms2","postgres","jswomsdev@1234");
        var st=conn.createStatement();
        Logger.log(st.execute("select * from customer_info_rtab where id=20"));
        conn.close();
    
     
}


