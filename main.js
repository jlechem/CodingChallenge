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
    var name = entry.nameOrder !== undefined && entry.nameOrder.toUpperCase() === "REVERSE" ?
                name = entry.last + " " + entry.first:
                name = entry.first + " " + entry.last;
    
    var newEntry = {
      name: name,
      group: entry.group  
    };

    return newEntry;
}

/*****************************************************************************************
* Bonus
****************************************************************************************/

// Bonus Anwser Here
