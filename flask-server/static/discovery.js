const minKey = document.getElementById('min');
    minKey.addEventListener('click', (e) =>{
     
      box2Click(minKey);
    })
    const maj = document.getElementById('maj');
    maj.addEventListener('click', (e) =>{
     
      box2Click(maj);
    })
    const maj7 = document.getElementById('maj7');
    maj7.addEventListener('click', (e) =>{
     
      box2Click(maj7);
    })
    const min7 = document.getElementById('min7');
    min7.addEventListener('click', (e) =>{
     
      box2Click(min7);
    })
    const aug = document.getElementById('aug');
    aug.addEventListener('click', (e) =>{
     
      box2Click(aug);
    })
    const dom7 = document.getElementById('dom7');
    dom7.addEventListener('click', (e) =>{
     
      box2Click(dom7);
    })
    const dim = document.getElementById('dim');
    dim.addEventListener('click', (e) =>{
     
      box2Click(dim);
    })
    const maj9 = document.getElementById('maj9');
    maj9.addEventListener('click', (e) =>{
     
      box2Click(maj9);
    })
    function box2Click(key){
      let maj=document.getElementById('maj');
      let maj7=document.getElementById('maj7');
      let min=document.getElementById('min');
      let min7=document.getElementById('min7');
      let aug=document.getElementById('aug');
      let dom7=document.getElementById('dom7');
      let dim=document.getElementById('dim');
      let maj9=document.getElementById('maj9');

      if(maj.style.backgroundColor == "yellow"){
        key.style.backgroundColor = "yellow";
        maj.style.backgroundColor = "aqua"
      }
      else if(maj7.style.backgroundColor == "yellow"){
        key.style.backgroundColor = "yellow";
        maj7.style.backgroundColor = "aqua"
      }
      else if(min.style.backgroundColor == "yellow"){
        key.style.backgroundColor = "yellow";
        min.style.backgroundColor = "aqua"
      }
      else if(min7.style.backgroundColor == "yellow"){
        key.style.backgroundColor = "yellow";
        min7.style.backgroundColor = "aqua"
      }
      else if(aug.style.backgroundColor == "yellow"){
        key.style.backgroundColor = "yellow";
        aug.style.backgroundColor = "aqua"
      }
      else if(dom7.style.backgroundColor == "yellow"){
        key.style.backgroundColor = "yellow";
        dom7.style.backgroundColor = "aqua"
      }
      else if(dim.style.backgroundColor == "yellow"){
        key.style.backgroundColor = "yellow";
        dim.style.backgroundColor = "aqua"
      }
      else if(maj9.style.backgroundColor == "yellow"){
        key.style.backgroundColor = "yellow";
        maj9.style.backgroundColor = "aqua"
      }
      else{
      key.style.backgroundColor = "yellow";
      }
    }

    const C = document.getElementById('C');
    C.addEventListener('click', (e) =>{
     
      box1Click(C);
    })
    const Cp = document.getElementById('Cp');
    Cp.addEventListener('click', (e) =>{
     
      box1Click(Cp);
    })
    const Db = document.getElementById('Db');
    Db.addEventListener('click', (e) =>{
     
      box1Click(Db);
    })
    const D = document.getElementById('D');
    D.addEventListener('click', (e) =>{
     
      box1Click(D);
    })
    const Dp = document.getElementById('Dp');
    Dp.addEventListener('click', (e) =>{
     
      box1Click(Dp);
    })
    const Eb = document.getElementById('Eb');
    Eb.addEventListener('click', (e) =>{
     
      box1Click(Eb);
    })
    const E = document.getElementById('E');
    E.addEventListener('click', (e) =>{
     
      box1Click(E);
    })
    const F = document.getElementById('F');
    F.addEventListener('click', (e) =>{
     
      box1Click(F);
    })
    const Fp = document.getElementById('Fp');
    Fp.addEventListener('click', (e) =>{
     
      box1Click(Fp);
    })
    const Gb = document.getElementById('Gb');
    Gb.addEventListener('click', (e) =>{
     
      box1Click(Gb);
    })
    const G = document.getElementById('G');
    G.addEventListener('click', (e) =>{
     
      box1Click(G);
    })
    const Gp = document.getElementById('Gp');
    Gp.addEventListener('click', (e) =>{
     
      box1Click(Gp);
    })
    const Ab = document.getElementById('Ab');
    Ab.addEventListener('click', (e) =>{
     
      box1Click(Ab);
    })

    
    function box1Click(key){
      let C=document.getElementById('C');
      let Cp=document.getElementById('Cp');
      let Db=document.getElementById('Db');
      let D=document.getElementById('D');
      let Dp=document.getElementById('Dp');
      let Eb=document.getElementById('Eb');
      let E=document.getElementById('E');
      let F=document.getElementById('F');
      let Fp=document.getElementById('Fp');
      let Gb=document.getElementById('Gb');
      let G=document.getElementById('G');
      let Gp=document.getElementById('Gp');
      let Ab=document.getElementById('Ab');

      if(C.style.backgroundColor == "yellow"){
        key.style.backgroundColor = "yellow";
        C.style.backgroundColor = "aqua"
      }
      else if(Cp.style.backgroundColor == "yellow"){
        key.style.backgroundColor = "yellow";
        Cp.style.backgroundColor = "aqua"
      }
      else if(Db.style.backgroundColor == "yellow"){
        key.style.backgroundColor = "yellow";
        Db.style.backgroundColor = "aqua"
      }
      else if(D.style.backgroundColor == "yellow"){
        key.style.backgroundColor = "yellow";
        D.style.backgroundColor = "aqua"
      }
      else if(Dp.style.backgroundColor == "yellow"){
        key.style.backgroundColor = "yellow";
        Dp.style.backgroundColor = "aqua"
      }
      else if(Eb.style.backgroundColor == "yellow"){
        key.style.backgroundColor = "yellow";
        Eb.style.backgroundColor = "aqua"
      }
      else if(E.style.backgroundColor == "yellow"){
        key.style.backgroundColor = "yellow";
        E.style.backgroundColor = "aqua"
      }
      else if(F.style.backgroundColor == "yellow"){
        key.style.backgroundColor = "yellow";
        F.style.backgroundColor = "aqua"
      }
      else if(Fp.style.backgroundColor == "yellow"){
        key.style.backgroundColor = "yellow";
        Fp.style.backgroundColor = "aqua"
      }
      else if(Gb.style.backgroundColor == "yellow"){
        key.style.backgroundColor = "yellow";
        Gb.style.backgroundColor = "aqua"
      }
      else if(G.style.backgroundColor == "yellow"){
        key.style.backgroundColor = "yellow";
        G.style.backgroundColor = "aqua"
      }
      else if(Gp.style.backgroundColor == "yellow"){
        key.style.backgroundColor = "yellow";
        Gp.style.backgroundColor = "aqua"
      }
      else if(Ab.style.backgroundColor == "yellow"){
        key.style.backgroundColor = "yellow";
        Ab.style.backgroundColor = "aqua"
      }
      else{
        key.style.backgroundColor = "yellow";
        }


    
    }