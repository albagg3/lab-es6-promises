// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks
// ...
getInstruction("mashedPotatoes", 0, (step)=>{
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
  getInstruction("mashedPotatoes", 1,(step)=>{
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
    getInstruction("mashedPotatoes", 2,(step)=>{
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
      getInstruction("mashedPotatoes", 3,(step)=>{
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
        getInstruction("mashedPotatoes", 4,(step)=>{
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        },(error) => console.log(error))
      },(error) => console.log(error))
    },(error) => console.log(error))
  },(error) => console.log(error))
},(error) => console.log(error))

// getInstruction("steak", 0, (step)=>{
//   document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
//   getInstruction("steak", 1,(step)=>{
//     document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
//     getInstruction("steak", 2,(step)=>{
//       document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
//       getInstruction("steak", 3,(step)=>{
//         document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
//         getInstruction("steak", 4,(step)=>{
//           document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
//           getInstruction("steak", 5,(step)=>{
//             document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
//             getInstruction("steak", 6,(step)=>{
//               document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
//               getInstruction("steak", 7,(step)=>{
//                 document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
//                 document.querySelector("#steakImg").removeAttribute("hidden");
//               },(error) => console.log(error))
//             },(error) => console.log(error))
//           },(error) => console.log(error))
//         },(error) => console.log(error))
//       },(error) => console.log(error))
//     },(error) => console.log(error))
//   },(error) => console.log(error))
// },(error) => console.log(error))

// getInstruction("brusselsSprouts", 0, (step)=>{
//   document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`;
//   getInstruction("brusselsSprouts", 1,(step)=>{
//     document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`;
//     getInstruction("brusselsSprouts", 2,(step)=>{
//       document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`;
//       getInstruction("brusselsSprouts", 3,(step)=>{
//         document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`;
//         getInstruction("brusselsSprouts", 4,(step)=>{
//           document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`;
//           getInstruction("brusselsSprouts", 5,(step)=>{
//             document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`;
//             getInstruction("brusselsSprouts", 6,(step)=>{
//               document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`;
//               getInstruction("brusselsSprouts", 7,(step)=>{
//                 document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`;
//                   document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
//               },(error) => console.log(error))
//             },(error) => console.log(error))
//           },(error) => console.log(error))
//         },(error) => console.log(error))
//       },(error) => console.log(error))
//     },(error) => console.log(error))
//   },(error) => console.log(error))
// },(error) => console.log(error))

// getInstruction("broccoli", 0, (step)=>{
//   document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
//   getInstruction("broccoli", 1,(step)=>{
//     document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
//     getInstruction("broccoli", 2,(step)=>{
//       document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
//       getInstruction("broccoli", 3,(step)=>{
//         document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
//         getInstruction("broccoli", 4,(step)=>{
//           document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
//           getInstruction("broccoli", 5,(step)=>{
//             document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
//             getInstruction("broccoli", 6,(step)=>{
//                 document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
//                 document.querySelector("#broccoliImg").removeAttribute("hidden");
//             },(error) => console.log(error))
//           },(error) => console.log(error))
//         },(error) => console.log(error))
//       },(error) => console.log(error))
//     },(error) => console.log(error))
//   },(error) => console.log(error))
// },(error) => console.log(error))

// Iteration 2 - using promises
// ...
obtainInstruction('steak', 0)
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
    obtainInstruction('steak', 1)
    .then((step)=>{
      document.querySelector("#steak").innerHTML += `<li>${step}</li>`
      obtainInstruction('steak', 2)
      .then((step)=>{
        document.querySelector("#steak").innerHTML += `<li>${step}</li>`
        obtainInstruction('steak', 3)
        .then((step)=>{
          document.querySelector("#steak").innerHTML += `<li>${step}</li>`
          obtainInstruction('steak', 4)
          .then((step)=>{
            document.querySelector("#steak").innerHTML += `<li>${step}</li>`
            obtainInstruction('steak', 5)
            .then((step)=>{
              document.querySelector("#steak").innerHTML += `<li>${step}</li>`
              obtainInstruction('steak', 6)
              .then((step)=>{
                document.querySelector("#steak").innerHTML += `<li>${step}</li>`
                obtainInstruction('steak', 7)
                .then((step)=>{
                  document.querySelector("#steak").innerHTML += `<li>${step}</li>`
                  document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`
                  document.querySelector("#steakImg").removeAttribute("hidden");
                })
              })
            })
          })
        })
      })
    })
  })

  // obtainInstruction('steak', 1)
  // .then( (step) => {
  //   document.querySelector("#steak").innerHTML += `<li>${step}</li>`
  
  // })
  // obtainInstruction('steak', 2)
  // .then( (step) => {
  //   document.querySelector("#steak").innerHTML += `<li>${step}</li>`
  
  // })
  // obtainInstruction('steak', 3)
  // .then( (step) => {
  //   document.querySelector("#steak").innerHTML += `<li>${step}</li>`
  
  // })
  // obtainInstruction('steak', 4)
  // .then( (step) => {
  //   document.querySelector("#steak").innerHTML += `<li>${step}</li>`
  
  // })
  // obtainInstruction('steak', 5)
  // .then( (step) => {
  //   document.querySelector("#steak").innerHTML += `<li>${step}</li>`
  
  // })
  // obtainInstruction('steak', 6)
  // .then( (step) => {
  //   document.querySelector("#steak").innerHTML += `<li>${step}</li>`
  
  // })
  // obtainInstruction('steak', 7)
  // .then( (step) => {
  //   document.querySelector("#steak").innerHTML += `<li>${step}</li>`
  
  // })
  
  


// Iteration 3 using async/await
// ...
async function makeBroccoli(){
  try{
    const step = await obtainInstruction('broccoli', 0)
    document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`
    const step1 = await obtainInstruction('broccoli', 1)
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`
    const step2 = await obtainInstruction('broccoli', 2)
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`
    const step3 = await obtainInstruction('broccoli', 3)
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`
    const step4 = await obtainInstruction('broccoli', 4)
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`
    const step5 = await obtainInstruction('broccoli', 5)
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`
    const step6 = await obtainInstruction('broccoli', 6)
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`
    document.querySelector("#broccoliImg").removeAttribute("hidden");

  }  
  catch(error){
    console.error(error)
  }
  
}
makeBroccoli();
// Bonus 2 - Promise all
// ...
promisesArr = [];
// const stepbr0 = obtainInstruction('brusselsSprouts',0)
// const stepbr1 = obtainInstruction('brusselsSprouts',1)
// const stepbr2 = obtainInstruction('brusselsSprouts',2)
// const stepbr3 = obtainInstruction('brusselsSprouts',3)
// const stepbr4 = obtainInstruction('brusselsSprouts',4)
// const stepbr5 = obtainInstruction('brusselsSprouts',5)
// const stepbr6 = obtainInstruction('brusselsSprouts',6)
// const stepbr7 = obtainInstruction('brusselsSprouts',7)

for(let i = 0; i < 8; i++)
{
  const step = obtainInstruction('brusselsSprouts',i)
  promisesArr.push(step);
}
// Promise.all([stepbr0, stepbr1, stepbr2, stepbr3, stepbr4, stepbr5, stepbr6, stepbr7])
Promise.all(promisesArr)
  .then((values)=> {
    values.forEach(element => {
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${element}</li>`
    });
    document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussel Sprouts are ready!</li>`
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  })
  .catch((error)=>{
    console.error(error);
  })


