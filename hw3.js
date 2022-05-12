//part1
const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

const tbody = document.querySelector("#table");

function createtype(TextContent, type) {
  TextContent.map((elem) => {
    let tr = document.createElement("tr");
    let elem = document.createElement(type);
    elem.textContent = TextContent;
    tr.append(elem);
    tbody.append(tr);
    return elem;
  });
}

createtype(tableInfo.tableHeader, "th");

// function createth(ele) {
//   let th = document.createElement(`th`);
//   th.textContent = ele;
//   return th;
// }

// function createtd(ele) {
//   let td = document.createElement(`td`);
//   td.textContent = ele;
//   return td;
// }

// const Num1 = document.querySelector(`#Num1`);
// const Num2 = document.querySelector(`#Num2`);
// const Num3 = document.querySelector(`#Num3`);
// const Num4 = document.querySelector(`#Num4`);
// const Num5 = document.querySelector(`#Num5`);

// const Num21 = Object.values(tableInfo.tableContent[0]);
// const Num22 = Object.values(tableInfo.tableContent[1]);
// const Num23 = Object.values(tableInfo.tableContent[2]);
// const Num24 = Object.values(tableInfo.tableContent[3]);

// tableInfo.tableHeader.forEach((ele) => {
//   Num1.append(createth(ele));
// });

// Num21.forEach((ele) => {
//   Num2.append(createtd(ele));
// });

// Num22.forEach((ele) => {
//   Num3.append(createtd(ele));
// });
// Num23.forEach((ele) => {
//   Num4.append(createtd(ele));
// });
// Num24.forEach((ele) => {
//   Num5.append(createtd(ele));
// });

//part2 order & unorderlist
// const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

// function listtp(tp) {
//   list.map((ele) => {
//     let li = document.createElement("li");
//     li.textContent = ele;
//     tp.append(li);
//   });
// }

// // function createli(ele) {
// //   let li = document.createElement(`li`);
// //   li.textContent = ele;
// //   return li;
// // }

// const orderlist = document.querySelector(`#orderlist`);
// const unorderlist = document.querySelector(`#unorderlist`);

// listtp(orderlist);
// // list.forEach((ele) => {
// //   orderlist.append(createli(ele));
// // });

// // list.forEach((ele) => {
// //   unorderlist.append(createli(ele));
// // });

// //part3
// const dropDownList = [
//   { value: "newark", content: "Newark" },
//   { value: "santaClara", content: "Santa Clara" },
//   { value: "unionCity", content: "Union City" },
//   { value: "albany", content: "Albany" },
//   { value: "dalyCity", content: "Daly City" },
//   { value: "sanJose", content: "San Jose" },
// ];

// const select = document.querySelector(`#select`);

// function createoption(place) {
//   dropDownList.map((ele) => {
//     let option = document.createElement(`option`);
//     option.textContent = ele.value;
//     place.append(option);
//   });
// }

// createoption(select)
