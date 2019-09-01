const url = "https://jsonplaceholder.typicode.com/users";
fetch(url)
.then(rep => rep.json())
.then(data =>{
    const table = document.querySelector('table');
    data.forEach(element => {
        table.innerHTML +=
        `
            <tr>
               <td>${element.id}</td>
               <td>${element.name}</td>
               <td>${element.username}</td>
               <td>${element.email}</td>
               <td>
                    ${element.address.street},
                    ${element.address.suite},
                    ${element.address.city},
                    ${element.address.zipcode},
                    ${element.address.geo.lat},
                    ${element.address.geo.lng},
               </td>
               <td>${element.phone}</td>
               <td>${element.website}</td>
               <td>
                    ${element.company.name},
                    ${element.company.catchPhrase},
                    ${element.company.bs}
               </td>
            </tr>
        `;
       
        // console.log(element.address.suite);
    });
})
.catch( () => console.error("Cannot request!"))