conf = sharedConfig

// console.log(filter_history)

function split_IDs(str) {

    arr = []

    if (str != "")
        arr = str.split(",")
    
    for (idx in arr)
        arr[idx] = arr[idx].replace(/\s+/g, '') 

    return arr
}

function all_IDs(str){
    let ids = []

    for (ele of admin_history) {
        id = ele[str]
        if (ids.includes(id) == false)
            ids.push(id)
    }

    return ids
}



function filter() {
    const filter = document.getElementById("filter-button");
    const stuStr = document.getElementById("student-filter");
    const printStr = document.getElementById("printer-filter");

    filter_history = []
    
    let students = split_IDs(stuStr.value)
    if (students.length == 0)
        students = all_IDs("studentID")
    let printers = split_IDs(printStr.value)
    if (printers.length == 0)
        printers = all_IDs("printer_num")

    // console.log(students)
    // console.log(printers)

    for (ele of admin_history) {
        if (students.includes(ele.studentID) && printers.includes(ele.printer_num))
            filter_history.push(ele)
    }

    // console.log(filter_history)

    table = document.getElementById('admin_history_table') ? document.getElementById('admin_history_table') : null;
    if (!table) return;

    var addEle = '';
    filter_history.map((item) => {
        addEle += '<div class="orders-status-table-row">'
        addEle += '<div id="w-node-ffe664cd-effd-fb9f-b3b2-a26245283433-4528342e" class="flex align-center"><div class="paragraph-small color-neutral-100">' +
                    + item.pid
                    + '</div> </div>'
        addEle += '<div id="w-node-ffe664cd-effd-fb9f-b3b2-a26245283446-4528342e"> <div id="w-node-ffe664cd-effd-fb9f-b3b2-a26245283447-4528342e" class="paragraph-small color-neutral-100 mg-bottom-2px">'
                    + item.printer_num
                    + '</div>'
                    + '<div class="paragraph-small">' + item.venue + '</div>'
                    + '</div>'
        addEle += '<div class="paragraph-small color-neutral-100">' + item.studentID + '</div>'
        addEle += '<div class="paragraph-small color-neutral-100">' + item.time + '</div>'
        addEle += '<div class="paragraph-small color-neutral-100">' + item.date + '</div>'
        addEle += '<div id="w-node-ffe664cd-effd-fb9f-b3b2-a26245283455-4528342e">'
                    + '<div><div class="status-badge '+ (item.status == 'Completed'? 'green':'red') + '"><div class="flex align-center gap-column-4px"><div class="small-dot _4px bg-'+ (item.status == 'Completed'? 'green':'red') + '-300"></div>'
                    + '<div class="paragraph-small">' + item.status + '</div>'
                    + '</div></div></div></div>'
        
        addEle += '<div id="w-node-ffe664cd-effd-fb9f-b3b2-a26245283466-4528342e"  class="paragraph-small color-neutral-100">' + item.printed + '</div>'
        addEle += '<div id="w-node-ffe664cd-effd-fb9f-b3b2-a2624528346c-4528342e" class="flex align-center gap-column-6px"> </div>'
        addEle += '</div>'
    })

    table.innerHTML = addEle;
}