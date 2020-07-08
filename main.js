/*****************************************************************************************
* Part 2
****************************************************************************************/
var employees = [
        {first: "Amanda", last: "Byron", group: "Sales"},
        {first: "Ye", last: "Xia", group: "Receiving", nameOrder: "reverse"},
        {first: "Miltiades", last: "Crescens", group: "Sales"},
        /*...don't foget to account for other entries of the same form, but with different group names.....*/
    ];

// Part 2 Answer Here
function sortEmployees(employees){
    var mapped = employees.map(myMap);
    var grouped = _.groupBy(mapped,"group");
    return grouped;
}

function myMap(entry){
    let name = entry.nameOrder !== undefined && entry.nameOrder.toLowerCase() === "reverse" ?
                name = entry.last + " " + entry.first:
                name = entry.first + " " + entry.last;
    
    let newEntry = {
      name: name,
      group: entry.group.toLowerCase() 
    };

    return newEntry;
}

/*****************************************************************************************
* Bonus
****************************************************************************************/

// Bonus Anwser Here
