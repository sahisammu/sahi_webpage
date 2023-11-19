
const pages = ["question1.html", "question2.html", "question3.html"];
const page_counter = 0;

// Retrieving data
// let username = localStorage.getItem('username');

function saveGenre() {

  if (page_counter === 0) {
    const initGenres = {
      'Fiction': 0,
      'Nonfiction': 0,
      'Tearjerker': 0,
      'Mystery': 0,
      'Realistic Fiction': 0,
      'Fantasy': 0,
      'Horror': 0,

    };

    localStorage.setItem('genres', JSON.stringify(initGenres));
    console.log(JSON.parse(localStorage.getItem('genres')));

  }

  const storgeGenres = localStorage.getItem('genres');
  // JSON.parse(localStorage.getItem('genres'))

  let genres = JSON.parse(storgeGenres);
  console.log(genres)
  for (const x of Array(10).keys()) {

    question_no = "q" + (x + 1);
    // console.log(question_no);
    // console.log('input[name="' + CSS.escape(question_no) + '"]:checked');
    try {
      const question = document.querySelector('input[name="' + CSS.escape(question_no) + '"]:checked').value;
      genres[question] = genres[question] + 1;
      // console.log(genres);
    } catch (error) {

    }
  }
  // console.log(genres)
  localStorage.setItem('genres', genres)

  window.location.href = pages[page_counter + 1];
  page_counter++
  console.log(genres)
}

function calculateGenre2() {

  const storgeGenres = localStorage.getItem('genres');
  let genres = JSON.parse(storgeGenres);
  console.log(genres)

  for (const x of Array(10).keys()) {

    question_no = "q" + (x + 1);
    // console.log(question_no);
    // console.log('input[name="' + CSS.escape(question_no) + '"]:checked');
    try {
      const question = document.querySelector('input[name="' + CSS.escape(question_no) + '"]:checked').value;
      genres[question] = genres[question] + 1;
      // console.log(genres);
    } catch (error) {

    }
  }
  console.log(genres)

  const maxGenre = Object.keys(genres).reduce((a, b) => genres[a] > genres[b] ? a : b);
  document.getElementById('result').style.display = 'block';
  // let maxGenre = "abc"
  document.getElementById('genre').innerText = maxGenre;
}

function calculateGenre() {

  const genres = {
    'Fiction': 0,
    'Nonfiction': 0,
    'Tearjerker': 0,
    'Mystery': 0,
    'Realistic Fiction': 0,
    'Fantasy': 0,
    'Horror': 0,

  };

  for (const x of Array(10).keys()) {

    question_no = "q" + (x + 1);
    // console.log(question_no);
    // console.log('input[name="' + CSS.escape(question_no) + '"]:checked');
    try {
      const question = document.querySelector('input[name="' + CSS.escape(question_no) + '"]:checked').value;
      genres[question] = genres[question] + 1;
      // console.log(genres);
    } catch (error) {

    }
  }
  console.log(genres)

  const maxGenre = Object.keys(genres).reduce((a, b) => genres[a] > genres[b] ? a : b);
  document.getElementById('result').style.display = 'block';
  // let maxGenre = "abc"
  document.getElementById('genre').innerText = maxGenre;
}