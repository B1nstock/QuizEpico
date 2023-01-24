const questionDisplay= document.querySelector('#questions')
const answerDisplay= document.querySelector('#answer')
if (window.innerWidth < 828 ) {
  questionDisplay.style.fontSize = "20px";
  answerDisplay.style.fontSize = "16px";
} else {
  questionDisplay.style.fontSize = "24px";
  answerDisplay.style.fontSize = "22px";
}

const questions= [
 {
   id: 0,
   Text: "Which loved one do you take with you?",
   answers:[
    {
      Text: "Myself",
      Image: "https://thumbs.dreamstime.com/b/happy-young-man-striped-t-shirt-hugging-himself-self-loving-care-people-concept-over-grey-background-179478460.jpg",
      alt:"hugging self",
    },
      
    {
        Text: "your friends hot mom",
      Image: "https://s.wsj.net/public/resources/images/BN-UB370_AUNTMA_M_20170628143551.jpg",
      alt:"two people",

    },
    

    {
        Text: "your favourite pet",
      Image: "https://resources.bestfriends.org/sites/default/files/styles/large/public/2019-01/introducing-dogs-cats-resource_0.jpg?itok=_pvDS_XH",
      alt:"animal",

    },

    {
        Text: "best friend",
      Image: "https://blog.flicks.co.nz/wp-content/uploads/bros.jpg",
      alt:"some guy",

    },

    ]

 },
  
  {
    id: 1,
    Text: "Where would you take shelter?",
    answers: [
        {
            Text: "My underground bunker",
      Image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bb73bc48-dc10-450a-9236-15285a9883d2/daxlsn8-62086f2a-ea23-4e17-a3c7-4b4d3c77a1bc.png/v1/fill/w_1600,h_844,strp/inside_the_bunker___visual_novel_background_by_doodle_space_daxlsn8-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JiNzNiYzQ4LWRjMTAtNDUwYS05MjM2LTE1Mjg1YTk4ODNkMlwvZGF4bHNuOC02MjA4NmYyYS1lYTIzLTRlMTctYTNjNy00YjRkM2M3N2ExYmMucG5nIiwiaGVpZ2h0IjoiPD04NDQiLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC9iYjczYmM0OC1kYzEwLTQ1MGEtOTIzNi0xNTI4NWE5ODgzZDJcL2Rvb2RsZS1zcGFjZS00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.Nq4lSsLm3n8THUTBsSqa1nzSrXP1zjidze7waM3-GVk",
      alt:"bunker image",
        },
        {
             Text: "The Supermarket!",
      Image: "https://www.hipersuper.pt/wp-content/uploads/2022/11/continente-2.jpg",
      alt:"supermarket",
        },
         {
             Text: "Abandoned Building",
      Image: "https://img.freepik.com/premium-photo/abandoned-building-city-pripyat-ghost-town-chernobyl-nuclear-power-plant_463270-2348.jpg?w=2000",
      alt:"Abandoned building",
        },
         {
             Text: "My house",
      Image: "https://lovehomedesigns.com/wp-content/uploads/2021/12/traditional-suburban-house-122121.jpg",
      alt:"Suburban home",
        },

    ]

  },
 
  {
    id: 2,
    Text: "You're starving,what do you eat?",
    answers: [
        {
            Text: "Eat my loved one (or bits of myself)",
           Image: "https://cdn.britannica.com/91/204591-050-0232C454/Jeffrey-Dahmer-attorneys-hearing-Milwaukee-Wisconsin-August-22-1991.jpg",
      alt:"jeffrey Dahmer",
        },
        {
             Text: "I'll hunt for food",
      Image: "https://www.nps.gov/gicl/learn/nature/images/Abert-s-squirrel_1.jpg",
      alt:"squirell",
        },
         {
             Text: "Maybe I can rummage through garbage?",
      Image: "https://media.istockphoto.com/id/531168932/photo/trash-in-the-park.jpg?s=612x612&w=0&k=20&c=DSCNvps535DKI5Wu4_e6OOuhyx3BCDQkGsZAsS1Q6Ok=",
      alt:"garbage in city",
        },
         {
             Text: "Im vegan ill eat grass :D",
             Image: "https://cdn.evergreenlandscapes.ca/wp-content/uploads/2018/06/grass.jpg",
             alt:"grass",
        },

    ]
 },
 {
  id: 3,
  Text: "What is your weapon of choice?",
  answers: [
      {
          Text: "baseball bat",
         Image: "https://i.kym-cdn.com/photos/images/original/002/427/040/bd9.jpg",
    alt:"doge with bat",
      },
      {
           Text: "a very long gummy ;)",
    Image: "https://m.media-amazon.com/images/I/413D3-HL4+L._AC_SY350_.jpg",
    alt:"gummy worm",
      },
       {
           Text: "Machete",
    Image: "https://media.wired.com/photos/593320eb95879f6d0c00ab2f/master/pass/120229-MACHETE-026edit.jpg",
    alt:"machete",
      },
       {
           Text: "a child",
           Image: "https://things90skidsrealize.files.wordpress.com/2012/07/amandathripp.jpg",
           alt:"little girl from matilda",
      },

  ]

}
 

]
const answers = [
  {
    combination: ["Myself","The Supermarket!","Maybe I can rummage through garbage?","a very long gummy ;)"],
    Text: "dead",
    title: "YOU'RE DEAD!",
    description: "For your sake i hope there's no apocalypse...",
    Image: "https://debradupreewilliams.com/wp-content/uploads/2022/08/Here-lies-you.jpg",
    alt: "grave",
  },
  {
    combination: ["best friend","My house","Im vegan ill eat grass :D","a child"],
    Text: "dead",
    title: "YOU'RE DEAD!",
    description: "For your sake i hope there's no apocalypse...",
    Image: "https://debradupreewilliams.com/wp-content/uploads/2022/08/Here-lies-you.jpg",
    alt: "grave",
    
  },

  {
    combination: ["your favourite pet","My underground bunker","Eat my loved one (or bits of myself)","baseball bat"],
    Text: "YOU LIVE",
    title: "YOU SURVIVED!",
    description: "survival of the fitest",
    Image: "https://www.alturalearning.com/wp-content/uploads/2021/01/importance-of-celebrating-life-milestones-1.jpg",
    alt: "celebrating",
    
    
  },
  {
    combination: ["your friends hot mom","Abandoned Building","I'll hunt for food","Machete",],
    Text: "YOU LIVE",
    title: "YOU SURVIVED!",
    description: "survival of the fitest",
    Image: "https://www.alturalearning.com/wp-content/uploads/2021/01/importance-of-celebrating-life-milestones-1.jpg",
    alt: "celebrating",
    
  },
 

]

//Need to have default answer to compensate for lack of combination data

const unansweredQuestions = []
const chosenAnswers = []


const populateQuestions = () => {
    questions.forEach (questions => {
        const titleBlock = document.createElement('div')
        titleBlock.id= questions.id
        titleBlock.classList.add('title-block')

        const titleHeading = document.createElement('h2')
        titleHeading.textContent = questions.Text 
        titleBlock.append(titleHeading)
        questionDisplay.append(titleBlock)

        const answersBlock = document.createElement('div')
        answersBlock.id = questions.id + "-questions"
        answersBlock.classList.add('answer-options')

        unansweredQuestions.push(questions.id)

        questions.answers.forEach (answers => {
            const answerBlock = document.createElement ('div')
            answerBlock.classList.add ('answer-block')
            answerBlock.addEventListener('click',() => handleClick(questions.id, answers.Text))
            
            const answerImage = document.createElement ('img')
            answerImage.setAttribute('src', answers.Image)
           
            const answersTitle = document.createElement ('h3')
            answersTitle.textContent = answers.Text

           const answerInfo = document.createElement('p')
            
            

            answerBlock.append(answerImage, answersTitle)
            answersBlock.append(answerBlock)
        })
         questionDisplay.append(answersBlock)
    })
}
populateQuestions ()

const handleClick = (questionId, chosenAnswer) => {
  if (unansweredQuestions.includes(questionId))
  chosenAnswers.push(chosenAnswer)
  const itemToRemove = unansweredQuestions.indexOf(questionId)
  //const itemToRemove = unansweredQuestions.indexOf(questionId): This line assigns the value of the index
  // of the questionId in the unansweredQuestions array to the variable itemToRemove.
  if (itemToRemove > -1) {
    unansweredQuestions.splice( itemToRemove, 1)
  }
  console.log(chosenAnswers)
  console.log(unansweredQuestions)
   
   disableQuestionBlock(questionId, chosenAnswer)
    const lowestQuestionId = Math.min(...unansweredQuestions)
    location.href = '#' + lowestQuestionId


  if (!unansweredQuestions.length){
    //scroll to answer div
    location.href = '#answer'
    showAnswer()
  }
}
const showAnswer = () => {
let result
answers.forEach(answer => {
  if (
    chosenAnswers.includes(answer.combination[0]) +
  chosenAnswers.includes(answer.combination[1]) +
  chosenAnswers.includes(answer.combination[2]) +
  chosenAnswers.includes(answer.combination[3])
  ){
    result = answer
  } else if (!result) {
    //first answer object is default
    result= answers[3]
  }
})




const answerBlock = document.createElement ('div')
answerBlock.classList.add('result-block')
const answersTitle = document.createElement('h3')
answersTitle.textContent = result.title
const resultInfo = document.createElement('p')
resultInfo.textContent = result.description
resultInfo.classList.add('description')
resultInfo.textContent = result.description
const answerImage = document.createElement('img')
answerImage.setAttribute('src', result.Image)
answerImage.setAttribute('alt', result.alt)

answerBlock.append(answersTitle, answerImage,resultInfo)
answerDisplay.append(answerBlock)
container.append(answerImage, resultInfo);
answerBlock.append(answersTitle, container);

const allAnswerBlocks = document.querySelectorAll('.answer-block')
Array.from(allAnswerBlocks).forEach(answerBlock => answerBlock.replaceWith(answerBlock.cloneNode(true)))
}

const disableQuestionBlock = (questionId, chosenAnswer) => {
     const currentQuestionBlock = document.getElementById(questionId + "-questions")
     Array.from(currentQuestionBlock.children).forEach(block=> {
     if (block.children.item(1).innerText !== chosenAnswer) {
        block.style.opacity = "50%" 
     }

   })

}