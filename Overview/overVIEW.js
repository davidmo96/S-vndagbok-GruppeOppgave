
overViewUpdate();
//addOverViewTable();
function overViewUpdate(){
 if(model.app.currentPage !== "overviewpage"){

    
    app.innerHTML = `
    test
    `
    }

}


/*function addOverViewTable(){

const tableFill = document.getElementsByClassName("table")[0]
 let i = 0;
 let html = `           <tr class="table">
                            <th>Dato</th>
                            <th>Lagt Seg</th>
                            <th>Stått Opp</th>
                            <th>Timer Søvn</th>
                            <th>Humør</th>
                            <th>Søvnkvalitet</th>
                            <th>Kommentar</th>

                        </tr>`

/*model.days.forEach( noe =>{

    html += `<td>${noe.at(i)}</td>`
    tableFill.innerHTML = html;
    i += 1;
    console.log(noe)

 /* const tableData = document.createElement("td");
    tableData.innerHTML = noe.at(i);
    tableFill.appendChild(tableData);
    console.log(noe)
    */


/*})



}
