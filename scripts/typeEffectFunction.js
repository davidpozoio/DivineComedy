let controller = null;

export function delay(time){
    return new Promise(resolve=>{
        setTimeout(resolve, time*1000);
    })
}

export function typeEffect(description, domObject, contr){
    
    controller = new AbortController();

    return new Promise(async(resolve, reject)=>{
        let timePerChar = 1/description.length;
        let time = 0.03;

        controller.signal.addEventListener("abort", ()=>{
            console.log(controller.signal);
            resolve();
        })

        for(let char of description){
            if(controller.signal.aborted) return;
            domObject.textContent += char;
            await delay(time);
        }
        resolve();
    });

}

export function cancelTypeEffect(){
    if(controller != null)
    controller.abort();
}