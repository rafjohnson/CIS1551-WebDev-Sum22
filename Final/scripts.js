function loadGitHubTable()
{
    const xhttp = new XMLHttpRequest();

    xhttp.onload=function(){
        var response = this.responseText;
        //parse json
        var JObj = JSON.parse(response);
        

        //build table. 
        
        //create table open tag
        var htmlTable = "";
        htmlTable += "<table>";
        //add table headers
        htmlTable += "<tr><th>Project Name</th><th>Language</th><th>Created</th><th>Last Updated</th><th>Availability</th></tr>";
        
        //loop arournd the Jobj, adding rows.

        
        for(let i=0;i<JObj.length;i++)
        {
             //add tr tag
            htmlTable +="<tr>";

            //name - is also a link
            htmlTable+="<td>";
            var link = "<a target=\"blank\" href=\""+JObj[i]["html_url"]+"\"a>"+JObj[i]["name"]+"</a>";
            htmlTable +=link;
            htmlTable+="</td>";

            //language
            htmlTable+="<td>";
            htmlTable+=JObj[i]["language"];
            htmlTable+="</td>";

            //created
            htmlTable+="<td>";
            var createdDTStr = JObj[i]["created_at"];
            var createdDate = new Date(createdDTStr);
            htmlTable+=createdDate.toLocaleDateString("en-US");
            htmlTable+="</td>";

            //last updated
            htmlTable+="<td>";
            var updatedDTStr = JObj[i]["updated_at"];
            var updatedDate = new Date(updatedDTStr);
            htmlTable+=updatedDate.toLocaleDateString("en-US");
            htmlTable+="</td>";

            //availability
            htmlTable+="<td>";
            htmlTable+=JObj[i]["visibility"];
            htmlTable+="</td>";

            //close tr
            htmlTable +="</tr>";
        }

        //close tag
        htmlTable += "</table>"

        document.getElementById("githubTable").innerHTML=htmlTable;
    }
    xhttp.open("GET","https://api.github.com/users/rafjohnson/repos",true)
    xhttp.setRequestHeader("accept","application/vnd.github+json");
    xhttp.send();
}

function getLastModified()
{
    var lastModified = Date(document.lastModified);
    document.getElementById("lastModified").innerText=lastModified.toLocaleString();

}