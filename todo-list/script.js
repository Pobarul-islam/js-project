let count = 0;
document.getElementById('add-btn').addEventListener('click', function (e) {
  count++;
  const inputValue = document.getElementById('input-value').value;

  if (inputValue === '') {
    alert('Please Enter Your Task');
  } else {
    const mainContainer = document.getElementById('content-container');
    const tableContainer = document.createElement('tr');
    const btn = document.createElement('button');
    tableContainer.innerHTML = ` 
              <td>${count}</td>
              <td>${inputValue}</td>
              <td>
              <button class="delete-btn">Delete</button>
              <button class="done-btn">Done</button>
              </td>`;
    mainContainer.appendChild(tableContainer);
    document.getElementById('input-value').value = '';

    const deleteBtn = document.getElementsByClassName('delete-btn');
    const doneBtn = document.getElementsByClassName('done-btn');

    for (const button of deleteBtn) {
      button.addEventListener('click', function (e) {
        e.target.parentNode.parentNode.style.display = 'none';
      });
    }

    for (const button of doneBtn) {
      button.addEventListener('click', function (e) {
        e.target.parentNode.parentNode.style.textDecoration = 'line-through';
      });
    }
  }
});


const clearAll = document.querySelector('#clear-all');
clearAll.addEventListener('click', function (e) {
  document.getElementById("table-content").parentNode.style.display="none";
})