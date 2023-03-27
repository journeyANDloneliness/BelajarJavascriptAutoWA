
async function loadSheet(){
    let doc = new GoogleSpreadsheet("")
    await doc.loadInfo() 
    
}