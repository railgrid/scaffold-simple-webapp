import './style.css'

let count = 0

document.querySelector('#app').innerHTML = `
  <main class="shell">
    <h1>It runs.</h1>
    <p class="subtitle">
      This is the <strong>railgrid simple-webapp scaffold</strong> — a single
      Vite app on one public URL. Replace it with your site.
    </p>
    <section class="card">
      <p>Hot reload works: edit <code>src/main.js</code> and watch this page update.</p>
      <button id="counter" type="button">clicked 0 times</button>
    </section>
  </main>
`

document.querySelector('#counter').addEventListener('click', (event) => {
  count += 1
  event.target.textContent = `clicked ${count} times`
})
