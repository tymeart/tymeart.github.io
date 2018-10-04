document.addEventListener('DOMContentLoaded', function() {
  const projects = [
    {
      title: 'Moosic',
      description: 'A clone of Spotify\'s web app.',
      liveLink: 'https://tymeart.github.io/moosic',
      repoLink: 'https://github.com/tymeart/moosic',
      img: 'images/moosic.png'
    },
    {
      title: 'Recipe Box',
      description: 'Store recipes locally in your browser.',
      liveLink: 'https://tymeart.github.io/recipe-box',
      repoLink: 'https://github.com/tymeart/recipe-box',
      img: 'images/recipebox.png'
    },
    {
      title: 'Markdown Previewer',
      description: 'Preview what your Markdown will look like as rendered HTML.',
      liveLink: 'https://tymeart.github.io/markdown-previewer',
      repoLink: 'https://github.com/tymeart/markdown-previewer',
      img: 'images/markdownpreviewer.png'
    },
    {
      title: 'MojiBox',
      description: 'A tool to easily save and access your favorite emoticons.',
      liveLink: 'https://moji-box.herokuapp.com/',
      repoLink: 'https://github.com/tymeart/mojibox',
      img: 'images/mojibox.png'
    },
    {
      title: 'Pomodoro Timer',
      description: 'A productivity timer with adjustable work and break intervals.',
      liveLink: 'https://tymeart.github.io/pomodoro',
      repoLink: 'https://github.com/tymeart/pomodoro',
      img: 'images/pomodoro.png'
    },
    {
      title: 'Calculator',
      description: 'A simple calculator created with JavaScript.',
      liveLink: 'https://tymeart.github.io/calculator',
      repoLink: 'https://github.com/tymeart/calculator',
      img: 'images/calculator.png'
    }
  ]

  let fragment = document.createDocumentFragment();
  
  for (let i = 0; i < projects.length; i++) {
    let listItem = document.createElement('li');
    listItem.innerHTML = `
      <div>
        <h4 class="project__title">${projects[i].title}</h4>
        <p class="project__description">${projects[i].description}</p>
        <p><a href=${projects[i].liveLink}>Live</a> | <a href=${projects[i].repoLink}>Code</a></p>
      </div>
      `;
    fragment.appendChild(listItem);
  }
  
  document.getElementById('projects-list').appendChild(fragment);
});