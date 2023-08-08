import React from 'react'
function addtolocal(name , key , value){
    if ( localStorage.getItem(name)){
        let old = JSON.parse(localStorage.getItem(name));
        old(key)=value;
        localStorage.setItem(name, JSON.stringify(n))
    }

}
function add(a){
    e.preventdefault();
    const from = e.target;

    addtolocal["userInfo", from.name.value, from.pass.value];
    document.getElementById["p1"]. = localStorage.
}

export default function Localstorage() {
  return (
    <div>

    </div>
  )
}
