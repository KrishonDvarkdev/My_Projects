const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const record = document.getElementById('record');



function myfun(){

  if(fname.value === '' || lname.value === ''){
    if(fname.value === '' && lname.value === ''){
      alert('names');
    }else if(fname.value === ''){
      alert('fname');
    }else if(lname.value === ''){
      alert('lname');
    }
  }else{
    const div = document.createElement('div');
    
    const index = record.children.length+1 +'.';
    const p = document.createElement('p');
    p.append(index)
    
    const f_b = document.createElement('b');
    const l_b = document.createElement('b');
    f_b.append(fname.value);
    l_b.append(lname.value);
   
    const btn = document.createElement('div');
    btn.classList.add('btn');
    const edit = document.createElement('button');
    const del = document.createElement('button');
    edit.innerText = 'Edit';
    edit.setAttribute('onclick', 'edit(this)');
    
    del.innerText = 'Delete';
    del.setAttribute('onclick', 'del(this)');
    
    btn.append(edit);
    btn.append(del);
    
    div.appendChild(p);
    div.appendChild(f_b);
    div.appendChild(l_b);
    div.appendChild(btn);
    record.appendChild(div);
    
    fname.value = '';
    lname.value = '';
    
  }
}

// Edit Function
function edit(e){
  
}

// Delte Function
function del(e){
  e.parentElement.parentElement.remove();
  
  for(var i=0; i<record.children.length; i++){
    record.children[i].children[0].innerHTML = i+1;
  }
}

