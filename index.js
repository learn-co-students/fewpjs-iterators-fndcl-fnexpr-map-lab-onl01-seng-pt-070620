const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const titleCasedTutorials = tutorials.map(postTitle => {
      const postTitleUpcase = postTitle.split(' ').map(title => {
              let titleCharArray = [...title]
              titleCharArray[0] = titleCharArray[0].toUpperCase()
              return titleCharArray.join('')
          })
      return postTitleUpcase.join(' ')
})
  return titleCasedTutorials
}
